import tkinter as tk
from tkinter import ttk, messagebox
import serial
import serial.tools.list_ports
import hid
import threading
import struct
import time

# Vendor ID and Product ID for a standard DualShock 4
DS4_VID = 0x054C
DS4_PID_STANDARD = 0x05C4
DS4_PID_SLIM = 0x09CC

# Button mapping constants
GAMEPAD_MASK_UP = (1 << 0)
GAMEPAD_MASK_DOWN = (1 << 1)
GAMEPAD_MASK_LEFT = (1 << 2)
GAMEPAD_MASK_RIGHT = (1 << 3)
GAMEPAD_MASK_B1 = (1 << 4)    # Cross
GAMEPAD_MASK_B2 = (1 << 5)    # Circle
GAMEPAD_MASK_B3 = (1 << 6)    # Square
GAMEPAD_MASK_B4 = (1 << 7)    # Triangle
GAMEPAD_MASK_L1 = (1 << 8)
GAMEPAD_MASK_R1 = (1 << 9)
GAMEPAD_MASK_L2 = (1 << 10)
GAMEPAD_MASK_R2 = (1 << 11)
GAMEPAD_MASK_S1 = (1 << 12)   # Share
GAMEPAD_MASK_S2 = (1 << 13)   # Options
GAMEPAD_MASK_L3 = (1 << 14)
GAMEPAD_MASK_R3 = (1 << 15)
GAMEPAD_MASK_A1 = (1 << 16)   # PS Button
GAMEPAD_MASK_A2 = (1 << 17)   # Touchpad Button

class DS4SenderApp:
    def __init__(self, root):
        self.root = root
        self.root.title("DS4 to UART Sender")

        self.serial_port = None
        self.hid_device = None
        self.running = False
        self.thread = None

        self.main_frame = ttk.Frame(root, padding="10")
        self.main_frame.grid(row=0, column=0, sticky=(tk.W, tk.E, tk.N, tk.S))

        # --- GUI Setup ---
        ttk.Label(self.main_frame, text="Serial Port:").grid(row=0, column=0, sticky=tk.W, pady=2)
        self.serial_combobox = ttk.Combobox(self.main_frame, state="readonly", width=40)
        self.serial_combobox.grid(row=0, column=1, sticky=(tk.W, tk.E), pady=2)

        ttk.Label(self.main_frame, text="DS4 Device:").grid(row=1, column=0, sticky=tk.W, pady=2)
        self.hid_combobox = ttk.Combobox(self.main_frame, state="readonly", width=40)
        self.hid_combobox.grid(row=1, column=1, sticky=(tk.W, tk.E), pady=2)

        self.refresh_button = ttk.Button(self.main_frame, text="Refresh", command=self.populate_devices)
        self.refresh_button.grid(row=2, column=0, pady=5)

        self.connect_button = ttk.Button(self.main_frame, text="Connect", command=self.toggle_connection)
        self.connect_button.grid(row=2, column=1, pady=5)

        self.status_label = ttk.Label(self.main_frame, text="Status: Disconnected", relief=tk.SUNKEN)
        self.status_label.grid(row=3, column=0, columnspan=2, sticky=(tk.W, tk.E), pady=5)

        self.input_frame = ttk.LabelFrame(self.main_frame, text="Live Input Data", padding="10")
        self.input_frame.grid(row=4, column=0, columnspan=2, sticky=(tk.W, tk.E, tk.N, tk.S), pady=5)

        self.button_vars = {}
        button_labels = [
            "↑", "↓", "←", "→", "B1(X)", "B2(O)", "B3(□)", "B4(△)",
            "L1", "R1", "L2", "R2", "S1", "S2", "L3", "R3", "A1", "A2"
        ]
        for i, label in enumerate(button_labels):
            self.button_vars[label] = tk.StringVar(value="OFF")
            ttk.Label(self.input_frame, textvariable=self.button_vars[label], width=8, relief=tk.RIDGE, anchor=tk.CENTER).grid(row=i//6, column=i%6, padx=2, pady=2)

        self.axis_vars = {}
        axis_labels = ["LX", "LY", "RX", "RY", "LT", "RT"]
        for i, label in enumerate(axis_labels):
            self.axis_vars[label] = tk.StringVar(value=f"{label}: 0")
            ttk.Label(self.input_frame, textvariable=self.axis_vars[label], width=12).grid(row=3 + i//3, column=(i%3)*2, columnspan=2, pady=2)

        self.motion_vars = {}
        motion_labels = ["GX", "GY", "GZ", "AX", "AY", "AZ"]
        for i, label in enumerate(motion_labels):
            self.motion_vars[label] = tk.StringVar(value=f"{label}: 0")
            ttk.Label(self.input_frame, textvariable=self.motion_vars[label], width=12).grid(row=5 + i//3, column=(i%3)*2, columnspan=2, pady=2)

        self.populate_devices()
        self.root.protocol("WM_DELETE_WINDOW", self.on_closing)

    def populate_devices(self):
        ports = serial.tools.list_ports.comports()
        self.serial_combobox['values'] = [port.device for port in ports]
        if ports: self.serial_combobox.current(0)

        devices = hid.enumerate(DS4_VID, DS4_PID_STANDARD) + hid.enumerate(DS4_VID, DS4_PID_SLIM)
        self.hid_combobox['values'] = [f"{d['product_string']} ({d['release_number']})" for d in devices]
        if devices:
            self.hid_combobox.current(0)
            self.hid_devices_list = devices
        else: self.hid_devices_list = []

    def toggle_connection(self):
        if self.running:
            self.running = False
            if self.thread: self.thread.join()
            self.connect_button.config(text="Connect")
            self.status_label.config(text="Status: Disconnected")
        else:
            if not self.serial_combobox.get() or not self.hid_combobox.get():
                messagebox.showerror("Error", "Please select both a serial port and a DS4 device.")
                return
            try:
                self.serial_port = serial.Serial(self.serial_combobox.get(), 115200, timeout=1)
                selected_hid_index = self.hid_combobox.current()
                device_path = self.hid_devices_list[selected_hid_index]['path']
                self.hid_device = hid.device()
                self.hid_device.open_path(device_path)
                self.hid_device.set_nonblocking(True)
                self.running = True
                self.thread = threading.Thread(target=self.data_loop, daemon=True)
                self.thread.start()
                self.connect_button.config(text="Disconnect")
                self.status_label.config(text=f"Status: Connected to {self.serial_combobox.get()}")
            except Exception as e:
                messagebox.showerror("Connection Error", str(e))
                if self.serial_port: self.serial_port.close()
                if self.hid_device: self.hid_device.close()

    def data_loop(self):
        while self.running:
            try:
                report = self.hid_device.read(64)
                if report and report[0] == 0x01: # Standard USB report with motion
                    self.process_and_send_report(report)
                time.sleep(0.001)
            except Exception as e:
                self.running = False
                self.root.after(0, lambda: messagebox.showerror("Error", f"Device error: {e}"))
                self.root.after(0, self.toggle_connection)
                break
        if self.serial_port: self.serial_port.close()
        if self.hid_device: self.hid_device.close()

    def process_and_send_report(self, report):
        buttons1, buttons2 = report[5], report[6]
        dpad = buttons1 & 0x0F
        buttons = 0
        if dpad == 0: buttons |= GAMEPAD_MASK_UP
        elif dpad == 1: buttons |= GAMEPAD_MASK_UP | GAMEPAD_MASK_RIGHT
        elif dpad == 2: buttons |= GAMEPAD_MASK_RIGHT
        elif dpad == 3: buttons |= GAMEPAD_MASK_DOWN | GAMEPAD_MASK_RIGHT
        elif dpad == 4: buttons |= GAMEPAD_MASK_DOWN
        elif dpad == 5: buttons |= GAMEPAD_MASK_DOWN | GAMEPAD_MASK_LEFT
        elif dpad == 6: buttons |= GAMEPAD_MASK_LEFT
        elif dpad == 7: buttons |= GAMEPAD_MASK_UP | GAMEPAD_MASK_LEFT
        if buttons1 & 0x10: buttons |= GAMEPAD_MASK_B3
        if buttons1 & 0x20: buttons |= GAMEPAD_MASK_B1
        if buttons1 & 0x40: buttons |= GAMEPAD_MASK_B2
        if buttons1 & 0x80: buttons |= GAMEPAD_MASK_B4
        if buttons2 & 0x01: buttons |= GAMEPAD_MASK_L1
        if buttons2 & 0x02: buttons |= GAMEPAD_MASK_R1
        if buttons2 & 0x04: buttons |= GAMEPAD_MASK_L2
        if buttons2 & 0x08: buttons |= GAMEPAD_MASK_R2
        if buttons2 & 0x10: buttons |= GAMEPAD_MASK_S1
        if buttons2 & 0x20: buttons |= GAMEPAD_MASK_S2
        if buttons2 & 0x40: buttons |= GAMEPAD_MASK_L3
        if buttons2 & 0x80: buttons |= GAMEPAD_MASK_R3
        if report[7] & 0x01: buttons |= GAMEPAD_MASK_A1
        if report[7] & 0x02: buttons |= GAMEPAD_MASK_A2

        lx, ly, rx, ry = report[1], report[2], report[3], report[4]
        lt, rt = report[8], report[9]

        # Motion data starts at offset 13
        gyro_x, gyro_y, gyro_z, accel_x, accel_y, accel_z = struct.unpack_from('<hhhhhh', bytes(report), 13)

        lx_16, ly_16, rx_16, ry_16 = (lx * 257), (ly * 257), (rx * 257), (ry * 257)

        # Pack data: <B I HHHH BB hhhhhh B
        # B=start, I=buttons, H=sticks, B=triggers, h=motion, B=checksum
        payload = struct.pack('<BIHHHHBBhhhhhh', 0xA5, buttons, lx_16, ly_16, rx_16, ry_16, lt, rt,
                              accel_x, accel_y, accel_z, gyro_x, gyro_y, gyro_z)

        checksum = 0
        for byte in payload: checksum ^= byte

        final_packet = payload + struct.pack('<B', checksum)

        if self.serial_port and self.serial_port.is_open:
            self.serial_port.write(final_packet)

        self.root.after(0, self.update_gui, buttons, lx, ly, rx, ry, lt, rt, accel_x, accel_y, accel_z, gyro_x, gyro_y, gyro_z)

    def update_gui(self, buttons, lx, ly, rx, ry, lt, rt, ax, ay, az, gx, gy, gz):
        button_map = {"↑": GAMEPAD_MASK_UP, "↓": GAMEPAD_MASK_DOWN, "←": GAMEPAD_MASK_LEFT, "→": GAMEPAD_MASK_RIGHT,
                      "B1(X)": GAMEPAD_MASK_B1, "B2(O)": GAMEPAD_MASK_B2, "B3(□)": GAMEPAD_MASK_B3, "B4(△)": GAMEPAD_MASK_B4,
                      "L1": GAMEPAD_MASK_L1, "R1": GAMEPAD_MASK_R1, "L2": GAMEPAD_MASK_L2, "R2": GAMEPAD_MASK_R2,
                      "S1": GAMEPAD_MASK_S1, "S2": GAMEPAD_MASK_S2, "L3": GAMEPAD_MASK_L3, "R3": GAMEPAD_MASK_R3,
                      "A1": GAMEPAD_MASK_A1, "A2": GAMEPAD_MASK_A2}
        for label, mask in button_map.items(): self.button_vars[label].set("ON" if buttons & mask else "OFF")

        axis_map = {"LX": lx, "LY": ly, "RX": rx, "RY": ry, "LT": lt, "RT": rt}
        for label, value in axis_map.items(): self.axis_vars[label].set(f"{label}: {value}")

        motion_map = {"AX": ax, "AY": ay, "AZ": az, "GX": gx, "GY": gy, "GZ": gz}
        for label, value in motion_map.items(): self.motion_vars[label].set(f"{label}: {value}")

    def on_closing(self):
        if self.running:
            self.running = False
            if self.thread and self.thread.is_alive(): self.thread.join()
        self.root.destroy()

if __name__ == "__main__":
    root = tk.Tk()
    app = DS4SenderApp(root)
    root.mainloop()

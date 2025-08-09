import tkinter as tk
from tkinter import ttk, scrolledtext, messagebox
import serial
import serial.tools.list_ports
import threading
import time

class UARTMonitorApp:
    def __init__(self, root):
        self.root = root
        self.root.title("UART Monitor")

        self.serial_port = None
        self.running = False
        self.thread = None

        # --- GUI Setup ---
        self.main_frame = ttk.Frame(root, padding="10")
        self.main_frame.grid(row=0, column=0, sticky=(tk.W, tk.E, tk.N, tk.S))
        self.root.columnconfigure(0, weight=1)
        self.root.rowconfigure(0, weight=1)
        self.main_frame.columnconfigure(1, weight=1)

        ttk.Label(self.main_frame, text="Serial Port:").grid(row=0, column=0, sticky=tk.W, pady=2)
        self.serial_combobox = ttk.Combobox(self.main_frame, state="readonly", width=40)
        self.serial_combobox.grid(row=0, column=1, columnspan=2, sticky=(tk.W, tk.E), pady=2)

        self.connect_button = ttk.Button(self.main_frame, text="Start Monitoring", command=self.toggle_monitoring)
        self.connect_button.grid(row=1, column=0, pady=5)

        self.refresh_button = ttk.Button(self.main_frame, text="Refresh Ports", command=self.populate_ports)
        self.refresh_button.grid(row=1, column=1, pady=5)

        self.clear_button = ttk.Button(self.main_frame, text="Clear Log", command=self.clear_log)
        self.clear_button.grid(row=1, column=2, pady=5)

        self.status_label = ttk.Label(self.main_frame, text="Status: Stopped", relief=tk.SUNKEN)
        self.status_label.grid(row=2, column=0, columnspan=3, sticky=(tk.W, tk.E), pady=5)

        self.log_area = scrolledtext.ScrolledText(self.main_frame, wrap=tk.WORD, height=20, width=80)
        self.log_area.grid(row=3, column=0, columnspan=3, sticky=(tk.W, tk.E, tk.N, tk.S))
        self.main_frame.rowconfigure(3, weight=1)

        self.populate_ports()
        self.root.protocol("WM_DELETE_WINDOW", self.on_closing)

    def populate_ports(self):
        ports = serial.tools.list_ports.comports()
        self.serial_combobox['values'] = [port.device for port in ports]
        if ports:
            self.serial_combobox.current(0)

    def clear_log(self):
        self.log_area.delete('1.0', tk.END)

    def toggle_monitoring(self):
        if self.running:
            self.running = False
            if self.thread:
                self.thread.join()
            self.connect_button.config(text="Start Monitoring")
            self.status_label.config(text="Status: Stopped")
        else:
            if not self.serial_combobox.get():
                messagebox.showerror("Error", "Please select a serial port.")
                return

            try:
                self.serial_port = serial.Serial(self.serial_combobox.get(), 115200, timeout=0.1)
                self.running = True
                self.thread = threading.Thread(target=self.monitoring_loop, daemon=True)
                self.thread.start()
                self.connect_button.config(text="Stop Monitoring")
                self.status_label.config(text=f"Status: Monitoring {self.serial_combobox.get()}")
            except Exception as e:
                messagebox.showerror("Connection Error", str(e))
                if self.serial_port:
                    self.serial_port.close()

    def monitoring_loop(self):
        while self.running:
            try:
                if self.serial_port and self.serial_port.is_open:
                    data = self.serial_port.read(32) # Read up to 32 bytes at a time
                    if data:
                        hex_data = ' '.join(f'{b:02X}' for b in data)
                        self.log_to_gui(f"{time.strftime('%H:%M:%S')} | RX: {hex_data}\n")
            except serial.SerialException as e:
                self.log_to_gui(f"ERROR: {e}\n")
                self.running = False
                self.root.after(0, self.toggle_monitoring)
                break

        if self.serial_port:
            self.serial_port.close()

    def log_to_gui(self, message):
        self.root.after(0, self._insert_log, message)

    def _insert_log(self, message):
        self.log_area.insert(tk.END, message)
        self.log_area.see(tk.END)

    def on_closing(self):
        self.running = False
        if self.thread and self.thread.is_alive():
            self.thread.join()
        self.root.destroy()

if __name__ == "__main__":
    root = tk.Tk()
    app = UARTMonitorApp(root)
    root.mainloop()

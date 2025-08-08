import re
from playwright.sync_api import sync_playwright, Page, expect

def verify_addon_ui(page: Page):
    """
    This test verifies that the DS4 UART Bridge addon UI appears correctly
    in the web configurator.
    """
    # 1. Arrange: Go to the web configurator homepage.
    # The dev server is on port 3000. Navigate directly to the addons page.
    page.goto("http://localhost:3000/add-ons")

    # 2. Assert: Check that we are on the correct page.
    expect(page.get_by_role("heading", name="Add-Ons Configuration")).to_be_visible()

    # 3. Screenshot for debugging what is actually on the page.
    page.screenshot(path="jules-scratch/verification/debug_addons_page.png")

    # 4. Act: Find the DS4 UART Bridge section and enable it.
    # The title is in a <legend> which has a role of 'group'.
    addon_section_title = page.get_by_role("group", name="DS4 UART Bridge")
    expect(addon_section_title).to_be_visible()

    # The switch is a label associated with the checkbox input.
    enable_switch = addon_section_title.get_by_label("Enabled")
    enable_switch.click()

    # 5. Assert: Check that the pin configuration options are now visible.
    tx_pin_input = addon_section_title.get_by_label("TX Pin")
    rx_pin_input = addon_section_title.get_by_label("RX Pin")

    expect(tx_pin_input).to_be_visible()
    expect(rx_pin_input).to_be_visible()

    # 6. Screenshot: Capture the final result for visual verification.
    page.screenshot(path="jules-scratch/verification/ds4_uart_addon_enabled.png")

def main():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        verify_addon_ui(page)
        browser.close()

if __name__ == "__main__":
    main()

class Device {
    name;
    manufacturer;
    manufacturerUrl;
    processor;
    graphicsProcessor;
    memory;
    storage;
    type;
    usage;
    other;

    constructor(name, manufacturer, manufacturerUrl , processor, graphicsProcessor, memory, storage, type, usage, other) {
        this.name = name;
        this.manufacturer = manufacturer;
        this.manufacturerUrl = manufacturerUrl;
        this.processor = processor;
        this.graphicsProcessor = graphicsProcessor;
        this.memory = memory;
        this.storage = storage;
        this.type = type;
        this.usage = usage;
        this.other = other
    }
}

const DeviceType = Object.freeze({
    Desktop: "Desktop Computer",
    Laptop: "Laptop-Computer",
    Phone: "Mobile Phone",
    Tablet: "Tablet-Computer",
    Console: "Game Console",
    Other: "Other"
 })

const DeviceUseCase = Object.freeze({
    Gaming: "Gaming",
    Development: "Software development",
    Office: "Office work",
    Phone: "Phone",
    Entertainment: "Entertainment",
    Server: "Server",
})

export const DeviceList = [
    new Device(
        "ThinkPad L13 2-in-1",
        "Lenovo",
        "https://www.lenovo.com/ch/de/p/laptops/thinkpad/thinkpadl/lenovo-thinkpad-l13-2-in-1-gen-5-13-inch-intel/len101t0100#models",
        "Intel Core Ultra 7 265U",
        "Intel HD Graphics",
        "32GB 6400 MHz LPDDR5",
        "1TB NVMe SSD",
        DeviceType.Laptop,
        [DeviceUseCase.Development, DeviceUseCase.Office],
        "Convertable Laptop"
    ),
    new Device(
        "Custom-Built Gaming PC",
        "Myself",
        null,
        "AMD Ryzen 7 9800X3D",
        "AMD Radeon Rx 9070 (Gigabyte OC) + AMD Radeon HD Graphics",
        "32GB 5600MHz DDR5 RAM",
        " 2TB NVMe SSD",
        DeviceType.Desktop,
        [DeviceUseCase.Development, DeviceUseCase.Entertainment, DeviceUseCase.Gaming],
        "MSI PRO B850-P WIFI Motherboard"
    ),
    new Device(
        "Mac Pro (Early 2009 Edition)",
        "Apple",
        "https://support.apple.com/en-us/112590",
        "2x Intel Xeon X5550 at 2.66 GHz",
        "AMD Radeon HD 8950 or Equivalent",
        "56GB 1033 MHz DDR3 ECC RAM",
        "512GB SATA SSD",
        DeviceType.Desktop,
        [DeviceUseCase.Server],
        "DVD-RW SATA Drive"
    ),
    new Device(
        "Fairphone 6",
        "Fairphone",
        "https://shop.fairphone.com/the-fairphone-gen-6",
        "Snapdragon® 7s Gen 3 Processor",
        "Snapdragon Adreno",
        "8GB LPDDR5",
        "256GB internal storage",
        DeviceType.Phone,
        [DeviceUseCase.Phone, DeviceUseCase.Entertainment],
        "SD-Card Slot"
    ),
]
export const Acessories = [
    {type: "Mouse", name: "Logitech G502 Hero", url: "https://www.logitechg.com/en-us/products/gaming-mice/g502-hero-gaming-mouse.html?sp=4&searchclick=gaming"},
    {type: "Keyboard", name: "Corsair K55 Pro Lite", url: "https://www.corsair.com/us/en/p/keyboards/ch-9226065-na/k55-rgb-pro-lite-gaming-keyboard-ch-9226065-na"},
    {type: "Monitor", name: "ASUS TUF Gaming VG27AQMA", url: "https://www.asus.com/displays-desktops/monitors/tuf-gaming/tuf-gaming-vg27aqm1a/"},
    {type: "Monitor", name: "Hannspree HL 162 Portable Monitor", url: "https://www.hannspree.eu/HL162CPB.html"},
    {type: "Headphones", name: "Logitech G733", url: "https://www.logitechg.com/de-ch/shop/p/g733-rgb-wireless-headset.981-000864?sp=1&searchclick=Logitech%20G"},
    {type: "Gamepad", name: "Logitech F310 Gamepad", url: "https://www.logitech.com/de-ch/shop/p/f310-gamepad.940-000135?sp=1&searchclick=Logitech%20G"},
    {type: "Gamepad", name: "Nintendo Switch Pro Controller", url: "https://www.nintendo.com/us/store/products/pro-controller/"}
]

export const OperatingSystems = [
    "Bazzite Linux",
    "Arch Linux (btw)",
    "Rasberry Pi OS",
    "Windows 11"
]
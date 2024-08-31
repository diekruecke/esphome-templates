# About

ESPHome Firmwarefiles für Geräte die ich in meinem Smarthome mit ESPHome betreibe.

Genutze ESPHome Version: 2024.8.0

# Installation

Mit dem Install Button kannst du die Pre-Built Firmware via USB direkt auf dein Gerät installieren. Einfach aus dem Browser raus.

Extra Satz auf Lock

# Working

| Gerät              | Flash via Browser | Download Firmware | Download OTA File |
| :---------------- | :------: | :------: | :------: |
| ESP32 Demo Gerät        |   <esp-web-install-button manifest="./firmware/diekruecke-esp32-demo/manifest.json"></esp-web-install-button>   | DL Firmware | DL OTA File |
| ESP8266 Demo Gerät         |   <esp-web-install-button manifest="./firmware/diekruecke-esp8266-demo/manifest.json"></esp-web-install-button>   | DL Firmware | DL OTA File |

<esp-web-install-button manifest="./firmware/diekruecke-esp32-demo/manifest.json"></esp-web-install-button>

<esp-web-install-button manifest="./firmware/diekruecke-esp8266-demo/manifest.json"></esp-web-install-button>


<script type="module" src="https://unpkg.com/esp-web-tools@9/dist/web/install-button.js?module"></script>

Der ganze Shit hier is Powered by ESPHome & ESP Web Tools
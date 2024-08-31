
<script type="module" src="https://unpkg.com/esp-web-tools@9/dist/web/install-button.js?module"></script>

<style>
    button:hover {
    box-shadow: rgb(0 0 0 / 14%) 0px 4px 8px 0px, rgb(0 0 0 / 12%) 0px 1px 7px 0px, rgb(0 0 0 / 20%) 0px 3px 1px -1px;
    }
    button {
        position: relative;
        cursor: pointer;
        font-size: 14px;
        padding: 8px 28px;
        color: var(--esp-tools-button-text-color, #fff);
        background-color: var(--esp-tools-button-color, #03a9f4);
        border: none;
        border-radius: 4px;
        }

    /* table, th, td {
      border: solid 1px #ddd;
      border-collapse: collapse;
      padding: 2px 3px;
      text-align: center;
    }

    th {
      font-weight: bold;
    } */
</style>

# About

ESPHome Firmwarefiles für Geräte die ich in meinem Smarthome mit ESPHome betreibe.

Genutze ESPHome Version: 2024.8.0

# Installation

Mit dem Install Button kannst du die Pre-Built Firmware via USB direkt auf dein Gerät installieren. Einfach aus dem Browser raus.

# Working

| Gerät | Flash via Browser | Download Firmware | Download OTA File |
| :---------------- | :------: | :------: | :------: |
| ESP32 Demo Gerät | <esp-web-install-button manifest="./firmware/diekruecke-esp32-demo/manifest.json"> <button slot="activate">Connect</button></esp-web-install-button> | <a href="./firmware/diekruecke-esp32-demo/esp32-demo-esp32.factory.bin"><button>Firmware</button></a> | <a href="./firmware/diekruecke-esp32-demo/esp32-demo-esp32.ota.bin"><button>OTA Firmware</button></a> |
| ESP8266 Demo Gerät | <esp-web-install-button manifest="./firmware/diekruecke-esp8266-demo/manifest.json"> <button slot="activate">Connect</button></esp-web-install-button> | <a href="./firmware/diekruecke-esp8266-demo/esp8266-demo-esp8266.factory.bin"><button>Firmware</button></a> | <a href="./firmware/diekruecke-esp8266-demo/esp8266-demo-esp8266.ota.bin"><button>OTA Firmware</button></a> |

<!-- | ESP32 Demo Gerät | <esp-web-install-button manifest="./firmware/diekruecke-esp32-demo/manifest.json"> <button slot="activate">Connect</button></esp-web-install-button> | <a href="./firmware/diekruecke-esp32-demo/esp32-demo-esp32.factory.bin"><button>Firmware</button></a> | <a href="./firmware/diekruecke-esp32-demo/esp32-demo-esp32.ota.bin"><button>OTA Firmware</button></a> | -->

<h3>
  Aus JSON file generierte Tabelle
</h3>

<script src="table_script.js"></script>

<div id="markdown-table"></div>

Der ganze Shit hier is Powered by ESPHome & ESP Web Tools
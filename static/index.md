# About

ESPHome Firmwarefiles für Geräte die ich in meinem Smarthome mit ESPHome betreibe.

Genutze ESPHome Version: 2024.8.0

# Installation

Mit dem Install Button kannst du die Pre-Built Firmware via USB direkt auf dein Gerät installieren. Einfach aus dem Browser raus.

Extra Satz auf Lock

# Working

<esp-web-install-button manifest="./firmware/diekruecke-esp32-demo/manifest.json">
  <button slot="activate">Connect ESP32-Demo</button>
  <span slot="unsupported">Ah snap, your browser doesn't work!</span>
  <span slot="not-allowed">Ah snap, you are not allowed to use this on HTTP!</span>
</esp-web-install-button>

<esp-web-install-button manifest="./firmware/diekruecke-esp32-demo-2/manifest.json">
  <button slot="activate">Connect ESP32-Demo-2</button>
  <span slot="unsupported">Ah snap, your browser doesn't work!</span>
  <span slot="not-allowed">Ah snap, you are not allowed to use this on HTTP!</span>
</esp-web-install-button>

<script type="module" src="https://unpkg.com/esp-web-tools@9/dist/web/install-button.js?module"></script>

Der ganze Shit hier is Powered by ESPHome & ESP Web Tools
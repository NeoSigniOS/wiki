# Enabling JIT
:::danger
Not all apps support enabling JIT on iOS 26. For more information, consult your app's documentation (if it doesn't mention support, it probably doesn't have it).
:::
## Prerequisites
Download [StikDebug](https://apps.apple.com/us/app/stikdebug/id6744045754) from the Apple App Store, and ensure you have sideloaded your apps with the necessary entitlements and enabled developer mode.

Open StikDebug to set up your file structure and allow the VPN.
## Create a pairing file
Follow the instructions [here](/guide/guides/pairing-file) to generate and import a pairing file.
:::warning Note that your pairing file will need to be regenerated if you update or reset your iDevice.
:::
## Enabling JIT
With your pairing file imported, restart your app while on Wi-Fi to mount the DDI, completing your setup.

Now, to enable JIT, simply open StikDebug, tap "Attach Debugger", and select the app you want to enable JIT for! (With VPN enabled and on Wi-Fi or Airplane Mode)

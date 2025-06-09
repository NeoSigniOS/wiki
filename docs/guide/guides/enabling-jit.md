# Enabling JIT
:::danger
StikDebug's method of enabling JIT has been patched in the iOS 26 Developer Beta. A workaround is in progress, but for now, if you wish to use JIT, DON'T UPDATE!!
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

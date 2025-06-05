# Signing with Feather-idevice 
## Prerequisites
- Download [StosVPN](https://apps.apple.com/us/app/stosvpn/id6744003051) from the Apple App Store.
- Open the Feather app you downloaded to set up your file structure. It also helps to create an automation in the built-in Apple Shortcuts app enabling StosVPN whenever Feather is opened. Now, proceed to generate your pairing file.
## Pairing File Guide
Follow the instructions [here](/guide/guides/pairing-file) to generate and import a pairing file.
:::warning
Note that your pairing file will need to be regenerated if you update or reset your iDevice.:::
## Inside Feather
Activate StosVPN, then, in Feather, ensure your setup is complete by making sure the light inside "Tunnel & Pairing" is pulsing.
In Certificates, tap the Plus option and import your certificate using your certificate, provisioning profile, and password (if not already added).
## To Sign Apps
Feather is fully compatible with [AltStore Sources](https://faq.altstore.io/developers/make-a-source) (or AltSources) which allow you to view, install, and update apps easily.
To sideload an app, follow the following steps:
1. Turn on StosVPN
2. Import your app to Library, either from an AltSource (download button in Sources) or an IPA using Files or a download URL (plus icon in Library)
3. After importing your app to Library, tap "Sign" next to your app and modify any features you wish (Caution, modifying certain fields may render your app unusable)
4. Tap "Start Signing"
5. Once the word "Success" appears, your app should appear on your home screen (may take a little longer to load based on app size).

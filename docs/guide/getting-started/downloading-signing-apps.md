# Downloading Signing Apps to Your Device
## Prerequisites
You should have recieved an email from NeoSign (or a communication from another cert provider, if applicable) containing a developer certificate. Save your `DevelopmentCert.zip` to your Files app.
Download your chosen signing app:
- [Feather](https://github.com/khcrysalis/Feather/releases/latest/download/Feather-default.ipa)
- [idevice Feather](https://github.com/khcrysalis/Feather/releases/latest/download/Feather-pairing.ipa)
## Sideload your on-device signer
1. In the iOS Files app, unzip your development certificate (Note: Your development is both device-specific and shouldn't be shared)
2. Navigate to [sign.neosign.dev](https://sign.neosign.dev/). Select the IPA file of your signer from prerequisites, or another signer if you wish (there won't be documentation from us about it).
3. Select your `.p12` certificate and provisioning profile from the `.zip` folder. Enter the password found in `password.txt`.
4. Select `Sign IPA`, then select "Install".
Now, proceed to enable [developer mode](/developer-mode).

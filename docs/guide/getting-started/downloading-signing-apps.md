# Downloading Signing Apps to Your Device
## Prerequesites
Now, you should have recieved an email containing a developer certificate. Save your `DevelopmentCert.zip` to your Files app.
Download your chosen signing app:
[Feather](https://github.com/khcrysalis/Feather/releases/latest/download/Feather-default.ipa)
[idevice Feather](https://github.com/khcrysalis/Feather/releases/latest/download/Feather-pairing.ipa)
Esign
## Sideload your on-device signer
In the iOS Files app, unzip your development certificate (Note: Your development is both device-specific and shouldn't be shared)
Now, navigate to [sign.neosign.dev](https://sign.neosign.dev). Select the IPA file of your signer from downloads.
Select your `.p12` certificate and provisioning profile from the `.zip` folder. Enter the password found in `password.txt`.
Select `Sign IPA`, then select "Install".
Follow the instructions to set up your chosen signer:
Feather
idevice Feather

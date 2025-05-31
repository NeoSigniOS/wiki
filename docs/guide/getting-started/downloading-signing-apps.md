# Downloading Signing Apps to Your Device
## Prerequesites
Now, you should have recieved an email containing a developer certificate. Save your `DevelopmentCert.zip` to your Files app.
Download your chosen signing app:
- [Feather](https://github.com/khcrysalis/Feather/releases/latest/download/Feather-default.ipa)
- [idevice Feather](https://github.com/khcrysalis/Feather/releases/latest/download/Feather-pairing.ipa)
- Esign
## Sideload your on-device signer
1. In the iOS Files app, unzip your development certificate (Note: Your development is both device-specific and shouldn't be shared)
2. Navigate to [sign.neosign.dev](https://sign.neosign.dev). Select the IPA file of your signer from downloads.
3. Select your `.p12` certificate and provisioning profile from the `.zip` folder. Enter the password found in `password.txt`.
4. Select `Sign IPA`, then select "Install".
5. Follow the instructions to set up your chosen signer (will link to articles later):
- Feather (Import certificates, installation type=semi-local)
- idevice Feather (pairing file [idevice pair], StosVPN, import certificates, installation=semi-local)
- Esign (I have no clue)

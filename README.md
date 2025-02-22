<p align="center">
  <img src="https://github.com/pixxels-team/Pixxels-App/blob/dev/public/img/pixxel-logo/logo3.png?raw=true" alt="Pixxels App Logo" width="400">
</p>


# Pixxels

Build and join AI communities with a simple, elegant and secure interface. The main goal is to build an Ai native collaboration platform that is easy to use and has a pro tools for ai assisted productivity and fun.

## Getting started
Web app is available at https://pixx.co and gets updated on each new release.

To host Pixxels-App on your own, download tarball of the app from [GitHub release](https://github.com/pixxels-team/Pixxels-App/releases/latest).
You can serve the application with a webserver of your choice by simply copying `dist/` directory to the webroot. 
To set default Homeserver on login and register page, place a customized [`.env`](.env) in webroot of your choice.

If you want to use devtools in production mode in the destkop version before the application is opened, type `--devtools` after the file path.

<h3 align="center">Pixxels App Demo Video</h3>

<p align="center">
  <a href="https://www.youtube.com/watch?v=bva3bA2iDBE">
    <img src="https://img.youtube.com/vi/bva3bA2iDBE/0.jpg" alt="Pixxels App Demo" width="400">
  </a>
</p>

## Local development
> We recommend using a version manager as versions change very quickly. You will likely need to switch 
between multiple Node.js versions based on the needs of different projects you're working on. [NVM on windows](https://github.com/coreybutler/nvm-windows#installation--upgrades) on Windows and [nvm](https://github.com/nvm-sh/nvm) on Linux/macOS are pretty good choices. Also recommended nodejs version Hydrogen LTS (v18).

If you don't have nodejs, please install this:

https://nodejs.org/

If you don't have yarn installed on your computer, it is recommended that you install it:
```sh
npm install yarn -g
```

Execute the following commands to start a development server (or a Ionic environment):
```sh
yarn # Installs all dependencies
yarn start # Serve a development version
```

To build the web app:
```sh
yarn build # Compiles the app into the dist/ directory
```

If the first option fails, please try this one:
```sh
yarn build:8gb # Compiles the app into the dist/ directory
```

### Electron (Desktop)
> While you're using the app's dev mode, it's normal for the app to show that it's disconnected for a few seconds before fully loading the page. Notifications may not mute OS sound in application dev mode. The same thing can happen for notification click events to fail only in dev mode.

The application has only been tested on the linux platform. But that won't stop you from trying to deploy to Windows or Mac.

Execute the following commands to start a development server (or a Ionic environment):
```sh
yarn # Installs all dependencies
yarn electron:start # Serve a development version
```

To build the desktop app:
```sh
yarn electron:build # Compiles the app into the release/ directory
```

### AppData

If you need to manage client files on your desktop version. You can find specific storage files in the directory below:

    %AppData%/pixxels-matrix/tinyMatrixData/

## FAQ

### Is my data shared with third parties?

Nope. This repository creator is not sharing data with third parties. This makes the project solely dependent on the community if any new glitch is discovered. The only people capable of collecting data are the homeserver owners and third-party stuff.

### Why is the list of homeservers empty by default instead of having default homeservers like matrix.org?

This helps new matrix users not get lost when they are being guided to use a specific new homeserver.

### My website that is hosting this client was blocked from access by browser extensions.

This client sends notification permission requests at the exact moment the page is loaded. Some security extensions may consider this a privacy violation. Sometimes this type of thing doesn't happen on the client domain because I (JasminDreasond) always try to contact the staff of these extensions so the domain can be added to the whitelist.

### Can I completely disable IPFS and Web3?

Yep. To disable it via the client, you need to go to the settings tabs. To permanently deactivate the features, you need to modify the `.env` file so you can deploy a client without access to the features.

### My browser keeps opening crypto wallet randomly

It looks like you are using a browser that has a native crypto wallet. This is not an extension installed in your browser, I'm referring to something in your browser itself. (Example: Brave and Opera) And even with crypto features turned off, for some mysterious reason your browser still thinks it's a good idea to send you a ad to try force you to use the browser crypto wallet. If you want to disable this, research how to disable your browser's native crypto wallet.

### This client has web3 functionalities. Is this matrix client a crypto wallet?

Nope. Pixxels has access to crypto wallet APIs that are installed in your browser or on your computer. And this function can be turned off in the settings.

### Does the client support the purchase and sale of NFTs?

Nope. But you can install mods from third-party creators that code this type of feature.

### What is my guarantee about using crypto resources on client?

Client's crypto resources are developed to be as secure as possible from trusted sources. Normally limited to personal uses between users only. (This is a CHAT SOFTWARE, not a crypto marketplace)

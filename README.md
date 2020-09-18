# Photo Gallery - React Application:

I created a Photo Gallery app which has the ability to take photos with any device's camera, display them in a grid, and store them permanently on the device.

This is a React application that works on Android, IOS and web platform. It is built using Ionic Framework and Capacitor(Ionic's native app runtime).

This app uses Camera, File System, and Storage APIs.

## This App's Features:

- [x] A working application that consumes few public APIs - Camera API, File System API, Storage API.
- [x] Has several React components - functional and classical.
- [x] Uses a router - has two pages as tabs.
- [x] Has semantically clean HTML and DRY code.
- [x] Has consistent code style.
- [x] Easy to understand.
- [x] Well formatted code.
- [x] Uses React hooks and PWA elements.
- [x] More importantly, Looks great!

## All tools required for this App:

Node.js:
For interacting with the Ionic ecosystem. [Download the LTS version here](https://nodejs.org/en/).

Visual Studio Code:
Text editor, can be downloaded [here](https://code.visualstudio.com/).

Command-line interface/terminal (CLI):
- Windows users: I recommend the built-in command line (cmd) or the Powershell CLI, running in Administrator mode.
- Mac/Linux users, virtually any terminal will work.

Install Ionic Tooling in CLI:    
```
$ npm install -g @ionic/cli native-run cordova-res
```
  
## Creating & Setup of the App:
1) Go to desktop in CLI and create basic Ionic React App with the tabs template,
   By typing:     
   ```
   $ cd Desktop
   ``` 
   and
   ```
   $ ionic start photo-gallery tabs --type=react --capacitor
   ```
   It takes a while to install.
2) Next, open Visual Studio (VS) code and open the folder created in the desktop. Then, use the built-in CLI in VS to install helper libraries such as React Hooks and PWA Elements,
   ```
   $ npm install @ionic/react-hooks @ionic/pwa-elements
   ```
3) After installing, open the project in VS and go to `src/index.tsx`, then `import @ionic/pwa-elements` needs to be imported by typing,
   ```
   import { defineCustomElements } from '@ionic/pwa-elements/loader';
   
   defineCustomElements(window);
   ```
   On the top (where imports are present).
4) Run the application using the VS CLI,
   ```
   $ ionic serve
   ```
   
## Approach:
- Created an app along with the tab system. 
- Then, created a camera component which only takes photos using the Camera API.
- Saved the photos in the file system, using the FileSystem API.
- Created a storage to store photos, using the Storage API then, loaded the photos from file system to the storage.
- Added code so that this app works on different platforms.
- Then, added the delete function, to delete the photos.

## Unsolved problems (for future work):
- `This application can also be deployed as an app to mobile devices.`
- `Extra features such as filtering and editing can be added...`
(I could do them but, didn't have much time).

const { app, BrowserWindow } = require('electron')
const path = require('path')
const fs = require('fs')

function createWindow () {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      nodeIntegration: true,
      webviewTag: true
    },
    icon: path.join(__dirname, 'trello.png')
  })

  // and load the index.html of the app.
  win.setMenu(null)
  win.loadFile('./src/dist/index.html')
}


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)
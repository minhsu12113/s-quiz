
import { app, BrowserWindow, ipcMain } from 'electron'
import * as path from 'path'
import { URL } from 'url';
//let __dirname = new URL('.', import.meta.url).pathname;


let mainWindow : BrowserWindow
function onReady () {
 const preloadPath = path.join(__dirname,'preload.js')
 let win = new BrowserWindow({
    width: 910,
    height: 700,
    webPreferences: {
      nodeIntegration: false,
      preload: preloadPath,
    },
    frame: false,
    resizable: true,
    autoHideMenuBar: true,
    transparent: false
  })

  win.loadURL('http://localhost:4200');
  //win.webContents.openDevTools()
  mainWindow = win
}


app.on('ready', onReady);

ipcMain.on('mainWindowMinimize', () => {
  //mainWindow.minimize()
})

ipcMain.on('closeWindow', () => {
  app.quit()
})

ipcMain.on('mainWindowMaximizedOrUnMaximized', () => {
  if(mainWindow.isMaximized()){
    mainWindow.unmaximize()
  }else{
    mainWindow.maximize()
  }
})

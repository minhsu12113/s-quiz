const {app, BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');

process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = true

function onReady () {
	win = new BrowserWindow({
    width: 900,
    height: 700,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  })

	// win.loadURL(url.format({
	// 	pathname: path.join(__dirname,'dist/s-quiz/index.html'),
	// 	protocol: 'file:',
	// 	slashes: true
	// }))
  win.loadURL('http://localhost:4200');

  win.webContents.openDevTools()
}

app.on('ready', onReady);

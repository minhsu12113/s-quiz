import { contextBridge, ipcRenderer }  from 'electron'

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
})

contextBridge.exposeInMainWorld('elecApi', {
  mainWindowMinimize: () => ipcRenderer.send('mainWindowMinimize'),
  mainWindowMaximizedOrUnMaximized: () => ipcRenderer.send('mainWindowMaximizedOrUnMaximized'),
  closeWindow: () => ipcRenderer.send('closeWindow'),
})

// import two modules from electron,
//  app -> controls app event lifecycle
//  BrowserWindow -> Creates and manages app windows
const { app, BrowserWindow } = require('electron')

// loads index.html into a new instance of a window
const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })
    
    win.loadFile('index.html')
}

// calls function when app is ready to
app.whenReady().then(() => {
    console.log('Hello World from Electron')
    createWindow()
    
    // for MacOS, apps usually keep running w/o any windows open,
    //  then, when activating the app, open a new window
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// windows & linux - generally, closing UI exits app, mimic this
//  behavior if NOT macos
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})


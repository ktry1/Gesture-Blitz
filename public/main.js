const {app, BrowserWindow, Menu, shell} = require("electron");
const path = require("path")



require("@electron/remote/main").initialize()

function createWindow(){
    const win = new BrowserWindow({
        width:800,
        height: 600,
        title: "Gesture Blitz",
        icon:__dirname + "/icon.ico",
        
        webPreferences: {
            enableRemoteModule: true,
            nodeIntegration: true,
            contextIsolation: false,
        }
        
    })
    
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    //setting the menu
  // Menu.setApplicationMenu(mainMenu)
 

    win.loadURL(`file://${path.join(__dirname, '../build/index.html')}`)

    win.webContents.on("new-window", function(event, url) {
        event.preventDefault();
        shell.openExternal(url);
      });
}

const mainMenuTemplate = [
 
]

app.whenReady().then(createWindow);

app.on("window-all-closed", function(){
    if (process.platform !== "darwin"){
        app.quit();
    }
})



app.on("activate", function(){
    if (BrowswerWindow.getAllWindows().length === 0) {createWindow()}
})
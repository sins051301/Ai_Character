// public/electron.js
const { app, BrowserWindow, screen } = await import("electron");
const path = await import("path");
const isDev = await import("electron-is-dev");

let mainWindow;

function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  mainWindow = new BrowserWindow({
    width: width,
    height: height,
    frame: false,   //frame제거
    transparent: true, //투명하게 만들어 줌
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      devTools: isDev,
   
    },
  });
  //const child = new BrowserWindow({ parent: mainWindow })
  //child.show()
  //mainWindow.show()
  // ***중요***
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  if (isDev) mainWindow.webContents.openDevTools({ mode: "detach" });

  mainWindow.setResizable(true);
  mainWindow.on("closed", () => {
    mainWindow = null;
    app.quit();
  });
  mainWindow.focus();
}

app.on("ready", createWindow);

app.on("activate", () => {
  if (mainWindow === null) createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
// public/electron.js
const { app, BrowserWindow} = await import("electron");
const path = await import("path");
const isDev = await import("electron-is-dev");

let mainWindow;

function createWindow() {
  //const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  mainWindow = new BrowserWindow({
    width: 500,
    height: 400,
    frame: false, //frame제거
    transparent: true, //투명하게 만들어 줌
    alwaysOnTop: true,

    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      devTools: isDev,
    },
  });
  
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  if (isDev) mainWindow.webContents.openDevTools({ mode: "detach" }); //개발모드

  mainWindow.setResizable(true);
  mainWindow.on("closed", () => {
    mainWindow = null;
    app.quit();
  });
  mainWindow.focus();
  mainWindow.setPosition(1000, 480);
  //clipboard.writeText("afasfa");
}

app.on("ready", createWindow);

app.on("activate", () => {
  if (mainWindow === null) createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

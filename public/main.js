// public/electron.js
const { app, BrowserWindow,screen } = await import("electron");
const path = await import("path");
const isDev = await import("electron-is-dev");

let mainWindow;

function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;// 사용자의 화면 가로, 세로 해상도 가져오기

  mainWindow = new BrowserWindow({
    width: 400,
    height: 350,
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
  const windowWidth = 400; // 윈도우의 가로 크기
  const windowHeight = 350; // 윈도우의 세로 크기
  // const offsetX = 20; // 윈도우의 오른쪽으로부터의 오프셋
  // const offsetY = 20; // 윈도우의 아래쪽으로부터의 오프셋
  mainWindow.setPosition(width - windowWidth , height - windowHeight); // 윈도우의 위치 설정

  //clipboard.writeText("afasfa");
}

app.on("ready", createWindow);

app.on("activate", () => {
  if (mainWindow === null) createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

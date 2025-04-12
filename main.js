const { app, BrowserWindow, shell } = require("electron");
// const contextMenu = require("electron-context-menu");

let mainWindow;
(async () => {
  await app.whenReady();

  mainWindow = new BrowserWindow({
    width: 90,
    height: 90,
    x: 1820, // (1920-100)x(1080-100) in the bottom right
    y: 980, 
    maximizable: false,
    fullscreenable: false,
    resizable: false,
    frame: true,
    acceptFirstMouse: true,
    titleBarStyle: "hidden",
    // titleBarOverlay: true,
    alwaysOnTop: true,
    skipTaskbar: true,
    focusable: false,
    roundedCorners: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  mainWindow.setVisibleOnAllWorkspaces(true);
  
  //mainWindow.setType('dock');
  mainWindow.loadFile("index.html");
})();

let dockShow = true;

// contextMenu({
//   showInspectElement: false,
//   prepend: (defaultActions, parameters, BrowserWindow) => [
//     {
//       label: "Show in Dock",
//       type: "checkbox",
//       checked: dockShow,
//       click: (e) => {
//         dockShow = !dockShow;
//         dockShowFunction();
//       },
//     },
//   ],
// });

// function dockShowFunction() {
//   if (dockShow == true) {
//     app.dock.show();
//   } else {
//     app.dock.hide();
//   }
// }

try {
  require("electron-reloader")(module);
} catch (_) {}

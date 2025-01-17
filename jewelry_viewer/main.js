var gui = require('nw.gui');
var tray = new gui.Tray({title: 'Tray', tooltip: 'Tray Menu', icon: 'tray.png'});
var menu = new gui.Menu();
menu.append(new gui.MenuItem({
  type: 'normal', label: 'Open Application', click: function () {
    window.open('main/index.html', '_blank');
  }
}));
menu.append(new gui.MenuItem({type: 'separator'}));
menu.append(new gui.MenuItem({
  type: 'normal', label: 'Exit', click: function () {
    gui.App.quit();
  }
}));
tray.menu = menu;

var win = gui.Window.get();
var isShow = true;

tray.on('click', function () {
      if (isShow) {
        win.hide();
        isShow = false;
      } else {
        win.show();
        isShow = true;
      }
    }
);
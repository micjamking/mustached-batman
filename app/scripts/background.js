(function(app){
  'use strict';

  /**
   * Listens for the app launching, then creates the window.
   *
   * @see http://developer.chrome.com/apps/app.runtime.html
   * @see http://developer.chrome.com/apps/app.window.html
   */
  app.runtime.onLaunched.addListener(function(launchData) {
    app.window.create(
      './app/index.html',
      {
        id: 'mainWindow',
        bounds: {
          width: 800,
          height: 600
        }
      }
    );
  });
})(chrome.app);
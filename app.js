'use strict';

window.Polymer = {
  useNativeCSSProperties: true,
  lazyRegister: true,
  dom: 'shadow'
};

var App = (function(document) {
  var webComponentsSupported = (
    'registerElement' in document
    && 'import' in document.createElement('link')
    && 'content' in document.createElement('template')
  );

  function fireWebComponentsReady() {
    if (!window.HTMLImports) {
      document.dispatchEvent(new CustomEvent('WebComponentsReady', { bubbles: true }));
      console.log('App ready!');
    }
  }

  function load() {
    if (!webComponentsSupported) {
      var script = document.createElement('script');
      script.async = true;
      script.src = '/bower_components/webcomponentsjs/webcomponents-lite.min.js';
      script.onload = fireWebComponentsReady;
      document.head.appendChild(script);
    } else {
      fireWebComponentsReady();
    }
  }

  return {
    load: load
  }

}(document));

App.load();

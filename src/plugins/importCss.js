 // load main.css
 export default function importCss (url) {
   var cssMain = document.createElement('link');
   cssMain.href = url;
   cssMain.rel = 'stylesheet';
   cssMain.type = 'text/css';
   document.getElementsByTagName('head')[0].appendChild(cssMain);
 }

 
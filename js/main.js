window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
}
function scan(){
console.log("Scan clicked");
let device = await navigator.bluetooth.requestDevice({
    /*filters: [
        { namePrefix: 'PLAYBULB' }
    ],
    optionalServices: [ 0xff0f ]*/
});
}

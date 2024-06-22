var background = window.document.querySelector('#background');
var base = window.document.querySelector('#base');
var allButton = window.document.querySelector('#all-button');
var topButton = window.document.querySelector('#top-button');
var bottomButton = window.document.querySelector('#bottom-button');
var containnerNumber = window.document.querySelector('#containner-number');
var resetButton = window.document.querySelector('#reset-button')

topButton.addEventListener('click', lightOff);
var mode = 1;
var number = 0;
function lightOff() {
     if(mode == 1) {
          number += 1;
          containnerNumber.innerHTML = `<p>${number}</p>`;
          topButton.classList.toggle('cursor-block')
          topButton.classList.toggle('cursor-pointer')
          bottomButton.classList.toggle('cursor-block')
          bottomButton.classList.toggle('cursor-pointer')

          background.classList.toggle('light-bg');
          background.classList.toggle('off-bg');
     
          base.classList.toggle('light-base');
          base.classList.toggle('off-base');
     
          allButton.classList.toggle('light-all-button');
          allButton.classList.toggle('off-all-button');

          topButton.classList.toggle('light-top-button');
          topButton.classList.toggle('off-top-button');

          bottomButton.classList.toggle('light-bottom-button');
          bottomButton.classList.toggle('off-bottom-button');

          containnerNumber.classList.toggle('light-containner-number')
          containnerNumber.classList.toggle('off-containner-number')

          resetButton.classList.toggle('light-reset-button')
          resetButton.classList.toggle('off-reset-button')

          mode += 1;
     }
     
}

bottomButton.addEventListener('click', lightOn);

function lightOn() {
     if(mode == 2) {
          number += 1;
          containnerNumber.innerHTML = `<p>${number}</p>`;
          topButton.classList.toggle('cursor-block')
          topButton.classList.toggle('cursor-pointer')
          bottomButton.classList.toggle('cursor-block')
          bottomButton.classList.toggle('cursor-pointer')

          containnerNumber.classList.toggle('light-containner-number')
          containnerNumber.classList.toggle('off-containner-number')

          background.classList.toggle('light-bg');
          background.classList.toggle('off-bg');
     
          base.classList.toggle('light-base');
          base.classList.toggle('off-base');
     
          allButton.classList.toggle('light-all-button');
          allButton.classList.toggle('off-all-button');

          topButton.classList.toggle('light-top-button');
          topButton.classList.toggle('off-top-button');

          bottomButton.classList.toggle('light-bottom-button');
          bottomButton.classList.toggle('off-bottom-button');

          resetButton.classList.toggle('light-reset-button')
          resetButton.classList.toggle('off-reset-button')

          mode -= 1;
     }
}

resetButton.addEventListener('mousedown', resetButtonAnimation);
resetButton.addEventListener('mouseup', resetAnimation);
resetButton.addEventListener('click', resetNumber);

function resetButtonAnimation() {
     resetButton.classList.toggle('black-bg-button')        
}
function resetAnimation() {
     resetButton.classList.toggle('black-bg-button')
}
function resetNumber() {
     containnerNumber.innerHTML = '...';     
     number = 0;
}
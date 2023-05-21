const plateEl = document.querySelector('[data-animation]');

setTimeout(onRemove, 938);

function onRemove() {
  plateEl.classList.remove('animate__animated');
  plateEl.classList.remove('animate__rollIn');
}

const iceCreamEl = document.querySelector('[data-right-item]');

setTimeout(onDelay, 3000);

function onDelay() {
  iceCreamEl.style.cssText =
    'animation-iteration-count:infinite; animation-duration: 3s';
}

const DELAY = 1000;
let colorTimeId = null;

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

refs.startBtn.addEventListener('click', clickStart);
refs.stopBtn.addEventListener('click', clickStop);

function clickStart() {
  colorTimeId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, DELAY);
  refs.startBtn.setAttribute('disabled', true);
  refs.stopBtn.removeAttribute('disabled');

  console.log('start');
}

function clickStop() {
  clearInterval(colorTimeId);
  document.body.style.background = 'none';
  refs.startBtn.removeAttribute('disabled');
  refs.stopBtn.setAttribute('disabled', true);
  console.log('stop');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

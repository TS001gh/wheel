const video = document.getElementById('myVideo');
let frameRate = 10;

let button = document.querySelector('.button');

button.addEventListener('click', () => {
  button.classList.add('hide');
  video.classList.add('show');
  setTimeout(() => {
    video.play();
  }, 250);
});

video.addEventListener('pause', (event) => {
  button.classList.remove('hide');
  video.classList.remove('show');
});

document.addEventListener(
  'wheel',
  function (event) {
    let framesToMove = 2;

    if (event.deltaY > 0) {
      video.currentTime += framesToMove / frameRate;
    } else {
      video.currentTime -= framesToMove / frameRate;
    }
    event.preventDefault();
  },
  { passive: false }
);

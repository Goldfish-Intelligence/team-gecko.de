const keyPressTimeout = 10 * 1000;
const konamiCode = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

const geckoSound = new Audio('audio/gecko_sound.mp3');

function konami() {
  document.querySelector('#konami > img').animate(
    [
      {
        offset: 0.00, transform: 'scale(0)', opacity: 0,
      },
      {
        offset: 0.10, opacity: 1,
      },
      {
        offset: 0.80, transform: 'scale(3)',
      },
      {
        offset: 1.00, opacity: 0, transform: 'scale(5)',
      },
    ],
    {
      duration: 1000,
      easing: 'ease-in',
      fill: 'forwards',
    },
  );

  setTimeout(() => {
    geckoSound.play();
  }, 200);
}

let state = 0;
let lastKeyPress = 0;

function initKonamiDetector() {
  // prevent multiple initializations on page changes
  // swup does not reload the page, so the listener is not removed
  if (window.konamiInitialized) {
    return;
  }
  window.konamiInitialized = true;

  window.addEventListener('keydown', (e) => {
    // reset if it's been too long since the last keypress
    if (Date.now() - lastKeyPress > keyPressTimeout) {
      state = 0;
    }

    if (e.key === konamiCode[state]) {
      state += 1;
      lastKeyPress = Date.now();
    } else if (state === 2 && e.key === 'ArrowUp') {
      // if the user presses up more than twice in a row, we only count the last two
      // otherwise starting with any odd number of up presses would not work
      state = 2;
    } else {
      state = 0;
    }

    if (state === konamiCode.length) {
      state = 0;
      konami();
    }
  });
}

if (document.readyState !== 'loading') {
  initKonamiDetector();
} else {
  window.addEventListener('DOMContentLoaded', () => {
    initKonamiDetector();
  });
}

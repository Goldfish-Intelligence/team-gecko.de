import * as muek from './maps/muek';
import * as ms from './maps/ms';

const locationFormats = {};
locationFormats[muek.key] = muek;
locationFormats[ms.key] = ms;

function displayLocationCode(components, explanation) {
  const locationCode = document.getElementById('location-code');
  const locationCodeExplanation = document.getElementById('location-code-explanation');
  const shareButton = document.getElementById('share-btn');

  if (components === null) {
    window.location.hash = '';
    locationCode.innerHTML = '…';
    locationCodeExplanation.innerHTML = '&nbsp;';
    shareButton.style.display = 'none';
    return;
  }

  shareButton.style.display = 'inline-block';

  locationCode.innerHTML = '';
  locationCodeExplanation.innerHTML = '';
  for (const [i, component] of components.entries()) {
    const componentEl = document.createElement('span');
    componentEl.textContent = component;
    componentEl.title = explanation[i];
    locationCode.appendChild(componentEl);

    if (explanation[i] !== null) {
      const explanationEl = document.createElement('span');
      explanationEl.textContent = explanation[i];
      locationCodeExplanation.appendChild(explanationEl);
    }
  }

  window.location.hash = locationCode.innerText.toLowerCase();
}

function showLocation(location) {
  function hide(key) {
    document.getElementById(`map-${key}`).style.display = 'none';
    document.getElementById(`map-selector-${key}`).classList.remove('selected');
  }

  if (location === null) {
    displayLocationCode(null, null);
    for (const locationFormat of Object.values(locationFormats)) {
      hide(locationFormat.key);
    }
    return;
  }

  for (const locationFormat of Object.values(locationFormats)) {
    if (locationFormat.key !== location.key) {
      hide(locationFormat.key);
    }
  }

  const canvas = document.getElementById(`map-${location.key}`);
  canvas.style.display = 'block';
  const map = locationFormats[location.key];
  map.highlightLocation(canvas, location.location);
  displayLocationCode(map.displayComponents(location.location), map.explain(location.location));
  document.getElementById(`map-selector-${location.key}`).classList.add('selected');
}

function parseLocation(location) {
  for (const [key, format] of Object.entries(locationFormats)) {
    const match = format.regex.exec(location.replace(/\s+/g, ''));

    if (match === null) {
      continue;
    }

    const result = {
      key,
      location: {},
    };

    for (const [name, group] of Object.entries(format.groups)) {
      result.location[name] = match[group] ? match[group] : null;
    }

    return result;
  }

  return null;
}

function initMaps() {
  const canvasWrapper = document.getElementById('canvas-wrapper');
  const mapSelector = document.getElementById('map-selector');

  for (const [key, map] of Object.entries(locationFormats)) {
    const canvas = document.createElement('canvas');
    canvas.id = `map-${key}`;
    canvasWrapper.appendChild(canvas);

    const mapOption = document.createElement('span');
    mapOption.textContent = map.name;
    mapOption.id = `map-selector-${key}`;
    mapOption.addEventListener('click', () => {
      showLocation(parseLocation(key));
      document.getElementById('location-code').scrollIntoView();
    });
    mapSelector.appendChild(mapOption);

    map.draw(canvas);
    canvas.addEventListener('click', (e) => {
      const location = map.locationFromCoordinates(e.offsetX, e.offsetY);

      // functions should reset their states if location is null
      map.highlightLocation(canvas, location);
      displayLocationCode(map.displayComponents(location), map.explain(location));
    });
  }
}

// read and display location code from URL hash
function readLocationCodeFromURL() {
  const locationCodeHash = window.decodeURIComponent(window.location.hash.slice(1));
  showLocation(parseLocation(locationCodeHash));
}

function addHashChangeListener() {
  window.addEventListener('hashchange', () => {
    readLocationCodeFromURL();
  });
}

function addLocationCodeChangeListeners() {
  const locationCode = document.getElementById('location-code');

  // prevent line breaks
  locationCode.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      locationCode.blur();
    }
  });

  locationCode.addEventListener('focus', () => {
    if (locationCode.innerText === '…') {
      locationCode.innerText = '';
    }
  });

  locationCode.addEventListener('blur', () => {
    showLocation(parseLocation(locationCode.innerText));

    if (locationCode.innerText.trim() === '') {
      locationCode.innerHTML = '…';
    }
  });
}

function addShareButtonListener() {
  document.getElementById('share-btn').addEventListener('click', () => {
    const text = document.getElementById('location-code').innerText;
    const url = window.location.href;

    const shareData = {
      title: 'IGGG',
      text,
      url,
    };

    if (navigator.share && navigator.canShare(shareData)) {
      navigator.share(shareData);
    } else {
      navigator.clipboard.writeText(`${text} — ${url}`);
    }
  });
}

function init() {
  initMaps();
  readLocationCodeFromURL();
  addHashChangeListener();
  addLocationCodeChangeListeners();
  addShareButtonListener();

  window.addEventListener('resize', () => {
    for (const [key, map] of Object.entries(locationFormats)) {
      const canvas = document.getElementById(`map-${key}`);
      map.draw(canvas);
    }
  });
}

if (document.readyState !== 'loading') {
  init();
} else {
  window.addEventListener('DOMContentLoaded', () => {
    init();
  });
}

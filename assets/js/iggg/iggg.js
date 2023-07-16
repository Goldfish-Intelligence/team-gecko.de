import * as muek from './muek';

const locationFormats = {};
locationFormats[muek.key] = muek;

function displayLocationCode(components, explanation) {
  const locationCode = document.getElementById('location-code');
  const locationCodeExplanation = document.getElementById('location-code-explanation');

  if (components === null) {
    window.location.hash = '';
    locationCode.innerHTML = '…';
    locationCodeExplanation.innerHTML = '&nbsp;';
    return;
  }

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

function parseLocation(location) {
  for (const [key, format] of Object.entries(locationFormats)) {
    const match = format.regex.exec(location.trim());

    if (match === null) {
      continue;
    }

    const result = {
      key,
      location: {},
    };

    for (const [name, group] of Object.entries(format.groups)) {
      result.location[name] = match[group];
    }

    return result;
  }

  return null;
}

function initMaps() {
  for (const [key, map] of Object.entries(locationFormats)) {
    const canvas = document.getElementById(`map-${key}`);
    map.draw(canvas);
    canvas.addEventListener('click', (e) => {
      const location = map.locationFromCoordinates(e.offsetX, e.offsetY);

      // functions should reset their states if location is null
      map.highlightLocation(canvas, location);
      displayLocationCode(map.displayComponents(location), map.explain(location));
    });
  }
}

function showLocation(location) {
  if (location !== null) {
    const canvas = document.getElementById(`map-${location.key}`);
    const map = locationFormats[location.key];
    map.highlightLocation(canvas, location.location);
    displayLocationCode(map.displayComponents(location.location), map.explain(location.location));
  }
}

// read and display location code from URL hash
function readLocationCodeFromURL() {
  const locationCodeHash = window.decodeURIComponent(window.location.hash.slice(1));
  showLocation(parseLocation(locationCodeHash));
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

function init() {
  initMaps();
  readLocationCodeFromURL();
  addLocationCodeChangeListeners();

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

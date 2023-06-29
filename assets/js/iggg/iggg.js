import * as muek from './muek';

const locationFormats = {};
locationFormats[muek.key] = muek;

function displayLocationCode(components, explanation) {
  const locationCode = document.getElementById('location-code');
  locationCode.innerHTML = '&nbsp;';

  if (components === null) {
    return;
  }

  for (const [i, component] of components.entries()) {
    const componentEl = document.createElement('span');
    componentEl.textContent = component;
    componentEl.title = explanation[i];
    locationCode.appendChild(componentEl);
  }
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

initMaps();

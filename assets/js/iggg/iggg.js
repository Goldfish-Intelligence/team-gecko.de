import * as muek from './muek';

const locationFormats = {};
locationFormats[muek.key] = muek;

function initMaps() {
  for (const [key, map] of Object.entries(locationFormats)) {
    const canvas = document.getElementById(`map-${key}`);
    map.draw(canvas);
    canvas.addEventListener('click', (e) => {
      const location = map.locationFromCoordinates(e.offsetX, e.offsetY);

      // functions should reset their states if location is null
      map.highlightLocation(canvas, location);
    });
  }
}

initMaps();

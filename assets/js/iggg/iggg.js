import * as muek from './muek';

const locationFormats = {};
locationFormats[muek.key] = muek;

function initMaps() {
  for (const [key, map] of Object.entries(locationFormats)) {
    const canvas = document.getElementById(`map-${key}`);
    map.draw(canvas);
  }
}

initMaps();

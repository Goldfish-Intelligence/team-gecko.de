import * as variables from '../variables';

export const name = 'Mathebau';
export const key = 'mb';
export const regex = /^MB((-1|[0-4])(\.)?([0-3])?)?$/i;
export const groups = {
  floor: 2,
  corner: 4,
};

const width = 133;
const innerHeight = 98; // building only
const height = innerHeight + 24;

const cornersByFloor = {
  '-1': [],
  0: [],
  1: ['1', '2', '3'],
  2: ['1', '2', '3'],
  3: ['1', '2', '3'],
  4: [],
};

const cornerOffsets = {
  0: { x: -32, y: 28 },
  1: { x: -28, y: 32 },
  2: { x: -32, y: 28 },
  3: { x: -28, y: 32 },
};

const initialFloor = 1;
let currentFloor = initialFloor;

function drawFloor(canvasContext) {
  // outer border
  canvasContext.strokeRect(1, 1, width - 2, innerHeight - 2);
  // inner border
  if (currentFloor > 0) {
    canvasContext.strokeRect(36, 22, width - 72, innerHeight - 44);
  }

  if (currentFloor === 0) {
    canvasContext.fillText('FSM', 4, innerHeight - 5);
  }
}

function drawCorner(canvasContext, corner) {
  const transform = canvasContext.getTransform();

  // apply rotation to center of shape
  canvasContext.translate(width / 2, innerHeight / 2);
  canvasContext.rotate(parseInt(corner, 10) * (Math.PI / 2));
  canvasContext.translate(-(width / 2), -(innerHeight / 2));

  canvasContext.translate(cornerOffsets[corner].x, cornerOffsets[corner].y);

  canvasContext.beginPath();
  canvasContext.moveTo(width / 2, innerHeight / 2);
  canvasContext.lineTo(width / 2 + 9, innerHeight / 2);
  canvasContext.lineTo(width / 2 + 9, innerHeight / 2 + 8);
  canvasContext.lineTo(width / 2 - 8, innerHeight / 2 + 8);
  canvasContext.lineTo(width / 2 - 8, innerHeight / 2 - 9);
  canvasContext.lineTo(width / 2, innerHeight / 2 - 9);
  canvasContext.closePath();

  canvasContext.fill();
  canvasContext.stroke();

  canvasContext.setTransform(transform);
}

function drawElevator(canvasContext) {
  let floorText;
  if (currentFloor < 0) {
    floorText = `${Math.abs(currentFloor)}.UG`;
  } else if (currentFloor === 0) {
    floorText = 'EG';
  } else {
    floorText = `${currentFloor}.OG`;
  }

  canvasContext.fillText(floorText, width / 2, innerHeight / 2 + 2);

  if (currentFloor < 4) {
    canvasContext.beginPath();
    canvasContext.moveTo(width / 2 - 5, innerHeight / 2 - 11);
    canvasContext.lineTo(width / 2 + 5, innerHeight / 2 - 11);
    canvasContext.lineTo(width / 2, innerHeight / 2 - 19);
    canvasContext.closePath();
    canvasContext.fill();
    canvasContext.stroke();
  }

  if (currentFloor > -1) {
    canvasContext.beginPath();
    canvasContext.moveTo(width / 2 - 5, innerHeight / 2 + 11);
    canvasContext.lineTo(width / 2 + 5, innerHeight / 2 + 11);
    canvasContext.lineTo(width / 2, innerHeight / 2 + 19);
    canvasContext.closePath();
    canvasContext.fill();
    canvasContext.stroke();
  }
}

let scaleFactor;

export function draw(canvas) {
  scaleFactor = Math.max(Math.min((window.innerWidth * 0.8) / height, 5), 1);

  const ctx = canvas.getContext('2d');

  ctx.canvas.width = scaleFactor * width;
  ctx.canvas.height = scaleFactor * height;
  ctx.scale(scaleFactor, scaleFactor);

  // border
  ctx.lineWidth = 2;
  ctx.strokeStyle = variables.outlineStroke;
  ctx.fillStyle = variables.markersFill;
  ctx.font = variables.font;
  drawFloor(ctx);

  // corners
  ctx.lineWidth = 1;
  ctx.strokeStyle = variables.locationStroke;
  ctx.fillStyle = variables.locationFill;
  for (const corner of cornersByFloor[currentFloor]) {
    drawCorner(ctx, corner);
  }

  // elevator
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  drawElevator(ctx);

  ctx.fillStyle = variables.markersFill;
  ctx.fillText('Campus', width / 2, height - 13);
}

// euclidean distance between two points
function distance(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

export function locationFromCoordinates(x, y) {
  // calculate corner location from canvas coordinates

  // elevator buttons
  const upBtnDist = distance(x / scaleFactor, y / scaleFactor, width / 2, innerHeight / 2 - 15);
  const downBtnDist = distance(x / scaleFactor, y / scaleFactor, width / 2, innerHeight / 2 + 15);
  if (upBtnDist < 8 && currentFloor < 4) {
    return { floor: currentFloor + 1, corner: null };
  }
  if (downBtnDist < 8 && currentFloor > -1) {
    return { floor: currentFloor - 1, corner: null };
  }

  // choose the corner that is closest to the click
  let minDistance = Infinity;
  let closestCorner = null;

  for (const corner of cornersByFloor[currentFloor]) {
    const xOffset = (['0', '1'].includes(corner) ? -1 : 1) * 32;
    const yOffset = (['1', '2'].includes(corner) ? -1 : 1) * 28;

    const dist = distance(
      x / scaleFactor,
      y / scaleFactor,
      width / 2 + xOffset,
      innerHeight / 2 + yOffset,
    );

    if (dist < minDistance) {
      minDistance = dist;
      closestCorner = corner;
    }
  }

  // don't highlight if user clicks in the middle of nowhere
  return minDistance < 20
    ? { floor: currentFloor, corner: closestCorner }
    : { floor: currentFloor, corner: null };
}

export function highlightLocation(canvas, location) {
  // clear previous highlights
  draw(canvas);

  if (location === null) {
    return;
  }

  // draw correct floor
  currentFloor = location.floor === null ? initialFloor : parseInt(location.floor, 10);
  draw(canvas);

  const ctx = canvas.getContext('2d');

  // highlight corner
  ctx.fillStyle = variables.highlightFill;
  ctx.strokeStyle = variables.highlightStroke;

  if (location.corner !== null) {
    if (!cornersByFloor[currentFloor].includes(location.corner)) {
      return;
    }

    drawCorner(ctx, location.corner);
  }
}

export function displayComponents(location) {
  if (location === null) {
    return null;
  }

  const components = ['MB', location.floor === null ? initialFloor : location.floor];
  if (location.corner !== null) {
    components.push('.', location.corner);
  }

  return components;
}

export function explain(location) {
  if (location === null) {
    return null;
  }

  const floor = location.floor === null ? initialFloor : parseInt(location.floor, 10);
  let floorExplanation;
  if (floor < 0) {
    floorExplanation = `${Math.abs(floor)}. Untergeschoss`;
  } else if (floor === 0) {
    floorExplanation = 'Erdgeschoss';
  } else {
    floorExplanation = `${floor}. Obergeschoss`;
  }

  const cornerExplanation = location.corner === null ? null : `Lernecke Nr. ${location.corner}`;

  return [name, floorExplanation, null, cornerExplanation];
}

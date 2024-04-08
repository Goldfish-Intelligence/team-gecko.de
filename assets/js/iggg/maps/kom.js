import * as variables from '../variables';

export const name = 'InformatiKOM';
export const key = 'kom';
export const regex = /^KOM((A)|(\d{3})|([0-3])(G([NOSW])?|B|T|)?([sc])?)?$/i;
export const groups = {
  atrium: 2,
  room: 3,
  floor: 4,
  area: 5,
  areaCardinal: 6,
  seat: 7,
};

const width = 590;
const height = 489;

const initialFloor = 0;
let currentFloor = initialFloor;

const elevatorPosition = { x: 138, y: 145 };
const stairPositions = {
  ground: { x: 300, y: 170 },
  east: { x: 258, y: 170 },
  west: { x: 292, y: 355 },
};

const locations = {
  0: {
    atrium: { x: 240, y: 300, text: 'Atrium' },
    großraum: { x: 430, y: 190, text: 'Großraum' },
  },
  1: {
    room117: { x: 260, y: 420, text: '117' },
    balcony: { x: 551, y: 140, text: '☼' },
    großraum: { x: 380, y: 140, text: 'Großraum' },
    großraumN: { x: 250, y: 107, text: 'N' },
    großraumO: { x: 390, y: 185, text: 'O' },
    großraumS: { x: 322, y: 290, text: 'S' },
  },
  2: {
    großraum: { x: 165, y: 312, text: 'Großraum' },
    balcony: { x: 260, y: 424, text: '☼' },
    room202: { x: 59, y: 348, text: '202' },
    room203: { x: 59, y: 320, text: '203' },
    room204: { x: 59, y: 292, text: '204' },
    room205: { x: 59, y: 264, text: '205' },
    room206: { x: 59, y: 236, text: '206' },
    room207: { x: 59, y: 208, text: '207' },
    room208: { x: 59, y: 180, text: '208' },
    room209: { x: 59, y: 152, text: '209' },
    room210: { x: 59, y: 124, text: '210' },
    room211: { x: 59, y: 96, text: '211' },
    room212: { x: 59, y: 68, text: '212' },
    room213: { x: 59, y: 40, text: '213' },
  },
  3: {
    balcony: { x: 476, y: 260, text: '☼' },
    großraum: { x: 320, y: 216, text: 'Großraum' },
  },
};

function drawLocationText(canvasContext, location, stroke = false) {
  canvasContext.fillText(location.text, location.x, location.y);
  if (stroke) {
    canvasContext.lineWidth = 1.25;
    canvasContext.strokeText(location.text, location.x, location.y);
  }
}

function drawFloor(canvasContext) {
  // inner borders;
  if (currentFloor === 0) {
    canvasContext.beginPath();
    canvasContext.moveTo(84, 68);
    canvasContext.lineTo(177, 68);
    canvasContext.lineTo(177, 188);
    canvasContext.lineTo(84, 188);
    canvasContext.stroke();

    canvasContext.beginPath();
    canvasContext.moveTo(197, 35);
    canvasContext.lineTo(267, 35);
    canvasContext.lineTo(267, 113);
    canvasContext.lineTo(197, 113);
    canvasContext.lineTo(197, 35);
    canvasContext.closePath();
    canvasContext.stroke();

    canvasContext.beginPath();
    canvasContext.moveTo(288, 6);
    canvasContext.lineTo(288, 129);
    canvasContext.lineTo(410, 129);
    canvasContext.lineTo(410, 6);
    canvasContext.stroke();

    canvasContext.beginPath();
    canvasContext.moveTo(439, 6);
    canvasContext.lineTo(439, 68);
    canvasContext.lineTo(519, 68);
    canvasContext.lineTo(519, 246);
    canvasContext.lineTo(347, 246);
    canvasContext.lineTo(347, 413);
    canvasContext.stroke();

    canvasContext.beginPath();
    canvasContext.moveTo(230, 370);
    canvasContext.lineTo(287, 370);
    canvasContext.lineTo(287, 414);
    canvasContext.lineTo(230, 414);
    canvasContext.closePath();
    canvasContext.stroke();

    drawLocationText(canvasContext, locations[0].atrium);
    drawLocationText(canvasContext, locations[0].großraum);
  } else if (currentFloor === 1) {
    canvasContext.beginPath();
    canvasContext.moveTo(84, 68);
    canvasContext.lineTo(177, 68);
    canvasContext.lineTo(177, 188);
    canvasContext.lineTo(84, 188);
    canvasContext.stroke();

    canvasContext.beginPath();
    canvasContext.moveTo(177, 6);
    canvasContext.lineTo(177, 68);
    canvasContext.lineTo(584, 68);
    canvasContext.moveTo(519, 68);
    canvasContext.lineTo(519, 246);
    canvasContext.lineTo(347, 246);
    canvasContext.lineTo(347, 413);
    canvasContext.moveTo(519, 188);
    canvasContext.lineTo(584, 188);
    canvasContext.stroke();

    canvasContext.beginPath();
    canvasContext.moveTo(519, 129);
    canvasContext.lineTo(462, 129);
    canvasContext.lineTo(462, 188);
    canvasContext.lineTo(519, 188);
    canvasContext.stroke();

    canvasContext.beginPath();
    canvasContext.moveTo(177, 129);
    canvasContext.lineTo(301, 129);
    canvasContext.lineTo(301, 370);
    canvasContext.stroke();

    canvasContext.beginPath();
    canvasContext.moveTo(167, 370);
    canvasContext.lineTo(347, 370);
    canvasContext.stroke();

    drawLocationText(canvasContext, locations[1].room117);
    canvasContext.font = variables.hugeFont;
    drawLocationText(canvasContext, locations[1].balcony);
    canvasContext.font = variables.largeFont;
    drawLocationText(canvasContext, locations[1].großraum);
    drawLocationText(canvasContext, locations[1].großraumN);
    drawLocationText(canvasContext, locations[1].großraumO);
    drawLocationText(canvasContext, locations[1].großraumS);
  } else if (currentFloor === 2) {
    canvasContext.beginPath();
    canvasContext.moveTo(82, 6);
    canvasContext.lineTo(82, 370);
    canvasContext.stroke();

    canvasContext.beginPath();
    canvasContext.moveTo(102, 6);
    canvasContext.lineTo(102, 48);
    canvasContext.lineTo(192, 48);
    canvasContext.moveTo(192, 68);
    canvasContext.lineTo(102, 68);
    canvasContext.lineTo(102, 246);
    canvasContext.lineTo(177, 246);
    canvasContext.lineTo(177, 110);
    canvasContext.lineTo(192, 110);
    canvasContext.lineTo(192, 6);
    canvasContext.moveTo(177, 129);
    canvasContext.lineTo(347, 129);
    canvasContext.lineTo(347, 370);
    canvasContext.stroke();

    drawLocationText(canvasContext, locations[2].großraum);
    canvasContext.font = variables.hugeFont;
    drawLocationText(canvasContext, locations[2].balcony);
    canvasContext.font = variables.font;
    drawLocationText(canvasContext, locations[2].room202);
    drawLocationText(canvasContext, locations[2].room203);
    drawLocationText(canvasContext, locations[2].room204);
    drawLocationText(canvasContext, locations[2].room205);
    drawLocationText(canvasContext, locations[2].room206);
    drawLocationText(canvasContext, locations[2].room207);
    drawLocationText(canvasContext, locations[2].room208);
    drawLocationText(canvasContext, locations[2].room209);
    drawLocationText(canvasContext, locations[2].room210);
    drawLocationText(canvasContext, locations[2].room211);
    drawLocationText(canvasContext, locations[2].room212);
    drawLocationText(canvasContext, locations[2].room213);
    canvasContext.font = variables.largeFont;
  } else if (currentFloor === 3) {
    canvasContext.beginPath();
    canvasContext.moveTo(406, 246);
    canvasContext.lineTo(347, 246);
    canvasContext.lineTo(347, 314);
    canvasContext.lineTo(322, 314);
    canvasContext.lineTo(322, 246);
    canvasContext.lineTo(227, 246);
    canvasContext.lineTo(227, 314);
    canvasContext.lineTo(177, 314);
    canvasContext.lineTo(177, 129);
    canvasContext.lineTo(406, 129);
    canvasContext.stroke();

    canvasContext.beginPath();
    canvasContext.moveTo(406, 188);
    canvasContext.lineTo(586, 188);
    canvasContext.stroke();

    canvasContext.font = variables.hugeFont;
    drawLocationText(canvasContext, locations[3].balcony);
    canvasContext.font = variables.largeFont;
    drawLocationText(canvasContext, locations[3].großraum);
  }

  // outer border
  canvasContext.lineWidth *= 3;
  canvasContext.beginPath();
  canvasContext.moveTo(currentFloor > 1 ? 34 : 82, 4);
  canvasContext.lineTo(586, 4);
  canvasContext.lineTo(586, 250);
  canvasContext.lineTo(411, 370);
  if (currentFloor < 3) {
    canvasContext.lineTo(243, 485);
  }
  canvasContext.lineTo(166, 370);
  if (currentFloor < 2) {
    canvasContext.lineTo(82, 245);
  } else {
    canvasContext.lineTo(34, 370);
  }
  canvasContext.closePath();
  canvasContext.stroke();

  canvasContext.beginPath();
  if (currentFloor === 2) {
    canvasContext.moveTo(167, 370);
    canvasContext.lineTo(410, 370);
  } else if (currentFloor === 3) {
    canvasContext.moveTo(406, 6);
    canvasContext.lineTo(406, 370);
  }
  canvasContext.stroke();
  canvasContext.lineWidth /= 3;
}

function drawStairs(canvasContext, xOffset, yOffset, direction) {
  const size = 6;
  const steps = 4;
  const xScaleFactor = 1.4;

  canvasContext.lineWidth = 6;

  canvasContext.beginPath();
  canvasContext.moveTo(xOffset, yOffset);
  for (let i = 1; i <= steps; i += 1) {
    canvasContext.lineTo(xOffset + (i - 1) * size * direction * xScaleFactor, yOffset - i * size);
    canvasContext.lineTo(xOffset + i * size * direction * xScaleFactor, yOffset - i * size);
  }
  canvasContext.lineTo(xOffset + steps * size * direction * xScaleFactor, yOffset);
  canvasContext.closePath();
  canvasContext.stroke();
  canvasContext.fill();
}

function drawElevator(canvasContext) {
  let floorText;
  if (currentFloor === 0) {
    floorText = 'EG';
  } else {
    floorText = `${currentFloor}.OG`;
  }

  canvasContext.fillText(floorText, elevatorPosition.x, elevatorPosition.y + 2);

  canvasContext.lineWidth = 2;

  if (currentFloor < 3) {
    canvasContext.beginPath();
    canvasContext.moveTo(elevatorPosition.x - 10, elevatorPosition.y - 18);
    canvasContext.lineTo(elevatorPosition.x + 10, elevatorPosition.y - 18);
    canvasContext.lineTo(elevatorPosition.x, elevatorPosition.y - 32);
    canvasContext.closePath();
    canvasContext.fill();
    canvasContext.stroke();
  }

  if (currentFloor > 0) {
    canvasContext.beginPath();
    canvasContext.moveTo(elevatorPosition.x - 10, elevatorPosition.y + 18);
    canvasContext.lineTo(elevatorPosition.x + 10, elevatorPosition.y + 18);
    canvasContext.lineTo(elevatorPosition.x, elevatorPosition.y + 32);
    canvasContext.closePath();
    canvasContext.fill();
    canvasContext.stroke();
  }
}

let scaleFactor;

export function draw(canvas) {
  scaleFactor = Math.max(Math.min((window.innerWidth * 0.8) / width, 1.8), 1);

  const ctx = canvas.getContext('2d');

  ctx.canvas.width = scaleFactor * width;
  ctx.canvas.height = scaleFactor * height;
  ctx.scale(scaleFactor, scaleFactor);

  // border
  ctx.lineWidth = 2;
  ctx.strokeStyle = variables.outlineStroke;
  ctx.fillStyle = variables.markersFill;
  ctx.font = variables.largeFont;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  drawFloor(ctx);

  // stairs
  ctx.fillStyle = variables.locationFill;
  if (currentFloor === 0) {
    drawStairs(ctx, stairPositions.ground.x, stairPositions.ground.y, 1);
  } else {
    drawStairs(ctx, stairPositions.east.x, stairPositions.east.y, 1);
  }
  if (currentFloor > 0 && currentFloor < 3) {
    drawStairs(ctx, stairPositions.west.x, stairPositions.west.y, -1);
  }

  // elevator
  drawElevator(ctx);

  ctx.fillStyle = variables.markersFill;
  ctx.font = variables.font;
  ctx.rotate(Math.PI / 2);
  ctx.fillText('Adenauerring', width / 4, -12);
  ctx.rotate(Math.PI / -2);
}

// euclidean distance between two points
function distance(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

export function locationFromCoordinates(x, y) {
  // calculate location from canvas coordinates
  const nullLocation = {
    floor: null,
    atrium: null,
    room: null,
    area: null,
    areaCardinal: null,
    seat: null,
  };

  // elevator buttons
  const upBtnDist = distance(
    x / scaleFactor,
    y / scaleFactor,
    elevatorPosition.x,
    elevatorPosition.y - 24,
  );
  const downBtnDist = distance(
    x / scaleFactor,
    y / scaleFactor,
    elevatorPosition.x,
    elevatorPosition.y + 24,
  );
  if (upBtnDist < 16 && currentFloor < 3) {
    return {
      ...nullLocation,
      floor: currentFloor + 1,
    };
  }
  if (downBtnDist < 16 && currentFloor > 0) {
    return {
      ...nullLocation,
      floor: currentFloor - 1,
    };
  }

  // stairs
  const stairDistanceThreshold = 14 * scaleFactor;
  const stairEastDist = distance(
    x / scaleFactor,
    y / scaleFactor,
    stairPositions[currentFloor === 0 ? 'ground' : 'east'].x + 17,
    stairPositions[currentFloor === 0 ? 'ground' : 'east'].y - 12,
  );
  if (stairEastDist < stairDistanceThreshold) {
    return {
      ...nullLocation,
      floor: currentFloor % 2 === 0 ? currentFloor : currentFloor - 1,
      area: 'T',
    };
  }
  const stairWestDist = distance(
    x / scaleFactor,
    y / scaleFactor,
    stairPositions.west.x - 17,
    stairPositions.west.y - 12,
  );
  if (stairWestDist < stairDistanceThreshold && currentFloor > 0) {
    return {
      ...nullLocation,
      floor: currentFloor % 2 === 0 ? currentFloor - 1 : currentFloor,
      area: 'T',
    };
  }

  let minDistance = Infinity;
  let closestLocation = null;

  for (const location of Object.values(locations[currentFloor])) {
    if (currentFloor === 1 && location.text === 'Großraum') {
      continue;
    }

    let dist = distance(x / scaleFactor, y / scaleFactor, location.x, location.y);
    if (location.text.match(/\d{3}/)) {
      dist *= 2;
    }

    if (dist < minDistance) {
      minDistance = dist;

      if (location.text === 'Atrium') {
        closestLocation = { atrium: 'A' };
      } else if (location.text === 'Großraum') {
        closestLocation = { area: 'G' };
      } else if (location.text.match(/[NOSW]/)) {
        closestLocation = { area: 'G', areaCardinal: location.text };
      } else if (location.text === '☼') {
        closestLocation = { area: 'B' };
      } else if (location.text.match(/\d{3}/)) {
        closestLocation = { room: location.text };
      }
    }
  }
  closestLocation.floor = currentFloor;
  if (minDistance < 150 * scaleFactor) {
    return {
      ...nullLocation,
      ...closestLocation,
    };
  }

  return {
    ...nullLocation,
    floor: currentFloor,
  };
}

export function highlightLocation(canvas, location) {
  // clear previous highlights
  draw(canvas);

  if (location === null) {
    return;
  }

  if (location.floor !== null) {
    location.floor = parseInt(location.floor, 10);
  }

  // draw correct floor
  currentFloor = initialFloor;
  if (location.floor !== null) {
    currentFloor = location.floor;
  }
  if (location.room !== null) {
    currentFloor = Math.floor(location.room / 100);
  }
  draw(canvas);

  const ctx = canvas.getContext('2d');

  ctx.fillStyle = variables.highlightFill;
  ctx.strokeStyle = variables.highlightStroke;

  if (location.atrium) {
    ctx.font = variables.largeFont;
    drawLocationText(ctx, locations[currentFloor].atrium, true);
  } else if (location.room) {
    ctx.font = currentFloor === 2 ? variables.font : variables.largeFont;
    drawLocationText(ctx, locations[currentFloor][`room${location.room}`], true);
  } else if (location.area && location.area.toUpperCase()[0] === 'G') {
    ctx.font = variables.largeFont;
    if (currentFloor === 1 && location.areaCardinal) {
      drawLocationText(ctx, locations[currentFloor][`großraum${location.areaCardinal.toUpperCase()}`], true);
    } else {
      drawLocationText(ctx, locations[currentFloor].großraum, true);
    }
  } else if (location.area && location.area.toUpperCase() === 'B') {
    ctx.font = variables.hugeFont;
    drawLocationText(ctx, locations[currentFloor].balcony, true);
  } else if (location.area && location.area.toUpperCase() === 'T') {
    if (currentFloor === 0) {
      drawStairs(ctx, stairPositions.ground.x, stairPositions.ground.y, 1);
    } else if (currentFloor % 2 === 0) {
      drawStairs(ctx, stairPositions.east.x, stairPositions.east.y, 1);
    } else {
      drawStairs(ctx, stairPositions.west.x, stairPositions.west.y, -1);
    }
  }
}

export function displayComponents(location) {
  if (location === null) {
    return null;
  }

  const components = ['KOM'];

  if (location.atrium !== null) {
    components.push('A');
  }

  if (location.room !== null) {
    components.push(location.room);
  }

  if (location.atrium === null && location.room === null && location.floor !== null) {
    components.push(location.floor);
  }

  if (location.area !== null) {
    components.push(location.area.toUpperCase()[0]);
  }

  if (location.areaCardinal !== null) {
    components.push(location.areaCardinal.toUpperCase());
  }

  if (location.seat !== null) {
    components.push(location.seat.toLowerCase());
  }

  return components;
}

export function explain(location) {
  if (location === null) {
    return null;
  }

  const explanations = [name];

  if (location.atrium != null) {
    explanations.push('Atrium');
  }

  if (location.room != null) {
    explanations.push(`Raum ${location.room}`);
  }

  if (location.floor !== null) {
    if (parseInt(location.floor, 10) === 0) {
      explanations.push('Erdgeschoss');
    } else {
      explanations.push(`${location.floor}. Obergeschoss`);
    }
  }

  if (location.area != null) {
    explanations.push({
      G: 'Großraum',
      B: 'Balkon',
      T: 'Treppe',
    }[location.area.toUpperCase()[0]]);
  }

  if (location.areaCardinal != null) {
    explanations.push({
      N: 'Norden',
      O: 'Osten',
      S: 'Süden',
    }[location.areaCardinal.toUpperCase()]);
  }

  if (location.seat != null) {
    // TODO:
    explanations.push(location.seat);
  }

  return explanations;
}

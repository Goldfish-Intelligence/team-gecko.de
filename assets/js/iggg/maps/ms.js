import * as variables from '../variables';

export const name = 'Mensa Großer Speisesaal';
export const key = 'ms';
export const regex = /^MS([1-9])([a-d])$/i;
export const groups = {
  row: 1,
  column: 2,
};

const width = 154;
const height = 334;

// row (1-9) + column (a-d) → tables
// table: [x pos, y pos, is long table]
const tables = {};

function initTables() {
  const tableRowMap = ['8', '8', '7', '7', '7', '6', '6', '6', '5', '5', '5', '4', '4', '3', '3', '3', '2', '2'];
  const tableColumnMap = ['a', 'b', 'c', 'd'];

  for (let tableRow = 0; tableRow < 18; tableRow += 1) {
    const y = 51 + 13 * tableRow + 1;
    for (let tableColumn = 0; tableColumn < 4; tableColumn += 1) {
      const row = tableRowMap[tableRow];
      const column = tableColumnMap[tableColumn];

      if (tables[row] === undefined) {
        tables[row] = {};
      }

      if (tables[row][column] === undefined) {
        tables[row][column] = [];
      }

      if (tableRow === 11 && tableColumn < 3) {
        continue;
      }

      switch (tableColumn) {
        case 0:
          tables[row][column].push(...[[18, y, false], [26, y, false]]);
          break;
        case 1:
          tables[row][column].push(...[[50, y, true], [62, y, true]]);
          break;
        case 2:
          tables[row][column].push(...[[90, y, true], [102, y, true]]);
          break;
        case 3:
          tables[row][column].push(...[[130, y, false], [138, y, true]]);
          break;
        default:
          break;
      }
    }
  }
}

initTables();

let scaleFactor;

function drawTable(canvasContext, table) {
  const tableWidth = table[2] ? 12 : 8;
  const tableHeight = 6;

  canvasContext.fillRect(table[0], table[1], tableWidth, tableHeight);
  canvasContext.strokeRect(table[0], table[1], tableWidth, tableHeight);
}

function drawLamp(canvasContext, row, column) {
  const x = 4 + (3 * 12) * column + 12 + 2;
  const y = 4 + (3 * 12) * (8 - row) + 12 + 2;

  canvasContext.fillRect(x, y, 10, 10);
}

export function draw(canvas) {
  scaleFactor = Math.max(Math.min((window.innerHeight * 0.8) / height, 3), 2);

  const ctx = canvas.getContext('2d');

  ctx.canvas.width = scaleFactor * width;
  ctx.canvas.height = scaleFactor * height;
  ctx.scale(scaleFactor, scaleFactor);

  // border
  ctx.lineWidth = 2;
  ctx.strokeStyle = variables.outlineStroke;
  ctx.fillStyle = variables.markersFill;
  ctx.font = variables.font;
  ctx.strokeRect(2, 2, width - 4, height - 4); // outer border
  ctx.fillText('L3', 15, 20);
  ctx.fillText('L4', 50, 20);
  ctx.fillText('L5', 85, 20);
  ctx.fillText('L6', 120, 20);
  ctx.fillText('SB', 40, 325);
  ctx.fillText('MüK', 107, 320);

  // tables
  ctx.lineWidth = 1;
  ctx.fillStyle = variables.locationFill;
  ctx.strokeStyle = variables.locationStroke;
  for (const row of Object.values(tables)) {
    for (const tableGroup of Object.values(row)) {
      for (const table of tableGroup) {
        drawTable(ctx, table);
      }
    }
  }

  // lamps
  ctx.fillStyle = variables.lampFill;
  ctx.lineWidth = 0;
  for (let row = 0; row < 9; row += 1) {
    for (let column = 0; column < 4; column += 1) {
      drawLamp(ctx, row, column);
    }
  }
}

// euclidean distance of between a point and a rectangle
function distanceToRectangle(x, y, rx, ry, rw, rh) {
  const dx = Math.max(rx - x, 0, x - (rx + rw));
  const dy = Math.max(ry - y, 0, y - (ry + rh));
  return Math.sqrt(dx * dx + dy * dy);
}

export function locationFromCoordinates(x, y) {
  // calculate table location from canvas coordinates

  // choose the location that is closest to the click
  let minDistance = Infinity;
  let closestArea = null;

  for (const [rowKey, row] of Object.entries(tables)) {
    for (const [columnKey, column] of Object.entries(row)) {
      for (const table of column) {
        const distance = distanceToRectangle(
          x / scaleFactor,
          y / scaleFactor,
          table[0],
          table[1],
          table[2] ? 12 : 8,
          6,
        );
        if (distance < minDistance) {
          minDistance = distance;
          closestArea = { row: rowKey, column: columnKey };
        }
      }
    }
  }

  // don't highlight if user clicks in the middle of nowhere
  return minDistance < 20 ? closestArea : null;
}

export function highlightLocation(canvas, location) {
  // clear previous highlights
  draw(canvas);

  if (location === null) {
    return;
  }

  const ctx = canvas.getContext('2d');

  // highlight tables at location
  ctx.fillStyle = variables.highlightFill;
  ctx.strokeStyle = variables.highlightStroke;

  const highlightTables = [];
  if (location.row !== '' && location.column !== '') {
    highlightTables.push(...tables[location.row][location.column]);
  } else if (location.row !== '') {
    for (const column of Object.keys(tables[location.row])) {
      highlightTables.push(...tables[location.row][column]);
    }
  } else if (location.column !== '') {
    for (const row of Object.keys(tables)) {
      highlightTables.push(...tables[row][location.column]);
    }
  }

  for (const table of highlightTables) {
    drawTable(ctx, table);
  }

  // highlight lamp
  ctx.shadowColor = variables.highlightLampFill;
  ctx.shadowBlur = 15;
  ctx.fillStyle = variables.highlightLampFill;
  drawLamp(ctx, parseInt(location.row, 10) - 1, location.column.charCodeAt(0) - 97);
}

export function displayComponents(location) {
  return location === null ? null : ['MS', location.row, location.column];
}

export function explain(location) {
  if (location === null) {
    return null;
  }

  if (location.row === '' && location.column === '') {
    return [name, null, null];
  }

  const columnExplanation = `Lampenspalte ${location.column.toUpperCase()}`;
  const rowExplanation = `Lampenzeile ${location.row}`;

  if (location.row === '') {
    return [name, null, columnExplanation];
  }

  if (location.column === '') {
    return [name, rowExplanation, null];
  }

  return [name, rowExplanation, columnExplanation];
}

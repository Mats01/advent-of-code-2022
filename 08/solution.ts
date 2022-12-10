import { readFileSync } from 'fs';

const input = readFileSync('input.txt', 'utf8').split('\n').map(line => line.split('').map(tree => parseInt(tree))) as number[][];

const width = input[0].length;
const height = input.length;


let innerVisible: string[][] = [];
for (let i = 0; i < height; i++) {
  innerVisible[i] = [];
  for (let j = 0; j < width; j++) {
    if (i === 0 || i === height - 1 || j === 0 || j === width - 1) {
      innerVisible[i][j] = '🌲';
      continue;
    }
    innerVisible[i][j] = '..';

  }
}



input.forEach((row, i) => {
  if (i === 0 || i === height - 1) {
    return;
  }
  row.reduce((acc, curr, j) => {
    if (curr > acc) {
      innerVisible[i][j] = "🌲";
      return curr;
    }
    return acc;
  }, row[0] as number);
  row.reduceRight((acc, curr, j) => {
    if (curr > acc) {
      innerVisible[i][j] = "🌲";
      return curr;
    }
    return acc;
  }, row[width - 1] as number);

});
for (let i = 1; i < width - 1; i++) {
  // visible from the top
  let last = input[0][i];
  for (let j = 1; j < height - 1; j++) {
    if (input[j][i] > last) {
      last = input[j][i];
      innerVisible[j][i] = "🌲";
    }
  }

  // visible from the bottom
  last = input[height - 1][i];
  for (let j = height - 2; j >= 1; j--) {
    if (input[j][i] > last) {
      last = input[j][i];
      innerVisible[j][i] = "🌲";
    }
  }
}


const innerVisibleSum = innerVisible.reduce((acc, row) => acc + row.reduce((acc, col) => acc + (col !== '..' ? 1 : 0), 0), 0);







const solution1Old = innerVisibleSum;


let maxScenicScore = 0;

let position = { x: 0, y: 0 };

for (let i = 0; i < height; i++) {
  for (let j = 0; j < width; j++) {
    // look left 
    let myScore = 1;
    let curr = 0;
    for (let k = j - 1; k >= 0; k--) {
      if (input[i][k] >= input[i][j]) {
        curr++;
        break;
      }
      curr++;
    }
    myScore *= curr;

    // look right
    curr = 0;
    for (let k = j + 1; k < width; k++) {
      if (input[i][k] >= input[i][j]) {
        curr++;
        break;
      }
      curr++;
    }
    myScore *= curr;

    // look up
    curr = 0;
    for (let k = i - 1; k >= 0; k--) {
      if (input[k][j] >= input[i][j]) {
        curr++;
        break;
      }
      curr++;
    }
    myScore *= curr;

    // look down
    curr = 0;
    for (let k = i + 1; k < height; k++) {
      if (input[k][j] >= input[i][j]) {
        curr++;
        break;
      }
      curr++;
    }
    myScore *= curr;

    if (myScore > maxScenicScore) {
      maxScenicScore = myScore;
      position = { x: j, y: i };
    }

  }
}

innerVisible[position.y][position.x] = '🏆';

for (let i = 0; i < height; i++) {
  console.log(innerVisible[i].join(''));
}


console.log("solution1:", solution1Old);
console.log("solution2:", maxScenicScore);




const solution1 = readFileSync('input.txt', 'utf8')
  .split('\n')
  .map(line => line.split('').map(tree => parseInt(tree)))
  .reduce((acc, row, i, arr) =>
    acc + row.reduce((acc, curr, j) =>
      acc +
      (
        (
          !row.slice(0, j).some(t => t >= curr)
          ||
          !row.slice(j + 1).some(t => t >= curr)
          ||
          !arr.slice(0, i).map(r => r[j]).some(t => t >= curr)
          ||
          !arr.slice(i + 1).map(r => r[j]).some(t => t >= curr)
        ) ? 1 : 0)

      , 0)
    , 0);


const findEveryDirectionDistance = (arr: number[][], i: number, j: number) => {
  const distanceLeft = arr[i].slice(0, j).reduceRight((acc, curr) =>
    acc[1] ? acc : (curr >= arr[i][j]) ? [acc[0] + 1, true] : [acc[0] + 1, false], [0, false] as any[]);

  const distanceRight = arr[i].slice(j + 1).reduce((acc, curr) =>
    acc[1] ? acc : (curr >= arr[i][j]) ? [acc[0] + 1, true] : [acc[0] + 1, false], [0, false] as any[]);

  const distanceUp = arr.slice(0, i).map(r => r[j]).reduceRight((acc, curr) =>
    acc[1] ? acc : (curr >= arr[i][j]) ? [acc[0] + 1, true] : [acc[0] + 1, false], [0, false] as any[]);

  const distanceDown = arr.slice(i + 1).map(r => r[j]).reduce((acc, curr) =>
    acc[1] ? acc : (curr >= arr[i][j]) ? [acc[0] + 1, true] : [acc[0] + 1, false], [0, false] as any[]);


  return distanceLeft[0] * distanceRight[0] * distanceUp[0] * distanceDown[0];
}


const solution2 = readFileSync('input.txt', 'utf8')
  .split('\n')
  .map(line => line.split('').map(tree => parseInt(tree)))
  .map((row, i, arr) =>
    row.map((_, j) =>
      row.slice(0, j).reduceRight((acc, curr) => acc[1] ? acc : (curr >= row[j]) ? [acc[0] + 1, true] : [acc[0] + 1, false], [0, false] as any[])[0]
      *
      row.slice(j + 1).reduce((acc, curr) => acc[1] ? acc : (curr >= row[j]) ? [acc[0] + 1, true] : [acc[0] + 1, false], [0, false] as any[])[0]
      *
      arr.slice(0, i).map(r => r[j]).reduceRight((acc, curr) => acc[1] ? acc : (curr >= row[j]) ? [acc[0] + 1, true] : [acc[0] + 1, false], [0, false] as any[])[0]
      *
      arr.slice(i + 1).map(r => r[j]).reduce((acc, curr) => acc[1] ? acc : (curr >= row[j]) ? [acc[0] + 1, true] : [acc[0] + 1, false], [0, false] as any[])[0]
    ))

  .flatMap(x => x)
  .reduce((acc, curr) => Math.max(acc, curr), 0);



console.log("solution1OneLiner:", solution1);
console.log("solution2OneLiner:", solution2);


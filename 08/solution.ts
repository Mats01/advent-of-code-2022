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




for (let i = 0; i < height; i++) {
  console.log(innerVisible[i].join(''));
}



const solution1 = innerVisibleSum;
console.log("solution1:", solution1);

import { readFileSync } from 'fs';

const input = readFileSync('input.txt', 'utf8').split('\n').map(line => line.split('').map(tree => parseInt(tree)));

const width = input[0].length;
const height = input.length;

const outerVisible = 2 * width + 2 * height - 4;

let innerVisible: string[][] = [];
for (let i = 0; i < height; i++) {
  innerVisible[i] = [];
  for (let j = 0; j < width; j++) {
    innerVisible[i][j] = '..';

  }
}






for (let i = 1; i < height - 1; i++) {
  // visible from the left
  let last = input[i][0];
  for (let j = 1; j < width - 1; j++) {
    if (input[i][j] > last) {
      last = input[i][j];
      innerVisible[i][j] = "🌲";
    }
  }

  // visible from the right
  last = input[i][width - 1];
  for (let j = width - 2; j >= 1; j--) {
    if (input[i][j] > last) {
      last = input[i][j];
      innerVisible[i][j] = "🌲";
    }
  }
}

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


// console.log('outerVisible', outerVisible);
// console.log('innerVisible', innerVisibleSum);


console.log(outerVisible + innerVisibleSum);

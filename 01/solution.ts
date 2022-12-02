import { readFileSync } from 'fs';

const eachElfTotal = readFileSync('./input.txt', 'utf-8').split('\n\n').map(elf => elf.split('\n').reduce((acc, curr) => parseInt(curr) + acc, 0));
const solution = readFileSync('./input.txt', 'utf-8')
  .split('\n\n')
  .map(elf => elf.split('\n')
    .reduce((acc, curr) => parseInt(curr) + acc, 0))
  .reduce((acc, curr) => Math.max(acc, curr), 0);

const solution2 = readFileSync('./input.txt', 'utf-8')
  .split('\n\n')
  .map(elf => elf.split('\n')
    .reduce((acc, curr) => parseInt(curr) + acc, 0))
  .reduce((acc, curr) => [Math.max(curr, acc[0]), ...acc.slice(1)].sort(), [0, 0, 0])
  .reduce((acc, curr) => acc + curr, 0);

console.log(solution2);

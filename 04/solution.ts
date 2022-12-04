import { readFileSync } from 'fs';


const solution1 = readFileSync('./input.txt', 'utf-8')
  .split('\n')
  .map((line) => [line.split(',')[0], line.split(',')[1]])
  .map(([fistElf, secondElf]) => [fistElf.split('-').map(s => parseInt(s)), secondElf.split('-').map(s => parseInt(s))])
  .map(([fistElf, secondElf]) => (((fistElf[0] <= secondElf[0] && fistElf[1] >= secondElf[1]) || (fistElf[0] >= secondElf[0] && fistElf[1] <= secondElf[1])) ? 1 : 0) as number)
  .reduce((acc, curr) => acc + curr, 0);


const solution2 = readFileSync('./input.txt', 'utf-8')
  .split('\n')
  .map((line) => [line.split(',')[0], line.split(',')[1]])
  .map(([fistElf, secondElf]) => [fistElf.split('-').map(s => parseInt(s)), secondElf.split('-').map(s => parseInt(s))])
  .map(([fistElf, secondElf]) => [Array.from({ length: fistElf[1] - fistElf[0] + 1 }, (_, i) => i + fistElf[0]), Array.from({ length: secondElf[1] - secondElf[0] + 1 }, (_, i) => i + secondElf[0])])
  .map(([fistElf, secondElf]) => (fistElf.filter((value) => secondElf.includes(value)).length > 0) ? 1 : 0 as number)
  .reduce((acc, curr) => acc + curr, 0);




console.log(solution1);
console.log(solution2);


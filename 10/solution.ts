import { readFileSync } from 'fs';


const solution1 = (readFileSync('input.txt', 'utf8')
  .split('\n')
  .map(line => [line.split(' ')[0], parseInt(line.split(' ')[1])]) as any[])
  .reduce((acc, line) => (line[0] === 'noop') ? [...acc, acc.at(-1)] : [...acc, acc.at(-1), acc.at(-1) + line[1]], [1])
  .reduce((acc: number, line: number, i: number) => [20, 60, 100, 140, 180, 220].map(x => x - 1).includes(i) ? acc + (line * (i + 1)) : acc, 0);


const solution2 = (readFileSync('input.txt', 'utf8')
  .split('\n')
  .map(line => [line.split(' ')[0], parseInt(line.split(' ')[1])]) as any[])
  .reduce((acc, line) => (line[0] === 'noop') ? [...acc, acc.at(-1)] : [...acc, acc.at(-1), acc.at(-1) + line[1]], [1])
  .map((_: number, i: number, arr: number[]) => new Array(3).fill(arr[i] - 1).map((x, i) => x + i).includes(i % 40) ? '#' : '.')
  .reduce((acc: string, curr: string, i: number) => acc + curr + ((i + 1) % 40 === 0 ? "\n" : ""), '');





console.log(solution1);
console.log(solution2);


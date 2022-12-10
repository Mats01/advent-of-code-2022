import { readFileSync } from 'fs';

const input = readFileSync('input.txt', 'utf8').split('\n').map(line => [line.split(' ')[0], parseInt(line.split(' ')[1])]) as any[];




const solution1 = (readFileSync('input.txt', 'utf8')
  .split('\n')
  .map(line => [line.split(' ')[0], parseInt(line.split(' ')[1])]) as any[])
  .reduce((acc, line) => (line[0] === 'noop') ? [...acc, acc.at(-1)] : [...acc, acc.at(-1), acc.at(-1) + line[1]], [1]);


const solution2 = input.length;



let solution1_sum = 0
for (let i = 19; i < solution1.length; i += 40) {
  solution1_sum += solution1[i] * (i + 1);
}

console.log(solution1_sum);
console.log(solution2);


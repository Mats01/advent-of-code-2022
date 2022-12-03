import { readFileSync } from 'fs';


const solution1 = readFileSync('./input.txt', 'utf-8')
  .split('\n')
  .map((line) => line.split('').map((char) => char.charCodeAt(0)))
  .map((line) => line.map((char) => char >= 97 ? char - 96 : char - 64 + 26))
  .map((line) => [line.slice(0, line.length / 2), line.slice(line.length / 2, line.length)])
  .map(([firstHalf, secondHalf]) => firstHalf.filter(num => secondHalf.includes(num)))
  .map((line) => line.filter((num, index) => line.indexOf(num) === index))
  .flatMap((line) => line)
  .reduce((acc, curr) => acc + curr, 0);


const solution2 = readFileSync('./input.txt', 'utf-8')
  .split('\n')
  .map((line) => line.split('').map((char) => char.charCodeAt(0)))
  .map((line) => line.map((char) => char >= 97 ? char - 96 : char - 64 + 26))
  .reduce((acc, _, index, arr) => (index + 3 > arr.length) || index % 3 !== 0 ? acc : [...acc, [arr[index], arr[index + 1], arr[index + 2]]], [] as number[][][])
  .map(([firstHalf, secondHalf, thirdHalf]) => firstHalf.filter(num => secondHalf.includes(num) && thirdHalf.includes(num)))
  .map((line) => line.filter((num, index) => line.indexOf(num) === index))
  .flatMap((line) => line)
  .reduce((acc, curr) => acc + curr, 0);



console.log(solution1);
console.log(solution2);


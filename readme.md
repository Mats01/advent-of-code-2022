# First year I'm trying the Advent of Code
[Advent Of Code](https://adventofcode.com/2022)

I'm using TypeScript.

Bonus challenge: I'm trying to solve the problems using only oneliners.

All scripts assume the input is located in the same directory as the script, in a file called `input.txt`.

## Day 1
[https://adventofcode.com/2022/day/1](https://adventofcode.com/2022/day/1)
```typescript
const solution = readFileSync('./input.txt', 'utf-8').split('\n\n').map(elf => elf.split('\n').reduce((acc, curr) => parseInt(curr) + acc, 0)).reduce((acc, curr) => Math.max(acc, curr), 0);

const solution2 = readFileSync('./input.txt', 'utf-8').split('\n\n').map(elf => elf.split('\n').reduce((acc, curr) => parseInt(curr) + acc, 0)).reduce((acc, curr) => [Math.max(curr, acc[0]), ...acc.slice(1)].sort(), [0, 0, 0]).reduce((acc, curr) => acc + curr, 0);
```

## Day 2
[https://adventofcode.com/2022/day/2](https://adventofcode.com/2022/day/2)
```typescript
const solution = readFileSync('./input.txt', 'utf-8').split('\n').map(round => [round.charCodeAt(0) - 64, round.charCodeAt(2) - 23 - 64]).map(([left, right]) => (left - right === 0 ?3 : left - right === -1 || left - right === 2 ? 6 : 0) + right).reduce((acc, curr) => acc + curr, 0);
  
const solution2 = readFileSync('./input.txt', 'utf-8').split('\n').map(round => [round.charCodeAt(0) - 64, round.charCodeAt(2) - 23 - 64]).map(([left, right]) => [left, right === 1 ? [3, 1, 2][left - 1] : right === 2 ? left : [2, 3, 1][left - 1]]).map(([left, right]) => (left - right === 0 ? 3 : left - right === -1 || left - right === 2 ? 6 : 0) + right).reduce((acc, curr) => acc + curr, 0);
```


## Day 3
[https://adventofcode.com/2022/day/3](https://adventofcode.com/2022/day/3)
```typescript
const solution1 = readFileSync('./input.txt', 'utf-8').split('\n').map((line) => line.split('').map((char) => char.charCodeAt(0))).map((line) => line.map((char) => char >= 97 ? char - 96 : char - 64 + 26)).map((line) => [line.slice(0, line.length / 2), line.slice(line.length / 2, line.length)]).map(([firstHalf, secondHalf]) => firstHalf.filter(num => secondHalf.includes(num))).map((line) => line.filter((num, index) => line.indexOf(num) === index)).flatMap((line) => line).reduce((acc, curr) => acc + curr, 0);

const solution2 = readFileSync('./input.txt', 'utf-8').split('\n').map((line) => line.split('').map((char) => char.charCodeAt(0))).map((line) => line.map((char) => char >= 97 ? char - 96 : char - 64 + 26)).reduce((acc, _, index, arr) => (index + 3 > arr.length) || index % 3 !== 0 ? acc : [...acc, [arr[index], arr[index + 1], arr[index + 2]]], [] as number[][][]).map(([firstElf, secondElf, thirdElf]) => firstElf.filter(num => secondElf.includes(num) && thirdElf.includes(num))).map((line) => line.filter((num, index) => line.indexOf(num) === index)).flatMap((line) => line).reduce((acc, curr) => acc + curr, 0);
```
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


## Day 4
[https://adventofcode.com/2022/day/4](https://adventofcode.com/2022/day/4)
```typescript
const solution1 = readFileSync('./input.txt', 'utf-8').split('\n').map((line) => [line.split(',')[0], line.split(',')[1]]).map(([fistElf, secondElf]) => [fistElf.split('-').map(s => parseInt(s)), secondElf.split('-').map(s => parseInt(s))]).map(([fistElf, secondElf]) => (((fistElf[0] <= secondElf[0] && fistElf[1] >= secondElf[1]) || (fistElf[0] >= secondElf[0] && fistElf[1] <= secondElf[1])) ? 1 : 0) as number).reduce((acc, curr) => acc + curr, 0);

const solution2 = readFileSync('./input.txt', 'utf-8').split('\n').map((line) => [line.split(',')[0], line.split(',')[1]]).map(([fistElf, secondElf]) => [fistElf.split('-').map(s => parseInt(s)), secondElf.split('-').map(s => parseInt(s))]).map(([fistElf, secondElf]) => [Array.from({ length: fistElf[1] - fistElf[0] + 1 }, (_, i) => i + fistElf[0]), Array.from({ length: secondElf[1] - secondElf[0] + 1 }, (_, i) => i + secondElf[0])]).map(([fistElf, secondElf]) => (fistElf.filter((value) => secondElf.includes(value)).length > 0) ? 1 : 0 as number).reduce((acc, curr) => acc + curr, 0);
```

## Day 5
[https://adventofcode.com/2022/day/5](https://adventofcode.com/2022/day/5)
```typescript
const solution1 = Object.values(readFileSync('./input.txt', 'utf-8').split('\n\n')[1].split('\n').reduce((acc, curr) => ({ ...acc, [parseInt(curr.split(' ')[5])]: [...acc[parseInt(curr.split(' ')[3])].slice(0, parseInt(curr.split(' ')[1])).reverse(), ...acc[parseInt(curr.split(' ')[5])]], [parseInt(curr.split(' ')[3])]: acc[parseInt(curr.split(' ')[3])].slice(parseInt(curr.split(' ')[1])), }), readFileSync('./input.txt', 'utf-8').split('\n\n')[0].split('\n').reduce((acc, curr, index, arr) => (index === arr.length - 1) ? acc : curr.split('').reduce((a, c, i) => ((i - 1) % 4 === 0 && c !== ' ' && c.charCodeAt(0) > 57) ? ({ ...a, [(i - 1) / 4 + 1]: [...(a[(i - 1) / 4 + 1] || []), c] }) : a, acc), {} as { [key: number]: string[] }))).reduce((acc, curr) => acc + (curr[0] || ''), '');

const solution2 = Object.values(readFileSync('./input.txt', 'utf-8').split('\n\n')[1].split('\n').reduce((acc, curr) => ({ ...acc, [parseInt(curr.split(' ')[5])]: [...acc[parseInt(curr.split(' ')[3])].slice(0, parseInt(curr.split(' ')[1])), ...acc[parseInt(curr.split(' ')[5])]], [parseInt(curr.split(' ')[3])]: acc[parseInt(curr.split(' ')[3])].slice(parseInt(curr.split(' ')[1])), }), readFileSync('./input.txt', 'utf-8').split('\n\n')[0].split('\n').reduce((acc, curr, index, arr) => (index === arr.length - 1) ? acc : curr.split('').reduce((a, c, i) => ((i - 1) % 4 === 0 && c !== ' ' && c.charCodeAt(0) > 57) ? ({ ...a, [(i - 1) / 4 + 1]: [...(a[(i - 1) / 4 + 1] || []), c] }) : a, acc), {} as { [key: number]: string[] }))).reduce((acc, curr) => acc + (curr[0] || ''), '');
```

## Day 6
[https://adventofcode.com/2022/day/6](https://adventofcode.com/2022/day/6)
```typescript
const solution1 = readFileSync('./input.txt', 'utf-8').split('').reduce((acc, curr) => acc[0].length < 4 ? [[...acc[0], curr], 4] : (acc[0] as string[]).filter((v, i) => acc[0].indexOf(v) === i).length >= 4 ? acc : [[...acc[0].slice(1), curr], acc[1] + 1], [[], 0] as any[])[1];

const solution2 = readFileSync('./input.txt', 'utf-8').split('').reduce((acc, curr) => acc[0].length < 14 ? [[...acc[0], curr], 14] : (acc[0] as string[]).filter((v, i) => acc[0].indexOf(v) === i).length >= 14 ? acc : [[...acc[0].slice(1), curr], acc[1] + 1], [[], 0] as any[])[1];
```

## Day 7
[https://adventofcode.com/2022/day/7](https://adventofcode.com/2022/day/7)
```typescript
import { readFileSync } from 'fs';

type File = {
  name: string;
  size: number;
}

class Dir {
  name: string;
  files: File[];
  dirs: Dir[];
  parent?: Dir;
  constructor(name: string, parent?: Dir) {
    this.name = name;
    this.files = [];
    this.dirs = [];
    this.parent = parent;
  }

  getTotalSize(): number {
    return this.files.reduce((acc, file) => acc + file.size, 0) + this.dirs.reduce((acc, dir) => acc + dir.getTotalSize(), 0);
  }
}

let curr = new Dir('/');

const input = readFileSync('./input.txt', 'utf-8').split('\n');

input.shift(); // remove $ cd /

for (let line of input) {
  if (!line.startsWith('$')) {
    if (line.startsWith('dir')) {
      curr.dirs.push(new Dir(line.split(' ')[1], curr));
    }
    else {
      const [size, name] = line.split(' ');
      curr.files.push({ name, size: parseInt(size) });
    }
    continue;
  }
  if (line.startsWith('$ cd ..')) {
    if (!curr.parent) {
      console.log('invalid dir');
      break;
    }
    curr = curr.parent;
    continue;
  } else if (line.startsWith('$ cd ')) {
    const newCurr = curr.dirs.find(dir => dir.name === line.split(' ')[2]);
    if (!newCurr) {
      console.log('invalid dir');
      break;
    }
    curr = newCurr;
  }
}
while (curr.parent) {
  curr = curr.parent;
}

const totalSpace = 70000000;
const neededSpace = 30000000;
const freeSpace = totalSpace - curr.getTotalSize();
const needsToBeeFreed = neededSpace - freeSpace;

const allDirSizes: { [name: string]: number } = {};

const getDirstUnder100000 = (dir: Dir): number => {
  let total = 0;
  if (!allDirSizes[dir.name]) {
    allDirSizes[dir.name] = dir.getTotalSize();
  }
  if (dir.getTotalSize() < 100000) {
    total += dir.getTotalSize();
  }
  for (let subDir of dir.dirs) {
    total += getDirstUnder100000(subDir);
  }
  return total;
}
let solution1 = getDirstUnder100000(curr);

let solution2 = totalSpace;
for (let [_, size] of Object.entries(allDirSizes)) {
  if (size > needsToBeeFreed && size < solution2) {
    solution2 = size;
  }
}

console.log(solution1);
console.log(solution2);
```
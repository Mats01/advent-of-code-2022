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
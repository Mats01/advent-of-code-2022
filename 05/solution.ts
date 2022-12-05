import { readFileSync } from 'fs';

// 5 12 17

const solution1 = readFileSync('./input.txt', 'utf-8')
  .split('\n\n')
  .map((line) => line.split('\n'))
  .map((line, index) => index !== 0 ? line : line.reduce((acc, curr) => {
    const newAcc = acc;
    for (let i = 0; i < curr.length - 1; i++) {
      if ((i - 1) % 4 === 0 && curr[i] !== ' ' && curr[i].charCodeAt(0) > 57) {
        newAcc[(i - 1) / 4 + 1].push(curr[i]);
      }
    }
    return newAcc;
  }, { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [] } as { [key: number]: string[] }))
  .reduce((acc, curr) => {
    if (!Array.isArray(curr)) {
      return curr
    };
    const newAcc = acc as { [key: number]: string[] };
    for (const input of curr) {
      const ammount = parseInt(input.split(' ')[1]);
      const sourceIndex = parseInt(input.split(' ')[3]);
      const destinationIndex = parseInt(input.split(' ')[5]);


      for (let i = 0; i < ammount; i++) {
        const source = newAcc[sourceIndex];
        if (!source) break;
        const first = source.shift();
        first && newAcc[destinationIndex].unshift(first);
      }

    }
    return newAcc;
  }, { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [] } as { [key: number]: string[] });

const result = Object.values(solution1).reduce((acc, curr) => acc + (curr[0] || ''), '');


const solution2 = readFileSync('./input.txt', 'utf-8')
  .split('\n')
  .length;



console.log(result);
console.log(solution1);
console.log(solution2);


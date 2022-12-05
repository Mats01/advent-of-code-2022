import { readFileSync } from 'fs';



const solution1 = readFileSync('./input.txt', 'utf-8')
  .split('\n\n')
  .map((line) => line.split('\n'))
  .map((line, index) => index !== 0 ? line : line.reduce((acc, curr) => {
    for (let i = 0; i < curr.length - 1; i++) {
      if ((i - 1) % 4 === 0 && curr[i] !== ' ' && curr[i].charCodeAt(0) > 57) {
        acc[(i - 1) / 4] = [...(acc[(i - 1) / 4] || []), curr[i]];
      }
    }
    return acc;
  }, [] as any[]))
  .reduce((acc, curr, index) => {
    if (index === 0) {
      return curr
    };
    const newAcc = acc as string[][];
    for (const input of curr) {
      const ammount = parseInt(input.split(' ')[1]);
      const sourceIndex = parseInt(input.split(' ')[3]) - 1;
      const destinationIndex = parseInt(input.split(' ')[5]) - 1;


      for (let i = 0; i < ammount; i++) {
        const source = newAcc[sourceIndex];
        if (!source) break;
        const first = source.shift();
        first && newAcc[destinationIndex].unshift(first);
      }

    }
    return newAcc;
  }, [] as any[]);

const result = solution1.reduce((acc, curr) => acc + (curr[0] || ''), '');


const solution2 = readFileSync('./input.txt', 'utf-8')
  .split('\n')
  .length;



console.log(result);
console.log(solution1);
console.log(solution2);


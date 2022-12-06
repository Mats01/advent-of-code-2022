import { readFileSync } from 'fs';

const solution1 = readFileSync('./input.txt', 'utf-8').split('').reduce((acc, curr) => acc[0].length < 4 ? [[...acc[0], curr], 4] : (acc[0] as string[]).filter((v, i) => acc[0].indexOf(v) === i).length >= 4 ? acc : [[...acc[0].slice(1), curr], acc[1] + 1], [[], 0] as any[])[1];

const solution2 = readFileSync('./input.txt', 'utf-8').split('').reduce((acc, curr) => acc[0].length < 14 ? [[...acc[0], curr], 14] : (acc[0] as string[]).filter((v, i) => acc[0].indexOf(v) === i).length >= 14 ? acc : [[...acc[0].slice(1), curr], acc[1] + 1], [[], 0] as any[])[1];



console.log(solution1);
console.log(solution2);




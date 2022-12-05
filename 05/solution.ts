import { readFileSync } from 'fs';



const initialStack = readFileSync('./input.txt', 'utf-8')
  .split('\n\n')[0]
  .split('\n')
  .reduce((acc, curr) => {
    for (let i = 0; i < curr.length - 1; i++) {
      if ((i - 1) % 4 === 0 && curr[i] !== ' ' && curr[i].charCodeAt(0) > 57) {
        acc[(i - 1) / 4 + 1] = [...(acc[(i - 1) / 4 + 1] || []), curr[i]];
      }
    }
    return acc;
  }, {} as { [key: number]: string[] });


const moveFro = (arr: string[], elems: number) => {
  // get first elems elements of arr
  return;

}


const solution1 = readFileSync('./input.txt', 'utf-8')
  .split('\n\n')[1]
  .split('\n')
  .reduce((acc, curr) => ({
    ...acc,
    [parseInt(curr.split(' ')[5])]: [
      ...acc[parseInt(curr.split(' ')[3])].slice(0, parseInt(curr.split(' ')[1])).reverse(),
      ...acc[parseInt(curr.split(' ')[5])]
    ],
    [parseInt(curr.split(' ')[3])]: acc[parseInt(curr.split(' ')[3])].slice(parseInt(curr.split(' ')[1])),
  }
  ), initialStack);

const result = Object.values(solution1).reduce((acc, curr) => acc + (curr[0] || ''), '');


const solution2 = readFileSync('./input.txt', 'utf-8')
  .split('\n')
  .length;



console.log(result);
console.log(solution1);
// console.log(solution2);




// .map((value, index, arr) => index === 0 ? value : [arr[0], value]).slice(1)

console.log(initialStack);

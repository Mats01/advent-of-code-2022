import { readFileSync } from 'fs';





const initialStack2 = readFileSync('./input.txt', 'utf-8')
  .split('\n\n')[0]
  .split('\n')
  .reduce((acc, curr, index, arr) =>
    (index === arr.length - 1) ? acc :
      curr.split('').reduce((a, c, i) =>
        ((i - 1) % 4 === 0 && c !== ' ' && c.charCodeAt(0) > 57) ?
          ({
            ...a,
            [(i - 1) / 4 + 1]: [...(a[(i - 1) / 4 + 1] || []), c]
          })
          : a
        , acc)
    , {} as { [key: number]: string[] });





const moveFro = (arr: string[], elems: number) => {
  // get first elems elements of arr
  return;

}


const solution1 = Object.values(readFileSync('./input.txt', 'utf-8')
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
  ), readFileSync('./input.txt', 'utf-8')
    .split('\n\n')[0]
    .split('\n')
    .reduce((acc, curr, index, arr) =>
      (index === arr.length - 1) ? acc :
        curr.split('').reduce((a, c, i) =>
          ((i - 1) % 4 === 0 && c !== ' ' && c.charCodeAt(0) > 57) ?
            ({
              ...a,
              [(i - 1) / 4 + 1]: [...(a[(i - 1) / 4 + 1] || []), c]
            })
            : a
          , acc)
      , {} as { [key: number]: string[] })))
  .reduce((acc, curr) => acc + (curr[0] || ''), '');

const solution2 = Object.values(readFileSync('./input.txt', 'utf-8')
  .split('\n\n')[1]
  .split('\n')
  .reduce((acc, curr) => ({
    ...acc,
    [parseInt(curr.split(' ')[5])]: [
      ...acc[parseInt(curr.split(' ')[3])].slice(0, parseInt(curr.split(' ')[1])),
      ...acc[parseInt(curr.split(' ')[5])]
    ],
    [parseInt(curr.split(' ')[3])]: acc[parseInt(curr.split(' ')[3])].slice(parseInt(curr.split(' ')[1])),
  }
  ), readFileSync('./input.txt', 'utf-8')
    .split('\n\n')[0]
    .split('\n')
    .reduce((acc, curr, index, arr) =>
      (index === arr.length - 1) ? acc :
        curr.split('').reduce((a, c, i) =>
          ((i - 1) % 4 === 0 && c !== ' ' && c.charCodeAt(0) > 57) ?
            ({
              ...a,
              [(i - 1) / 4 + 1]: [...(a[(i - 1) / 4 + 1] || []), c]
            })
            : a
          , acc)
      , {} as { [key: number]: string[] })))
  .reduce((acc, curr) => acc + (curr[0] || ''), '');



const solution3 = Object.values(readFileSync('./input.txt', 'utf-8').split('\n\n')[1].split('\n').reduce((acc, curr) => ({ ...acc, [parseInt(curr.split(' ')[5])]: [...acc[parseInt(curr.split(' ')[3])].slice(0, parseInt(curr.split(' ')[1])), ...acc[parseInt(curr.split(' ')[5])]], [parseInt(curr.split(' ')[3])]: acc[parseInt(curr.split(' ')[3])].slice(parseInt(curr.split(' ')[1])), }), readFileSync('./input.txt', 'utf-8').split('\n\n')[0].split('\n').reduce((acc, curr, index, arr) => (index === arr.length - 1) ? acc : curr.split('').reduce((a, c, i) => ((i - 1) % 4 === 0 && c !== ' ' && c.charCodeAt(0) > 57) ? ({ ...a, [(i - 1) / 4 + 1]: [...(a[(i - 1) / 4 + 1] || []), c] }) : a, acc), {} as { [key: number]: string[] }))).reduce((acc, curr) => acc + (curr[0] || ''), '');





console.log(solution1);
console.log(solution2);




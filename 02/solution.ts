import { readFileSync } from 'fs';


// 0 1 = rock paper -> diff = -1 -> right wins
// 1 0 = paper rock -> diff = 1 -> left wins
// 0 2 = rock scissors -> diff = -2 -> left wins
// 2 0 = scissors rock -> diff = 2 -> right wins

// 1 2 = paper scissors -> diff = -1 -> right wins
// 2 1 = scissors paper -> diff = 1 -> left wins

// 1 1 = paper paper -> diff = 0 -> draw
// 2 2 = scissors scissors -> diff = 0 -> draw
// 0 0 = rock rock -> diff = 0 -> draw







const getWinner = (them: number, me: number) => (them - me === 0 ? 3 : them - me === -1 || them - me === 2 ? 6 : 0) + me;

const getResultFromSrting = (input: string) => {
  // e.g. input: 'A X' = rock rock
  const them = input.charCodeAt(0) - 64;
  const me = input.charCodeAt(2) - 23 - 64;
  return (them - me === 0 ? 3 : them - me === -1 || them - me === 2 ? 6 : 0) + me;
}





// 1 1 -> 3
// 2 1 -> 1
// 3 1 -> 2

const getMyChoice = (left: number, right: number) => {
  return right === 1 ? [3, 1, 2][left - 1] : right === 2 ? left : [2, 3, 1][left - 1];
}

enum Result {
  Left = 0,
  Right = 6,
  Draw = 3
}


const solution = readFileSync('./input.txt', 'utf-8')
  .split('\n')
  .map(round => [round.charCodeAt(0) - 64, round.charCodeAt(2) - 23 - 64])
  .map(([left, right]) => (left - right === 0 ? Result.Draw : left - right === -1 || left - right === 2 ? Result.Right : Result.Left) + right)
  .reduce((acc, curr) => acc + curr, 0);

const solution2 = readFileSync('./input.txt', 'utf-8')
  .split('\n')
  .map(round => [round.charCodeAt(0) - 64, round.charCodeAt(2) - 23 - 64])
  .map(([left, right]) => [left, right === 1 ? [3, 1, 2][left - 1] : right === 2 ? left : [2, 3, 1][left - 1]])
  .map(([left, right]) => (left - right === 0 ? Result.Draw : left - right === -1 || left - right === 2 ? Result.Right : Result.Left) + right)
  .reduce((acc, curr) => acc + curr, 0);


console.log(solution2);

import { readFileSync } from 'fs';

const input = readFileSync('input.txt', 'utf8').split('\n').map(line => [line.split(' ')[0], parseInt(line.split(' ')[1])]) as any[];

const solution1 = input.reduce((acc, line) => {
  const direction = line[0];
  const amount = line[1];
  for (let i = 0; i < amount; i++) {
    if (direction === 'R') {
      acc.headLocation[0] += 1;
    }
    if (direction === 'L') {
      acc.headLocation[0] -= 1;
    }
    if (direction === 'U') {
      acc.headLocation[1] += 1;
    }
    if (direction === 'D') {
      acc.headLocation[1] -= 1;
    }

    const distanceX = Math.abs(acc.headLocation[0] - acc.tailLocation[0]);
    const distanceY = Math.abs(acc.headLocation[1] - acc.tailLocation[1]);

    // get the sum of the distances down to 1
    const distance = Math.sqrt(distanceX * distanceX + distanceY + distanceY);
    if (distance > 2) {
      if (distanceX < distanceY) {
        acc.tailLocation[0] = acc.headLocation[0];
        acc.tailLocation[1] += acc.headLocation[1] - acc.tailLocation[1] > 0 ? 1 : -1;
      } else {
        acc.tailLocation[1] = acc.headLocation[1];
        acc.tailLocation[0] += acc.headLocation[0] - acc.tailLocation[0] > 0 ? 1 : -1;
      }
    } else {
      if (distanceY > 1) {
        acc.tailLocation[1] += acc.headLocation[1] - acc.tailLocation[1] > 0 ? 1 : -1;
      }
      if (distanceX > 1) {
        acc.tailLocation[0] += (acc.headLocation[0] - acc.tailLocation[0] > 0) ? 1 : -1;
      }
    }
    acc.visited.add(acc.tailLocation.join(','));
  }
  return acc;

}, { tailLocation: [0, 0], headLocation: [0, 0], visited: new Set<string>(['0,0']) }).visited.size;


const solution2 = input.reduce((acc, line) => {
  const direction = line[0];
  const amount = line[1];

  for (let i = 0; i < amount; i++) {
    if (direction === 'R') {
      acc.rope[0][0] += 1;
    }
    if (direction === 'L') {
      acc.rope[0][0] -= 1;
    }
    if (direction === 'U') {
      acc.rope[0][1] += 1;
    }
    if (direction === 'D') {
      acc.rope[0][1] -= 1;
    }
    for (let i = 1; i < acc.rope.length; i++) {
      let headLocation = acc.rope[i - 1];
      let tailLocation = acc.rope[i];

      const distanceX = Math.abs(headLocation[0] - tailLocation[0]);
      const distanceY = Math.abs(headLocation[1] - tailLocation[1]);

      // get the sum of the distances down to 1
      const distance = Math.sqrt(distanceX * distanceX + distanceY + distanceY);
      if (distance > 2) {
        if (distanceX < distanceY) {
          tailLocation[0] = headLocation[0];
          tailLocation[1] += headLocation[1] - tailLocation[1] > 0 ? 1 : -1;
        } else {
          tailLocation[1] = headLocation[1];
          tailLocation[0] += headLocation[0] - tailLocation[0] > 0 ? 1 : -1;
        }
      } else {
        if (distanceY > 1) {
          tailLocation[1] += headLocation[1] - tailLocation[1] > 0 ? 1 : -1;
        }
        if (distanceX > 1) {
          tailLocation[0] += (headLocation[0] - tailLocation[0] > 0) ? 1 : -1;
        }
      }

    }

    acc.visited.add(acc.rope.at(-1).join(','));

  }

  return acc;

}, { rope: new Array(10).fill(0).map(_ => [0, 0]), visited: new Set<string>(['0,0']) }).visited.size;


console.log(solution1);
console.log(solution2);


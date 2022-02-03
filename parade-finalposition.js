// Use a function to calculate final position of the parade
const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];

const finalPosition = function (moves) {
  let floatPosition = [0, 0];
  for (let move of moves) {
    if (move === 'north') {
      floatPosition[1] += 1;
    } else if (move === 'east') {
      floatPosition[0] += 1;
    } else if (move === 'south') {
      floatPosition[1] -= 1;
    } else if (move === 'west') {
      floatPosition[0] -= 1;
    }
  }
  return floatPosition;
};

console.log(finalPosition(moves));

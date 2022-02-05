// Looping - Range

function range(start, end, step) {
  let stepRange = [];

  if (start === undefined || end === undefined || step === undefined || start > end || step <= 0) {
    return stepRange;
  } else {
    for (let i = start; i <= end; i = i + step) {
      stepRange.push(i);
    }

    if (stepRange === undefined) {
      stepRange = [];
    }

  }
  return stepRange;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));

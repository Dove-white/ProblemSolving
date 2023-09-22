let int = [-4, 3, -9, 0, 4, 1];

function plusMinus(arr) {
  let arrLength = arr.length;
  let zeros = 0;
  let positive = 0;
  let negative = 0;

  for (let value of arr) {
    if (value < 0) {
      negative += 1;
    }

    if (value > 0) {
      positive += 1;
    } else if (value == 0) {
      zeros += 1;
    }
  }

  positive /= arrLength;
  negative /= arrLength;
  zeros /= arrLength;

  console.log(positive.toFixed(6));
  console.log(negative.toFixed(6));
  console.log(zeros.toFixed(6));
}

// console.log(plusMinus(int));
plusMinus(int);

function plusMinus2(arr) {
  let positive = arr.filter((number) => number > 0).length / arr.length;
  let negative = arr.filter((number) => number < 0).length / arr.length;
  let zeros = arr.filter((number) => number == 0).length / arr.length;
  return (
    positive.toFixed(6) + "\n" + negative.toFixed(6) + "\n" + zeros.toFixed(6)
  );
}

console.log(plusMinus2(int));

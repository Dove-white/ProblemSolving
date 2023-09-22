function birthdayCakeCandles(candles) {
  let tallestCandles = candles[0];
  let allTallestCandles = [];

  for (let i = 1; i < candles.length; i++)
    if (candles[i] > tallestCandles) tallestCandles = candles[i];

  for (let j = 0; j < candles.length; j++)
    if (candles[j] === tallestCandles) allTallestCandles.push(candles[j]);

  console.log(allTallestCandles.length);
}

birthdayCakeCandles([18, 90, 90, 13, 90, 75, 90, 8, 90, 43]);

// function B

function birthdayCakeCandles2(candles) {
  let tallestCandles = candles[0];
  let allTallestCandles = [];

  for (let i = 0; i < candles.length; i++) {
    if (candles[i] > tallestCandles) {
      tallestCandles = candles[i];
    } else if (candles[i] === tallestCandles) {
      allTallestCandles.push(candles[i]);
    }
  }

  console.log(allTallestCandles.length);
}

birthdayCakeCandles2([18, 90, 90, 13, 90, 75, 90, 8, 90, 43]);

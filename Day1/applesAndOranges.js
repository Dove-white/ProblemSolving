function countApplesAndOranges(s, t, a, b, apples, oranges) {
  //for apples
  let applesLand = [];
  let applePoint = [];
  apples.forEach((applesThrown) => applesLand.push(applesThrown + a));
  for (let num of applesLand) {
    num >= s && num <= t ? applePoint.push(1) : applePoint.push(0);
  }

  //for oranges
  let orangeLand = [];
  let orangePoint = [];
  oranges.forEach((orangesThrown) => orangeLand.push(orangesThrown + b));
  for (let num of orangeLand) {
    num >= s && num <= t ? orangePoint.push(1) : orangePoint.push(0);
  }

  console.log(applePoint.reduce((value, currentValue) => value + currentValue));
  console.log(
    orangePoint.reduce((value, currentValue) => value + currentValue)
  );
}

let applesFull = [-2, 2, 1];
let orangesFull = [5, -6];

countApplesAndOranges(7, 11, 5, 15, applesFull, orangesFull);

function timeConversion(s) {
  let [time, part] = [s.substring(0, s.length - 2), s.substring(s.length - 2)];
  time = time.split(":").map(Number);
  if (part === "PM" && time[0] === 12) time[0] = 12;
  if (part === "PM" && time[0] !== 12) time[0] += 12;
  if (part === "AM" && time[0] === 12) time[0] = 0;
  console.log(
    time
      .map(String)
      .map((s) => s.padStart(2, "0"))
      .join(":")
  );
}

function timeConversion2(s) {
  let [time, part] = [s.substring(0, s.length - 2), s.substring(s.length - 2)];
  time = time.split(":").map(Number);
  if (part === "PM" && time[0] === 12) time[0] = 12;
  if (part === "PM" && time[0] !== 12) time[0] = (time[0] + 12) % 24;
  if (part === "AM" && time[0] === 12) time[0] = 0;
  return time
    .map(String)
    .map((s) => s.padStart(2, "0"))
    .join(":");
}

timeConversion("12:05:45AM");
console.log(timeConversion2("12:05:45AM"));

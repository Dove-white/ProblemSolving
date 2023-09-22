function gradingStudents(grades) {
  let toString = [];
  for (let num of grades) {
    if (num > 38) {
      toString.push(num);
    } else if (num <= 40) {
      let multipleOf = 40;
      if (multipleOf - num < 3) {
        toString.push((num = multipleOf));
      } else if (multipleOf - num > 3) {
        toString.push(num);
      }
    } else if (num <= 45) {
      let multipleOf = 45;
      if (multipleOf - num < 3) {
        toString.push((num = multipleOf));
      } else if (multipleOf - num > 3) {
        toString.push(num);
      }
    } else if (num <= 50) {
      let multipleOf = 50;
      if (multipleOf - num < 3) {
        toString.push((num = multipleOf));
      } else if (multipleOf - num > 3) {
        toString.push(num);
      }
    } else if (num <= 55) {
      let multipleOf = 55;
      if (multipleOf - num < 3) {
        toString.push((num = multipleOf));
      } else if (multipleOf - num > 3) {
        toString.push(num);
      }
    } else if (num <= 60) {
      let multipleOf = 60;
      if (multipleOf - num < 3) {
        toString.push((num = multipleOf));
      } else if (multipleOf - num > 3) {
        toString.push(num);
      }
    } else if (num <= 65) {
      let multipleOf = 65;
      if (multipleOf - num < 3) {
        toString.push((num = multipleOf));
      } else if (multipleOf - num > 3) {
        toString.push(num);
      }
    } else if (num <= 70) {
      let multipleOf = 70;
      if (multipleOf - num < 3) {
        toString.push((num = multipleOf));
      } else if (multipleOf - num > 3) {
        toString.push(num);
      }
    } else if (num <= 75) {
      let multipleOf = 75;
      if (multipleOf - num < 3) {
        toString.push((num = multipleOf));
      } else if (multipleOf - num > 3) {
        toString.push(num);
      }
    } else if (num <= 80) {
      let multipleOf = 80;
      if (multipleOf - num < 3) {
        toString.push((num = multipleOf));
      } else if (multipleOf - num > 3) {
        toString.push(num);
      }
    } else if (num <= 85) {
      let multipleOf = 85;
      if (multipleOf - num < 3) {
        toString.push((num = multipleOf));
      } else if (multipleOf - num > 3) {
        toString.push(num);
      }
    } else if (num <= 90) {
      let multipleOf = 90;
      if (multipleOf - num < 3) {
        toString.push((num = multipleOf));
      } else if (multipleOf - num > 3) {
        toString.push(num);
      }
    } else if (num <= 95) {
      let multipleOf = 95;
      if (multipleOf - num < 3) {
        toString.push((num = multipleOf));
      } else if (multipleOf - num > 3) {
        toString.push(num);
      }
    } else if (num <= 100) {
      let multipleOf = 100;
      if (multipleOf - num < 3) {
        toString.push((num = multipleOf));
      } else if (multipleOf - num > 3) {
        toString.push(num);
      }
    }
  }
  console.log(toString.map(String));
}

function gradingStudents2(grades) {
  // Write your code here
  let ans = [];
  for (let num of grades) {
    if (num <= 35) {
      num;
    } else if (num <= 40) {
      let multipleOf = 40;
      if (multipleOf - num < 3) {
        num = multipleOf;
      } else if (multipleOf - num > 3) {
        num;
      }
    } else if (num <= 45) {
      let multipleOf = 45;
      if (multipleOf - num < 3) {
        num = multipleOf;
      } else if (multipleOf - num > 3) {
        num;
      }
    } else if (num <= 50) {
      let multipleOf = 50;
      if (multipleOf - num < 3) {
        num = multipleOf;
      } else if (multipleOf - num > 3) {
        num;
      }
    } else if (num <= 55) {
      let multipleOf = 55;
      if (multipleOf - num < 3) {
        num = multipleOf;
      } else if (multipleOf - num > 3) {
        num;
      }
    } else if (num <= 60) {
      let multipleOf = 60;
      if (multipleOf - num < 3) {
        num = multipleOf;
      } else if (multipleOf - num > 3) {
        num;
      }
    } else if (num <= 65) {
      let multipleOf = 65;
      if (multipleOf - num < 3) {
        num = multipleOf;
      } else if (multipleOf - num > 3) {
        num;
      }
    } else if (num <= 70) {
      let multipleOf = 70;
      if (multipleOf - num < 3) {
        num = multipleOf;
      } else if (multipleOf - num > 3) {
        num;
      }
    } else if (num <= 75) {
      let multipleOf = 75;
      if (multipleOf - num < 3) {
        num = multipleOf;
      } else if (multipleOf - num > 3) {
        num;
      }
    } else if (num <= 80) {
      let multipleOf = 80;
      if (multipleOf - num < 3) {
        num = multipleOf;
      } else if (multipleOf - num > 3) {
        num;
      }
    } else if (num <= 85) {
      let multipleOf = 85;
      if (multipleOf - num < 3) {
        num = multipleOf;
      } else if (multipleOf - num > 3) {
        num;
      }
    } else if (num <= 90) {
      let multipleOf = 90;
      if (multipleOf - num < 3) {
        num = multipleOf;
      } else if (multipleOf - num > 3) {
        num;
      }
    } else if (num <= 95) {
      let multipleOf = 95;
      if (multipleOf - num < 3) {
        num = multipleOf;
      } else if (multipleOf - num > 3) {
        num;
      }
    } else if (num <= 100) {
      let multipleOf = 100;
      if (multipleOf - num < 3) {
        num = multipleOf;
      } else if (multipleOf - num > 3) {
        num;
      }
    }
    ans.push(num);
  }
  console.log(ans.map(String).join("\n"));
}

function gradingStudents3(grades) {
  let finalGrades = grades.map((grade) => {
    return grade >= 38 && grade % 5 > 2 ? grade - (grade % 5) + 5 : grade;
  });
  console.log(finalGrades);
}

function gradingStudents4(grades) {
  let multipleToRoundTo = 5;
  let numberToRoundAt = 2;
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 38 && grades[i] % multipleToRoundTo > numberToRoundAt) {
      grades[i] += multipleToRoundTo - (grades[i] % multipleToRoundTo);
    }
  }
  console.log(grades);
}

function gradingStudents5(grades) {
  let multipleToRoundTo = 5;
  let numberToRoundAt = 2;
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 38 && grades[i] % multipleToRoundTo > numberToRoundAt) {
      grades[i] =
        grades[i] + (multipleToRoundTo - (grades[i] % multipleToRoundTo));
    }
  }
  console.log(grades);
}
// 73 = 73%5 =3  ... 72 + (5 - )
// 73 + 2 = 75

gradingStudents([73, 67, 38, 33]);
gradingStudents2([73, 67, 38, 33]);
gradingStudents3([73, 73, 37, 33]);
gradingStudents4([73, 73, 37, 33]);

function miniMaxSum(arr) {
    let totalSum = 0;
    let maxNum = arr[0];
    let miniNum = arr[0];

    for(let value of arr) {
        totalSum += value;
    }

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > maxNum) {
            maxNum = arr[i];
        } else if(arr[i] < miniNum) {
            miniNum = arr[i];
        }
    }

    console.log(totalSum - maxNum, totalSum - miniNum);
}

miniMaxSum([1,2,3,4,5,5]);
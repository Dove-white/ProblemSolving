let numOfStaircase = 4;

function staircase(n) {
    let stairs = '';

    for(let num = 1; num <= n; num++) {
        for(let i = n - 1; i >= num; i--) {
            stairs += ' ';
        }
        for(let h = 1; h <= num; h++) {
            stairs += '#';
        }
        stairs += '\n';
    }

    console.log(stairs);
}

staircase(numOfStaircase);

// Solution B

function staircase2(n) {
    for(let i = 1; i <= n; i++) 
        console.log(' '.repeat(n-i) + '#'.repeat(i));
}

staircase2(numOfStaircase);
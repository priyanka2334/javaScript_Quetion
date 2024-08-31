process.stdin.setEncoding('utf8');

let input = '';

process.stdin.on('data', function(chunk) {
    input += chunk; // Aggregate chunks of input
});

//for taking one input
process.stdin.on('end', function() {
    const nums = input.trim().split('\n');
    let T = parseInt(nums[0]);
    
    // write your code here.
    console.log(T);
});

//For taking two input
process.stdin.setEncoding('utf8');

let input = '';

process.stdin.on('data', function(chunk) {
    input += chunk; // Aggregate chunks of input
});

process.stdin.on('end', function() {
    const nums = input.trim().split('\n');
    let T = parseInt(nums[0]);
    let n = parseInt(nums[1]);
    
    // write your code here.
    console.log(T,n);
});

//for taking 1 d array input

process.stdin.setEncoding('utf8');

let input = '';

process.stdin.on('data', function(chunk) {
    input += chunk; // Aggregate chunks of input
});

process.stdin.on('end', function() {
    const nums = input.trim().split('\n');
    let T = parseInt(nums[0]);
    let n = parseInt(nums[1]);
    

    let A = [];
    let index=2;
    for (let i = 0; i < n; i++) {
        A[i] = parseInt(nums[index]);
        index++;
    }
    // write your code here.
    console.log(A);
});

// for taking input of 2d array
process.stdin.setEncoding('utf8');

let input = '';

process.stdin.on('data', function(chunk) {
    input += chunk; // Aggregate chunks of input
});

process.stdin.on('end', function() {
    const nums = input.trim().split('\n');
    let T = parseInt(nums[0]);
    let n = parseInt(nums[1]);
    let n = parseInt(nums[1]);

    let A = [];
    let index=3;
    for (let i = 0; i < n; i++) {
        A[i]=[];
        for(let j=0;j<n;j++)
        {
        A[i][j] = parseInt(nums[index]);
        index++;
    }
    }
    // write your code here.
    console.log(A);
});

/*
    fib(8)

    return: [0, 1, 1, 2, 3, 5, 8, 13]
*/

const p = (msg) => { console.log(msg); }

function fib(n) {
    // Starting nums
    let a = 0, b = 1, c;

    // Create seq
    const seq = [a, b];

    // Loop until sequence length = parameter given
    do {
        c = b + a;
        seq.push(c);
        a = b;
        b = c;
    } while (seq.length !== n)
    
    return seq;
}

// TESTS
p(fib(8));  // [0, 1, 1, 2, 3, 5, 8, 13]
p(fib(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
p(fib(3));  // [0, 1, 1]

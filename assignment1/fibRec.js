function fibRec(n, start = [0, 1]) {
    const seq = start;
    console.log(seq);

    // When array length = n RETURN
    if (seq.length === n) {
      return seq;
    }

    let a = seq[seq.length - 1];
    let b = seq[seq.length - 2];

    seq.push(b + a);
    return fibRec(n, seq);

}

let x = fibRec(5);
console.log(x);
function basicArith() {
    let a = 20;
    let b = 4;
    console.log('Add:', a + b);
    console.log('Sub:', a - b);
    console.log('Mul:', a * b);
    console.log('Div:', a / b);
    console.log('Mod:', a % b);
}
//basicArith();


function complexMaths() {
    let a = 20;

    console.log('Power of a:', Math.pow(a, 2));
    console.log('Square root of a:', Math.sqrt(a));
    console.log('Cube root of a:', Math.cbrt(a))
    console.log('nth root of a:', Math.pow(a, 1 / 3))

    console.log('Max of a:', Math.max(a, 2));
    console.log('Min of a:', Math.min(a, 2));

    console.log('Round of a:', Math.round(a / 6));
    console.log('Floor of a:', Math.floor(a / 6));
    console.log('Ceil of a:', Math.ceil(a / 6));
    console.log('Absolute of a:', Math.abs(a - 25));
}
//complexMaths();


function shortHandOps() {
    let x = 4;
    console.log('x++:', x++);   //since post increment x becomes 5, but it will print only 4
    console.log('++x:', ++x);
    console.log('x--:', x--);
    console.log('--x:', --x);
    console.log('x += 2:', x += 2);
    console.log('x -= 2:', x -= 2);
    console.log('x *= 2:', x *= 2);
    console.log('x /= 2:', x /= 2);
    console.log('x %= 2:', x %= 2);
}
//shortHandOps();


function f(n) {
    if (n < 2) return 1;
    return f(n - 1) + f(n - 2);
}
const n = parseFloat(prompt('Enter your digital'));
const message = f(n);
alert(message);

function fib(d) {
    let f1 = 0;
    let f2 = 1
    let cf = 1;
    for (let i = 1; i <= d; i++) {
        cf = f1 + f2;
        f1 = f2;
        f2 = cf;
        return cf;
    }
}
const d = parseFloat(prompt('Enter your digital'));
const user = f(d);
alert(user);

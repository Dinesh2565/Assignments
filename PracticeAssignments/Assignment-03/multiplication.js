function Table(base, n) {
    let p;
    for (let i = 1; i <= n; i++) {
        console.log(base + "  *  " + i + "  =  " + base * i)
        if (base * i == i * i) {
            p = base * i;
        }
    }
    console.log("")
    console.log(p + " This is a perfect square")
}

// Table(5, 10)


function fibo(n) {
    let a = 0;
    let b = 1;
    let sum = a + b;

    for (let i = 0; i < n; i++) {
        console.log(sum)
        a = b;
        b = sum;
        sum = a + b;
    }
}
// fibo(5)


function prime(n) {
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) console.log(i);
    }
}

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// prime(100)

function factorial(n) {
    let i = 1;
    let res = 1;
    while (i <= n) {
        res *= i;
        i++;
    }
    return res;
}

console.log(factorial(5));
function sumOfDigits(n) {
    let sum = 0;
    let i = 0
    do {
        sum += i
        i++;
    } while (i <= n)
    console.log(sum)
}

sumOfDigits(100)
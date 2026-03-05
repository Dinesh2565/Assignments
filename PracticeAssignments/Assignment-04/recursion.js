function factorial(n) {
    if (n == 1) {
        return 1;
    }
    return n * factorial(n - 1)
}
// console.log(factorial(5))

function fibo(n) {

    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibo(n - 1) + fibo(n - 2)
}

// console.log(fibo(7))

const arr = [1, 2, 4, [25, 12, 35], 6, 10]
let i = 0;
function sum(arr, i) {
    if (i == arr.length - 1) {
        return arr[i];
    }
    return arr[i] + sum(arr, ++i)
}
console.log(sum(arr, 0))

function max(arr) {

}

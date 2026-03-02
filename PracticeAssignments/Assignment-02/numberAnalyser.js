function numberAnalyzer(a) {
    if (a > 0) {
        console.log("The Number is Positive")
    } else if (a == 0) {
        console.log("The Number is zero")
    } else {
        console.log("The Number is negative")
    }


    if (a % 2 === 0) {
        console.log("The number is even")
    } else {
        console.log("The number is odd")
    }

    let flag = false;
    for (let i = 2; i < a / 2; i++) {
        if (a % i == 0) {
            flag = true;
            break;
        }
    }

    flag ? console.log("This is not a Prime number") : console.log("This is a Prime number")


    let isPerfectSquare = false;
    for (let i = 2; i < a / 2; i++) {
        if (i ** i == a) {
            isPerfectSquare = true;
        }
    }
    isPerfectSquare ? console.log("This number is a Perfect square") : console.log("This number is not a Perfect square")

}
numberAnalyzer(4)
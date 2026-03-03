function firstDivisible(n) {
    for (let i = 1; i < n; i++) {
        if (i % 7 == 0 && i % 11 == 0) {
            console.log(i)
            break
        }
    }
}

// firstDivisible(100)

function oddNumbers(n) {
    for (let i = 0; i < n; i++) {
        if (i % 2 !== 0) {
            console.log(i)
            continue;
        }
    }
}
// oddNumbers(100)

function fizzBuzz(n) {
    for (let i = 1; i < n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log(i + "    FizzBuzz")
        }
        else if (i % 3 == 0) {
            console.log(i + "   Fizz")
        } else if (i % 5 == 0) {
            console.log(i + "   Buzz")
        }

    }
}


// fizzBuzz(30)


function randomNumber() {
    const number = Math.random() * 100;
    return number.toFixed(0)
}

const n = randomNumber();
let count = 0;

function numberGuessing() {

    while (count < 7) {
        let a = prompt("Please Enter a number")
        if (a === n) {
            alert("youve guessed the number correctly")
            break;
        }
        else if (a > n) {
            alert("Number is higher")
        }
        else {
            alert("nummber is lower")
        }
        count++;
    }
    alert("Youve completed your attempts")

}


numberGuessing()
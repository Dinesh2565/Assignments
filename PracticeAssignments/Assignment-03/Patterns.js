function patternRightTriangle(n) {
    for (let i = 1; i < n; i++) {
        let result = "";
        for (let j = 0; j < i; j++) {

            result += "* ";
        }
        console.log(result)
    }
}

// patternRightTriangle(5)

function reverseRightTriangle(n) {
    for (let i = 0; i < n; i++) {
        let result = "";
        for (let j = 0; j < n - i; j++) {

            result += "* ";
        }
        console.log(result)
    }
}

// reverseRightTriangle(5)


function pyramid(n) {
    for (let i = 0; i < n; i++) {
        let result = "";
        for (let j = 0; j < n - i - 1; j++) {
            result += " ";
        }
        for (let j = 0; j < 2 * i + 1; j++) {
            result += "*";
        }

        console.log(result)
    }
}

// pyramid(5)


function diamond(n) {

    for (let i = 0; i < 2 * n; i++) {
        let result = "";
        let spaces, stars;

        if (i < n) {
            spaces = n - i - 1;
            stars = 2 * i + 1;
        } else {
            spaces = i - n + 1;
            stars = 2 * (2 * n - i - 2) + 1;
        }
        for (let j = 0; j < spaces; j++) {
            result += " ";
        }
        for (let j = 0; j < stars; j++) {
            result += "*";
        }

        console.log(result);
    }
}
diamond(5);
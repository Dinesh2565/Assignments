function gradeCalculator(mark) {
    switch (m) {
        case m >= 90 && m <= 100:
            console.log("Grade is A");
            break;
        case m >= 80 && m <= 89:
            console.log("Grade is B");
            break;

        case m >= 70 && m <= 79:
            console.log("Grade is C");
            break;
        case m >= 60 && m <= 69:
            console.log("Grade is D");
            break;
        case m >= 0 && m <= 59:
            console.log("Grade is E");
            break;
    }
}

gradeCalculator(67);
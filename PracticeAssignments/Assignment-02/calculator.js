
function calculator(a, b) {
    const addition = a + b;
    const subtraction = a - b;
    if (a === 0) {
        console.log("please enter a valid number ")
        return
    }
    const division = a / b;
    const multiplication = a * b;
    const remainder = a % b;
    const power = a ** b;

    console.log(`Addition result =  ${addition}`)
    console.log(`subtraction result =  ${subtraction}`)
    console.log(`division result =  ${division}`)
    console.log(`multiplication result =  ${multiplication}`)
    console.log(`remainder result =  ${remainder}`)
    console.log(`power result =  ${power}`)

}
calculator(2, 4);

function logicalOps(a, b) {
    if (a == b) {
        console.log("values are same,Loose equals example, checking the value")
    }
    else if (a === b) {
        console.log("Not the same,strict equals example,checking the type of the data")
    }
    else if (a != b) {
        console.log("loose not equlas example");
    } else if (a !== b) {
        console.log("strict not equals example")
    }


    if (a > b) {
        console.log("a is greater than b")
    }
    else {
        console.log("b is greater than a")
    }

    if (a > b) {
        console.log("a grater than or equal to b")
    } else {
        console.log("b is greater than or equal to a")
    }

}


logicalOps("4", 4)
shortCircuit()
function shortCircuit() {
    console.log(false && console.log("Hello"));
    let isLoggedIn = true;
    isLoggedIn && console.log("Welcome");
    let name = "";
    let displayName = name || "Guest";
    console.log(displayName);

    console.log("Nullish coallescing")
    let value = null;
    console.log(value ?? "Default");

    console.log(".............................")

    console.log("falsy values")
    console.log(Boolean(false));
    console.log(Boolean(0));
    console.log(Boolean(""));
    console.log(Boolean(null));
    console.log(Boolean(undefined));
    console.log(Boolean(NaN));

    console.log(".......................................")

    console.log("truthy values")
    console.log(Boolean(true));
    console.log(Boolean(1));
    console.log(Boolean("hello"));
    console.log(Boolean([]));
    console.log(Boolean({}));
    console.log(Boolean("0"));
}

const arr = [1, 2, 3, 4, 5, 6]

function myMap(arr, callback) {
    const res = callback(arr)
    console.log(res)
}
myMap(arr, callback)

function callback(arr) {
    const newArray = arr;
    for (let i = 0; i < arr.length; i++) {
        newArray.push(newArray.shift() * 2);
    }
    return newArray
}





function myFilter(arr, callback) {
    const res = callback(arr)
    console.log(res)
}
myFilter(arr, callback)

function callback(arr) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            newArray.push(arr[i])
        }
    }
    return newArray
}


function myReduce(arr, callback, initialValue) {
    const res = callback(arr, [], [], initialValue)
    console.log(res)
}
myReduce(arr, callback, {})

function callback(arr, prev, curr, initialValue) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        curr[arr[i]] = (curr[arr[i]] || 0) + 1
    }
    newArray.push(prev)

    return newArray
}

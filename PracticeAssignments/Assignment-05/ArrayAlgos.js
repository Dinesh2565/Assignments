const arr = [1, 2, 4, 3, 2, 6, 5, 1, 3]
const arr1 = [1, 2, 4, 6, 3, 9, 6]
function removeDuplicates(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (!res.includes(arr[i])) {
            res.push(arr[i])
        }
    }
    return res

}
// console.log(removeDuplicates(arr))

function intersection(arr, arr1) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr1.includes(arr[i]) && !res.includes(arr[i])) {
            res.push(arr[i])
        }
    }
    return res
}

// console.log(intersection(arr, arr1))

function union(arr, arr1) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr1.includes(arr[i]) && !res.includes(arr[i])) {
            res.push(arr[i])
        }
    }
    return res
}
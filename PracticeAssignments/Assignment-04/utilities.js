function capitalize(str) {
    let result = ""
    let newStr = str.trim()
    for (let i = 0; i < newStr.length; i++) {
        if (str[i + 1] != str.length && (str[i - 1] == " " || str[i - 1] == "." || str[i - 1] == "!") && str[i] != " ") {
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
    }
    return result;

}
let str = " gewnir rgner igriu.rerqqw"
// console.log(capitalize(str))


function truncate(str, maxLength) {
    let result = ""
    if (maxLength < str.length) {
        result = str.slice(0, maxLength);
    } else {
        result = str.slice(0, maxLength - 3) + "...."
    }
    return result
}
// const str="hellpw ga  arg";

// console.log(truncate(str, 100))



function deepClone(data) {
    const newData = JSON.parse(JSON.stringify(data))
    return newData
}
const Person = {
    name: "Alice",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York",
        zip: "10001",
        country: {
            name: "USA",
            code: "US"
        }
    },
    hobbies: ["reading", "coding"]
};
// const newData = deepClone(Person)

// newData.address.city = "bahamas"
// newData.address.country.name = "India"

// console.log(Person)
// console.log(newData)

function flatArray(arr, depth = 1) {
    const res = [];
    for (let item of arr) {
        if (Array.isArray(item) && depth > 0) {
            const flat = flatArray(item, depth - 1)
            res.push(...flat)
        } else {
            res.push(item)
        }
    }

    return res;

}

const arr = [1, [2, [3, [4, [5]]]]];

console.log(flatArray(arr, Infinity))


const users = [
    { id: 1, name: "Alice", age: 28, department: "Engineering", role: "Frontend", salary: 95000, status: "active" },
    { id: 2, name: "Bob", age: 34, department: "Marketing", role: "SEO", salary: 72000, status: "active" },
    { id: 3, name: "Charlie", age: 25, department: "Engineering", role: "Backend", salary: 98000, status: "inactive" },
    { id: 4, name: "Diana", age: 30, department: "HR", role: "Recruiter", salary: 65000, status: "active" },
    { id: 5, name: "Eve", age: 22, department: "Engineering", role: "Frontend", salary: 88000, status: "active" },
    { id: 6, name: "Frank", age: 40, department: "Marketing", role: "Content", salary: 70000, status: "inactive" },
    { id: 7, name: "Grace", age: 35, department: "HR", role: "Manager", salary: 85000, status: "active" },
    { id: 8, name: "Henry", age: 29, department: "Engineering", role: "DevOps", salary: 105000, status: "active" },
    { id: 9, name: "Ivy", age: 26, department: "Marketing", role: "Designer", salary: 78000, status: "active" },
    { id: 10, name: "Jack", age: 38, department: "HR", role: "Recruiter", salary: 67000, status: "inactive" },
];

const groupBy = users.reduce((acc, curr) => {
    (acc[curr.department] ??= []).push(curr);
    return acc;
}, {});
console.log(groupBy)
const employees = [
    { id: 1, name: "Alice", department: "Engineering", salary: 75000, yearsExp: 5 },
    { id: 2, name: "Bob", department: "Marketing", salary: 55000, yearsExp: 3 },
    { id: 3, name: "Charlie", department: "Engineering", salary: 85000, yearsExp: 7 },
    { id: 4, name: "Diana", department: "HR", salary: 50000, yearsExp: 2 },
    { id: 5, name: "Eve", department: "Engineering", salary: 95000, yearsExp: 10 },
    { id: 6, name: "Frank", department: "Marketing", salary: 60000, yearsExp: 4 },
    { id: 7, name: "Grace", department: "HR", salary: 55000, yearsExp: 3 }
];

const getNames = employees.map((e) => {
    return e.name
})

const salaryFilter = employees.filter((e) => e.salary > 60000)

// console.log(salaryFilter)
const totalSalary = employees.reduce((acc, curr) => acc + curr.salary, 0)
// console.log(totalSalary)

const highestPaid = employees.reduce((acc, curr) => {
    if (curr.salary > acc) {
        acc = curr.salary
    }
    return acc;
}, 0)
// console.log(highestPaid)

const groupBy = employees.reduce((acc, curr) => {
    (acc[curr.department] ??= []).push(curr);
    return acc
}, {})

// console.log(groupBy)


const averageSalary = employees.reduce((acc, curr) => {
    if (acc[curr.department]) {
        acc[curr.department] = {};
    }
    acc[curr.department] = curr.department;
    acc[curr.department] += curr.salary

    return acc
}, {})
console.log(averageSalary

)

const sortEmployess = employees.sort((a, b) => b.yearsExp - a.yearsExp)
// console.log(sortEmployess)
const salaryReport = employees.map((e) => [e.name, e.department, e.salary])
// console.log(salaryReport)
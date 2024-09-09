const employees = [
    {
        id: 1,
        name: 'shahar',
        gender: 'male'
    },
    {
        id: 2,
        name: 'shlomo',
        gender: 'male'
    },
]

let html = '';
for(let i=0; i < employees.length; i++) {
    html += `
        <tr>
            <td>${employees[i].id}</td>
            <td>${employees[i].name}</td>
            <td>${employees[i].gender}</td>
        </tr>
    `
}

const reducedHTML = employees.reduce((cumm, curr) => {
    return `${cumm}
        <tr>
            <td>${curr.id}</td>
            <td>${curr.name}</td>
            <td>${curr.gender}</td>
        </tr>
    `
}, '')

console.log(reducedHTML)


const numbers = [1,2,3,4,5]

const sum = numbers.reduce((cumm, curr) => {
    return cumm + curr
}, 0)

const arr = [];

arr.
    map().
    map().
    filter().
    reduce()

console.log(sum)


// console.log(html)
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

console.log(html)
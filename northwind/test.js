// const myFunc = async () => {
//     return 1
// }

// console.log(myFunc())

const { v4 } = require('uuid');

for(let i=0; i < 10; i++) {
    console.log(v4())
}

/*

create table users {
    id UUID not null default UUID()
}
*/
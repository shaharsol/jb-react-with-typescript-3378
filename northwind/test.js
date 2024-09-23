// // const myFunc = async () => {
// //     return 1
// // }

// // console.log(myFunc())

// const { v4 } = require('uuid');

// for(let i=0; i < 10; i++) {
//     console.log(v4())
// }

// /*

// create table users {
//     id UUID not null default UUID()
// }
// */

// function useState(initialValue) {
//     const variable = initialValue;

//     const setVariable = (newValue) => {
//         variable = newValue;
//     }
    
//     return [variable, setVariable]
// }

// const [ myVar, setMyVar ] = useState(2)

// const someBool = true;

// if (someBool) {
//     console.log('yes')
// } else {
//     console.log('no')
// }

// if (!someBool) return console.log('no')
// console.log('yes')

// switch(someVal) {
//     case 'bvbb':
//         break;
//     case 'ddd':
//         break;
// }

// JS way to prevent a long if-else if-else if structure
switch (true) {
    case 1 > 0:
        break;
    case 2 < 3:
        break;
    default:
        break;
}
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

function useState(initialValue) {
    const variable = initialValue;

    const setVariable = (newValue) => {
        variable = newValue;
    }
    
    return [variable, setVariable]
}

const [ myVar, setMyVar ] = useState(2)


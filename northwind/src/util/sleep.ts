// import fs from 'fs'
export default function sleep(ms: number): Promise<void> {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}


// promisificatin - take any callback oriented action, and use it as a promise instead

// function example(): Promise<Buffer> {
//     return new Promise((resolve, reject) => {
//         fs.readFile('/usr/lib/file.txt', (err, data) => {
//             if (err) {
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }

// (async() => {
//     const fileContents = await example()
//     await sleep(1000)
// })()

// example()
//     .then(data => console.log(data))
//     .catch(e => console.error(e))




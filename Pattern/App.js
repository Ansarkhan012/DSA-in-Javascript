// process.stdout.write("Ansar ")
// process.stdout.write("khan")


let prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number :"));



// simple pattern
// for(let j = 1; j <= n ; j++){
//     for(let i = 1; i <= n ; i++){
//     process.stdout.write("* ")
// }
// console.log();
// }



// for(let i=1; i<=n;i++){
//     for(let j=1;j<=i;j++){
//         process.stdout.write("* ")
//     }
//     console.log()
// }


for(let i=1; i<=n;i++){
    for(let j=1;j<=i;j++){
        process.stdout.write(j +" ")
    }
    console.log()
}
// For Loop
// for(Start; end; change){
// code
// }

// let i = 1;

// for (; i <= 10; i++) {
//   console.log(i);
// }

// console.log(i + " Failed");

//  Sum of n Natural number

// let pr = prompt("Enter number for sum :");

// if (pr === null) {
//   console.log("Cancale");
// } else {
//   let n = Number(pr);

//   if (isNaN(n)) {
//     console.log("Invalid number");
//   } else {
//     if (n > 0) {
//       let sum = 0;
//       for (let i = 1; i <= n; i++) {
//         sum = sum + i;
//         console.log(i);
//       }
//       console.log(sum);
//     } else {
//       console.log("Number Should be +ive and greater than 0");
//     }
//   }
// }


// N of Factorial Number

// let pr = prompt("Enter number for sum :");

// if (pr === null) {
//   console.log("Cancalle");
// } else {
//   let n = Number(pr);

//   if (isNaN(n)) {
//     console.log("Invalid number");
//   } else {
//     if (n > 0) {
//       let fact = 1;
//       for (let i = 1; i <= n; i++) {
//         fact = fact * i;
//         console.log(i);
//       }
//       console.log(fact);
//     } else {
//       console.log("Number Should be +ive and greater than 0");
//     }
//   }
// }



// Factors of Number

// let pr = prompt("Enter number for sum :");

// if (pr === null) {
//   console.log("Cancalle");
// } else {
//   let n = Number(pr);

//   if (isNaN(n)) {
//     console.log("Invalid number");
//   } else {
//     if (n > 0) {
      
//       for (let i = 1; i <= Math.floor(n/2); i++) {
//         if(n%i === 0){
            
//             console.log(i);
//         }
//       }
//       console.log(n);
//     } else {
//       console.log("Number Should be +ive and greater than 0");
//     }
//   }
// }



// Prime Numbers

// let pr = prompt("Enter number for sum :");

// if (pr === null) {
//   console.log("Cancalle");
// } else {
//   let n = Number(pr);

//   if (isNaN(n)) {
//     console.log("Invalid number");
//   } else {
//     if (n > 0) {
//       console.log(isPrime(n))
//     } else {
//       console.log("Number Should be +ive and greater than 0");
//     }
//   }
// }


// function isPrime(n) {
//   if(n <= 1) return false;
//   if(n == 2) return true;
//   if(n%2== 0 ) return false;
//   for(let i = 3; i <= Math.floor(Math.sqrt(n)); i+=2){
//     if(n%i == 0 ) return false;
//   }

//   return true;
// }





// While Loop(tab tak chaly ga jab tak condition true nhi hoti yani is mai humy nhi pta hota hai k kitna chaly ga  )


// start
// While(condition){
// code 
// change
// }



//  Number sum 

// let pr = prompt("Enter number for sum :");

// if (pr === null) {
//   console.log("Cancalle");
// } else {
//   let n = Number(pr);

//   if (isNaN(n)) {
//     console.log("Invalid number");
//   } else {
//     if (n > 0) {
//       let sum = 0;
//       while(n > 0 ){
//         let rem = n%10;
//         sum = sum + rem;
//         n = Math.floor(n/10);

//       }
//       console.log((sum));
//     } else {
//       console.log("Number Should be +ive and greater than 0");
//     }
//   }
// }






// Reverse Number


// let pr = prompt("Enter number for sum :");

// if (pr === null) {
//   console.log("Cancalle");
// } else {
//   let n = Number(pr);

//   if (isNaN(n)) {
//     console.log("Invalid number");
//   } else {
//     if (n > 0) {
//       let rev = 0;
//       while(n > 0 ){
//         let rem = n%10;
//         rev = rev*10 + rem;
//         n = Math.floor(n/10);

//       }
//       console.log((rev));
//     } else {
//       console.log("Number Should be +ive and greater than 0");
//     }
//   }
// }






// Strong number

// let pr = prompt("Enter number for sum :");

// if (pr === null) {
//   console.log("Cancalle");
// } else {
//   let n = Number(pr);

//   if (isNaN(n)) {
//     console.log("Invalid number");
//   } else {
//     if (n > 0) {
//       let sum = 0;
//       let nCopy = n;
//       while(n > 0 ){
//         let rem = n%10;
//         let fact = 1;
//         for(let i = 1; i<=rem; i++){
//           fact = fact * i;
//         }

//         sum = sum + fact;
//        n = Math.floor(n/10);
//       }

//       if(nCopy === sum){

//         console.log("Srong number :" + sum);
        
//       }else{
//         console.log("Not Srong number :" + sum);

//       }
//     } else {
//       console.log("Number Should be +ive and greater than 0");
//     }
//   }
// }




// DO while (pehly ak bar chaly ga pir us k bad condition check kary ga)







// Guess the number

let random = Math.floor(Math.random()*100 + 1);
// console.log(random);

let guess = 0;
while(guess !== random ){
    guess = Number(prompt("guess number b/t 1 to 100"));
    if(isNaN(guess) || guess < 1 || guess > 100){
        console.log("Number b/t 1 to 100 , try again")
        continue;
    }

    if(guess > random){
        console.log("too high , try again")
    }else if(guess < random){
        console.log("too low , try again")
    }else{
        console.log("congrates yor guess number is correct " , guess)
    }
}


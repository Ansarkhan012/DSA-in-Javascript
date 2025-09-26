// let age = Number(prompt("Enter your age :"));
// console.log(age)

// if(isNaN(age)){
//     console.log("Invalid Input")
// }else if(age >= 18){
//     console.log("You can vote")
// }else{
//     console.log("You can't vote")
// }

// Discount

// let amount = Number(prompt("Enter your final amount :"));

// let dis = 0;

// if(amount > 0 && amount <= 5000){
//     dis = 0
// }else if(amount > 5000 && amount <=7000){
//     dis = 5
// }else if(amount > 7000 && amount <=9000){
//     dis = 10
// }else if(amount > 9000){
//     dis = 20
// }

// console.log(amount - Math.floor((dis*amount)/100));

// electricity Bill

// let unit = Number(prompt("Enter your electricity bill"))
// let amount = 0;
// console.log(unit)

// if(unit > 400 ){
//     amount = (unit - 400) * 13;
//     unit = 400;
// }
// if(unit > 200 && unit <= 400){
//     amount += (unit - 200) * 8;
//     unit = 200;
// }
// if(unit > 100 && unit <= 200){
//     amount += (unit -100) * 6;
//     unit = 100;
// }

// amount += unit  * 4;

// console.log(amount)

// PKR DOMINATOR

// let cash = Number(prompt("Enter your cash : " ));

// if(cash >= 5000){
//     console.log("5000 Notes : " + Math.floor(cash/5000))
//     cash = cash % 5000;
// }
// if(cash >= 1000){
//     console.log("1000 Notes : " + Math.floor(cash/1000))
//     cash = cash % 1000;
// }
// if(cash >= 500){
//     console.log("500 Notes : " + Math.floor(cash/500))
//     cash = cash % 500;
// }
// if(cash >= 100){
//     console.log("100 Notes : " + Math.floor(cash/100))
//     cash = cash % 100;
// }
// if(cash >= 50){
//     console.log("50 Notes : " + Math.floor(cash/50))
//     cash = cash % 50;
// }
// if(cash >= 20){
//     console.log("20 Notes : " + Math.floor(cash/20))
//     cash = cash % 20;
// }
// if(cash >= 10){
//     console.log("10 Notes : " + Math.floor(cash/10))
//     cash = cash % 10;
// }
// if(cash >= 5){
//     console.log("5 Coins : " + Math.floor(cash/5))
//     cash = cash % 5;
// }
// if(cash >= 2){
//     console.log("2 Coins : " + Math.floor(cash/2))
//     cash = cash % 2;
// }
// if(cash == 1){
//     console.log("1 Coins : " + Math.floor(cash/1))
//     cash = cash % 1;
// }

// Ternary Operator

// console.log(11 > 12 ? "Yes" : "No")

// Nested Ternary Opertaor

// let num = -78
// console.log(num > 0 ? "positive" : num < 0 ? "negative" : "Zero")

// Switch

// Switch mai hum constant value dy sakty hai 


// let day = 2;
// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;

//   case 2:
//     console.log("Tuesday");
//     break;

//   default:
//     console.log("Invalid");
//     break;
// }



// switch (true) {
//   case 2 > 4:
//     console.log("hello")
//     break;

//     case 2 < 4:
//     console.log("hey")
//     break;
//   default:
//     break;
// }
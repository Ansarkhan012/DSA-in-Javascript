// let arr = [1,2 ,3,4,5 , "Ansar"]
// console.log(arr)
// console.log(arr[5])

// let arr = []
// arr[0] = 10
// arr[1] = 20
// arr[2] = 30
// arr[3] = 40

// arr[7] = 90

// console.log(arr)

// Array hamesha dynamic hogi

// let arr = new Array(3);
// arr[0] = 10
// arr[1] = 20
// arr[2] = 30
// arr[3] = 40
// arr[10] = 140

// console.log(arr)


// let arr = new Array(2)

// arr.push(45)
// console.log(arr)



// let arr = new Array(4);

// for(let i=0;i<arr.length; i++){
//     arr[i] = Number(prompt("enter a number : "))
// }
// console.log(arr);



// Number of sum

// let aar =[12,33,56,78]
// let sum =0;
// for(let i=0; i<aar.length; i++){
//     sum = sum + aar[i];
// }

// console.log(sum);



// Maximum Number 
// let arr = [12,45,67,23]
// let max = arr[0];

// for(let i=1;i<arr.length; i++){
//     if(max < arr[i]){
//         max = arr[i]
//     }
// }

// console.log(max);

// Minimum Number
// let arr = [12,45,5,67,23]
// let min = arr[0];

// for(let i=1;i<arr.length; i++){
//     if(min > arr[i]){
//         min = arr[i]
//     }
// }

// console.log(min);



// 2nd Maximum number
// let arr = [12,45,5,67,88,23,56,89,55]
// let max = Math.max(arr[0],arr[1]);
// let sMax = Math.min(arr[0],arr[1]);

// for(let i=2;i<arr.length; i++){
//     if(arr[i]> max){
//         sMax = max
//         max = arr[i]
//     }else if(arr[i] > sMax && max != arr[i]){
//         sMax = arr[i]
//     }
// }

// console.log(sMax , max)



// Reverse Array With space
// let arr = [10,20,30,40,50];
// let temp = new Array(arr.length);

// let j =0
// for(let i=arr.length - 1; i>=0; i--){
//     temp[j]= arr[i]
//     j++
// }

// console.log(temp)


// Reverse Array 
// let arr = [10,20,30,40,50];
// let i = 0;
// let j = arr.length-1;
// while(i<j){
//     let tem = arr[i];
//     arr[i] = arr[j]
//     arr[j] = tem;
//     i++
//     j--

// }
// console.log(arr)



// Swaping array index

// let arr = [1,0,1,0,1,0,1,]
// let i=0
// let j=0
 
// while(i<arr.length){
//     if(arr[i] == 0){
//         let temp = arr[i]
//         arr[i] = arr[j]
//         arr[j] = temp
//         j++
//     }
//     i++
// }

// console.log(arr)




//left Rotation by 1 element

// let arr =[1,2,3,4,5]
// let copy = arr[0]

// for(let i=0; i<arr.length-1; i++){
//     arr[i] = arr[i+1];
// }
// arr[arr.length-1] = copy
// console.log(arr)


// Right Rotation by 1 element


// let arr =[1,2,3,4,5]
// let copy = arr[arr.length-1]

// for(let i=arr.length-1; i>0; i--){
//     arr[i] = arr[i-1]
// }
// arr[0] = copy
// console.log(arr)
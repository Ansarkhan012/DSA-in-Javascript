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



// for(let i=1; i<=4; i++){
//     console.log(i + " Execution")
//     for(let j=1; j<=3; j++){
//         console.log("Hello")
//     }
// }



// Left rotation by K element  

// let arr = [1, 2, 3, 4, 5];
// let k = Number(prompt("Enter number any :"));
// k= k % arr.length;
// let count = 0;
// for (let j = 0; j < k; j++) {
//   count++;
//     let copy1 = arr[0];
//   for (let i = 0; i <= arr.length - 1; i++) {
//     arr[i] = arr[i + 1];
//   }
//   arr[arr.length - 1] = copy1;
// }
// console.log(arr);
// console.log(count);


// Left rotation by K element  

// let arr = [1, 2, 3, 4, 5];
// let k = Number(prompt("Enter number any :"));
// k= k % arr.length;
// let count = 0;
// for (let j = 0; j < k; j++) {
//   count++;
//     let copy1 = arr[arr.length-1];
//   for (let i = arr.length-1; i > 0 ; i--) {
//     arr[i] = arr[i - 1];
//   }
//   arr[0] = copy1;
// }
// console.log(arr);
// console.log(count);



// let arr = [1, 2, 3, 4, 5];
// let temp = new Array(arr.length);
// let k = Number(prompt("Enter number :"))
//  k = k%arr.length;
// for(let i=0; i< arr.length; i++){
//   temp[i] =arr[(i+k)%arr.length]
// }

// console.log(temp)

// Remove duplicate from a sort array
// let arr=[0,0,1,1,1,2,2,3,3,4,4,4,5,5,5,]
// let j=1;
// for(let i=0;i<arr.length;i++){
//   if(arr[i] != arr[i-1]){
//     arr[j] = arr[i]
//     j++
//   }
// }

// console.log(j)
// console.log(arr.slice(1,j))


// merge Two sorted array


// let arr1=[1,5,6]
// let arr2=[2,3,4,8]
// let merge = new Array(arr1.length + arr2.length);

// let i=0
// let j=0
// let k=0

// while(i< arr1.length && j<arr1.length){
//   if(arr1[i] < arr2[j]){
//     merge[k]=arr1[i]
//     i++
//     k++
//   }else{
//     merge[k] = arr2[j]
//     j++
//     k++
//   }

// }

// while(i<arr1.length){
//   merge[k] = arr1[i]
//   i++
//   k++
// }

// while(j<arr2.length){
//   merge[k] = arr2[j]
//   j++
//   k++
// }




// console.log(merge)






// Best Time to buy





// Sort the Color

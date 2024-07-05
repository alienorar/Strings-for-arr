// Task 1

// function findPrime() {
//     let numbers = [2, 4, 1, 6, 5]
//     let new_array = []

//     for (let i = 0; i < numbers.length; i++) {
//         let count = 0;
//         for (let g = 1; g < numbers[i]; g++) {

//             if (numbers[i] % g == 0) {
//                 count++

//             }


//         }

//         if (count === 1) {
//             new_array.push(numbers[i])
//             console.log(new_array);
//         }
//         else {
//             console.log("There is no prime numbers");
//         }
//     }

// }
// findPrime()


// Task 2

// function findMaxNum(...nums) {

//     let max = nums[0]
//     for (let index in nums) {
// if (nums[index] > max) {
//     max = nums[index];
   
// }
//     }
//     console.log(max);  
// }
// findMaxNum( 4, 5, 6, 7)


// Task 3

// function findMinNum(...nums) {

//     let min = nums[0]
//     for (let index in nums) {
// if (nums[index] < min) {
//     min = nums[index];
   
// }
//     }
//     console.log(min);  
// }
// findMinNum( 4, 5, 6, 7)


// Task 4

// let array = [2,4,6,3,2,4]
// let duplicated_array =[]

// function findDuplicate() {
//   for (let i = 0; i < array.length; i++) {
   
//   if (!duplicated_array.includes(array[i])) {
//       duplicated_array.push(array[i])
//   }

//   }
//     console.log(duplicated_array); 
// }
// findDuplicate()


// Task 5

// function findLetter(str) {
//     let count_letter = 0;
//     for (let i = 0; i < str.length; i++) {
//        if (str[i].toLowerCase() == "a") {
//         count_letter ++
//        }
        
//     }
//     console.log(count_letter);
// }
// findLetter("Atmosphere")

// Task 6

// function countTotalSum (...array) {
//     let max = array[0]
//     let min = array[0]
//      for (let index in array) {
// if (array[index] > max) {
//     max = array[index];
 
// }
//          if (array[index] < min) {
//              min = array[index];

//          }
//     }

//     console.log(max);
//     console.log(array.indexOf(max));
//     array.splice(4,1,1)
//     console.log(array);

//     console.log(min);
//     console.log(array.indexOf(min));
//     array.splice(1,1,4) 
//     console.log(array);

// }
// countTotalSum(2,1,4,3,8)


// Task 1


// function reverseName(str) {
// let reversedname =""
//     for (let i = str.length -1; i >= 0; i--) {
//        reversedname += str[i]

//     } 
//     console.log(reversedname);  
// }
// reverseName("Rayhona")


// Task 2

// let array = [
// [2,3,4,5],
// [3,4,2],
// [2,3]
// ]

// function totalSum(array=[]) {
//     let total = 0;
//     for (let i = 0; i < array.length; i++) {
//        for (let g = 0; g < array[i].length; g++) {
//        total +=array[i][g];
//        }
        
//     }
//     console.log(total);
// }
// totalSum(array)

// Task 3
// const array = [" hello ", " worldd ", " now i am taking It course "]

//  function maxStr (array = []) {
//      let max = array[0].length
// let index = 0
//      for (let i in array.length) {
//          if (array[i].length > max) {
//     max = array[i].length;
//  index = i
// }}
//      console.log(max);
//          console.log(index);
// }
// maxStr(array)


let text = String.fromCharCode(
    113, 111, 121, 105, 108, 32, 115, 122, 32, 116, 111, 112, 116, 105, 110, 103,
    105, 122, 32, 55357,
);

console.log(text);
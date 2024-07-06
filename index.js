// Task 1

// function getInitialOdds(number) {
//     let result =[]
//     let initialOdds = 1;
//     for (let i = 0; i < number; i++) {
//       result.push(initialOdds)
//         initialOdds += 2

//     }
//  return result
// }
// console.log(getInitialOdds(4));

// Task 2

// function findVowels(str) {
//     let result = []
//     let countVowel = 0;
// for (let i = 0; i < str.length; i++) {
//     if (str[i].toLowerCase() == "a" || str[i].toLowerCase() == "e" || str[i].toLowerCase() == "i" || str[i].toLowerCase() == "o" || str[i].toLowerCase() == "u" || str[i].toLowerCase() == "o'") {
//     result.push(str[i])
//     countVowel ++
//     countVowel 
// }
// }
// console.log(`There are ${countVowel} voiwels in string and they are ${result}`);
// console.log(result);
// }
// findVowels("helolololo")


// Task 3

// function countTotalSum(...array) {
//     let max = array[0]
//     let min = array[0]

//     for (let index in array) {
//         if (array[index] > max) {
//             max = array[index];

//         }
//         if (array[index] < min) {
//             min = array[index];

//         }

//     }
//     console.log(array);
//     console.log(`Maximum number is ${max} in array `);
//     array.splice(4, 1, 1)
//     console.log(`Minimum number is ${min} in array `);
//     array.splice(1, 1, 8)
//     console.log(`Replaced array is [${array}]`);

// }
// countTotalSum(2, 1, 4, 3, 8)

// Task 4

// function findLetter(str) {
//     let count_letter = 0;
//     for (let i = 0; i < str.length; i++) {
//        if (str[i].toLowerCase() == "a") {
//         count_letter ++
//        }
        
//     }
//     console.log(`There is ${count_letter} a in String`);
// }
// findLetter("Apalon")

// Task 5


let nums = [2, 7, 11, 15];
let target = 9;

function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] === complement) {
                return [i, j];
            }
        }
    }

}



let result = twoSum(nums, target);
console.log(result);

// Task 6

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




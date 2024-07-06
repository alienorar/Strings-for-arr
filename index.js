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


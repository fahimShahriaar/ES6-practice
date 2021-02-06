// previous way
// function add(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
// console.log(add([10, 20, 30]));


//  spread operator ... (ES6 feature)
// function add(x, y, z) {
//     return x + y + z;
// }

// let arr = [10, 20, 30];
// let arr2 = [40, 50, 60];

// console.log(add(...arr));


// spread operator in details

// const arr = [10, 20, 30];
// console.log(...arr);

const arr1 = [10, 20, 30];
const arr2 = [30, 40, 50];
const arrAll = [...arr1, ...arr2];
console.log(arrAll);
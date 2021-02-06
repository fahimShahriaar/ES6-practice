// var doubleIt = function myFunc(num) {
//     return num * 2;
// }
// var result = doubleIt(10);
// console.log(result);


const doubleIt = (num) => num * 2;
console.log(doubleIt(10));

const add = (a, b) => a + b;
console.log(add(10, 50));

const give5 = () => 'Five';
console.log(give5());


const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

console.log(doMath(10, 5));
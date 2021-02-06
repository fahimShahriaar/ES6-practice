// ----- default parameter
// function add(a = 0, b = 0) {
//     return a + b;
// }
// console.log(add(10, 1));

//  -------- template string
// const firstName = 'Fahim';
// const lastName = 'Shahriar';
// // const fullName = firstName + lastName;
// const fullName = `${firstName} ${lastName}`;
// console.log(fullName);
// const multiLine = 
// `I'm Fahim Shahriar.
// Welcome to my World!`;
// console.log(multiLine);


//  ------ arrow function
// const add = (num1, num2) => num1 + num2;
// console.log(add(10, 10));

// const doubleIt = (num) => num * 2;
// console.log(doubleIt(10));

// const giveName = () => 'Fahim';
// console.log(giveName());



//  ----- spread operator
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// // const arrAll = arr1.concat(arr2);
// // const arrAll = [arr1, arr2];
// const arrAll = [...arr1, ...arr2];
// console.log(arrAll);

const numbers = [85, 80, 45, 86, 58, 70, 84];
// let maxNum = numbers[0];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > maxNum) {
//         maxNum = numbers[i];
//     }
// }

// let maxNum = Math.max(...numbers);
// console.log(maxNum);
// let minNum = Math.min(...numbers);
// console.log(minNum);


// let arr = [10, 20, 30, 40];
// function add(a, b, c, d) {
//     return a + b + c + d;
// }
// console.log(add(...arr));

// let arr = [1, 2, 3];
// let arr2 = [...arr, 4, 5, 6];
// console.log(arr2);

// let studentName = {firstName: 'Fahim', lastName: 'Shahriar'};
// let studentInfo = {id: 96, address: 'Khulna'};
// let student = {...studentName, ...studentInfo};
// student = {...student, job: 'nwu', phone: 8888888};
// console.log(student);


//  class in js
// class MorningShift {
//     constructor() {
//         this.shift = 'morning';
//     }
// }

// class Student extends MorningShift{
//     constructor(name, age, id) {
//         super()
//         this.name = name;
//         this.age = age;
//         this.id = id;
//     }

//     fullName() {
//         return `${this.name} Shahriar`;
//     }
// }

// let firstStudent = new Student('Fahim', 23, 96);
// console.log(firstStudent.fullName());



//  JS destructuring
let arr = [1, 2, 3, 4, 5, 6];
let [num1, num2, num3, num4, num5, num6] = arr;
console.log(num7);
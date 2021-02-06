// function add(num1, num2) {
//     num2 = num2 || 0;
//     return num1 + num2;
// }

function add(num1 = 10, num2 = 20) {
    return num1 + num2;
}

const result = add();
console.log(result);
// class Parent {
//     constructor() {

//         this.parentName = 'Shahriar';
//         this.wealth = '100 crore';
//     }
// }

// class Child extends Parent {
//     constructor(name) {
//         super();
//         this.name = name;
//     }
// }

// let firstBaby = new Child('Fahim');
// let secondBaby = new Child('Karim');

// console.log(firstBaby, secondBaby);



//  rough.js

// class Student {
//     constructor(science, english, math) {
//         this.science = science;
//         this.english = english;
//         this.Math = math;
//     }
// }

// let student1 = new Student(70, 80, 96);
// let student2 = new Student(90, 80, 85);

// console.log(student1);
// console.log(student2);

class Parent {
    constructor() {
        this.parentName = 'NWU';
    }
}

class Child extends Parent{
    constructor(name, id) {
        super();
        this.name = name;
        this.id = id;
    }
    fullName() {
        return this.name + ' ' + this.parentName;
    }
}

let student1 = new Child('Fahim', 96);
// console.log(student1.fullName());
console.log(student1.name);
console.log(student1.id);
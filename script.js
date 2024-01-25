'use strict';

//   Scoping: function scope

function calcAge(birthyear) {
  const age = 2024 - birthyear;
  console.log(firstName);
  console.log(age);

  //function inside of another function
  function printAge() {
    let output = `${firstName} you are ${age} year old, born in ${birthyear}`;
    console.log(output);

    // block scope

    if (birthyear >= 1981 && birthyear <= 1996) {
      var millanial = true;
      //creating new variable with the same name
      const firstName = 'Edward';

      // reassigning outer scope variable:
      output = 'New Output';
      const str = `Oh, you are a millanial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      console.log(add(5, 3));
      add();
    }
    console.log(millanial);
    console.log(output);
    //add(2, 3); // reference error

    // console.log(str); // reference error
  }
  printAge();

  return age;
}
//parent scope of the calcAge function is global scope
//  Global scope
const firstName = 'Maryam';
//console.log(age); reference erroe
calcAge(1991);
//console.log(age); //reference error
//printAge(); // reference error

// Hoisting

// hoisting by variables in global scope:

console.log(myName);
//console.log(job); // reference error
//console.log(birthYear); // reference error

var myName = 'Maryam';
let job = 'webDeveloper';
const birthYear = 1996;

// hoisting by function:

console.log(addOne(5));
// console.log(addTwo(5)); // reference error
// console.log(addThree(5)); // reference error
// function declaration
function addOne(num) {
  return num + 1;
}
addOne(5);

//function expression
const addTwo = function (num) {
  return num + 2;
};

addTwo(5);

// arrow function
const addThree = num => num + 3;
addThree(5);

// example
//console.log(undefined);

const numProducts = 10;
if (!numProducts) deletShoppingCart();
console.log(numProducts);

//var numProducts = 10; reference error
function deletShoppingCart() {
  console.log('deleted all products!');
}
deletShoppingCart();

// this keyword

// this keyword in global scope is just a window object:
console.log(this);

// for a regular function the this keyword will be undefined in strict mode:

const calcAge = function (birthyear) {
  console.log(2024 - birthyear);
  console.log(this);
};
calcAge(1991);

// this keyword in an arrow function is a window object because it shows
// lexical scoping which means that it uses this keyword of its parent
// function or parent scope

const calcAgeNew = birthyear => {
  console.log(2024 - birthyear);
  console.log(this);
};
calcAgeNew(1996);

// Regular function Vs arrow function

// inside a method the this keyword will be the object that is calling the method

const Maryam2 = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2024 - this.year);
  },
};
Maryam.calcAge();

// borrowing method (borrow the method from one object to the other)

const Ayesha = {
  year: 2011,
};
// this keyword always point to which is calling the method
Ayesha.calcAge = Maryam.calcAge;
Ayesha.calcAge();

// this keyword will be undefined because it is a regular function
//because it is not attatch to an object and there is no owner of f function
const f = Maryam.calcAge;
f();

// arrow function

// variable declare with var have the property of globl object

//var firstName = 'Maryam';
const Maryam = {
  firstName: 'Maryam',
  year: 1996,
  calcAge: function () {
    console.log(this);
    console.log(2024 - this.year);

    // solution 1 of the problem (error)
    // const self = this; // self or that

    //const isMellanial = function () {
    //console.log(self.year >= 1981 && self.year <= 1996);
    //};

    // solution 2

    const isMellanial = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMellanial();
  },

  //arrow function does' nt have its own this keyword that's why it give undefined

  greet: () => console.log(`HY!! ${this.firstName}`),
};

Maryam.greet();
Maryam.calcAge();
// arrow function use this keyword of its parent or global scope and in global
//scope this keyword is a window object

console.log(this.firstName);
// arguments keywords

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(3, 7);
addExpr(3, 7, 9, 8, 12);

// arrow funtion does not have the argument keyword

var addExprNew = (a, b) => {
  console.log(arguments);
  return a + b;
};
addExprNew(5, 6, 7, 8);

// primitives

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// objects: reference value

const Jassica = {
  firstName: 'Jassica',
  lastName: 'Williams',
  age: 30,
};

const marriedJassica = Jassica;
marriedJassica.lastName = 'Davis';

console.log('Before Marriage:', Jassica);
console.log('After Marriage:', marriedJassica);

// copy the object
const Jassica2 = {
  firstName: 'Jassica',
  lastName: 'Williams',
  age: 30,
  family: ['Bob', 'john', 'Henry'],
};

const jassicaCopy = Object.assign({}, Jassica2);
jassicaCopy.lastName = 'Davis';

jassicaCopy.family.push('Peter');
jassicaCopy.family.push('Adward');

console.log('Befor Marriag:', Jassica2);
console.log('After Marriage:', jassicaCopy);

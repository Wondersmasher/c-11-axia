console.log("Hello World!");

// var => legacy syntax
// let => can change over time
let name = "John";
// console.log(name, "name 1");

name = "Jane";
// console.log(name, "name 2");

// const => cannot change over the entire lifetime of that variable
const name2 = "John";
// console.log(name2, "name 3");

// string
const firstName = "John";
// number
const age = 30;
// boolean
const hasKids = true;
// null
const car = null;
// undefined
let test;
// symbol
const symbol1 = Symbol();
const symbol2 = Symbol();
// object

// console.log(firstName, age, hasKids, car, test, symbol1, symbol2);

// control flow

// if (age > 18) {
//   console.log("You are over 18");
// } else if (age > 18 && age < 30) {
//   console.log("You are between 18 and 30");
// } else {
//   console.log("You are under 18");
// }

// switch (age) {
//   case 18:
//     console.log("You are 18");
//     break;
//   case 30:
//     console.log("You are 30");
//     break;
//   default:
//     console.log("You are not 18 or 30");
//     break;
// }

// FizzBuzz
// write a program that logs or returns numbers from 1 to 100.
// However, for multiples of 3, you output "Fizz";
// for multiples of 5, you output "Buzz";
// and for numbers that are multiples of both 3 and 5,
// you output "FizzBuzz".

// for (let i = 1; i <= 100; i++) {
//   const isFizz = i % 3 === 0;
//   const isBuzz = i % 5 === 0;
//   const isFizzBuzz = isFizz && isBuzz;

//   if (isFizzBuzz) console.log("FizzBuzz");
//   else if (isFizz) console.log("Fizz");
//   else if (isBuzz) console.log("Buzz");
//   else console.log(`the value is ${i}`);
// }
for (let i = 1; i <= 100; i++) {
  console.log(
    `${
      i % 3 === 0 && i % 5 === 0
        ? `FizzBuzz`
        : i % 3 === 0
          ? "Fizz"
          : i % 5 === 0
            ? "Buzz"
            : `the value is: ${i}`
    }`,
  );
}

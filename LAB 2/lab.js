// var
var name = "Aakash";
console.log("Var name:", name);

// let
let age = 25;
age = 26;
console.log("Let age:", age);

// const
const country = "Nepal";
console.log("Const country:", country);

//function
function greet(name) {
  return "Hello " + name;
}

console.log(greet("Aakash"));

//arrow function
const add = (a, b) => {
  return a + b;
};

console.log("Sum:", add(5, 3));

//object
const student = {
  name: "Aakash",
  age: 25,
  course: "Web Application "
};

console.log(student.name);
console.log(student.course);

//map
const numbers = [1, 2, 3, 4];
const squares = numbers.map(num => num * num);
console.log("Squares:", squares);

//filter
const nums = [10, 15, 20, 25];
const result = nums.filter(num => num > 15);
console.log("Filtered:", result);

//spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2);
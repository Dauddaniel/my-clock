
// for loops
const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let index = "";
for (let i = 0; i < cars.length; i++) {
  index += cars[i] + "<br>";
}

let text = "";

for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}


// for in loops

const person = {fname:"John", lname:"Doe", age:25}; 

let main = "";
for (let x in person) {
  main += person[x] + " ";
}

const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
  txt += numbers[x] + "<br>"; 
}

// for of loops

const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x + "<br>";
}

let language = "JavaScript";

let text = "";
for (let x of language) {
  text += x + "<br>";
}

// while loops

let text = "";
let i = 0;
while (i < 10) {
  text += "<br>The number is " + i;
  i++;
}

let text = ""
let i = 0;

do {
  text += "<br>The number is " + i;
  i++;
}
while (i < 10);  

let text1 = "";
let e = 0;

do{text+= "the number is" + e;
e++;
}
while(e)
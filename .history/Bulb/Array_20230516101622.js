const cars = ["marcidis","parado","volvo","toyota","gomdala"];
const animals = ["cats","goats","carmels","dogs","gorillas"];
const countries = ["sudan","kenya","south-sudan","chad","south-africa","guinea bissau"];
const both = cars.concat(animals,countries);
console.log(both);

const cars= ["marcidis","parado","volvo","toyota"];
cars.push("pickup");
console.log(cars);
cars.length()
cars.pop()
cars.shift()

const cars=["parado","marcidis","bmw"];
cars[0]=("volvo");
cars.push("pickup");
// console.log(cars);
console.log(cars[2]);
console.log(cars.length);
cars.shift();
cars.pop();
cars.unshift("Marcidis");
cars.indexOf("parado");
console.log(cars);

const cities = ["Berlin","Madrid","tokyo"];
    cities.slice()
const SuperHero = require("./superhero");

const batman = new SuperHero("batman");
console.log(batman.getName());
batman.changeName("Bruce Wayne");
console.log(batman.getName());

const superman = new SuperHero("superman");
console.log(superman.getName());

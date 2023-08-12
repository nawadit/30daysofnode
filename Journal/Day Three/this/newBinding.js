const Name = function (naam) {
  //this refers to an {} created by new keyword
  this.name = naam;
  this.sayMyName = function () {
    console.log("Mero naam " + this.name + " ho|");
  };
  console.log(this.name + " is my name. ");
};

let p1 = new Name("Nawadit Sharma");
let p2 = new Name("Samir Kattel");

console.log("My name is: " + p1.name);
console.log("My name is: " + p2.name);

p1.sayMyName()
p2.sayMyName()


console.log(typeof p1); //object

//sturcture of p1-----------------------------------------------------------------

// p1 = { 
//     name : "Nawadit Sharma", 
//     sayMyName: function (){
//         console.log("Mero naam " + this.name + " ho|")
//     }
// }

//..................................................................................



//------------------console---------------------
// Nawadit Sharma is my name. 
// Samir Kattel is my name. 
// My name is: Nawadit Sharma
// My name is: Samir Kattel
// Mero naam Nawadit Sharma ho|
// Mero naam Samir Kattel ho|
// object
//----------------------------------------------

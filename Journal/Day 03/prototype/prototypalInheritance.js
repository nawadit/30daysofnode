const Person = function (fName, lName){
    this.firstName = fName;
    this.lastName = lName;
}

Person.prototype.sayMyName = function(){
    console.log(this.firstName + "is my name !")
}
//created a Person constructor

const SuperHero = function (fName, lName){
    this.isSuperHero = true
    Person.call(this, fName, lName)
}
//created a SuperHero constructor that inherits default properties form Person constructor

SuperHero.prototype = Object.create(Person.prototype)
//added properties of Person.prototype to SuperHero.prototype

SuperHero.prototype.fightingCrime = function (){
    console.log(this.firstName + " is fighting crime! ")
}
//added a method to the object of SuperHero constructor

SuperHero.prototype.constructor = SuperHero
//I don't know what I did here, but it's important or else JS will think that SuperHero is created from Person

const s1 = new SuperHero('Bruce', 'Wayne');

console.log(s1.isSuperHero)
s1.fightingCrime()
s1.sayMyName()

//---------------console-----------------

// true
// Bruce is fighting crime! 
// Bruceis my name !

//.........................................
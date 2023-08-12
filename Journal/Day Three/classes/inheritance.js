class Person {
    constructor(fName, lName){
        this.firstName = fName;
        this.lastName = lName;
    }
    sayMyName = function(){
        console.log("My name is "+this.firstName + " " + this.lastName)
    }
}

class SuperHero extends Person {
    constructor(fName, lName){
        super(fName, lName)
        this.isSuperHero = true;
    }

    fightingCrime = function (){
        console.log(`${this.firstName} is fighting crime. `)
    }

}

const Batman = new SuperHero('Bruce', 'Wayne')
Batman.sayMyName();
Batman.fightingCrime();

//------------console-------------

// My name is Bruce Wayne
// Bruce is fighting crime.

//--------------------------------
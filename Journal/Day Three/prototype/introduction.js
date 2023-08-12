function person (name) {
    this.name = name
}


person.prototype.sayMyName = function (){
    console.log('My name is ' + this.name)
}

const p1 = new person('Nawadit')
const p2 = new person('Suyog')
const p3 = person('Aditya')

p1.sayMyName();
p2.sayMyName();

// p3.sayMyName();
//this will give error
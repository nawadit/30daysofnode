function person (name) {
    this.name = name
}

const p1 = new person('Nawadit')
const p2 = new person('Suyog')

p1.sayMyName = function (){
    console.log('My name is ' + this.name)
}

p1.sayMyName();

// p2.sayMyName(); 
//this will give an error
const genericObject = {
    name:'Nawadit Sharma',
    sayMyName: function () {
        console.log('My name is ' + this.name)
    }
}

genericObject.sayMyName()

// -----------console--------------------


// My name is Nawadit Sharma


// -----------------------------------


// sayMyName: function () {
//     console.log('My name is ' + this.name)
// } 

// it cannot be 

// sayMyName: ()=> {
//     console.log('My name is ' + this.name)
// }
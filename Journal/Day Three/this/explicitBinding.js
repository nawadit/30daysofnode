const genericObject = {
    name:'Nawadit Sharma',
    sayMyName: function () {
        console.log('My name is ' + this.name)
    }
}

sayMyName = function () {
    console.log(this.name + ' is my name. ')
}

sayMyName.call(genericObject)

// ---------------console -------------------

// Nawadit Sharma is my name. 

//-------------------------------------------


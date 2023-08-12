const Name = function (naam) {


    //this refers to an {} created by new keyword

    this.name = naam;
    this.sayMyName = function () {
      console.log("Mero naam " + this.name + " ho|");
    };


    // console.log(this.name + " is my name. ");

  };
  

  let p1 = new Name("Nawadit Sharma");
  let p2 = new Name("Samir Kattel");

  globalThis.name = 'Suyog Satyal'
  
function sayMyName () {
    console.log("Global name is : " + this.name)    
}
  
sayMyName()
  
//-------------------------console------------------


// Global name is : Suyog Satyal

//...................................................
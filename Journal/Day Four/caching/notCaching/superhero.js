class Superhero {
    constructor(naame){
        this.name = naame
    }
    getName(){
        return this.name
    }
    changeName (naame){
        this.name = naame
    }
}

module.exports = Superhero
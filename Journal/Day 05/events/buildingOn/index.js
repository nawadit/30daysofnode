const PizzaShop = require('./buildingOnTop')
const drinkMachine = require('./drinkMachine')

const Nawadits = new PizzaShop
const DrinkMachine = new drinkMachine

Nawadits.on('order', (size, flavour)=>{
    console.log(`Order number: ${Nawadits.orderNumber}, Baking a ${size} ${flavour} pizza.`)
    DrinkMachine.serveDrink(size)

})

Nawadits.order('medium', 'cheese')
Nawadits.order('large', 'mushroom')
Nawadits.order('small', 'vegmix')
Nawadits.order('large', 'cheese')

module.exports = Nawadits
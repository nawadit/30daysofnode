const eventEmitter = require('node:events')

 class pizzaShop extends eventEmitter {
    constructor (){
        super()
        this.orderNumber = 0;

    }
    
    order(size, flavour){
        this.orderNumber++;
        this.emit('order', size, flavour)
    }

}

module.exports = pizzaShop
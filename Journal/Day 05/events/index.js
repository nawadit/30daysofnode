const eventEmitter = require('node:events')

const events = new eventEmitter()


events.on('orderPlaced', (size, flavour)=>{
    console.log(`Order received! Baking a ${size} ${flavour} pizza`)
})

events.on('orderPlaced', (size)=>{
    if (size == 'large'){
        console.log('Serve a complimentary drink !!')
    }
})

events.emit('orderPlaced', 'large', 'cheese')
console.log('Cool resturant ')
events.emit('orderPlaced', 'large', 'cheese')
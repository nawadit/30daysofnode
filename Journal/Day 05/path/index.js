const path = require ('node:path')

console.log('1. '+ __filename)
console.log('2. '+ path.basename(__filename))
console.log('3. '+ path.extname(__filename))
console.log(path.parse(__filename))
console.log('5. '+ path.format(path.parse(__filename)))
console.log('6. '+ path.join(__dirname, '../export'))
console.log('6. '+ path.join(__dirname, '..//export'))
console.log('7. '+ path.resolve(__dirname, '/export', 'index.html'))
console.log('8. '+ path.resolve(__dirname, '//export'))
console.log('9. '+ path.resolve(__dirname, '/export', '../index.html'))
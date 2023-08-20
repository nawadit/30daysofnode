// const { upperCase } = require("upper-case")
const upperCase = require('nawadit-uppercase')

const toUpperCase = (string)=>{
    console.log(upperCase(string))
    return upperCase(string)
}
// toUpperCase('this string  is in uppercase')
module.exports = toUpperCase
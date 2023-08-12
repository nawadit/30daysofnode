const add = (a, b)=> a+b;


const addWithCurrying = a => b => a+b;

console.log(add(3, 4));

console.log(addWithCurrying(2)) ;

console.log(addWithCurrying(2)(3)); 

//------------console------------
//  7
// [Function (anonymous)]
// 5 
//................................

//Since curried functions can be partially applied, they can be reused with different arguments to create new functions
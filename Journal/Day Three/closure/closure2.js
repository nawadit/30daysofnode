const outer = () =>{
    console.log("outer function executed! ")
    let counter = 0;

    const inner = ()=>{
        console.log('innter function executed! ')
        counter ++;
        console.log(counter + " is the current counter's value. ");
    }
    return inner
}

let ln = outer()
ln()
ln()
ln()
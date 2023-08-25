const outer = () =>{
    let counter = 0;

    const inner = ()=>{
        counter ++;
        console.log(counter + " is the current counter's value. ");
    }
    inner()
}

outer()

//--------------console----------------

//1 is the current counter's value. 

//......................................
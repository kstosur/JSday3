function add(a, b){
    if(typeof a !== 'number' || typeof b !== 'number' ){
        return NaN
    }
 
    return a + b
}

function multiply(a, b){
    let sum = 0
    
    for (let i = 0; i < b; i++){
        sum = add (sum, a)
    }
    return sum 
}

function square(a){
    return multiply (a, a)
}
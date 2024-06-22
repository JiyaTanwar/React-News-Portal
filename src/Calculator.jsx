import React from 'react';

function add(a,b){
    let sum = a+b;
    return sum;
}

function sub(a,b){
    let diff = a-b;
    return diff;
}
function mul(a,b){
    let product = a*b;
    return product;
}
function div(a,b){
    let quotient = a/b;
    return quotient;
}

// export default add;
export {add,sub, mul,div};
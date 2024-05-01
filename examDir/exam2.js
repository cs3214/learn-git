//Q1-1
let num = 1;

function factorial(n) {
    if ( n === 0){
        return 1
    } else {
        for (let i3 = 1; i3 <= n; i3++){
        num = num * i3
        }
        return num
    }   
}

//console.log(factorial(4));


//Q1-2
function factorial2(x){
    if (x === 1){
        return 1
    } else {
        return x * factorial2(x - 1)
    }
}

console.log(factorial2(4));


//Q2-1




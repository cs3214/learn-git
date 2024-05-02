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
function fibonacci(y){
    if(y === 0){
        return 0
    }
    if(y === 1){
        return 1
    }
    return fibonacci(y - 1) + fibonacci(y - 2)
}

let fibNum = fibonacci(3)
console.log(fibNum);


//Q3-1
function euclideanAlgorithm(a, b){
    if(a % b === 0){
        return b;
    } else {
        return euclideanAlgorithm(b, a % b);
    }
}
let gcm = euclideanAlgorithm(8177, 3315)
console.log(gcm);


function square(x) {
    return x * 2;
  }
  
  const nums = [1, 2, 3, 4, 5];
  const doubleNums = nums.map(square);
  
  console.log(doubleNums);





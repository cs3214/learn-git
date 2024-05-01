//Q1-1
let tmp

function min(num1, num2) {
    tmp = Math.min(num1, num2)
    console.log(tmp);
}
min(3, 2)


//Q2-1
function helloWorldNTimes(count){
    if(count > 0){
        for (let i = 1; i < count + 1; i++){
            console.log("Hello World" + i);
        }
    }
}

helloWorldNTimes(0)


//Q3-1
const numbers = [5, 4, 3, 2, 1];

function arrayMin(numbers){
    let min = numbers[0]
    console.log(min);
    for (let i2 = 1; i2 < numbers.length; i2++ ){
        if(numbers[i] < min){
            min = numbers[i]
            console.log(min);
        }
    }
}


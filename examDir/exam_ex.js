//Q1-2
const min = (a, b) => a < b ? a : b
let tmp = min(2, 6)
console.log(tmp)


//Q2-2
const helloWorldNTimes = (n) =>{
    new Array(n).fill(0).forEach(
        () => {
            console.log("Hello World!");
        }
    )
}
helloWorldNTimes(4)


//Q3-2
const arrayMin = (a) => a.reduce((te, st) => te < st ? te : st, a[0])


const array = [5, 4, 3, 3, 3]
let tmp2 = arrayMin(array)
console.log(tmp2);

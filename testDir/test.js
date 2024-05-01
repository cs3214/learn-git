/*const numbers = [1, 2, 3, 4, 5];

for (let index = 0; index < 5; index++) {
    console.log(numbers[index]);  
}*/


const arrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

for (let line = 0; line < 3; line++){
    for (let column = 0; column < 3; column++){
        console.log(arrays[line][column]);
    }

    column = 0;
}
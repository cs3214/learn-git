let a = 500;
console.log(a);

let c = 500;
console.log(c);

if (a === c) {
    console.log("うれしいねぇ、奇しくも同じ型だ");
} else {
    console.log("はずれ");
}

/*
for (let num = 0; num < 10; num = num + 1){
    if (num === 4){
        break;
    }
    switch (num) {
    case 0:
        console.log("旅の始まり");
        break;

    case 1:
        console.log("最初の戦い"); 
        break;

    case 2:
        console.log("引けない戦い");
        break;


    default:
        console.log("闇落ちしちゃった");
        break;
}
}
*/

let num = 0;
                            
while (num < 4) {
    switch (num) {
        case 0:
            console.log("旅の始まり");
            break;
    
        case 1:
            console.log("最初の戦い"); 
            break;
    
        case 2:
            console.log("引けない戦い");
            break;
    
    
        default:
            console.log("闇落ちしちゃった");
            break;
        
    }
    num++;
}


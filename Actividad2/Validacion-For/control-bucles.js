//Control de bucles
let list = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let i = 0; i<list.length; i++){
    //Exclusion de valor
    if(list[i]===5){
        continue;
    }
    console.log(list[i]);


    //Interrumpirlo
    if(list[i]>5){
        break;
    }
}
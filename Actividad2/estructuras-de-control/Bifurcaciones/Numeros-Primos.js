let inicio = 0;
let fin = 100;

for (let num = inicio; num <=fin; num++){
    if(num <= 1) continue;
    let primo = true;

    for (let i =2; i*i<=num; i++){
        if(num % i ===0){
            primo = false;
            break;
        }
    }
    if(primo){
        console.log(num);
    }
}
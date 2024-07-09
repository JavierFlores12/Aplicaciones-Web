let rangoInicio = 0;  
let rangoFin = 100;     

for (let num = rangoInicio; num <= rangoFin; num++) {
    if (num <= 1) continue;  

    let NumPrimo = true;
    
    if (num === 2) {
        NumPrimo = true;
    } else {

        for (let i = 2; i*i <= num; i++) {
            if (num % i === 0) {
                NumPrimo = false;
                break;
            }
        }
    }
    
    if (NumPrimo) {
        console.log(num);
    }
}

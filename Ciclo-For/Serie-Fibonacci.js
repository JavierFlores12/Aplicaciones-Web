let N = 8;
let a = 0;
let b = 1;
let resultado = "";

for (let i = 0; i < N; i++) {
    resultado += a + ", ";
    let temp = a + b;
    a = b;
    b = temp;
}

console.log(resultado.slice(0, -2));
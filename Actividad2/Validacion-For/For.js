//FOR
/*Estructura
for(inicializacion; condicion; actualizacion;){
    bucle
}

let i = 0;

i = i + 1;
i += 1;

i++
*/
//TIPOS DE FOR
//for
for(let i = 0; i < 10; i++){
    //Aqui va un bucle
    console.log(i)
}
let List = [1, 4, 6, 8, 10, 15, 18]
for(let i=0; i<List.length/*Longitud de la cadena*/; i++){
    console.log(i);
}
//for...of
for(let valor of List){
    console.log(valor)
}
//for...in
let persona = [
    nombre = "Javier",
    apellido = "Flores",
    edad = 21,
    IsDeveloper = true 
]
    
console.log(persona.nombre)

let prop = "edad";
console.log(persona[prop])
for(let propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad])
}
//forEach
lista.forEach(valor =>/*Esta es una Arrow fuction*/{
    console.log(valor);
});
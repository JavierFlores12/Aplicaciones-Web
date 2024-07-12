//Comparaciones
//Igualdad
if(5==5){
    console.log("5 es igual a 5");
}

if(5===5){
    console.log("5 es igual a 5");
}

let a = 5;
console.log(typeof a);

let b = "5";
console.log(typeof b);

if(a==b){
    console.log("a es igual que b DEBIL");
}
if(a===b){
    console.log("a es igual que b FUERTE");
}

//Desigualdades
let c = 4;
let d = 10;

if(c != d){
   console.log("c es distinto a d DEBIL"); 
}
if(c !== d){
    console.log("c es diferente que d FUERTE");
}

//Mayor que Menos que 
let max = 10;
let min = 6;

if(max > min){
    console.log("Max es mayor que Min");
}
if(max >= min){
    console.log("Max es mayor o igual que Min");
}
if(min < max){
    console.log("Min es menor que Max");
}
if(min <= max){
    console.log("Min es menor o igual que Max");
}
//String (Cadena de caracteres)

let srt_1 = "Hola soy un texto entre comillas";
let srt_2 = 'Hola soy un texto entre comillas simpes';
let srt_3 = "Comillas dentro de comillas \"Ejemplo\" ";
let srt_4 = 'Comillas dentro de comillas "Ejemplo" ';
let srt_5 = "Comillas dentro de comillas 'Ejemplo' ";

console.log(srt_1);
console.log(srt_2);
console.log(srt_3);
console.log(srt_4);
console.log(srt_5);

//Comillas invertidas(Backticks)
let srt_6 = 'Comillas invertidas backticks';
console.log(srt_6);

let nombre = "Javier";
let welcome =  `Hola, ${nombre} esto es una variable dentro del valor de otra variable`;

console.log(welcome);

//Plantilla HTML
let plantilla = `
<html>
<h3>Pagina web de ${nombre}</h3>
<p>Un parrafo</p>
</html>
`;
console.log(plantilla);
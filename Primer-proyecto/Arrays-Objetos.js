//¿Qué son? y ¿Como se definen?
//Listas, arrays o vectores
//Conjunto de variables que se pueden modificar mas adelante
//Ejemplos de como se definen 
const datos = [1, "Hola", true, undefined, null]; //Acepta cualquier tipo de dato primitivo
const datos2 = new Array (1, "Hola", true, undefined, null);
const datos3 = new Array (3);
datos3[1] = "Hola Mundo";
const datos4 = [datos, datos2, datos3];

//Ejemplo de impresión 
console.log(datos);
console.log(datos2);
console.log(datos3);
console.log(datos4);

//Objetos
//Ejemplo de un objeto
const alumno /*<--Objeto*/= {//atributos
    nombre: "Pedro",
    edad: 15,
    isBlack: false,
    amistades: ["Confi1", "Confi2", "Confi3"]
    const ing = {
        matricula: 123312332,
        carrera: "Sistemas"
    }
}
//Imprimir Objeto
console.log(alumno);
//Imprimir mas especifico
console.log(alumno.isBlack);
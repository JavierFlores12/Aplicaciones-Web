//DIA DE LA SEMANA
//if-else
let dia = 3;

if(dia === 1){
    console.log("LUNES");
}else if(dia === 2){
    console.log("MARTES");
}else if(dia === 3){
    console.log("MIERCOLES");
}else if(dia === 4){
    console.log("JUEVES");
}else if(dia === 5){
    console.log("VIERNES");
}else if(dia === 6){
    console.log("SABADO");
}else if(dia ===7){
    console.log("DOMINGO");
}else{
    console.log("NO EXISTE ESE DIA DE LA SEMANA");
}

//switch
let num = 5;
switch(num){
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sabado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Ese dia de la semana no existe");
        break;
}
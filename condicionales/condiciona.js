const nombre=prompt("ingresa  tu nombre : ");
var nacimiento=parseInt(prompt("ingresa tu fecha de nacimiento"));

const fecha = new Date();
const fechaActual=fecha.getFullYear();
let edad=fechaActual-nacimiento

if (edad >= 30) {
    document.write("eres artesana " +" tu edad es "+ edad," tu nombre es : " +nombre);
} else {
    document.write("le gusta la pasta)" )
}


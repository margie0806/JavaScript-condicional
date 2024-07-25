//capture el nombre del estudiante con tres notas , calcule el promedio de las tres notas y muestre el resultado 
// Captura el nombre del estudiante y las tres notas
var nombreEstudiante = prompt("Ingrese el nombre del estudiante:")
var nota1 = parseFloat(prompt("Ingrese la primera nota:"))
var nota2 = parseFloat(prompt("Ingrese la segunda nota:"))
var nota3 = parseFloat(prompt("Ingrese la tercera nota:"))

let promedio=(nota1+nota2+nota3)/3

// Muestra el resultado

if (promedio <=3) {
    document.write(" no aprobo "+ promedio +" tu nombre es : " +nombreEstudiante)
} else if (promedio<=3.5) {
    document.write(" recuperacion "+ promedio +" tu nombre es : " +nombreEstudiante)
    
} else if (promedio>=3.6){
    document.write(" aprobo  "+ promedio +" tu nombre es : " +nombreEstudiante)
}

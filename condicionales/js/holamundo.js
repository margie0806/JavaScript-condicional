document.write("hola mundo")

var nombre=prompt("ingresa el nombre: ")
var apellido=prompt("ingresar el apellido")
var nacimiento=parseInt(prompt("ingresa año de nacimiento"))

/**  var nombre= "margie"
var apellido="Bermudez"
const nacimiento=1994 */
let sueldo=120000
const fecha = new Date()
const fechaActual=fecha.getFullYear()
let edad=fechaActual-nacimiento

document.write("Hola "+nombre+" su 'apellido' es "+apellido+ " año "+nacimiento+"años de edad y con un sueldo de "+sueldo)
document.write(" tiene "+edad+ " años de")



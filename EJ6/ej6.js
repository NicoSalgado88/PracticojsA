/*Leer una cadena de texto desde un prompt y generar un array con la función split().
Posteriormente, mostrar la siguiente información: Número de palabras, primera palabra,
última palabra, las palabras colocadas en orden inverso, las palabras ordenadas de la “a”
hasta la “z” y las palabras ordenadas de la “z” hasta la ”a”.*/

let cadena = prompt("Ingrese una oración.")
const arreglo = cadena.split(" ");
alert(arreglo.length)
alert(arreglo[0])
alert(arreglo[arreglo.length-1])
alert(arreglo.reverse())
alert(arreglo.sort())
alert(arreglo.sort().reverse())

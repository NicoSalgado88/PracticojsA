/* El programa “elige” un número al azar entre uno y un millón y pregunta por el mismo. El
visitante intenta acertar en una ventana emergente. Tras cada respuesta, una nueva
ventana dice “el número es Mayor” o “el número es Menor” y se pide un nuevo número,
hasta que el usuario lo acierta. En ese momento una ventana lo felicita y muestra el número
de intentos que ha realizado hasta el acierto. */

var num = Math.floor(Math.random() * 100);
console.log(num)
var c=0
//var res = prompt("Adivine el número. Escriba su repuesta.")
do {
    var res = prompt("Adivine el número. Escriba su repuesta.")
    if (!isNaN(num)) {
        if (res > num) {
            alert("El número es mayor. Más abajo.")
        } else if (res < num) {
            alert("El número es menor. Más alto.")

        } else if (res == num) {
            alert("Correcto. Enhorabuena.");
            break;
        }
        c++
    }
    
} while (res !== num);
alert("numeros de intentos "+c)

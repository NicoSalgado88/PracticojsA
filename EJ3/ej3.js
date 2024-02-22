//3) Analice y repare el código para que se impriman todos los valores excepto los números.

var lista = new Array('a', 'b', 'c', '1', 'x', '9', 'd', '4');
var item;
for (item in lista) {
    if (lista[item].match(/\D/)) {
        console.log(lista[item]);
    }
}
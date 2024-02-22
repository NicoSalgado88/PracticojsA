/*9) Realice una página que permita cargar los datos de una persona en un array. Luego la
página deberá mostrar en una tabla html con las cabeceras adecuadas los datos solicitados.*/

let personas=[]

function agregar(){
    let nombre=document.getElementById("nombre").value
    let apellido=document.getElementById("apellido").value
    let edad=document.getElementById("edad").value
    let persona={nombre, apellido, edad}
    personas.push(persona)
    let elemento=document.getElementById("cuerpoTabla")
    let elemento1=document.createElement("tr");
    //let fila="<td>"+nombre+"</td> <td>"+apellido+"</td> <td>"+edad+"</td>"
    //elemento1.innerHTML=fila
    let col1=document.createElement("td");
    col1.innerText=nombre
    let col2=document.createElement("td")
    col2.innerText=apellido
    let col3=document.createElement("td")
    col3.innerText=edad
    elemento1.appendChild(col1)
    elemento1.appendChild(col2)
    elemento1.appendChild(col3)
    elemento.appendChild(elemento1)
    document.getElementById("nombre").value=" "
    document.getElementById("apellido").value=" "
    document.getElementById("edad").value=0
    console.log(persona)
}
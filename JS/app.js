function insertarAlPrincipio() {
    let elemento = document.createElement('p')
    let nodotexto = document.createTextNode('Párrafo nuevo al principio')
    elemento.appendChild(nodotexto)
    let padre = document.getElementById('parrafos')
    let puntero = padre.firstElementChild
    padre.insertBefore(elemento, puntero)
}
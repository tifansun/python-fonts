function style(){
    lista = document.
    querySelectorAll("p");
    console.log(lista);
    lista.forEach(element => {
        fuente = element.innerHTML
        if (fuente.includes("@")) {
            fuente = fuente.replace("@", "")
        }
        element.style.fontFamily = fuente;
    });
}
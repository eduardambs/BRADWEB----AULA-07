function init(){
    const primeiroLi = document
        .querySelector("ul > li");
    alert(primeiroLi.textContent);

    const todosLis = document
        .querySelectorAll("ul > li");

    texto = ""
    // for(let i = 0; i < todosLis.lenght; i++){
    //     texto = texto + todosLis[i].textContent + "\n";
    // }
    for(let item of todosLis){
        texto += item.textContent + "\n";
    }
    // TodosLis.forEach((item) => {
    //     // texxto = texto = item.textContent + "\n";
    // });
    // texto +=
    //     item.textContent + "\n";
    alert(texto);
}


window.onload = init;
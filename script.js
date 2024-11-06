//Altera o texto do parágrafo inicial
function alterarTexto() {
    document.getElementById("text").innerText = "Ao clicar, eu mudei!!";

}

//Adicionar um novo parágrafo ao final do corpo
function adicionarParagrafo() {
    const novoParagrafo = document.createElement("p");
    novoParagrafo.innerText = "Depois que você clicou, eu apareco​😀​​";
    document.body.appendChild(novoParagrafo)
}

//Remove o último paragráfo, se houver mais de um
function removerParagrafo() {
    const paragrafos = document.querySelectorAll("p");
    if (paragrafos.length > 1) {
        paragrafos[paragrafos.length].remove();
    }else{
        alert("não há mais parágrafos para remover😔​ !!");
    }
}
//Muda acor de fundo da página para cor aleatória
function mudarCorFundo() {
    const corAleatoria = ´#${Math.floor(Math.random() * 16777215).toString(16)};
    document.body.style.backgroundColor = corAleatoria;
}

//Muda a cor do texto do parágrafo para um cor aleatória
function mudaCorTexto() {
    const cores = ["#FF5753",  "#3357FF", "#FFC133"];
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    document.getElementById("text").style.color = corAleatoria;
}
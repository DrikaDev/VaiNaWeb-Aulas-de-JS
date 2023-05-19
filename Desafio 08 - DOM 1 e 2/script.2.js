// SELETOR GERAL ÚNICO

// const ligar = document.querySelectorAll(".tomada");
// console.log(ligar);

// const ligar2 = document.getElementsByClassName("tomada");
// console.log(ligar2);

// const listaVerdadeira = Array.from(ligar2);
// console.log(listaVerdadeira);

const botao = document.querySelector("button");
const listasAlunos = document.querySelectorAll(".lista");

function mostraNomes(){
    listasAlunos[0].innerText = "Sophia"
    listasAlunos[1].innerText = "Adriana"
    listasAlunos[2].innerText = "Raquel"

    botao.innerText = "Fechar"
    botao.style.backgroundColor = "red"
}

// PRIMEIRA COISA A GENTE FAZ A CHAMADA
const apagarLuz = document.querySelector(".desligar");

function botaoDesligar(){
    document.body.style.backgroundColor = "black"
}
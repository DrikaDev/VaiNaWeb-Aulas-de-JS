// DOM (Document Object Model)
// window.alert("Sejam bem-vindos (as)");

// const nome = window.prompt("Qual o seu nome ?");
// window.alert(`Boa tarde, ${nome}`)

console.log(window);
document.body.style.backgroundColor = "pink";

//Objetivo: como capturar elementos do html pelo javascript

//getElementeById() - pegar o elemento pelo ID
const texto = document.getElementById("paragrafo");
texto.style.backgroundColor = "red";
console.log(texto.innerText)

//class pode repetir
//id não pode repetir

//getElementsByClassName("") - pegar pela classe sem o ponto
const listaAlunos = document.getElementsByClassName("lista");
listaAlunos.style.backgroundColor = "black";
console.log("listaAlunos[1]");

//getElementByTagName("") - pegar pela tag
const listaOrdenada = document.getElementsByTagName("ol");
listaOrdenada.style.backgroundColor = "yellow";
console.log(listaOrdenada);

//document.querySelector("") = coloca . e # dentro do parenteses

//Desestruturação

const [texto, senha] = document.querySelectorAll("input");
//console.log(texto, senha);
const imagem = document.querySelector(".img-patrick");
const botao = document.querySelector("button");

function verificar(){
    //se o login e a senha forem preenchidos corretamente:
    if(texto.value && senha.value.length >=8){
        //para remover o atributo do botão que foi disabilitado
        //variavel + atributo do JS ("atributo do html")
        botao.removeAttribute("disabled");
        //criando uma class na imagem que tá com display none no css
        imagem.classList.add("ativo");
    }else{ // classlist qd é uma propriedade - qd é metodo tem ()
        //criando um novo atributo (nome, valor que a gente cria) disabled = disabled
        botao.setAttribute("disabled", "disabled");
        //removendo a class ativo
        imagem.classList.remove("ativo");
    }
}

//Método utilizado para add um evento:
texto.addEventListener("input", verificar);//"input" é metodo do JS - verifica se foi digitado um valor
senha.addEventListener("input", verificar);//"verificar" é a função que foi criada

//Bônus
//Adicionando atalhos no teclado para ativar evento:

function corDeFundo(event){ //event é padrão do JS

    if(event.key === "y" || event.key === "Y"){
        //console.log(event.key); event é objeto colocar 'ponto' pra pegar as chaves dentro do objeto
        document.body.classList.toggle("amarelo") // amarelo é a nova classe                     
        // classlist é propriedade -> o toggle ativa e desativa 
    }else if (event.key === "a" || event.key === "A"){
        document.body.classList.toggle("azul")
    }          
}
                       // evento + função
addEventListener("keydown", corDeFundo);
//usar "window" pra manipular algo global

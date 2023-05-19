function incrementar(numeroInicial){
    for(let contador = numeroInicial; contador <=10; contador++){
        console.log(contador);
    }
}
incrementar(5);

//calcular a media de 2 notas e mostrar o resultado:
function media(nota1, nota2) {
    let resultado = (nota1 + nota2) / 2
    if (resultado >= 9) {
        console.log(`Parabéns, sua nota foi ${resultado} você é um aluno MB - Muito Bom`);
    } else if ((resultado >=7) && (resultado <9)) {
        console.log(`Parabéns, sua nota foi ${resultado} você é um aluno B - Bom`);
    } else if ((resultado >=5) && (resultado <7)) {
        console.log("Parabéns, você é um aluno R - Regular");
    } else {
        console.log("Você teve resultado I - Insuficiente");
    }
}

media(8, 7);

//=====================================

/*"Exercício 1: 
Crie uma variável chamada “food”. Esta variável deve receber uma string com o nome
de uma comida. Após, crie uma estrutura condicional switch que receba esta variável e
que possua três casos: caso lasanha, retorne no console: “Não vendemos esta comida
aqui”. Caso pizza, retorne: “Estamos com escassez de pizza” e caso salada, retorne:
“Aqui está, são 3 reais”. Teste com estas três opções e verifique o console do seu
navegador. Crie também um default , que retornará uma mensagem de erro no
console.*/

let comida = "bacon" 
switch (comida){
    case "lasanha":
        console.log ("Não vendemos esta comida aqui");
    break;
    case "pizza":
        console.log ("Estamos com escassez de pizza");
    break;
    case "salada":
        console.log ("Aqui está, são 3 reais");
    break;
    default:
        console.log("erro no console");
    break;
}

/*Exercício 2: 
Uma pessoa decidiu ir à uma revenda comprar um perfume. Ele deseja comprar um
perfume amadeirado, e a revenda possui, além de perfumes amadeirados, florais,
cítrico e frutal. Utilizando uma estrutura switch/case , caso o comprador queira o floral,
retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
que não prefere outro aroma?”. Caso seja especificado um aroma que não está
disponível, retorne no console: “Não trabalhamos com este tipo de perfume aqui”.*/

let perfume = "frutal"
switch (perfume){
    case "florais":
    console.log("Compra efetuada com sucesso")
    break;
    case "amadeirado":
    case "citrico":
    case "frutal":
    console.log("Tem certeza que não prefere outro aroma?")
    break;
    default:
    console.log("Não trabalhamos com este tipo de perfume aqui")
    break;
}

let nome = ["Adriana", "Cássio", "Nicolas"];
console.log(nome[1]);

//objeto:
const dados = {
    nome: "Adriana",
    idade: 42,
    profissao: "aluna"
}

console.log(dados);
console.log(dados.nome.length);
console.table(dados);
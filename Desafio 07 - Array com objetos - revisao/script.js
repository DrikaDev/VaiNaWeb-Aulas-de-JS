console.log("1 - Crie um objeto que receba ao menos três propriedades sobre você.")
let aboutMe = {
    name: "Adriana",
    age: 42,
    married: true
}

console.log("2 - Adicione uma nova propriedade sem alterar seu objeto inicial.")
aboutMe.pet = true

console.log("3 - Remova uma propriedade desse objeto.")
delete aboutMe.age

console.log("4 - Mostre no console todas as propriedades desse objeto.")
console.log(aboutMe);

console.log("5- Crie um array  chamado 'cadastro' contendo ao menos 5 objetos.")
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.
let cadastro = [
    {
        nome: "Adriana",
        idade: 42,
        telefone: "(11) 97037-1923",
        amigos: ["Hector", "Charles", "Anderson", "Willian"]
    },

    {
        nome: "Nicolas",
        idade: 05,
        telefone: "Não se aplica",
        amigos: ["Gabriel", "Arthur", "Henri", "Fabrício"]
    },

    {
        nome: "Alice",
        idade: 05,
        telefone: "Não se aplica",
        amigos: ["Ana", "Flor", "Lívia", "Bia"]
    },

    {
        nome: "Daphny",
        idade: 35,
        telefone: "(11) 98819-4422",
        amigos: ["Augusto", "Barbara", "Regiane", "Edinei"]
    },

    {
        nome: "Daisy",
        idade: 28,
        telefone: "(11) 97314-6627",
        amigos: ["Elen", "Maurício", "Ricardo", "Beatriz"]
    }
]

//Mostre no console o nome de um amigo de cada lista.
console.log(cadastro[0].amigos[1]);
console.log(cadastro[1].amigos[0]);
console.log(cadastro[2].amigos[2]);
console.log(cadastro[3].amigos[3]);
console.log(cadastro[4].amigos[0]);

for(let i = 0; i < cadastro.length; i++){;
    let f = Math.floor(Math.random()*4)
    console.log(`${cadastro[i].nome} possui umx amigx que se chama ${cadastro[i].amigos[f]}`);
}
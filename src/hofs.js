// 1. Crie uma função que receba um objeto como parâmetro e retorne um array contendo as chaves desse objeto
function obterChaves(objeto) {
    // Pegando as palavras Chaves com Object.Keys
    const chavesItens = Object.keys(objeto);
    return chavesItens;
}

console.log(obterChaves({ nome: 'Fulano', idade: 30, profissao: 'Programador' })); // saída esperada: ['nome', 'idade', 'profissao']
console.log(obterChaves({ a: 1, b: 2, c: 3 })); // saída esperada: ['a', 'b', 'c']
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. Dada uma lista de objetos que representam pessoas, crie uma nova lista com o nome de cada pessoa em maiúsculas e retorne essa lista
function PessoasMaiusculas() {
    const pessoasX = [
        { nome: "João", idade: 20 },            
        { nome: "Maria", idade: 30 },
        { nome: "Pedro", idade: 25 },
    ];
    const maiusculo = pessoasX.map(pessoas => pessoas.nome.toUpperCase());
    // Percorrendo a lista e Usando  toUpperCase para deixar maisculas as letras
    
    // exibindo o valor no console
    return maiusculo;
}
console.log(PessoasMaiusculas()); // saída esperada: ["JOÃO", "MARIA", "PEDRO"]
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3. Dada uma lista de objetos que representam produtos, crie uma nova lista com o preço de cada produto com desconto de 10% e retorne essa lista
function ProdutosPrecoDesconto() {
    const produtosX = [
        { nome: "Camiseta", preco: 30 },
        { nome: "Calça", preco: 50 },
        { nome: "Jaqueta", preco: 100 },
    ];
    // percorrendo a lista e pegando os valores dos preco e diminuindo pelo desconto
    const listaValores = produtosX.map(pessoas => pessoas.preco - (pessoas.preco * 0.1));
    return listaValores;
}
console.log(ProdutosPrecoDesconto()); // saída esperada: [27, 45, 90]
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4. Dada uma lista de objetos que representam pessoas, crie uma nova lista com as pessoas maiores de idade (idade >= 18) e retorne essa lista
function PessoasMaiorIdade() {
    const pessoasY = [
        { nome: "João", idade: 20 },
        { nome: "Maria", idade: 15 },
        { nome: "Pedro", idade: 25 },
    ];
    //O filter vai percorrer a lista e filtrar aquelas pessoas que possui idade maior ou igual a 18
    const maiorsIdade = pessoasY.filter(pessoa => pessoa.idade >= 18);
    return maiorsIdade
}
console.log(PessoasMaiorIdade()); // saída esperada: [{ nome: "João", idade: 20 }, { nome: "Pedro", idade: 25 }]
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5. Dada uma lista de strings, crie uma nova lista com as strings que têm mais de 5 caracteres e retorne essa lista
function StringCincoCaracteres() {
    const palavrasX = ["gato", "cachorro", "leão", "tartaruga"];
    //Utilizar o filter e lenght para filtrar e comparar as palavras com mais de 5 caracteres
    const maiorCinco = palavrasX.filter(people => people.length > 5);
    return maiorCinco
}
console.log(StringCincoCaracteres()); // saída esperada: ["cachorro", "tartaruga"]
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 6. Dada uma lista de objetos que representam produtos, crie uma nova lista com os produtos que custam mais de 50 reais e retorne essa lista
function ProdutosMaioresCinquenta() {
    const produtosY = [
        { nome: "Camiseta", preco: 30 },
        { nome: "Calça", preco: 50 },
        { nome: "Jaqueta", preco: 100 },
    ];
    // Percorrer a lista de produtos com o filter e comparando se o preço é maior de 100 reais
    const maiorCinquenta = produtosY.filter(produt => produt.preco > 50); 
    return maiorCinquenta;
}
console.log(ProdutosMaioresCinquenta()); // saída esperada: [{ nome: "Jaqueta", preco: 100 }]
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 7. Dada uma lista de objetos que representam produtos, calcule o preço total de todos eles e retorne esse valor
function CalculaPrecoTotal() {
    const produtosZ = [
        { nome: "Camiseta", preco: 30 },
        { nome: "Calça", preco: 50 },
        { nome: "Jaqueta", preco: 100 },
    ];
    //Utiliza o reduce para calcular, utilizando o acumulador inicializado no 0 e somando os valores do objeto
    const valorTotal = produtosZ.reduce((acc, val) => acc + val.preco, 0)
    return valorTotal
}
console.log(CalculaPrecoTotal()); // saída esperada: 180
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 8. Dada uma lista de objetos que representam alunos, imprima no console o nome de cada um deles
function ListaObjetoAlunos() {
    const alunos = [
        { nome: "João", idade: 18 },
        { nome: "Maria", idade: 20 },
        { nome: "Pedro", idade: 22 },
    ];
        // Variavel vazia que vai receber o nome de cada aluno que tem na lista
       const testeAlunos = alunos.map(name =>name.nome)
       return testeAlunos;      
}

console.log(ListaObjetoAlunos());
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 9. Dada uma lista de objetos que representam produtos, calcule o preço total de todos eles e imprima no console
function ListaObjetosProdutos() {
    const produtosA = [
        { nome: "Camiseta", preco: 30 },
        { nome: "Calça", preco: 50 },
        { nome: "Jaqueta", preco: 100 },
    ];
      //Utiliza o reduce para calcular, utilizando o acumulador inicializado no 0 e somando os valores do objeto
    const valorTotal = produtosA.reduce((acc, val) => acc + val.preco, 0)
    return valorTotal
}

console.log(ListaObjetosProdutos());
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 10. Dada uma lista de produtos, verifique se todos têm um preço maior que R$ 10,00
function ListaProdutoMaiorQueDez() {
    const produtosB = [                             
        { nome: "Camiseta", preco: 30 },
        { nome: "Calça", preco: 50 },
        { nome: "Jaqueta", preco: 100 },
    ];
    
    // Declarando como true se todos os valores forem maior que 10
    const verdadeiro = true;
    //Filtrando o valor maior que 10 reais
    const maior10reais = produtosB.filter(precos => precos.preco > 10)
    verdadeiro == maior10reais;
    return verdadeiro;
}
console.log(ListaProdutoMaiorQueDez());
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 11. Dada uma lista de nomes, verifique se pelo menos um deles começa com a letra "A”

function NomeComLetraA() {                                  
    const nomes = ["Pedro", "Ana", "Carla", "Márcio"];
    // Retornando a true se o nome inicia com a letra A   
    const verdadeiroA = true; 
    //Utiliza o find e include para descobrir o nome da pessoa com letra  a no inicio
    const letraA = nomes.find(letra => letra.includes("A"))
    verdadeiroA == letraA;
    return verdadeiroA;
}                   

console.log(NomeComLetraA());
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 12. Dado um array de objetos, encontre o objeto com o nome "João”
function ArrayObjetosJoao(){
    const pessoasA = [
        { nome: "Ana", idade: 30 },                     
        { nome: "João", idade: 25 },
        { nome: "Maria", idade: 40 },
    ];

    //Find para encontrar a pessoa com o nome de joão
    const nomeJoao = pessoasA.find(pessoa => pessoa.nome === "João")
    return nomeJoao
}



console.log(ArrayObjetosJoao());
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 13. Dado um array de objetos, encontre o objeto com a maior idade
function ArrayObjetosMaiorIdade(){
    const pessoasB = [
        { nome: "Ana", idade: 30 },                     
        { nome: "João", idade: 25 },
        { nome: "Maria", idade: 40 },
    ];

    //Reduce compara o primeiro valor com o próximo e utiliza o if ternario para retornar quando encontrar o objeto
    //com o valor desejado

    const pessoa = pessoasB.reduce(function(prev, current) {
        return (prev.idade > current.idade) ? prev : current
    })
    return pessoa
}

console.log(ArrayObjetosMaiorIdade());

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export {
    obterChaves, PessoasMaiusculas, ProdutosPrecoDesconto, PessoasMaiorIdade,
    StringCincoCaracteres, ProdutosMaioresCinquenta, CalculaPrecoTotal, ListaObjetoAlunos, ListaObjetosProdutos,
    ListaProdutoMaiorQueDez, NomeComLetraA, ArrayObjetosJoao, ArrayObjetosMaiorIdade
};
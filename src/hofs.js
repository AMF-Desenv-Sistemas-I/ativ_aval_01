// 1. Crie uma função que receba um objeto como parâmetro e retorne um array contendo as chaves desse objeto
function obterChaves(objeto) {
    return Object.keys(objeto);
}

console.log(obterChaves({ nome: 'Fulano', idade: 30, profissao: 'Programador' })); // saída esperada: ['nome', 'idade', 'profissao']
console.log(obterChaves({ a: 1, b: 2, c: 3 })); // saída esperada: ['a', 'b', 'c']
//Comentário: Foi feito o retorno por meio da Object que pegou apenas as chaves direto. 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. Dada uma lista de objetos que representam pessoas, crie uma nova lista com o nome de cada pessoa em maiúsculas e retorne essa lista
function PessoasMaiusculas() {
    const pessoasX = [
        { nome: "João", idade: 20 },
        { nome: "Maria", idade: 30 },
        { nome: "Pedro", idade: 25 },
    ];
    const pessoas = pessoasX.map(pessoa => pessoa.nome.toUpperCase());
    return pessoas;
}
//PessoasMaiusculas(pessoas); // saída esperada: ["JOÃO", "MARIA", "PEDRO"]

//Comentário: Nesta função foi usado o map para mapear os nomes e depois o toUpperCase para deixá-las maiusculas.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3. Dada uma lista de objetos que representam produtos, crie uma nova lista com o preço de cada produto com desconto de 10% e retorne essa lista
function ProdutosPrecoDesconto() {
    const produtosX = [
        { nome: "Camiseta", preco: 30 },
        { nome: "Calça", preco: 50 },
        { nome: "Jaqueta", preco: 100 },
    ];
    
    const produtos = produtosX.map(produto => produto.preco - (produto.preco * 0.10));
    return produtos;
}
ProdutosPrecoDesconto(); // saída esperada: [27, 45, 90]

//Comentário: Foi criado uma const produtos, onde foi pego os dados da produtosX e usado o map para servir como um for,
// porém, mais simplificado para correr e pela arrow function calcular o preco - 0.10 .
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4. Dada uma lista de objetos que representam pessoas, crie uma nova lista com as pessoas maiores de idade (idade >= 18) e retorne essa lista
function PessoasMaiorIdade() {
    const pessoasY = [
        { nome: "João", idade: 20 },
        { nome: "Maria", idade: 15 },
        { nome: "Pedro", idade: 25 },
    ];
    const pessoaMaior = pessoasY.filter(pessoa => pessoa.idade >= 18);
    return pessoaMaior;
}

//PessoasMaiorIdade(); // saída esperada: [{ nome: "João", idade: 20 }, { nome: "Pedro", idade: 25 }]

//Comentário: Foi usada o every até encontrar algum elemento em que a função retorne um valor false, ou seja, os maiores de idade.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5. Dada uma lista de strings, crie uma nova lista com as strings que têm mais de 5 caracteres e retorne essa lista
function StringCincoCaracteres() {
    const palavrasX = ["gato", "cachorro", "leão", "tartaruga"];
    const string = palavrasX.filter(strings => strings.length > 5);
    return string;
}
StringCincoCaracteres(); // saída esperada: ["cachorro", "tartaruga"]

//Comentário: Nesta function foi usado o filter para filtrar apenas as palavras que tivessem mais de 5 caracteres,
//ou seja, as mariores que 5.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 6. Dada uma lista de objetos que representam produtos, crie uma nova lista com os produtos que custam mais de 50 reais e retorne essa lista
function ProdutosMaioresCinquenta() {
    const produtosY = [
        { nome: "Camiseta", preco: 30 },
        { nome: "Calça", preco: 50 },
        { nome: "Jaqueta", preco: 100 },
    ];
    const pessoaMaior = produtosY.filter(pessoa => pessoa.preco > 50);
    return pessoaMaior;
}

ProdutosMaioresCinquenta(); // saída esperada: [{ nome: "Jaqueta", preco: 100 }]

//Comentário: Foi usado o filter até encontrar em todos os valores que tem preço maior que 50 reais.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 7. Dada uma lista de objetos que representam produtos, calcule o preço total de todos eles e retorne esse valor
function CalculaPrecoTotal() {
    const produtosZ = [
        { nome: "Camiseta", preco: 30 },
        { nome: "Calça", preco: 50 },
        { nome: "Jaqueta", preco: 100 },
    ];
    const total = produtosZ.reduce((acumulador, produto) => acumulador + produto.preco, 0);
    return total;
}
//CalculaPrecoTotal(Total); // saída esperada: 180

//Comentário: Foi usado o reduce para pegar o valor de cada item, e no final foram criadas as variaveis acumulador e o numero
//para criar a regra da soma dos valores. 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 8. Dada uma lista de objetos que representam alunos, imprima no console o nome de cada um deles
function ListaObjetoAlunos() {
    const alunos = [
        { nome: "João", idade: 18 },
        { nome: "Maria", idade: 20 },
        { nome: "Pedro", idade: 22 },
    ];
    const pessoas = alunos.map(pessoa => pessoa.nome);
    return pessoas;
}

ListaObjetoAlunos();

//Comentários: Foi usado o map para mapear todos os nomes dos alunos.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 9. Dada uma lista de objetos que representam produtos, calcule o preço total de todos eles e imprima no console
function ListaObjetosProdutos() {
    const produtosA = [
        { nome: "Camiseta", preco: 30 },
        { nome: "Calça", preco: 50 },
        { nome: "Jaqueta", preco: 100 },
    ];
    const total = produtosA.reduce((acumulador, produto) => acumulador + produto.preco, 0);
    return total;
}

ListaObjetosProdutos();

//Comentário: Foi usado o reduce para pegar o valor de cada item, e no final foram criadas as variaveis acumulador e o numero
//para criar a regra da soma dos valores.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 10. Dada uma lista de produtos, verifique se todos têm um preço maior que R$ 10,00
function ListaProdutoMaiorQueDez() {
    const produtosB = [
        { nome: "Camiseta", preco: 30 },
        { nome: "Calça", preco: 50 },
        { nome: "Jaqueta", preco: 100 },
    ];
    const maior = produtosB.every(produto => produto.preco > 10);
    return maior;
}
ListaProdutoMaiorQueDez();

//Comentário: Foi usado o every, até que ele encontrasse um elemento que no caso seria os maiores que 10.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 11. Dada uma lista de nomes, verifique se pelo menos um deles começa com a letra "A”
function NomeComLetraA() {
    const nomes = ["Pedro", "Ana", "Carla", "Márcio"];

    const validate = nomes.some(nome => nome.includes("A"));
    return validate;
}

NomeComLetraA();

//Comentário: foi usado o some na const para verificar se era verdadeiro se uma das palavras começava com A e o
//includes que determina se um conjunto de caracteres pode ser encontrado.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 12. Dado um array de objetos, encontre o objeto com o nome "João”
function ArrayObjetosJoao(){
    const pessoasA = [
        { nome: "Ana", idade: 30 },
        { nome: "João", idade: 25 },
        { nome: "Maria", idade: 40 },
    ];
    const pessoa = pessoasA.find(pessoas => pessoas.nome === "João");
    return pessoa;
}

ArrayObjetosJoao();

//Comentário: Foi usado o find para verificar se tal nome existe na const pessoasA, senão existisse ele retornaria,
//undefined.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 13. Dado um array de objetos, encontre o objeto com a maior idade
function ArrayObjetosMaiorIdade(){
    const pessoasB = [
        { nome: "Ana", idade: 30 },
        { nome: "João", idade: 25 },
        { nome: "Maria", idade: 40 },
    ];
    const maior = pessoasB.reduce(function (previous, current){
        return (previous.idade > current.idade)? previous : current;
    })
    return maior;
}

ArrayObjetosMaiorIdade();

//Comentário: Foi criada uma função dentro do pessoasB.reduce com duas variaveis que depois embaixo,
//no retorno iriam pegar as maiores idades que seriam o previous.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export {
    obterChaves, PessoasMaiusculas, ProdutosPrecoDesconto, PessoasMaiorIdade,
    StringCincoCaracteres, ProdutosMaioresCinquenta, CalculaPrecoTotal, ListaObjetoAlunos, ListaObjetosProdutos,
    ListaProdutoMaiorQueDez, NomeComLetraA, ArrayObjetosJoao, ArrayObjetosMaiorIdade
};
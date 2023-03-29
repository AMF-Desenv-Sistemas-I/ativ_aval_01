// 1. Crie uma função que receba um objeto como parâmetro e retorne um array contendo as chaves desse objeto
function obterChaves(objeto) {
    //retorna as chaves do objeto passado como parâmetro
    return Object.keys(objeto);
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
    //percorre todos os valores do array com "map" e onde a key for "nome" troca o valor para uppercase
    const nomes = pessoasX.map(names => names.nome.toUpperCase());
    return nomes;
}
PessoasMaiusculas(); // saída esperada: ["JOÃO", "MARIA", "PEDRO"]
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3. Dada uma lista de objetos que representam produtos, crie uma nova lista com o preço de cada produto com desconto de 10% e retorne essa lista
function ProdutosPrecoDesconto() {
    const produtosX = [
        { nome: "Camiseta", preco: 30 },
        { nome: "Calça", preco: 50 },
        { nome: "Jaqueta", preco: 100 },
    ];
    //percorre valores do array e multiplica o preço por 90% do valor
    const descontos = produtosX.map(desc => desc.preco * 0.9);
    return descontos;
}
ProdutosPrecoDesconto(); // saída esperada: [27, 45, 90]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4. Dada uma lista de objetos que representam pessoas, crie uma nova lista com as pessoas maiores de idade (idade >= 18) e retorne essa lista
function PessoasMaiorIdade() {
    const pessoasY = [
        { nome: "João", idade: 20 },
        { nome: "Maria", idade: 15 },
        { nome: "Pedro", idade: 25 },
    ];
    //filtra onde as idades forem menores ou iguais a 18
    const maioresIdade = pessoasY.filter(pessoa => pessoa.idade >= 18);
    return maioresIdade;
}
PessoasMaiorIdade();
// saída esperada: [{ nome: "João", idade: 20 }, { nome: "Pedro", idade: 25 }]
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5. Dada uma lista de strings, crie uma nova lista com as strings que têm mais de 5 caracteres e retorne essa lista
function StringCincoCaracteres() {
    const palavrasX = ["gato", "cachorro", "leão", "tartaruga"];
    //filtra as palavras em que o array tiver um tamanho maior que 5
    const moreThanFive = palavrasX.filter(num => num.length > 5);
    return moreThanFive;
}
StringCincoCaracteres();
// saída esperada: ["cachorro", "tartaruga"]
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 6. Dada uma lista de objetos que representam produtos, crie uma nova lista com os produtos que custam mais de 50 reais e retorne essa lista
function ProdutosMaioresCinquenta() {
    const produtosY = [
        { nome: "Camiseta", preco: 30 },
        { nome: "Calça", preco: 50 },
        { nome: "Jaqueta", preco: 100 },
    ];
    //filtra onde o preço for maior que 50
    const moreThanFifty = produtosY.filter(price => price.preco > 50);
    return moreThanFifty;
}
ProdutosMaioresCinquenta();
// saída esperada: [{ nome: "Jaqueta", preco: 100 }]
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 7. Dada uma lista de objetos que representam produtos, calcule o preço total de todos eles e retorne esse valor
function CalculaPrecoTotal() {
    const produtosZ = [
        { nome: "Camiseta", preco: 30 },
        { nome: "Calça", preco: 50 },
        { nome: "Jaqueta", preco: 100 },
    ];
    //função reduce com 2 paramentros (total, price) total sendo o acumulador e price.preco o iterador e 0 como valor inicial do acumulador
    const sum = produtosZ.reduce((total, price) => total + price.preco, 0);
    return sum;
}
CalculaPrecoTotal();
// saída esperada: 180
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 8. Dada uma lista de objetos que representam alunos, imprima no console o nome de cada um deles
function ListaObjetoAlunos() {
    const alunos = [
        { nome: "João", idade: 18 },
        { nome: "Maria", idade: 20 },
        { nome: "Pedro", idade: 22 },
    ];
    let alunosList = [];
    //função que percorre cada item e da push pra dentro da lista onde a key é "nome"
    alunos.forEach(aluno => alunosList.push(aluno.nome));
    return alunosList;
}

ListaObjetoAlunos();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 9. Dada uma lista de objetos que representam produtos, calcule o preço total de todos eles e imprima no console
function ListaObjetosProdutos() {
    const produtosA = [
        { nome: "Camiseta", preco: 30 },
        { nome: "Calça", preco: 50 },
        { nome: "Jaqueta", preco: 100 },
    ];
    // função reduce dois parametros total iniciando em 0 e item vai somando os preços com o valor total
    const sumTotal = produtosA.reduce((total, item) => total + item.preco, 0);
    return sumTotal;
}

ListaObjetosProdutos();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 10. Dada uma lista de produtos, verifique se todos têm um preço maior que R$ 10,00
function ListaProdutoMaiorQueDez() {
    const produtosB = [
        { nome: "Camiseta", preco: 30 },
        { nome: "Calça", preco: 50 },
        { nome: "Jaqueta", preco: 100 },
    ];
    //every é um método usado para verificar o valor atende à condição passada
    const checker = produtosB.every(check => check.preco > 10);
    return checker;
}
ListaProdutoMaiorQueDez();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 11. Dada uma lista de nomes, verifique se pelo menos um deles começa com a letra "A”
function NomeComLetraA() {
    const nomes = ["Pedro", "Ana", "Carla", "Márcio"];
    //some retorna true se algum dos valores for verdadeiro, e o metodo charAt confere se o valor na posição 0 (indice) é igual a 'A'
    let nomeComA = nomes.some(todosNomes => todosNomes.charAt(0) === 'A');
    console.log(nomeComA);
    return nomeComA;
}
NomeComLetraA();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 12. Dado um array de objetos, encontre o objeto com o nome "João”
function ArrayObjetosJoao() {
    const pessoasA = [
        { nome: "Ana", idade: 30 },
        { nome: "João", idade: 25 },
        { nome: "Maria", idade: 40 },
    ];
    //find retorna o primeiro valor que satisfaça a condição
    const nomeJoao = pessoasA.find(objeto => objeto.nome === "João");
    return nomeJoao;
}

ArrayObjetosJoao();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 13. Dado um array de objetos, encontre o objeto com a maior idade
function ArrayObjetosMaiorIdade() {
    const pessoasB = [
        { nome: "Ana", idade: 30 },
        { nome: "João", idade: 25 },
        { nome: "Maria", idade: 40 },
    ];
    //reduce com 2 parametros, o proximo e o maior. ? trabalha como if.
    //condição: se o proximo numero for maior que o numero "maior", ? executa o codigo que torna o proximo numero da lista o maior
    let maiorIdade = pessoasB.reduce((proximo, maior) => proximo > maior ? proximo : maior);
    return maiorIdade;
}

ArrayObjetosMaiorIdade();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export {
    obterChaves, PessoasMaiusculas, ProdutosPrecoDesconto, PessoasMaiorIdade,
    StringCincoCaracteres, ProdutosMaioresCinquenta, CalculaPrecoTotal, ListaObjetoAlunos, ListaObjetosProdutos,
    ListaProdutoMaiorQueDez, NomeComLetraA, ArrayObjetosJoao, ArrayObjetosMaiorIdade
};
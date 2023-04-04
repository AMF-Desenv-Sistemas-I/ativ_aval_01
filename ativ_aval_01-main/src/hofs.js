// 1. Crie uma função que receba um objeto como parâmetro e retorne um array contendo as chaves desse objeto
function obterChaves(objeto) {
    return Object.keys(objeto);  //retorna as chaves
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
    const nomesUpercase = pessoasX.map(pessoa => pessoa.nome.toUpperCase());        //utiliza a função da biblioteca para
                                                                                    //deixar tudo em maiusculo
    return nomesUpercase;
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
    const desconto = produtosX.map(produto => produto.preco - (produto.preco * 0.10));      //aplica desconto de 10%
    return desconto;
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
    const pessoas = pessoasY.filter(pessoa => pessoa.idade >= 18);          //filtra apenas as pessoas com maior ou igual a 18 anos
    return pessoas;
}

PessoasMaiorIdade(); // saída esperada: [{ nome: "João", idade: 20 }, { nome: "Pedro", idade: 25 }]
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5. Dada uma lista de strings, crie uma nova lista com as strings que têm mais de 5 caracteres e retorne essa lista
function StringCincoCaracteres() {
    const palavrasX = ["gato", "cachorro", "leão", "tartaruga"];
    const palavras = palavrasX.filter(palavra => palavra.length > 5);       //filtra as palavras usando a função length 
    return palavras;
}
StringCincoCaracteres(); // saída esperada: ["cachorro", "tartaruga"]
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 6. Dada uma lista de objetos que representam produtos, crie uma nova lista com os produtos que custam mais de 50 reais e retorne essa lista
function ProdutosMaioresCinquenta() {
    const produtosY = [
        { nome: "Camiseta", preco: 30 },
        { nome: "Calça", preco: 50 },
        { nome: "Jaqueta", preco: 100 },
    ];
    const produtos = produtosY.filter(produto => produto.preco > 50);       //filtra apenas os valores maiores de 50
    return produtos;
}

ProdutosMaioresCinquenta(); // saída esperada: [{ nome: "Jaqueta", preco: 100 }]
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 7. Dada uma lista de objetos que representam produtos, calcule o preço total de todos eles e retorne esse valor
function CalculaPrecoTotal() {
    const produtosZ = [
        { nome: "Camiseta", preco: 30 },
        { nome: "Calça", preco: 50 },
        { nome: "Jaqueta", preco: 100 },
    ];
    const total = produtosZ.reduce((acumulador, produto) => acumulador + produto.preco, 0);     //função reduce soma todos os elementos da lista
    return total;
}
CalculaPrecoTotal(); // saída esperada: 180
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 8. Dada uma lista de objetos que representam alunos, imprima no console o nome de cada um deles
function ListaObjetoAlunos() {
    const alunos = [
        { nome: "João", idade: 18 },
        { nome: "Maria", idade: 20 },
        { nome: "Pedro", idade: 22 },
    ];
    const Alunos = alunos.map(aluno => aluno.nome);        //função map retorna somente os atributos nomes da lista
    return Alunos;
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
    const total = produtosA.reduce((acumulador, produto) => acumulador + produto.preco, 0);   //reduce soma todos elementos da lista
    return total;
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
    const valida = produtosB.every(produto => produto.preco > 10);   //every verifica se todos os elementos da lista sao maiores que 10
    return valida;
}
ListaProdutoMaiorQueDez();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 11. Dada uma lista de nomes, verifique se pelo menos um deles começa com a letra "A”
function NomeComLetraA() {
    const nomes = ["Pedro", "Ana", "Carla", "Márcio"];
}
    const validar = nomes.some(nome => nome.includes("A")); //some verifica se o retorno é verdadeiro
                                                            //e passa como parametro a letra A
    return validar;

NomeComLetraA();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 12. Dado um array de objetos, encontre o objeto com o nome "João”
function ArrayObjetosJoao(){
    const pessoasA = [
        { nome: "Ana", idade: 30 },
        { nome: "João", idade: 25 },
        { nome: "Maria", idade: 40 },
    ];
    const pessoa = pessoasA.find(pessoa => pessoa.nome === "João"); //find procura o elemento com o parametro passado na funcao
    return pessoa;
}

ArrayObjetosJoao();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 13. Dado um array de objetos, encontre o objeto com a maior idade
function ArrayObjetosMaiorIdade(){
    const pessoasB = [
        { nome: "Ana", idade: 30 },
        { nome: "João", idade: 25 },
        { nome: "Maria", idade: 40 },
    ];
    const pessoa = pessoasB.reduce(function (prev, current) {
        return (prev.idade > current.idade) ? prev : current        //verifica se a idade anterior é maior que a proxima
                                                                    //ternario é usado se precisar trocar
    })
    return pessoa;
}

ArrayObjetosMaiorIdade();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export {
    obterChaves, PessoasMaiusculas, ProdutosPrecoDesconto, PessoasMaiorIdade,
    StringCincoCaracteres, ProdutosMaioresCinquenta, CalculaPrecoTotal, ListaObjetoAlunos, ListaObjetosProdutos,
    ListaProdutoMaiorQueDez, NomeComLetraA, ArrayObjetosJoao, ArrayObjetosMaiorIdade
};
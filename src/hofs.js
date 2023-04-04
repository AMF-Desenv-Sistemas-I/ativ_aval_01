// 1. Crie uma função que receba um objeto como parâmetro e retorne um array contendo as chaves desse objeto
// usei o Object.keys que retorna somente as chaves
function obterChaves(objeto) {
    return Object.keys(objeto)
}

console.log(obterChaves({ nome: 'Fulano', idade: 30, profissao: 'Programador' })); // saída esperada: ['nome', 'idade', 'profissao']
console.log(obterChaves({ a: 1, b: 2, c: 3 })); // saída esperada: ['a', 'b', 'c']
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. Dada uma lista de objetos que representam pessoas, crie uma nova lista com o nome de cada pessoa em maiúsculas e retorne essa lista
// fiz um map no array e usei a função toUpperCase()
function PessoasMaiusculas() {
    const pessoasX = [
        { nome: "João", idade: 20 },
        { nome: "Maria", idade: 30 },
        { nome: "Pedro", idade: 25 },
    ];

    const nomesUpercase = pessoasX.map(pessoa => pessoa.nome.toUpperCase());
    return nomesUpercase;
}
PessoasMaiusculas(); // saída esperada: ["JOÃO", "MARIA", "PEDRO"]
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3. Dada uma lista de objetos que representam produtos, crie uma nova lista com o preço de cada produto com desconto de 10% e retorne essa lista
// fiz um map no array para calcular o desconto
function ProdutosPrecoDesconto() {
    const produtosX = [
        { nome: "Camiseta", preco: 30 },
        { nome: "Calça", preco: 50 },
        { nome: "Jaqueta", preco: 100 },
    ];

    const produtosDesconto = produtosX.map(produto => produto.preco - (produto.preco * 0.10));
    return produtosDesconto;
}
ProdutosPrecoDesconto(); // saída esperada: [27, 45, 90]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4. Dada uma lista de objetos que representam pessoas, crie uma nova lista com as pessoas maiores de idade (idade >= 18) e retorne essa lista
// fiz um filter no array com objetos para retornar as pessoas maior de idade
function PessoasMaiorIdade() {
    const pessoasY = [
        { nome: "João", idade: 20 },
        { nome: "Maria", idade: 15 },
        { nome: "Pedro", idade: 25 },
    ];

    const pessoas = pessoasY.filter(pessoa => pessoa.idade >= 18);
    return pessoas;
}

PessoasMaiorIdade(); // saída esperada: [{ nome: "João", idade: 20 }, { nome: "Pedro", idade: 25 }]
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5. Dada uma lista de strings, crie uma nova lista com as strings que têm mais de 5 caracteres e retorne essa lista
// fiz um filter no array e verifiquei o lenght da string
function StringCincoCaracteres() {
    const palavrasX = ["gato", "cachorro", "leão", "tartaruga"];

    const palavras = palavrasX.filter(palavra => palavra.length > 5);
    return palavras;
}
StringCincoCaracteres(); // saída esperada: ["cachorro", "tartaruga"]
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 6. Dada uma lista de objetos que representam produtos, crie uma nova lista com os produtos que custam mais de 50 reais e retorne essa lista
// fiz um filter nos objetos com maior preco que 50
function ProdutosMaioresCinquenta() {
    const produtosY = [
        { nome: "Camiseta", preco: 30 },
        { nome: "Calça", preco: 50 },
        { nome: "Jaqueta", preco: 100 },
    ];

    const produtos = produtosY.filter(produto => produto.preco > 50);
    return produtos;
}

ProdutosMaioresCinquenta(); // saída esperada: [{ nome: "Jaqueta", preco: 100 }]
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 7. Dada uma lista de objetos que representam produtos, calcule o preço total de todos eles e retorne esse valor
// usei a fução reduce para somar o preço de todos
function CalculaPrecoTotal() {
    const produtosZ = [
        { nome: "Camiseta", preco: 30 },
        { nome: "Calça", preco: 50 },
        { nome: "Jaqueta", preco: 100 },
    ];

    const total = produtosZ.reduce((acumulador, produto) => acumulador + produto.preco, 0);
    return total;
}
CalculaPrecoTotal(); // saída esperada: 180
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 8. Dada uma lista de objetos que representam alunos, imprima no console o nome de cada um deles
// fiz um mapa na chave nome para retornar só os nomes
function ListaObjetoAlunos() {
    const alunos = [
        { nome: "João", idade: 18 },
        { nome: "Maria", idade: 20 },
        { nome: "Pedro", idade: 22 },
    ];

    const arrayAlunos = alunos.map(aluno => aluno.nome);
    return arrayAlunos;
}

ListaObjetoAlunos();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 9. Dada uma lista de objetos que representam produtos, calcule o preço total de todos eles e imprima no console
// usei o reduce para somar os preços dos objetos
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
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 10. Dada uma lista de produtos, verifique se todos têm um preço maior que R$ 10,00
// usei o every para retornar true se todos forem maior que 10
function ListaProdutoMaiorQueDez() {
    const produtosB = [
        { nome: "Camiseta", preco: 30 },
        { nome: "Calça", preco: 50 },
        { nome: "Jaqueta", preco: 100 },
    ];

    const validated = produtosB.every(produto => produto.preco > 10);
    return validated;
}
ListaProdutoMaiorQueDez();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 11. Dada uma lista de nomes, verifique se pelo menos um deles começa com a letra "A”
// usei o some para verificar se pelo menos 1 e true e se no item do array a letra a com a função includes()
function NomeComLetraA() {
    const nomes = ["Pedro", "Ana", "Carla", "Márcio"];

    const validated = nomes.some(nome => nome.includes("A"));
    return validated;
}

NomeComLetraA();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 12. Dado um array de objetos, encontre o objeto com o nome "João”
// usei o fin para retornar o primeiro objeto com o nome João encontrado
function ArrayObjetosJoao() {
    const pessoasA = [
        { nome: "Ana", idade: 30 },
        { nome: "João", idade: 25 },
        { nome: "Maria", idade: 40 },
    ];

    const pessoa = pessoasA.find(pessoa => pessoa.nome === "João");
    return pessoa;
}

ArrayObjetosJoao();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 13. Dado um array de objetos, encontre o objeto com a maior idade
// usei um reduce e uma função dentro para verificar se a idade anterior e maior que a proxima e depois um ternario se for preciso trocar
function ArrayObjetosMaiorIdade() {
    const pessoasB = [
        { nome: "Ana", idade: 30 },
        { nome: "João", idade: 25 },
        { nome: "Maria", idade: 40 },
    ];

    const pessoa = pessoasB.reduce(function (prev, current) {
        return (prev.idade > current.idade) ? prev : current
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
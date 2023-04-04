// 1. Crie uma função que receba um objeto como parâmetro e retorne um array contendo as chaves desse objeto
function obterChaves(objeto) {
    return Object.keys(objeto); // apenas retorno as chaves do objeto recebido
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

    const nomesUpperCase = pessoasX.map(pessoa => pessoa.nome.toUpperCase()); // utilizo o map para criar um novo array, apenas com os nomes e entro com toUpperCase para deixa-los todos em caixa alta
    return nomesUpperCase;
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
    
    const valoresComDesconto = produtosX.map(produtos => produtos.preco * 0.9) // novamente utilizo o map para criar um array com os preços, e entro multiplicando por 0.9 (10% de desconto)
    return valoresComDesconto;
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

    const pessoasMaiores = pessoasY.filter(pessoa => pessoa.idade >= 18); // Utilizo a o médoto filter para remoção das pessoas com menos de 18 anos
    return pessoasMaiores;
}

PessoasMaiorIdade(); // saída esperada: [{ nome: "João", idade: 20 }, { nome: "Pedro", idade: 25 }]
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5. Dada uma lista de strings, crie uma nova lista com as strings que têm mais de 5 caracteres e retorne essa lista
function StringCincoCaracteres() {
    const palavrasX = ["gato", "cachorro", "leão", "tartaruga"];
    return palavrasX.filter(palavra => palavra.length > 5); // utilizo p metodo filter para fazer a remoção das palavras que me retornarem 5 ou menos no length
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

    return produtosY.filter(produto => produto.preco > 50); // filter novamente, dessa vez só comparando o preço do produto como solicitado
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

    const precoTotal = produtosZ.reduce((total, produto) => { 
        return total + produto.preco; // utilizo o metodo reduce para somar o preco de todos os produtos e atribuilos na const precoTotal
    }, 0);
    
    return precoTotal; //devolvo precoTotal
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

    const nomesAlunos = alunos.map((aluno) => aluno.nome); // apenas utilizo o metodo map para retirar o nome de cada aluno e atribir eo array nomesAlunos
    console.log(nomesAlunos);
    return nomesAlunos;
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
    const precoTotal = produtosA.reduce((total, produto) => {
        return total + produto.preco; /// utilizo o metodo reduce para somar o preco de todos os produtos e atribuilos na const precoTotal (mesma coisa da 7)
    }, 0);
    
    console.log(precoTotal); 
    return precoTotal; // tive que retornar se não não passava nos testes
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

    return produtosB.every(produto => produto.preco > 10); // utilizo metodo every que faz a validação (produto.preco > 10), retornando true se todos se enquadrarem na condição, se não retorna false
}
ListaProdutoMaiorQueDez();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 11. Dada uma lista de nomes, verifique se pelo menos um deles começa com a letra "A”
function NomeComLetraA() {
    const nomes = ["Pedro", "Ana", "Carla", "Márcio"];

    return nomes.some(nome => nome.startsWith('A')); // utilizo o metodo some, verificando com o metodo startsWith se pelo menos um dos nomes do array começa com a letra 'A', caso contrario retorna false
}

NomeComLetraA();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 12. Dado um array de objetos, encontre o objeto com o nome "João”
function ArrayObjetosJoao(){
    const pessoasA = [
        { nome: "Ana", idade: 30 },
        { nome: "João", idade: 25 },
        { nome: "Maria", idade: 40 },
    ];

    return pessoasA.find((objeto) => objeto.nome === "João"); // utilizo o metodo every para verificar se algum nome do objeto se enquadra na minha condição (nome === "João")
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

    return pessoasB.reduce((pessoaMaisVelha, pessoa) => { // retorno o resultado que o metodo reduce me devolver
        return pessoa.idade > pessoaMaisVelha.idade ? pessoa : pessoaMaisVelha; // com o loop do reduce, verifico um por um se é maior que o outro, o resultado é semelhante ao que é conhecido como "Método Bolha", mas nesse caso reduce facilita bastante
    });
}

ArrayObjetosMaiorIdade();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export {
    obterChaves, PessoasMaiusculas, ProdutosPrecoDesconto, PessoasMaiorIdade,
    StringCincoCaracteres, ProdutosMaioresCinquenta, CalculaPrecoTotal, ListaObjetoAlunos, ListaObjetosProdutos,
    ListaProdutoMaiorQueDez, NomeComLetraA, ArrayObjetosJoao, ArrayObjetosMaiorIdade
};

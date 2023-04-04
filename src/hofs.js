// 1. Crie uma função que receba um objeto como parâmetro e retorne um array contendo as chaves desse objeto
function obterChaves(objeto) { // criação da função com seu parâmetro
    let chaves = Object.keys(objeto);    
    return chaves;
}

console.log(obterChaves({ nome: 'Fulano', idade: 30, profissao: 'Programador' })); // saída esperada: ['nome', 'idade', 'profissao']
console.log(obterChaves({ a: 1, b: 2, c: 3 })); // saída esperada: ['a', 'b', 'c']
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// 2. Dada uma lista de objetos que representam pessoas, crie uma nova lista com o nome de cada pessoa em maiúsculas e retorne essa lista
function PessoasMaiusculas() {  // criação da função sem parâmetros
    const pessoasX = [ // criação do objeto
        { nome: "João", idade: 20 },  // dados dos objetos
        { nome: "Maria", idade: 30 },  // dados dos objetos
        { nome: "Pedro", idade: 25 },  // dados dos objetos
    ];
    const nomesMaiusculas = pessoasX.map(nomes => nomes.nome.toUpperCase());  //toUpperCase para transformar as strings em letras maiúsculas
    console.log(nomesMaiusculas);  // mostrar na tela as strings com letras maiúsculas
    return nomesMaiusculas;  // retorna as palavras com letras maiúsculas
}
PessoasMaiusculas(); // saída esperada: ["JOÃO", "MARIA", "PEDRO"]
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// 3. Dada uma lista de objetos que representam produtos, crie uma nova lista com o preço de cada produto com desconto de 10% e retorne essa lista
function ProdutosPrecoDesconto() {  // criação da função sem parâmetros
    const produtosX = [
        { nome: "Camiseta", preco: 30 },  // dados dos objetos
        { nome: "Calça", preco: 50 },  // dados dos objetos
        { nome: "Jaqueta", preco: 100 },  // dados dos objetos
    ];
    const precosNovos = produtosX.map(precos => precos.preco * 0.9);  //  armazena em uma nova variável os produtos com desconto
    console.log(precosNovos);  // mostra os produtos com os preços atualizados
    return precosNovos;  // retorna os preços novos
}
ProdutosPrecoDesconto(); // saída esperada: [27, 45, 90]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// 4. Dada uma lista de objetos que representam pessoas, crie uma nova lista com as pessoas maiores de idade (idade >= 18) e retorne essa lista
function PessoasMaiorIdade() {  // criação da função sem parâmetros
    const pessoasY = [
        { nome: "João", idade: 20 },  // dados dos objetos
        { nome: "Maria", idade: 15 },  // dados dos objetos
        { nome: "Pedro", idade: 25 },  // dados dos objetos
    ];
    const maiorIdade = pessoasY.filter(pessoas => pessoas.idade >= 18);  //  usado o filter para criar um novo array com idade igual ou maior que 18
    console.log(maiorIdade);  //  mostra os maiores ou igual a 18 anos
    return maiorIdade;  // retorna o valor armazenado
}

PessoasMaiorIdade();  // saída esperada: [{ nome: "João", idade: 20 }, { nome: "Pedro", idade: 25 }]
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// 5. Dada uma lista de strings, crie uma nova lista com as strings que têm mais de 5 caracteres e retorne essa lista
function StringCincoCaracteres() {  // criação da função sem parâmetros
    const palavrasX = ["gato", "cachorro", "leão", "tartaruga"];  //  array com as string dentro
    const maior = palavrasX.filter(palavra => palavra.length > 5);  //  cria o novo array só com as strings maiores de 5
    console.log(maior);  // mostra as string maiores de 5
    return maior;  //  retorna as string maiores de 5
}
StringCincoCaracteres(); // saída esperada: ["cachorro", "tartaruga"]
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// 6. Dada uma lista de objetos que representam produtos, crie uma nova lista com os produtos que custam mais de 50 reais e retorne essa lista
function ProdutosMaioresCinquenta() {  // criação da função sem parâmetros 
    const produtosY = [
        { nome: "Camiseta", preco: 30 },  // dados dos objetos
        { nome: "Calça", preco: 50 },  // dados dos objetos
        { nome: "Jaqueta", preco: 100 },  // dados dos objetos
    ];
    const maior = produtosY.filter(produtos => produtos.preco > 50); //  cria o novo array só com os preços maiores de 50 
    console.log(maior);  // mostra os produtos com valor maior de 50
    return maior;  // retona os valores
}

ProdutosMaioresCinquenta(); // saída esperada: [{ nome: "Jaqueta", preco: 100 }]
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// 7. Dada uma lista de objetos que representam produtos, calcule o preço total de todos eles e retorne esse valor
function CalculaPrecoTotal() {  // criação da função sem parâmetros
    const produtosZ = [
        { nome: "Camiseta", preco: 30 },  // dados dos objetos
        { nome: "Calça", preco: 50 },  // dados dos objetos
        { nome: "Jaqueta", preco: 100 },  // dados dos objetos
    ];
    const total = produtosZ.filter(produto => produto.preco);  //  cria o novo array só com a soma total dos preços
    console.log(total);  // mostra o valor total armazenado na variável acima
    return total;  // retorna o total de preços dentro do array
}
CalculaPrecoTotal(); // saída esperada: 180
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// 8. Dada uma lista de objetos que representam alunos, imprima no console o nome de cada um deles
function ListaObjetoAlunos() {  // criação da função sem parâmetros
    const alunos = [
        { nome: "João", idade: 18 },  // dados dos objetos
        { nome: "Maria", idade: 20 },  // dados dos objetos
        { nome: "Pedro", idade: 22 },  // dados dos objetos
    ];
    const lista = alunos.map(nomes => nomes.nome);  // função map para mostrar só os nomes
    console.log(lista);  // mostra os nomes
    return lista;  // retorna os nomes
}

ListaObjetoAlunos();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// 9. Dada uma lista de objetos que representam produtos, calcule o preço total de todos eles e imprima no console
function ListaObjetosProdutos() {  // criação da função sem parâmetros
    const produtosA = [
        { nome: "Camiseta", preco: 30 },  // dados dos objetos
        { nome: "Calça", preco: 50 },  // dados dos objetos
        { nome: "Jaqueta", preco: 100 },  // dados dos objetos
    ];
    const total = produtosA.map(precos => precos.preco);  // map para mostrar os preços dos produtos
    console.log(total);  // mostrar o preço total
    return total;  // retorna o preço total
}

ListaObjetosProdutos();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// 10. Dada uma lista de produtos, verifique se todos têm um preço maior que R$ 10,00
function ListaProdutoMaiorQueDez() {  // criação da função sem parâmetros
    const produtosB = [
        { nome: "Camiseta", preco: 30 },
        { nome: "Calça", preco: 50 },
        { nome: "Jaqueta", preco: 100 },
    ];
    const total = produtosZ.filter(produto => produto.preco > 10);  //  cria o novo array só com a soma total dos preços
    console.log(total);  // mostra o valor total armazenado na variável acima
    return total;  // retorna o total de preços dentro do array

}
ListaProdutoMaiorQueDez();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// 11. Dada uma lista de nomes, verifique se pelo menos um deles começa com a letra "A”
function NomeComLetraA() {  // criação da função sem parâmetros
    const nomes = ["Pedro", "Ana", "Carla", "Márcio"];
    return nomes.some(nome => nome.charAt(0)==="A");
}
 


NomeComLetraA();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 12. Dado um array de objetos, encontre o objeto com o nome "João”
function ArrayObjetosJoao(){  // criação da função sem parâmetros
    const pessoasA = [
        { nome: "Ana", idade: 30 },
        { nome: "João", idade: 25 },
        { nome: "Maria", idade: 40 },
    ];
}

ArrayObjetosJoao();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// 13. Dado um array de objetos, encontre o objeto com a maior idade
function ArrayObjetosMaiorIdade(){  // criação da função sem parâmetros
    const pessoasB = [
        { nome: "Ana", idade: 30 },
        { nome: "João", idade: 25 },
        { nome: "Maria", idade: 40 },
    ];
    const pessoaMaisVelha = pessoas.reduce(function(pessoaMaisVelha, pessoaAtual) {  // usei o reduce para transformar transformar em um unico valor
        return pessoaMaisVelha.idade > pessoaAtual.idade ? pessoaMaisVelha : pessoaAtual;  // pega o objeto com maior idade e faz uma comparação com o próximo
        
        });
        console.log(pessoaMaisVelha);
}

ArrayObjetosMaiorIdade();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export {
    obterChaves, PessoasMaiusculas, ProdutosPrecoDesconto, PessoasMaiorIdade,
    StringCincoCaracteres, ProdutosMaioresCinquenta, CalculaPrecoTotal, ListaObjetoAlunos, ListaObjetosProdutos,
    ListaProdutoMaiorQueDez, NomeComLetraA, ArrayObjetosJoao, ArrayObjetosMaiorIdade
};
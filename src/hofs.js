// 1. Crie uma função que receba um objeto como parâmetro e retorne um array contendo as chaves desse objeto
function obterChaves(objeto) {
    return Object.keys(objeto);
}

console.log(obterChaves({ nome: 'Fulano', idade: 30, profissao: 'Programador' })); // saída esperada: ['nome', 'idade', 'profissao']
console.log(obterChaves({ a: 1, b: 2, c: 3 })); // saída esperada: ['a', 'b', 'c']
/* função obterChaves recebe um objeto como parâmetro e usa o método Object.keys() para retornar um array contendo as chaves desse objeto. 
O método Object.keys() retorna um array de todas as propriedades próprias enumeráveis de um objeto que são do tipo string. 
Portanto, essa função retorna um array com as chaves do objeto passado como argumento.
 *///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. Dada uma lista de objetos que representam pessoas, crie uma nova lista com o nome de cada pessoa em maiúsculas e retorne essa lista
function PessoasMaiusculas() {
    const pessoasX = [
        { nome: "João", idade: 20 },
        { nome: "Maria", idade: 30 },
        { nome: "Pedro", idade: 25 },
    ];
    const nomesMaiusculos = pessoasX.map(pessoa => pessoa.nome.toUpperCase());
    return nomesMaiusculos;
}
PessoasMaiusculas(); // saída esperada: ["JOÃO", "MARIA", "PEDRO"]
/* A função PessoasMaiusculas cria uma nova lista com o nome de cada pessoa em maiúsculas a partir de uma lista de objetos que representam pessoas.
 *///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3. Dada uma lista de objetos que representam produtos, crie uma nova lista com o preço de cada produto com desconto de 10% e retorne essa lista
function ProdutosPrecoDesconto() {
    const produtosX = [
        { nome: "Camiseta", preco: 30 },
        { nome: "Calça", preco: 50 },
        { nome: "Jaqueta", preco: 100 },
    ];

    const precosComDesconto = [];
    
    for (let i = 0; i < produtosX.length; i++) {
        const precoComDesconto = produtosX[i].preco * 0.9; // aplicando 10% de desconto
        precosComDesconto.push(precoComDesconto);
    }
    
    return precosComDesconto;
}
ProdutosPrecoDesconto(); // saída esperada: [27, 45, 90]
/* A função ProdutosPrecoDesconto cria uma nova lista com o preço de cada produto com desconto de 10% a partir de uma lista de objetos que representam produtos. 
 *///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4. Dada uma lista de objetos que representam pessoas, crie uma nova lista com as pessoas maiores de idade (idade >= 18) e retorne essa lista
function PessoasMaiorIdade() {
    const pessoasY = [
        { nome: "João", idade: 20 },
        { nome: "Maria", idade: 15 },
        { nome: "Pedro", idade: 25 },
    ];

    const pessoasMaiorIdade = pessoasY.filter(pessoa => pessoa.idade >= 18);
    return pessoasMaiorIdade;
}

console.log(PessoasMaiorIdade()); // saída esperada: [{ nome: "João", idade: 20 }, { nome: "Pedro", idade: 25 }]
/* A função PessoasMaiorIdade cria uma nova lista com as pessoas maiores de idade (idade >= 18) a partir de uma lista de objetos que representam pessoas. */
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5. Dada uma lista de strings, crie uma nova lista com as strings que têm mais de 5 caracteres e retorne essa lista
function StringCincoCaracteres() {
    const palavrasX = ["gato", "cachorro", "leão", "tartaruga"];
    const palavrasComMaisDeCincoCaracteres = palavrasX.filter(palavra => palavra.length > 5);
    
    return palavrasComMaisDeCincoCaracteres;
}
console.log(StringCincoCaracteres()); // saída esperada: ["cachorro", "tartaruga"]
/* A função StringCincoCaracteres cria uma nova lista com as strings que têm mais de 5 caracteres a partir de uma lista de strings. Essa função usa o método filter() para filtrar as strings que têm mais de 5 caracteres. 
A função retorna a nova lista com as strings que têm mais de 5 caracteres. */
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 6. Dada uma lista de objetos que representam produtos, crie uma nova lista com os produtos que custam mais de 50 reais e retorne essa lista
function ProdutosMaioresCinquenta() {
    const produtosY = [
        { nome: "Camiseta", preco: 30 },
        { nome: "Calça", preco: 50 },
        { nome: "Jaqueta", preco: 100 },
    ];

    const produtosMaioresCinquenta = produtosY.filter((produto) => produto.preco > 50);

    return produtosMaioresCinquenta;
}

console.log(ProdutosMaioresCinquenta()); // saída esperada: [{ nome: "Jaqueta", preco: 100 }]
/* A função ProdutosMaioresCinquenta cria uma nova lista com os produtos que custam mais de 50 reais a partir de uma lista de objetos que representam produtos.  */
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 7. Dada uma lista de objetos que representam produtos, calcule o preço total de todos eles e retorne esse valor
function CalculaPrecoTotal() {
    const produtosZ = [
        { nome: "Camiseta", preco: 30 },
        { nome: "Calça", preco: 50 },
        { nome: "Jaqueta", preco: 100 },
    ];
    const precoTotal = produtosZ.reduce((total, produto) => total + produto.preco, 0);

    console.log(precoTotal); // exibe o preço total no console
    return precoTotal; // retorna o preço total como valor de retorno da função
}
CalculaPrecoTotal(); // saída esperada: 180
/* A função CalculaPrecoTotal calcula o preço total de todos os produtos a partir de uma lista de objetos que representam produtos. */
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 8. Dada uma lista de objetos que representam alunos, imprima no console o nome de cada um deles
function ListaObjetoAlunos() {
    const alunos = [
        { nome: "João", idade: 18 },
        { nome: "Maria", idade: 20 },
        { nome: "Pedro", idade: 22 },
    ];

    const nomesAlunos = alunos.map(function(aluno) {
        return aluno.nome;
    });

    // retorna o array de nomes dos alunos
    return nomesAlunos;

}

const nomes = ListaObjetoAlunos();
console.log(nomes);
/* A função ListaObjetoAlunos imprime no console o nome de cada aluno a partir de uma lista de objetos que representam alunos.  */
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 9. Dada uma lista de objetos que representam produtos, calcule o preço total de todos eles e imprima no console
function ListaObjetosProdutos() {
    const produtosA = [
        { nome: "Camiseta", preco: 30 },
        { nome: "Calça", preco: 50 },
        { nome: "Jaqueta", preco: 100 },
    ];

    const precos = produtosA.map(produto => produto.preco);
    const precoTotal = precos.reduce((total, preco) => total + preco, 0);
    console.log(`O preço total de todos os produtos é ${precoTotal}.`);

    return precos, precoTotal;
}

ListaObjetosProdutos();
/* A função ListaObjetosProdutos() recebe uma lista de objetos que representam produtos, calcula o preço total de todos eles e imprime no console o resultado.  */
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 10. Dada uma lista de produtos, verifique se todos têm um preço maior que R$ 10,00
function ListaProdutoMaiorQueDez() {
    const produtosB = [
      { nome: "Camiseta", preco: 30 },
      { nome: "Calça", preco: 50 },
      { nome: "Jaqueta", preco: 100 },
    ];
    return produtosB.every((prod) => prod.preco > 10);
  }
  ListaProdutoMaiorQueDez();
  /* A função ListaProdutoMaiorQueDez() recebe uma lista de produtos e verifica se todos eles têm um preço maior que R$ 10,00.  */
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 11. Dada uma lista de nomes, verifique se pelo menos um deles começa com a letra "A”
function NomeComLetraA() {
    const nomes = ["Pedro", "Ana", "Carla", "Márcio"];

    for (let i = 0; i < nomes.length; i++) {
        if (nomes[i].charAt(0) === "A") {
            return true;
        }
    }
    return false;
}

NomeComLetraA();
/* A função NomeComLetraA() recebe uma lista de nomes e verifica se pelo menos um deles começa com a letra "A".  */
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 12. Dado um array de objetos, encontre o objeto com o nome "João”
function ArrayObjetosJoao() {
    const pessoasA = [
      { nome: "Ana", idade: 30 },
      { nome: "João", idade: 25 },
      { nome: "Maria", idade: 40 },
    ];
    return pessoasA.find((pess) => pess.nome === "João"); // busca a pessoa com nome de João
  }
  
  ArrayObjetosJoao();
  /* A função ArrayObjetosJoao() recebe um array de objetos e encontra o objeto com o nome "João". */
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 13. Dado um array de objetos, encontre o objeto com a maior idade
function ArrayObjetosMaiorIdade(){
    const pessoasB = [
        { nome: "Ana", idade: 30 },
        { nome: "João", idade: 25 },
        { nome: "Maria", idade: 40 },
    ];
    let pessoaMaisVelha = pessoasB[0]; 

    for (let i = 1; i < pessoasB.length; i++) {
        if (pessoasB[i].idade > pessoaMaisVelha.idade) {
            pessoaMaisVelha = pessoasB[i]; // atualiza o objeto mais velho se encontrar um com idade maior
        }
    }

    return pessoaMaisVelha;
}

ArrayObjetosMaiorIdade();
/* A função ArrayObjetosMaiorIdade() recebe um array de objetos e encontra o objeto com a maior idade. */
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export {
    obterChaves, PessoasMaiusculas, ProdutosPrecoDesconto, PessoasMaiorIdade,
    StringCincoCaracteres, ProdutosMaioresCinquenta, CalculaPrecoTotal, ListaObjetoAlunos, ListaObjetosProdutos,
    ListaProdutoMaiorQueDez, NomeComLetraA, ArrayObjetosJoao, ArrayObjetosMaiorIdade
};
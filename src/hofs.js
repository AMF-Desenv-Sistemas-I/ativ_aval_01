// 1. Crie uma função que receba um objeto como parâmetro e retorne um array contendo as chaves desse objeto

//usada a função object.key para retorna apenas as chaves do array e não os dados

function obterChaves(objeto) {
    return Object.keys(objeto);
}

console.log(obterChaves({ nome: 'Fulano', idade: 30, profissao: 'Programador' })); // saída esperada: ['nome', 'idade', 'profissao']
console.log(obterChaves({ a: 1, b: 2, c: 3 })); // saída esperada: ['a', 'b', 'c']
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. Dada uma lista de objetos que representam pessoas, crie uma nova lista com o nome de cada pessoa em maiúsculas e retorne essa lista

//usei um map para percorrer array e enquanto percorre uso o toUpperCase para colocar cada string em maiscula

function PessoasMaiusculas() {
    const pessoasX = [
        { nome: "João", idade: 20 },
        { nome: "Maria", idade: 30 },
        { nome: "Pedro", idade: 25 },
    ];
    return pessoasX.map(nome => nome.nome.toUpperCase());
}
PessoasMaiusculas(); // saída esperada: ["JOÃO", "MARIA", "PEDRO"]
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3. Dada uma lista de objetos que representam produtos, crie uma nova lista com o preço de cada produto com desconto de 10% e retorne essa lista

//usei um map para localizar cada preço da chave preco e no mesmo ja fiz o acrescimo de 10% e retornei

function ProdutosPrecoDesconto() {
    const produtosX = [
        { nome: "Camiseta", preco: 30 },
        { nome: "Calça", preco: 50 },
        { nome: "Jaqueta", preco: 100 },
    ];
    return produtosX.map(valor => valor.preco *0.9);
    
    }
      
ProdutosPrecoDesconto(); // saída esperada: [27, 45, 90]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4. Dada uma lista de objetos que representam pessoas, crie uma nova lista com as pessoas maiores de idade (idade >= 18) e retorne essa lista

//usado um filter para retornar apenas as expressões que são verdadeiras perante a condição que coloquei nele

function PessoasMaiorIdade() {
    const pessoasY = [
        { nome: "João", idade: 20 },
        { nome: "Maria", idade: 15 },
        { nome: "Pedro", idade: 25 },
    ];
    return pessoasY.filter(pessoa=> pessoa.idade >=18);
}

PessoasMaiorIdade(); // saída esperada: [{ nome: "João", idade: 20 }, { nome: "Pedro", idade: 25 }]
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5. Dada uma lista de strings, crie uma nova lista com as strings que têm mais de 5 caracteres e retorne essa lista

//usado um filter para percorrer e retornar apenas as strings que atendam a condição de verdadeira com o tamanho maior q 5

function StringCincoCaracteres() {
    const palavrasX = ["gato", "cachorro", "leão", "tartaruga"];
    const maioresString= palavrasX.filter(palavra=>palavra.length>5);
    console.log(maioresString);
    return maioresString;
}
StringCincoCaracteres(); // saída esperada: ["cachorro", "tartaruga"]
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 6. Dada uma lista de objetos que representam produtos, crie uma nova lista com os produtos que custam mais de 50 reais e retorne essa lista

//criada uma constante e usado um filter para percorrer um objeto e encontrar apenas os que atendem a condição imposta, retornando apenas os objetos com preços maiores de 50 

function ProdutosMaioresCinquenta() {
    const produtosY = [
        { nome: "Camiseta", preco: 30 },
        { nome: "Calça", preco: 50 },
        { nome: "Jaqueta", preco: 100 },
    ];
    const maisDeCinque= produtosY.filter(valor => valor.preco>50);
    console.log(maisDeCinque);
    return maisDeCinque;
}

ProdutosMaioresCinquenta(); // saída esperada: [{ nome: "Jaqueta", preco: 100 }]
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 7. Dada uma lista de objetos que representam produtos, calcule o preço total de todos eles e retorne esse valor

//usei um forEach para percorrer um objeto e somar os preços retornando apenas o total da soma

function CalculaPrecoTotal() {
    const produtosZ = [
        { nome: "Camiseta", preco: 30 },
        { nome: "Calça", preco: 50 },
        { nome: "Jaqueta", preco: 100 },
    ];
    let soma=0;
    produtosZ.forEach(somas => {
        soma+=somas.preco;
        
    });
    return soma
}
CalculaPrecoTotal(); // saída esperada: 180
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 8. Dada uma lista de objetos que representam alunos, imprima no console o nome de cada um deles

//usado um map para percorre e retorna apenas os nomes dos alunos que estão dentro do objeto alunos

function ListaObjetoAlunos() {
    const alunos = [
        { nome: "João", idade: 18 },
        { nome: "Maria", idade: 20 },
        { nome: "Pedro", idade: 22 },
    ];

return alunos.map(nomes=> nomes.nome);
}
ListaObjetoAlunos();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 9. Dada uma lista de objetos que representam produtos, calcule o preço total de todos eles e imprima no console

//usei um forEach para percorrer um objeto e somar os preços retornando apenas o total da soma

function ListaObjetosProdutos() {
    const produtosA = [
        { nome: "Camiseta", preco: 30 },
        { nome: "Calça", preco: 50 },
        { nome: "Jaqueta", preco: 100 },
    ];
let soma=0;
    produtosA.forEach(somas => {
        soma+=somas.preco;
        
    });
    return soma;
}

ListaObjetosProdutos();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 10. Dada uma lista de produtos, verifique se todos têm um preço maior que R$ 10,00

//usei um every q ira retorna verdadeiro se todos os elmentos que estão na condição são verdadeiros

function ListaProdutoMaiorQueDez() {
    const produtosB = [
        { nome: "Camiseta", preco: 30 },
        { nome: "Calça", preco: 50 },
        { nome: "Jaqueta", preco: 100 },
    ];
    return produtosB.every((preco => preco.preco > 10));
}

ListaProdutoMaiorQueDez();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 11. Dada uma lista de nomes, verifique se pelo menos um deles começa com a letra "A”

//usado o some para ele retorna se pelo menos um elemento do Array satisfazer a condição imposta, usado o charAt para pegar a primeira vogal de cada string e comparar com a que esta na condição

function NomeComLetraA() {
    const nomes = ["Pedro", "Ana", "Carla", "Márcio"];
    return nomes.some(nome => nome.charAt(0)==='A');
}

NomeComLetraA();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 12. Dado um array de objetos, encontre o objeto com o nome "João”

//usei o find para ele percorrer o array até encontra a condição que satifaz e retorna com ela

function ArrayObjetosJoao(){
    const pessoasA = [
        { nome: "Ana", idade: 30 },
        { nome: "João", idade: 25 },
        { nome: "Maria", idade: 40 },
    ];
    return pessoasA.find(nome => nome.nome ==="João");
}

ArrayObjetosJoao();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 13. Dado um array de objetos, encontre o objeto com a maior idade

//percorro o objeto com o forEach para achar o mais velhos após coloca ele em um find para percorrer e retornar quando encontrar o mais velho

function ArrayObjetosMaiorIdade(){
    const pessoasB = [
        { nome: "Ana", idade: 30 },
        { nome: "João", idade: 25 },
        { nome: "Maria", idade: 40 },
    ];
let maisVelho=0;
pessoasB.forEach(velho=>{
    if(maisVelho < velho.idade){
        maisVelho=velho.idade;
    }
    
})
return pessoasB.find(pessoa => pessoa.idade === maisVelho);
}
ArrayObjetosMaiorIdade();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export {
    obterChaves, PessoasMaiusculas, ProdutosPrecoDesconto, PessoasMaiorIdade,
    StringCincoCaracteres, ProdutosMaioresCinquenta, CalculaPrecoTotal, ListaObjetoAlunos, ListaObjetosProdutos,
    ListaProdutoMaiorQueDez, NomeComLetraA, ArrayObjetosJoao, ArrayObjetosMaiorIdade
};
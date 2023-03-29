// 1. Crie uma função que receba um objeto como parâmetro e retorne um array contendo as chaves desse objeto
function obterChaves(objeto) {
  return Object.keys(objeto); //pega as chaves do objeto
}

console.log(
  obterChaves({ nome: "Fulano", idade: 30, profissao: "Programador" })
); // saída esperada: ['nome', 'idade', 'profissao']
console.log(obterChaves({ a: 1, b: 2, c: 3 })); // saída esperada: ['a', 'b', 'c']
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. Dada uma lista de objetos que representam pessoas, crie uma nova lista com o nome de cada pessoa em maiúsculas e retorne essa lista
function PessoasMaiusculas() {
  const pessoasX = [
    { nome: "João", idade: 20 },
    { nome: "Maria", idade: 30 },
    { nome: "Pedro", idade: 25 },
  ];
  const banana = pessoasX.map((pessoa) => {
    return pessoa.nome.toUpperCase();
  }); //retorna o nome das pessoas com seus caracteres maiusculos
  return banana;
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
  const melao = produtosX.map((prod) => {
    return prod.preco * 0.9;
  }); // faz o desconto dos 10% salvando os itens em um novo array
  return melao;
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
  const idadeVelhos = pessoasY.filter((pessoa) => {
    if (pessoa.idade >= 18) {
      return pessoa;
    } // filtra as pessoas que são maiores q 18
  });
  return idadeVelhos;
}

PessoasMaiorIdade(); // saída esperada: [{ nome: "João", idade: 20 }, { nome: "Pedro", idade: 25 }]
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5. Dada uma lista de strings, crie uma nova lista com as strings que têm mais de 5 caracteres e retorne essa lista
function StringCincoCaracteres() {
  const palavrasX = ["gato", "cachorro", "leão", "tartaruga"];
  const melancia = palavrasX.filter((palavra) => {
    if (palavra.length > 5) {
      return true;
    }
  }); // filtra as palavras que são maiores q 5
  return melancia;
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
  const maca = produtosY.filter((prod) => {
    if (prod.preco > 50) {
      return true;
    }
  }); // filtra os itens com preço maior q 50 do array
  return maca;
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
  let result = 0;
  produtosZ.forEach((prod) => (result += prod.preco)); // para somar todos os valores
  return result;
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
  const banana = alunos.map((aluno) => {
    return aluno.nome;
  }); // para adicionar todos os nomes dos alunos e adicionlos em um array
  return banana;
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
  let result = 0;
  console.log(typeof result);
  produtosA.map((prod) => {
    result = result + prod.preco;
  });
  return result; //usei um map para percorrer os itens e retornar a soma
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
  return produtosB.every((prod) => prod.preco > 10); //retorna True se todos itens do array atenderem a condição
}
ListaProdutoMaiorQueDez();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 11. Dada uma lista de nomes, verifique se pelo menos um deles começa com a letra "A”
function NomeComLetraA() {
  const nomes = ["Pedro", "Ana", "Carla", "Márcio"];
  return nomes.some((prod) => prod[0] === "A"); //Procura se algum dos itens contem a letra A, se sim ele retorna true
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
  return pessoasA.find((pess) => pess.nome === "João"); // busca a pessoa com nome de João
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
  const maisVelho = pessoasB.reduce(function (prev, current) {
    // uso o reduce para buscar o maior idade
    return prev > current.idade ? prev : current.idade;
  });
  return pessoasB.find((pess) => pess.idade === maisVelho); // busca a pessoa da idade mais velha
}

ArrayObjetosMaiorIdade();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export {
  obterChaves,
  PessoasMaiusculas,
  ProdutosPrecoDesconto,
  PessoasMaiorIdade,
  StringCincoCaracteres,
  ProdutosMaioresCinquenta,
  CalculaPrecoTotal,
  ListaObjetoAlunos,
  ListaObjetosProdutos,
  ListaProdutoMaiorQueDez,
  NomeComLetraA,
  ArrayObjetosJoao,
  ArrayObjetosMaiorIdade,
};

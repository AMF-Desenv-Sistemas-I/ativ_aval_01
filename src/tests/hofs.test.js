import {
  obterChaves, PessoasMaiusculas, ProdutosPrecoDesconto, PessoasMaiorIdade, StringCincoCaracteres,
  ProdutosMaioresCinquenta, CalculaPrecoTotal, ListaObjetoAlunos, ListaObjetosProdutos, ListaProdutoMaiorQueDez,
  NomeComLetraA, ArrayObjetosJoao, ArrayObjetosMaiorIdade
} from '../hofs';

// 1. Crie uma função que receba um objeto como parâmetro e retorne um array contendo as chaves desse objeto
test('Deve retornar as chaves do objeto', () => {
  const objeto1 = { nome: 'Fulano', idade: 30, profissao: 'Programador' };
  const objeto2 = { a: 1, b: 2, c: 3 };
  expect(obterChaves(objeto1)).toEqual(['nome', 'idade', 'profissao']);
  expect(obterChaves(objeto2)).toEqual(['a', 'b', 'c']);
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. Dada uma lista de objetos que representam pessoas, crie uma nova lista com o nome de cada pessoa em maiúsculas e retorne essa lista
describe("PessoasMaiusculas", () => {
  it("retorna um array com os nomes em maiúsculo", () => {
    const resultado = PessoasMaiusculas();
    expect(resultado).toEqual(["JOÃO", "MARIA", "PEDRO"]);
  });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3. Dada uma lista de objetos que representam produtos, crie uma nova lista com o preço de cada produto com desconto de 10% e retorne essa lista
describe("Produtos com desconto", () => {
  test('Teste 1 - Produtos com desconto', () => {
    const produtosX = [
      { nome: "Camiseta", preco: 30 },
      { nome: "Calça", preco: 50 },
      { nome: "Jaqueta", preco: 100 },
    ];

    const precosComDesconto = ProdutosPrecoDesconto(produtosX);

    expect(precosComDesconto).toEqual([27, 45, 90]);
  });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4. Dada uma lista de objetos que representam pessoas, crie uma nova lista com as pessoas maiores de idade (idade >= 18) e retorne essa lista
describe("PessoasMaiorIdade()", () => {
  test("Retorna um array com as pessoas maiores de idade", () => {
    expect(PessoasMaiorIdade()).toEqual([
      { nome: "João", idade: 20 },
      { nome: "Pedro", idade: 25 },
    ]);
  });

  test("Retorna um array", () => {
    expect(Array.isArray(PessoasMaiorIdade())).toBe(true);
  });

  test("Retorna um array vazio quando não há pessoas maiores de idade", () => {
    const pessoasY = [
      { nome: "João", idade: 16 },
      { nome: "Maria", idade: 15 },
      { nome: "Pedro", idade: 17 },
    ];

    const maioresDeIdade = pessoasY.filter(pessoa => pessoa.idade >= 18);

    expect(maioresDeIdade).toEqual([]);
  });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5. Dada uma lista de strings, crie uma nova lista com as strings que têm mais de 5 caracteres e retorne essa lista
describe("Strings com mais de 5 caracteres", () => {
  test('Retorna palavras com mais de 5 caracteres', () => {
    const expected = ["cachorro", "tartaruga"];
    const result = StringCincoCaracteres();
    expect(result).toEqual(expected);
  });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 6. Dada uma lista de objetos que representam produtos, crie uma nova lista com os produtos que custam mais de 50 reais e retorne essa lista
describe("Produtos que custam mais de 50 reais", () => {
  test('Retorna produtos com preço maior que 50', () => {
    const expected = [{ nome: "Jaqueta", preco: 100 }];
    const result = ProdutosMaioresCinquenta();
    expect(result).toEqual(expected);
  });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 7. Dada uma lista de objetos que representam produtos, calcule o preço total de todos eles e retorne esse valor
describe("Calcule o preço total de todos", () => {
  test('Retorna o preço total dos produtos', () => {
    const expected = 180;
    const result = CalculaPrecoTotal();
    expect(result).toEqual(expected);
  });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 8. Dada uma lista de objetos que representam alunos, imprima no console o nome de cada um deles
describe("Lista de objetos que representam alunos", () => {
  test('Retorna uma lista com os nomes dos alunos', () => {
    const expected = ["João", "Maria", "Pedro"];
    const result = ListaObjetoAlunos();
    expect(result).toEqual(expected);
  });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 9. Dada uma lista de objetos que representam produtos, calcule o preço total de todos eles e imprima no console
describe("Cálculo da lista dos preços total dos produtos", () => {
  test('Retorna o preço total dos produtos', () => {
    const expected = 180;
    const result = ListaObjetosProdutos();
    expect(result).toEqual(expected);
  })
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 10. Dada uma lista de produtos, verifique se todos têm um preço maior que R$ 10,00
describe("Cálculo da lista dos produtos com valor maior que R$ 10", () => {
  test('Retorna true se todos os produtos têm preço maior que 10', () => {
    const expected = true;
    const result = ListaProdutoMaiorQueDez();
    expect(result).toEqual(expected);
  });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 11. Dada uma lista de nomes, verifique se pelo menos um deles começa com a letra "A”
describe("Dada uma lista de nomes, verifique se pelo menos um deles começa com a letra A", () => {
  test('Retorna true se algum nome começa com letra "A"', () => {
    const expected = true;
    const result = NomeComLetraA();
    expect(result).toEqual(expected);
  })
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 12. Dado um array de objetos, encontre o objeto com o nome "João”
describe("Dado um array de objetos, encontre o objeto com o nome João", () => {
  test('Retorna objeto da pessoa com nome "João"', () => {
    const expected = { nome: "João", idade: 25 };
    const result = ArrayObjetosJoao();
    expect(result).toEqual(expected);
  })
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 13. Dado um array de objetos, encontre o objeto com a maior idade
describe("Dado um array de objetos, encontre o objeto com a maior idade", () => {
  test('Encontra a pessoa mais velha', () => {
    const pessoas = [
      { nome: "Ana", idade: 30 },
      { nome: "João", idade: 25 },
      { nome: "Maria", idade: 40 },
    ];

    expect(ArrayObjetosMaiorIdade(pessoas)).toEqual({ nome: "Maria", idade: 40 });
  });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


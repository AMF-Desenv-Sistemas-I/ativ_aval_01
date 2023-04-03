import { dobrarNumero, somarNumeros, filtrarNumerosPares, filtrarNumerosImpares, filtrarNumerosMaioresQueDez, concatenarArrays } from '../arrays';

//1. Crie uma função que receba um número como parâmetro e retorne true se ele for par ou false se ele for ímpar
describe('dobrarNumero', () => {
  test('deve dobrar o número corretamente', () => {
    expect(dobrarNumero(5)).toBe(10);
  });

  test('deve retornar zero se a entrada for zero', () => {
    expect(dobrarNumero(0)).toBe(0);
  });

  test('deve dobrar números negativos corretamente', () => {
    expect(dobrarNumero(-3)).toBe(-6);
  });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//2. Crie uma função que receba um array de números como parâmetro e retorne a soma dos valores deste array
describe('somarNumeros', () => {
  test('deve somar os números corretamente', () => {
    expect(somarNumeros([1, 2, 3, 4, 5])).toBe(15);
  });

  test('deve retornar zero se a entrada for um array vazio', () => {
    expect(somarNumeros([])).toBe(0);
  });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//3. Crie uma função que receba um array de números como parâmetro e retorne a soma dos valores deste array
describe('filtrarNumerosPares', () => {
  test('deve filtrar os números pares corretamente', () => {
    expect(filtrarNumerosPares([1, 2, 3, 4, 5, 6, 7, 8])).toEqual([2, 4, 6, 8]);
  });

  test('deve retornar um array vazio se não houver números pares', () => {
    expect(filtrarNumerosPares([1, 3, 5, 7])).toEqual([]);
  });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//4. Crie uma função que receba um array de números como parâmetro e retorne outro array contendo apenas os números ímpares.
describe('filtrarNumerosImpares', () => {
  test('deve filtrar os números ímpares corretamente', () => {
    expect(filtrarNumerosImpares([1, 2, 3, 4, 5, 6, 7, 8])).toEqual([1, 3, 5, 7]);
  });

  test('deve retornar um array vazio se não houver números ímpares', () => {
    expect(filtrarNumerosImpares([2, 4, 6, 8])).toEqual([]);
  });
});
 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5.Crie uma função que receba um array de números como parâmetro e retorne outro array contendo apenas os números maiores que 10
describe('filtrarNumerosMaioresQueDez', () => {
  test('deve filtrar os números maiores que 10 corretamente', () => {
    expect(filtrarNumerosMaioresQueDez([5, 10, 15, 20, 25])).toEqual([15, 20, 25]);
  });

  test('deve retornar um array vazio se não houver números maiores que 10', () => {
    expect(filtrarNumerosMaioresQueDez([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([]);
  });
});
 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 6. Crie uma função que receba dois arrays como parâmetros e retorne outro array contendo a concatenação dos dois primeiros
describe('concatenarArrays', () => {
  test('deve concatenar dois arrays corretamente', () => {
    expect(concatenarArrays([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('deve retornar o primeiro array se o segundo array estiver vazio', () => {
    expect(concatenarArrays([1, 2, 3], [])).toEqual([1, 2, 3]);
  });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
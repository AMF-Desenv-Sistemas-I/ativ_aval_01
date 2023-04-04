import { somar, calcularMedia, adicionarPropriedades } from '../rest';

// 1. Crie uma função que recebe um número indeterminado de parâmetros e retorne a soma desses parâmetros
describe('somar', () => {
    test('deve somar corretamente vários números', () => {
        expect(somar(1, 2, 3, 4, 5)).toEqual(15);
        expect(somar(10, 20, 30)).toEqual(60);
        expect(somar(-1, 5, 10, -20)).toEqual(-6);
    });

    test('deve retornar 0 se nenhum número for fornecido', () => {
        expect(somar()).toEqual(0);
    });
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

// 2. Crie uma função que recebe um número indeterminado de parâmetros e retorne a média desses parâmetros
test('calcula a média corretamente', () => {
    expect(calcularMedia(1, 2, 3, 4, 5)).toBe(3);
    expect(calcularMedia(10, 20, 30)).toBe(20);
});

test('retorna NaN quando não há parâmetros', () => {
    expect(calcularMedia()).toBeNaN();
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

// 3. Crie uma função que recebe um objeto e um número indeterminado de propriedades e valores, e retorne um novo objeto contendo as propriedades e valores do objeto original e as propriedades e valores recebidos.
test('Adicionar propriedades ao objeto', () => {
    const pessoa = {
        nome: 'Fulano',
        idade: 30,
    };
    const novoObjeto = adicionarPropriedades(pessoa, { cidade: 'São Paulo' }, { profissao: 'Programador' });
    expect(novoObjeto).toEqual({ nome: 'Fulano', idade: 30, cidade: 'São Paulo', profissao: 'Programador' });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////



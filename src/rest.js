// 1. Crie uma função que recebe um número indeterminado de parâmetros e retorne a soma desses parâmetros
// usei o reduce para somar os valores
function somar(...numeros) {
    const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
    return soma;
}

console.log(somar(1, 2, 3, 4, 5)); // saída esperada: 15
console.log(somar(10, 20, 30)); // saída esperada: 60
//////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

// 2. Crie uma função que recebe um número indeterminado de parâmetros e retorne a média desses parâmetros
// usei o reduce para somar e depois no return calculei a média
function calcularMedia(...numeros) {
    const total = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
    return total / numeros.length;
}

console.log(calcularMedia(1, 2, 3, 4, 5)); // saída esperada: 3
console.log(calcularMedia(10, 20, 30)); // saída esperada: 20  
//////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

// 3. Crie uma função que recebe um objeto e um número indeterminado de propriedades e valores, e retorne um novo objeto contendo as propriedades e valores do objeto original e as propriedades e valores recebidos.
// usei a Object.assign({}) que limpa as chaves dos objetos {cidade} e {profissao} e add no o objeto as chaves
function adicionarPropriedades(objeto, ...novasPropriedades) {
    return Object.assign({}, objeto, ...novasPropriedades);
}

const pessoa = {
    nome: 'Fulano',
    idade: 30,
};

console.log(adicionarPropriedades(pessoa, { cidade: 'São Paulo' }, { profissao: 'Programador' })); // saída esperada: { nome: 'Fulano', idade: 30, cidade: 'São Paulo', profissao: 'Programador' }  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export { somar, calcularMedia, adicionarPropriedades };

// 1. Crie uma função que recebe um número indeterminado de parâmetros e retorne a soma desses parâmetros
function somar(...numeros) {
    let total = 0;
    //cria um for que fica em loop enquant existir numero em numeros e vai adicionando os numeros ao total
    for (let numero of numeros) {
        total += numero;
    }
    return total;
}

console.log(somar(1, 2, 3, 4, 5)); // saída esperada: 15
console.log(somar(10, 20, 30)); // saída esperada: 60
//////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

// 2. Crie uma função que recebe um número indeterminado de parâmetros e retorne a média desses parâmetros
function calcularMedia(...numeros) {
    let media = 0;
    //soma dos numero em numeros 
    for (let numero of numeros) {
        media += numero;
    }
    //media aritimética soma/quantia de numeros
    return media / numeros.length;
}

console.log(calcularMedia(1, 2, 3, 4, 5)); // saída esperada: 3
console.log(calcularMedia(10, 20, 30)); // saída esperada: 20  
//////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

// 3. Crie uma função que recebe um objeto e um número indeterminado de propriedades e valores, e retorne um novo objeto contendo as propriedades e valores do objeto original e as propriedades e valores recebidos.
function adicionarPropriedades(objeto, ...novasPropriedades) {
    //...objeto usa spread para criar um novo objeto que contenha todas as propriedades do objeto "Pessoa"
    //usando o metodo reduce ele adiciona as novas propriedades com 2 parametros (resultado, propriedade), onde ele junta os dois valores em um só usando spread, e acumula no objeto vazio passado para o spread ("{}")
    return { ...objeto, ...novasPropriedades.reduce((resultado, propriedade) => ({...resultado, ...propriedade}),{})};
};

const pessoa = {
    nome: 'Fulano',
    idade: 30,
};

console.log(adicionarPropriedades(pessoa, { cidade: 'São Paulo' }, { profissao: 'Programador' })); // saída esperada: { nome: 'Fulano', idade: 30, cidade: 'São Paulo', profissao: 'Programador' }  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export { somar, calcularMedia, adicionarPropriedades };

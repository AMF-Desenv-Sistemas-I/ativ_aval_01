// 1. Crie uma função que recebe um número indeterminado de parâmetros e retorne a soma desses parâmetros
//Essa função recebe um número indeterminado de parâmetros utilizando o operador spread (...) e retorna a soma desses números
function somar(...numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    return soma;
}

console.log(somar(1, 2, 3, 4, 5)); // saída esperada: 15
console.log(somar(10, 20, 30)); // saída esperada: 60
//////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

// 2. Crie uma função que recebe um número indeterminado de parâmetros e retorne a média desses parâmetros
//A função calcularMedia que recebe um número indeterminado de parâmetros e retorna a média desses parâmetros. Essa função utiliza o método reduce para somar todos os números passados como parâmetro, armazenando o resultado na variável soma. Em seguida, é calculada a média desses números, que é armazenada na variável media. Por fim, a função retorna a média.
function calcularMedia(...numeros) {
    const soma = numeros.reduce((acc, curr) => acc + curr, 0);
    const media = soma / numeros.length;
    return media;
}

console.log(calcularMedia(1, 2, 3, 4, 5)); // saída esperada: 3
console.log(calcularMedia(10, 20, 30)); // saída esperada: 20  
//////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

// 3. Crie uma função que recebe um objeto e um número indeterminado de propriedades e valores, e retorne um novo objeto contendo as propriedades e valores do objeto original e as propriedades e valores recebidos.
function adicionarPropriedades(obj, ...novasPropriedades) {
    const result = {...obj}; 
    novasPropriedades.forEach((info) => { 
        const[test, value] =  Object.entries(info)[0]; 
        result[test] = value; 
    });
    return result;
}

const pessoa = {
    nome: 'Fulano',
    idade: 30,
};

console.log(adicionarPropriedades(pessoa, { cidade: 'São Paulo' }, { profissao: 'Programador' })); // saída esperada: { nome: 'Fulano', idade: 30, cidade: 'São Paulo', profissao: 'Programador' }  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export { somar, calcularMedia, adicionarPropriedades };

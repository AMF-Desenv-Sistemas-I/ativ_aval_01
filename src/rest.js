// 1. Crie uma função que recebe um número indeterminado de parâmetros e retorne a soma desses parâmetros
function somar(...numeros) {
//recebemos os "restos" e percorremos os valores para realizar a soma
    let total = 0;
    for(let numero of numeros) {
        total += numero
    }
    return total;
}

console.log(somar(1, 2, 3, 4, 5)); // saída esperada: 15
console.log(somar(10, 20, 30)); // saída esperada: 60
//////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

// 2. Crie uma função que recebe um número indeterminado de parâmetros e retorne a média desses parâmetros
function calcularMedia(...numeros) {
    // Vai fazer uma comparação se o numero foi zero 
    if(numeros.length === 0) { 
        // Não vai receber nenhum valor vai retonra a Nan 
        return NaN; 
    }
    // reduce realiza a soma do primeiro valor com o proximo, assim tendo a soma total
    const num = numeros.reduce((acumulador,val) => acumulador + val, 0);
    return num / numeros.length; //dividir o total pelo o tamanho da array 
}
console.log(calcularMedia(1, 2, 3, 4, 5)); // saída esperada: 3
console.log(calcularMedia(10, 20, 30)); // saída esperada: 20  
//////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

// 3. Crie uma função que recebe um objeto e um número indeterminado de propriedades e valores, e retorne um novo objeto 
//contendo as propriedades e valores do objeto original e as propriedades e valores recebidos.

function adicionarPropriedades(obj, ...novasPropriedades) {
    const result = {...obj}; //recebe a primeira propriedade
    novasPropriedades.forEach((info) => { //percorrer a array 
        const[test, value] =  Object.entries(info)[0]; //retorna as chaves e valores
        result[test] = value; //atribui no novo objeto
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

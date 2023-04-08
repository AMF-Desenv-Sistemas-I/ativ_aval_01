// 1. Crie uma função que recebe um número indeterminado de parâmetros e retorne a soma desses parâmetros
function somar(...numeros) {
    
    let total = numeros.reduce((acumulator, number)=> acumulator + number);
    return total;
}

console.log(somar(1, 2, 3, 4, 5)); // saída esperada: 15
console.log(somar(10, 20, 30)); // saída esperada: 60
//////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

// 2. Crie uma função que recebe um número indeterminado de parâmetros e retorne a média desses parâmetros
function calcularMedia(...numeros) {
    let total = numeros.reduce((acumulator, number)=> acumulator + number);
    let avg = total/numeros.length;
    return avg;
}

console.log(calcularMedia(1, 2, 3, 4, 5)); // saída esperada: 3
console.log(calcularMedia(10, 20, 30)); // saída esperada: 20  
//////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

// 3.  Crie uma função que recebe um objeto e um número indeterminado de propriedades e valores, e retorne um novo objeto contendo as propriedades e valores do objeto original e as propriedades e valores recebidos
function adicionarPropriedades(objeto, ...novasPropriedades) {
   
    let newObj = objeto;
    
    novasPropriedades.forEach(prop => {
        novasPropriedades.entries(prop).forEach(
            ([key,value])=> {
                newObj[key] = value;
            });
        });

    return newObj;
}

const pessoa = {
    nome: 'Fulano',
    idade: 30,
};

console.log(adicionarPropriedades(pessoa, { cidade: 'São Paulo' }, { profissao: 'Programador' })) // saída esperada: { nome: 'Fulano', idade: 30, cidade: 'São Paulo', profissao: 'Programador' }  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export { somar, calcularMedia, adicionarPropriedades };

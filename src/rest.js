// 1. Crie uma função que recebe um número indeterminado de parâmetros e retorne a soma desses parâmetros
function somar(...numeros) { // esta sendo definido que não tem um limite fixo de números
    let resultado = 0; // definindo para resultado começar em 0
    let qtd = numeros.length  //  vai receber o tamanho de números (quantidade de parâmetros)
    for(let i=0; i<qtd; i++){  //  laço para percorrer
      resultado += numeros[i]  //  vai fazendo a soma dos números
    }
    return resultado  // retorna a soma dos números
}

console.log(somar(1, 2, 3, 4, 5)); // saída esperada: 15
console.log(somar(10, 20, 30)); // saída esperada: 60
//////////////////////////////////////////////////////////////////////////////////////////////////////////////// 




// 2. Crie uma função que recebe um número indeterminado de parâmetros e retorne a média desses parâmetros
function calcularMedia(...numeros) {  // esta sendo definido que não tem um limite fixo de números
    if (numeros.length === 0) {
        return 0;
    }
    let soma = 0;
    for (let numero of numeros) {
        soma += numero;
    }
    return soma / numeros.length;
}

console.log(calcularMedia(1, 2, 3, 4, 5)); // saída esperada: 3
console.log(calcularMedia(10, 20, 30)); // saída esperada: 20  
//////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

// 3. Crie uma função que recebe um objeto e um número indeterminado de propriedades e valores, e retorne um novo objeto contendo as propriedades e valores do objeto original e as propriedades e valores recebidos.
function adicionarPropriedades(objeto, ...novasPropriedades) {
   
}

const pessoa = {
    nome: 'Fulano',
    idade: 30,
};

console.log(adicionarPropriedades(pessoa, { cidade: 'São Paulo' }, { profissao: 'Programador' })); // saída esperada: { nome: 'Fulano', idade: 30, cidade: 'São Paulo', profissao: 'Programador' }  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export { somar, calcularMedia, adicionarPropriedades };

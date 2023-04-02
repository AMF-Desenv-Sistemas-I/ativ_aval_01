// ARRAYS

//1. Crie uma função que dobre o numero
//Essa função dobra o numero
function dobrarNumero(numero) {
    return numero * 2;
}

console.log(dobrarNumero(5)); // saída esperada: 10
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//2. Crie uma função que receba um array de números como parâmetro e retorne a soma dos valores deste array
//A função recebe um array de números como entrada, cria uma variável para armazenar a soma, percorre o array somando cada número na variável de soma e retorna o resultado da soma.
function somarNumeros(numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    return soma;
}

console.log(somarNumeros([1, 2, 3, 4, 5])); // saída esperada: 15
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//3. Crie uma função que receba um array de números como parâmetro e retorne outro array contendo apenas os números pares
//A função filtrarNumerosPares recebe um array de números como argumento e retorna um novo array contendo apenas os números pares desse array original. Isso é feito usando o método filter(), que itera sobre cada número do array original e verifica se ele é par (ou seja, se é divisível por 2 com resto 0). Se o número for par, ele é incluído no novo array retornado pela função.
function filtrarNumerosPares(numeros) {
    return numeros.filter(function(numero) {
        return numero % 2 === 0;
    });
}

console.log(filtrarNumerosPares([1, 2, 3, 4, 5, 6, 7, 8])); // saída esperada: [2, 4, 6, 8]
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//4. Crie uma função que receba um array de números como parâmetro e retorne outro array contendo apenas os números ímpares.
//Essa é uma função que recebe um array de números como argumento e retorna um novo array contendo apenas os números ímpares. Para isso, ela utiliza o método filter() do JavaScript para percorrer o array original e verificar se cada número é ímpar ou não, usando a condição numero % 2 !== 0. Se a condição for verdadeira, o número é adicionado ao novo array retornado pela função.
function filtrarNumerosImpares(numeros) {
    return numeros.filter(function(numero) {
        return numero % 2 !== 0;
    });
}

console.log(filtrarNumerosImpares([1, 2, 3, 4, 5, 6, 7, 8])); // saída esperada: [1, 3, 5, 7]
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5.Crie uma função que receba um array de números como parâmetro e retorne outro array contendo apenas os números maiores que 10
//Essa função recebe uma lista de números e retorna apenas os números maiores que 10.
function filtrarNumerosMaioresQueDez(numeros) {
    return numeros.filter(function(numero) {
        return numero > 10;
    });
}

console.log(filtrarNumerosMaioresQueDez([5, 10, 15, 20, 25])); // saída esperada: [15, 20, 25]
//////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

// 6. Crie uma função que receba dois arrays como parâmetros e retorne outro array contendo a concatenação dos dois primeiros
//A função concatenarArrays recebe dois arrays como argumentos e retorna um novo array que contém todos os elementos do primeiro array seguidos de todos os elementos do segundo array.
function concatenarArrays(primeiroArray, segundoArray) {
    return primeiroArray.concat(segundoArray);
}

console.log(concatenarArrays([1, 2, 3], [4, 5, 6])); // saída esperada: [1, 2, 3, 4, 5, 6]
//////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

export { dobrarNumero, somarNumeros, filtrarNumerosPares, filtrarNumerosImpares, filtrarNumerosMaioresQueDez, concatenarArrays };

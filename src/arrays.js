// ARRAYS

//1. Crie uma função que dobre o numero
function dobrarNumero(numero) {
  return numero * 2; 
}

console.log(dobrarNumero(5)); // saída esperada: 10
/* A função dobrarNumero recebe um número e retorna o dobro dele. 
Ela é usada para verificar se o número é par, já que o dobro de um número par é sempre um número inteiro. */
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//2. Crie uma função que receba um array de números como parâmetro e retorne a soma dos valores deste array
function somarNumeros(numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
    }
    return soma;
}

console.log(somarNumeros([1, 2, 3, 4, 5])); // saída esperada: 15
/* A função somarNumeros recebe um array de números e retorna a soma deles. Ela é usada para somar os valores de um array. */
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//3. Crie uma função que receba um array de números como parâmetro e retorne outro array contendo apenas os números pares
function filtrarNumerosPares(numeros) {

    let numerosPares = [];

    for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        numerosPares.push(numeros[i]);
        }
    }
    return numerosPares;
}

console.log(filtrarNumerosPares([1, 2, 3, 4, 5, 6, 7, 8])); // saída esperada: [2, 4, 6, 8]
/* A função filtrarNumerosPares recebe um array de números e retorna um novo array contendo apenas os números pares. 
Ela é usada para filtrar os números pares de um array. */
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//4. Crie uma função que receba um array de números como parâmetro e retorne outro array contendo apenas os números ímpares.
function filtrarNumerosImpares(numeros) {

    let numerosImpares = [];

    for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 !== 0) {
        numerosImpares.push(numeros[i]);
        }
    }
    return numerosImpares;
}

console.log(filtrarNumerosImpares([1, 2, 3, 4, 5, 6, 7, 8])); // saída esperada: [1, 3, 5, 7]
/* A função filtrarNumerosImpares recebe um array de números e retorna um novo array contendo apenas os números ímpares.
Ela é usada para filtrar os números ímpares de um array.*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5.Crie uma função que receba um array de números como parâmetro e retorne outro array contendo apenas os números maiores que 10
function filtrarNumerosMaioresQueDez(numeros) {
    let numerosMaioresQueDez = [];
    for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 10) {
        numerosMaioresQueDez.push(numeros[i]);
        }
    }
    return numerosMaioresQueDez;
}

console.log(filtrarNumerosMaioresQueDez([5, 10, 15, 20, 25])); // saída esperada: [15, 20, 25]
/* A função filtrarNumerosMaioresQueDez recebe um array de números e retorna um novo array contendo apenas os números maiores que 10. 
Ela é usada para filtrar os números maiores que 10 de um array.*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

// 6. Crie uma função que receba dois arrays como parâmetros e retorne outro array contendo a concatenação dos dois primeiros
function concatenarArrays(primeiroArray, segundoArray) {
    return primeiroArray.concat(segundoArray);
}

console.log(concatenarArrays([1, 2, 3], [4, 5, 6])); // saída esperada: [1, 2, 3, 4, 5, 6]
/* A função concatenarArrays recebe dois arrays e retorna um novo array contendo a concatenação dos dois.
Ela é usada para concatenar dois arrays em um só.
 */
//////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

export { dobrarNumero, somarNumeros, filtrarNumerosPares, filtrarNumerosImpares, filtrarNumerosMaioresQueDez, concatenarArrays };

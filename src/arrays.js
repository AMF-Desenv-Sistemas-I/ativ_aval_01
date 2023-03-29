// ARRAYS

//1. Crie uma função que receba um número como parâmetro e retorne true se ele for par ou false se ele for ímpar
function dobrarNumero(numero) {
  return 2 * numero; 
}

console.log(dobrarNumero(5)); // saída esperada: 10
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//2. Crie uma função que receba um array de números como parâmetro e retorne a soma dos valores deste array
function somarNumeros(numeros) {
  var total = numeros.reduce(function (total, numero) { //função reduce para percorrer todo array somando seus valores
    return total + numero;
  }, 0);
  return total
}

console.log(somarNumeros([1, 2, 3, 4, 5])); // saída esperada: 15
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//3. Crie uma função que receba um array de números como parâmetro e retorne outro array contendo apenas os números pares
function filtrarNumerosPares(numeros) {
    const pares = numeros.filter(numero => {
        if (numero % 2 === 0) { // verifica se o numero é par
            return numero;
        }
    })
    return pares;
}

console.log(filtrarNumerosPares([1, 2, 3, 4, 5, 6, 7, 8])); // saída esperada: [2, 4, 6, 8]
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//4. Crie uma função que receba um array de números como parâmetro e retorne outro array contendo apenas os números ímpares.
function filtrarNumerosImpares(numeros) {
    const impares = numeros.filter(numero => {
        if (numero % 2 !== 0) { // verifica e nega se o numero é par
            return numero;
        }
    })
    return impares;
}

console.log(filtrarNumerosImpares([1, 2, 3, 4, 5, 6, 7, 8])); // saída esperada: [1, 3, 5, 7]
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5.Crie uma função que receba um array de números como parâmetro e retorne outro array contendo apenas os números maiores que 10
function filtrarNumerosMaioresQueDez(numeros) {
    const maiores = numeros.filter(numero => { // filtra itens maiores que 10
        if (numero > 10) {
            return numero; //retorna eles para o novo array 
        }
    })
    return maiores;
}

console.log(filtrarNumerosMaioresQueDez([5, 10, 15, 20, 25])); // saída esperada: [15, 20, 25]
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 6. Crie uma função que receba dois arrays como parâmetros e retorne outro array contendo a concatenação dos dois primeiros
function concatenarArrays(primeiroArray, segundoArray) {
    return [...primeiroArray, ...segundoArray] //cria um novo array desestruturando os dois recebidos por parametro
}

console.log(concatenarArrays([1, 2, 3], [4, 5, 6])); // saída esperada: [1, 2, 3, 4, 5, 6]
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export {
  dobrarNumero,
  somarNumeros,
  filtrarNumerosPares,
  filtrarNumerosImpares,
  filtrarNumerosMaioresQueDez,
  concatenarArrays,
};

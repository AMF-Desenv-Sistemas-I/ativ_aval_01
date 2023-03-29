// ARRAYS

//1. Crie uma função que dobre o numero
function dobrarNumero(numero) {
  return numero * 2;
}

console.log(dobrarNumero(5)); // saída esperada: 10
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//2. Crie uma função que receba um array de números como parâmetro e retorne a soma dos valores deste array
function somarNumeros(numeros) {
    if(numeros.length > 0){
      return numeros.reduce((acumulador, numero) => acumulador + numero);
    }
    return 0;
}

console.log(somarNumeros([1, 2, 3, 4, 5])); // saída esperada: 15
////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//3. Crie uma função que receba um array de números como parâmetro e retorne outro array contendo apenas os números pares
function filtrarNumerosPares(numeros) {
    return numeros.filter(numero => numero % 2 === 0);
}

console.log(filtrarNumerosPares([1, 2, 3, 4, 5, 6, 7, 8])); // saída esperada: [2, 4, 6, 8]
////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//4. Crie uma função que receba um array de números como parâmetro e retorne outro array contendo apenas os números ímpares.
function filtrarNumerosImpares(numeros) {
    return numeros.filter(numero => numero % 2 != 0);
}

console.log(filtrarNumerosImpares([1, 2, 3, 4, 5, 6, 7, 8])); // saída esperada: [1, 3, 5, 7]
////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 5.Crie uma função que receba um array de números como parâmetro e retorne outro array contendo apenas os números maiores que 10
function filtrarNumerosMaioresQueDez(numeros) {
    return numeros.filter(numero => numero > 10);
}


console.log(filtrarNumerosMaioresQueDez([5, 10, 15, 20, 25])); // saída esperada: [15, 20, 25]
//////////////////////////////////////////////////////////////////////////////////////////////////////////////// 


// 6. Crie uma função que receba dois arrays como parâmetros e retorne outro array contendo a concatenação dos dois primeiros
function concatenarArrays(primeiroArray, segundoArray) {
  return primeiroArray.concat(segundoArray);
}

console.log(concatenarArrays([1, 2, 3], [4, 5, 6])); // saída esperada: [1, 2, 3, 4, 5, 6]
//////////////////////////////////////////////////////////////////////////////////////////////////////////////// 


export { dobrarNumero, somarNumeros, filtrarNumerosPares, filtrarNumerosImpares, filtrarNumerosMaioresQueDez, concatenarArrays };

// ARRAYS

//1. Crie uma função que dobre o numero
function dobrarNumero(numero) {
  return numero*2; // retorno o que recebi, multiplicado por dois
}

console.log(dobrarNumero(5)); // saída esperada: 10
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//2. Crie uma função que receba um array de números como parâmetro e retorne a soma dos valores deste array
function somarNumeros(numeros) {
  let soma = 0;
  for (let i = 0; i < numeros.length; i++) {// abro um laço de repetição para percorrer os numeros
    soma += numeros[i]; // atribuo o valor que está passando pelo laço na soma
  }
  return soma;
}

console.log(somarNumeros([1, 2, 3, 4, 5])); // saída esperada: 15
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//3. Crie uma função que receba um array de números como parâmetro e retorne outro array contendo apenas os números pares
function filtrarNumerosPares(numeros) {
  const numerosPares = numeros.filter(numero => numero % 2 === 0); // abaixo tinha feito com um laço de repetição, verificava se era par para depois filtrar, lendo a documentação descobri que podia filtrar direto
  // for (let i = 0; i < numeros.length; i++) {
  //   if (numeros[i] % 2 !== 0);{
  //     numeros = numeros.filter(numero => numero !== numeros[i]);
  //   }
  // }
  return numerosPares;
}

console.log(filtrarNumerosPares([1, 2, 3, 4, 5, 6, 7, 8])); // saída esperada: [2, 4, 6, 8]
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//4. Crie uma função que receba um array de números como parâmetro e retorne outro array contendo apenas os números ímpares.
function filtrarNumerosImpares(numeros) {
  const numerosImpares = numeros.filter(numero => numero % 2 !== 0); // Uso a função nativa para filtrar os impares
  return numerosImpares;
}

console.log(filtrarNumerosImpares([1, 2, 3, 4, 5, 6, 7, 8])); // saída esperada: [1, 3, 5, 7]
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5.Crie uma função que receba um array de números como parâmetro e retorne outro array contendo apenas os números maiores que 10
function filtrarNumerosMaioresQueDez(numeros) {
  const numerosMaioresQueDez = numeros.filter(numero => numero > 10); // uso a função nativa para filtrar os  maiores que 10 
  return numerosMaioresQueDez;
}

console.log(filtrarNumerosMaioresQueDez([5, 10, 15, 20, 25])); // saída esperada: [15, 20, 25]
//////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

// 6. Crie uma função que receba dois arrays como parâmetros e retorne outro array contendo a concatenação dos dois primeiros
function concatenarArrays(primeiroArray, segundoArray) {
  const arrayConcatenado = primeiroArray.concat(segundoArray); // recebo dois arrays, uso a função concat nativa para concatenar o primeiro ao segundo e atribui o valor a const arrayConcatenado
  return arrayConcatenado;
}

console.log(concatenarArrays([1, 2, 3], [4, 5, 6])); // saída esperada: [1, 2, 3, 4, 5, 6]
//////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

export { dobrarNumero, somarNumeros, filtrarNumerosPares, filtrarNumerosImpares, filtrarNumerosMaioresQueDez, concatenarArrays };

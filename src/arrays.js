// ARRAYS

//1. Crie uma função que dobre o numero
function dobrarNumero(numero) {
    //retorna o numero multiplicado por 2
    return numero * 2;
}

console.log(dobrarNumero(5)); // saída esperada: 10
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//2. Crie uma função que receba um array de números como parâmetro e retorne a soma dos valores deste array
function somarNumeros(numeros) {
    let soma = 0;
    //percorre os numeors do arranjo e vai somando eles 
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    return soma;
}

console.log(somarNumeros([1, 2, 3, 4, 5])); // saída esperada: 15
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//3. Crie uma função que receba um array de números como parâmetro e retorne outro array contendo apenas os números pares
function filtrarNumerosPares(numeros) {
    let arrPares = [];
    //percorre os numeros do arranjo e separa os pares
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 == 0) {
            arrPares.push(numeros[i]);
        }
    }
    return arrPares;
}

console.log(filtrarNumerosPares([1, 2, 3, 4, 5, 6, 7, 8])); // saída esperada: [2, 4, 6, 8]
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//4. Crie uma função que receba um array de números como parâmetro e retorne outro array contendo apenas os números ímpares.
function filtrarNumerosImpares(numeros) {
    let arrImpares = [];
    //percorre os numeros do arranjo e confere se não são pares
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 != 0) {
            arrImpares.push(numeros[i]);
        }
    }
    return arrImpares;
}

console.log(filtrarNumerosImpares([1, 2, 3, 4, 5, 6, 7, 8])); // saída esperada: [1, 3, 5, 7]
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5.Crie uma função que receba um array de números como parâmetro e retorne outro array contendo apenas os números maiores que 10
function filtrarNumerosMaioresQueDez(numeros) {
    let arrMaiores = [];
    //percorre os numeros do arranjo e confere se os numeros são maiores que 10
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > 10) {
            arrMaiores.push(numeros[i]);
        }
    }
    return arrMaiores;
}

console.log(filtrarNumerosMaioresQueDez([5, 10, 15, 20, 25])); // saída esperada: [15, 20, 25]
//////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

// 6. Crie uma função que receba dois arrays como parâmetros e retorne outro array contendo a concatenação dos dois primeiros
function concatenarArrays(primeiroArray, segundoArray) {
    //concatena o primero array com o segundo array
   let newArr = primeiroArray.concat(segundoArray);
   return newArr;
}

console.log(concatenarArrays([1, 2, 3], [4, 5, 6])); // saída esperada: [1, 2, 3, 4, 5, 6]
//////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

export { dobrarNumero, somarNumeros, filtrarNumerosPares, filtrarNumerosImpares, filtrarNumerosMaioresQueDez, concatenarArrays };

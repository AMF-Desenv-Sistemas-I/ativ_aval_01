// ARRAYS

//1. Crie uma função que dobre o numero
function dobrarNumero(numero) {
    // Dobrando o valor para retornar a 10 
    return numero * 2;
}
console.log(dobrarNumero(5)); // saída esperada: 10
////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//2. Crie uma função que receba um array de números como parâmetro e retorne a soma dos valores deste array
function somarNumeros(numeros) {
    // Dando valor como Zero pois vai receber o valor da soma total da Array
    let arraySoma = 0; 

    // Vai percorrer o tamanho da lista e pegar os valores 
    for(let i = 0; i < numeros.length; i++) {
        // Somando os valores da lista 
        arraySoma = arraySoma + numeros[i];
    }
    return arraySoma;
}
console.log(somarNumeros([1, 2, 3, 4, 5])); // saída esperada: 15
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//3. Crie uma função que receba um array de números como parâmetro e retorne outro array contendo apenas os números pares
function filtrarNumerosPares(numeros) {
    // filtrando os numeros, pos isso pegando o resto zero pois sera os numeros pares
    const numerosPares = numeros.filter(numeros => numeros % 2 === 0);
    return numerosPares;
}
console.log(filtrarNumerosPares([1, 2, 3, 4, 5, 6, 7, 8])); // saída esperada: [2, 4, 6, 8]
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//4. Crie uma função que receba um array de números como parâmetro e retorne outro array contendo apenas os números ímpares.
function filtrarNumerosImpares(numeros) {
    // Criando uma variavel sem valor e fritando os numeros da array pois isso pegando os numeros divivel por 2 diferentes de zero
    const numerosImapres = numeros.filter(numeros => numeros % 2 != 0);
    return numerosImapres;
    
}
console.log(filtrarNumerosImpares([1, 2, 3, 4, 5, 6, 7, 8])); // saída esperada: [1, 3, 5, 7]
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5.Crie uma função que receba um array de números como parâmetro e retorne outro array contendo apenas os números maiores que 10
function filtrarNumerosMaioresQueDez(numeros) {
    // filtrando os valores acima de 10
    const maior10 = numeros.filter(numeros => numeros > 10);
    return maior10;
    }
console.log(filtrarNumerosMaioresQueDez([5, 10, 15, 20, 25])); // saída esperada: [15, 20, 25]
//////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

// 6. Crie uma função que receba dois arrays como parâmetros e retorne outro array contendo a concatenação dos dois primeiros
function concatenarArrays(primeiroArray, segundoArray) {
    // Concatenando as  duas Array 
    const todasArray = primeiroArray.concat(segundoArray);
    return todasArray;
}

console.log(concatenarArrays([1, 2, 3], [4, 5, 6])); // saída esperada: [1, 2, 3, 4, 5, 6]
//////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

export { dobrarNumero, somarNumeros, filtrarNumerosPares, filtrarNumerosImpares, filtrarNumerosMaioresQueDez, concatenarArrays };

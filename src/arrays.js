// ARRAYS

//1. Crie uma função que receba um número como parâmetro e retorne true se ele for par ou false se ele for ímpar
function dobrarNumero(numero) { // criação da função com seu parâmetro
    return numero * 2; // pega o número e faz vezes 2
}
console.log(dobrarNumero(5)); // saída esperada: 10
////////////////////////////////////////////////////////////////////////////////////////////////////////////////





//2. Crie uma função que receba um array de números como parâmetro e retorne a soma dos valores deste array
function somarNumeros(numeros) {  // criação da função com seu parâmetro
    let somar = 0;  //soma começa em 0
    for (let i=0; i<numeros.lenght;i++){ // laço de repetição que faz com que ele percorra todos os dados dentro do array
        somar += numeros[i] // pega a soma e faz mais a próima soma e guarda o valor totaç
    }
    return somar; // retorna o valor total
}
console.log(somarNumeros([1, 2, 3, 4, 5])); // saída esperada: 15
////////////////////////////////////////////////////////////////////////////////////////////////////////////////




//3. Crie uma função que receba um array de números como parâmetro e retorne outro array contendo apenas os números pares
function filtrarNumerosPares(numeros) {  // criação da função com seu parâmetro
    let numPar = [];  // cria um array vazio para armazenar os números pares
    for (let i=0; i<numeros.length; i++){ // laço para percorrer todos os dados do array
        if (numeros[i] % 2 === 0) { // pega um dado por vez do array e faz o cálculo para ver, se sobrou 0, se não é impar
            numPar.push(numeros[i]); // push para adicionar os valores pares dentro do array
        }
    }
    return numPar; // retorna o array de números pares
}   
console.log(filtrarNumerosPares([1, 2, 3, 4, 5, 6, 7, 8])); // saída esperada: [2, 4, 6, 8]
////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//4. Crie uma função que receba um array de números como parâmetro e retorne outro array contendo apenas os números ímpares.
function filtrarNumerosImpares(numeros) {  // criação da função com seu parâmetro
    let numImpar = []; //cria um array vazio para armazenar os números ímpares
    for (let i=0; i<numeros.length; i++){  // laço para percorrer todos os dados do array
        if (numeros[i] % 2 != 0){  // pega um dado por vez do array e faz o cálculo para ver, se sobrou diferente de 0 é ímpar
            numImpar.push(numeros[i]);  // push para adicionar os valores ímpares dentro do array
        }
        
    }
    return numImpar; // retorna o array de números ímpares
}
console.log(filtrarNumerosImpares([1, 2, 3, 4, 5, 6, 7, 8])); // saída esperada: [1, 3, 5, 7]
////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// 5.Crie uma função que receba um array de números como parâmetro e retorne outro array contendo apenas os números maiores que 10
function filtrarNumerosMaioresQueDez(numeros) {  // criação da função com seu parâmetro
    let maior = []; //cria um array vazio para armazenar os números maiores de 10
    for (let i=0; i<numeros.length; i++){  // laço para percorrer todos os dados do array
        if (numeros[i] > 10) { // faz a comparação para ver se o número é maior de 10
            maior.push(numeros[i]); // push para adicionar o número no array caso ele seja maior que 10
        }
    }
    return maior; // retorna os números maiores que 10 dentro do array
}
console.log(filtrarNumerosMaioresQueDez([5, 10, 15, 20, 25])); // saída esperada: [15, 20, 25]
//////////////////////////////////////////////////////////////////////////////////////////////////////////////// 



// 6. Crie uma função que receba dois arrays como parâmetros e retorne outro array contendo a concatenação dos dois primeiros
function concatenarArrays(primeiroArray, segundoArray) {  // criação da função com seu parâmetro
    const primeiroArray = [1, 2, 3]; // dados do primeiro array
    const segundoArray = [4, 5, 6]; // dados do segundo array
    const soma = primeiroArray.concat(segundoArray); // um array soma para juntar os dois array
    return soma;
}
console.log(concatenarArrays([1, 2, 3], [4, 5, 6])); // saída esperada: [1, 2, 3, 4, 5, 6]
//////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

export { dobrarNumero, somarNumeros, filtrarNumerosPares, filtrarNumerosImpares, filtrarNumerosMaioresQueDez, concatenarArrays };

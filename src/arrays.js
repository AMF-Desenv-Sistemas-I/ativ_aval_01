// ARRAYS

//1. Crie uma função que receba um número como parâmetro e retorne true se ele for par ou false se ele for ímpar

// função simples para dobrar o valor de uma variavel, onde no retorno ja coloquei ela vez 2
function dobrarNumero(numero) {
    return numero*2
}

console.log(dobrarNumero(5)); // saída esperada: 10
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//2. Crie uma função que receba um array de números como parâmetro e retorne a soma dos valores deste array

//Aqui uso uma variavel chamada soma para ir armazenando a soma dos numeros de dentro de um array que percorro com o forEach que é um laço de repetição que percorre todos elementos de um array

function somarNumeros(numeros) {
    let soma=0;
    numeros.forEach(num =>{
        soma+= num;
    })
    return soma;
 
}

console.log(somarNumeros([1, 2, 3, 4, 5])); // saída esperada: 15
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//3. Crie uma função que receba um array de números como parâmetro e retorne outro array contendo apenas os números pares

//crio uma constante nova que é um array igual a que é passada como parametro e uso a função filter para retorna com apenas os resultados que derem verdadeiros na condição que passei

function filtrarNumerosPares(numeros) {
    const numerosPares= numeros.filter(numeros => numeros%2===0);
    return numerosPares;
        }

console.log(filtrarNumerosPares([1, 2, 3, 4, 5, 6, 7, 8])); // saída esperada: [2, 4, 6, 8]
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//4. Crie uma função que receba um array de números como parâmetro e retorne outro array contendo apenas os números ímpares.

//crio uma constante nova que é um array igual a que é passada como parametro e uso a função filter para retorna com apenas os resultados que derem verdadeiros na condição que passei

function filtrarNumerosImpares(numeros) {
    const numerosImpares= numeros.filter(numeros => numeros%2 !=0);
    return numerosImpares;
    }

console.log(filtrarNumerosImpares([1, 2, 3, 4, 5, 6, 7, 8])); // saída esperada: [1, 3, 5, 7]
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5.Crie uma função que receba um array de números como parâmetro e retorne outro array contendo apenas os números maiores que 10

//crio uma constante nova que é um array igual a que é passada como parametro e uso a função filter para retorna com apenas os resultados que derem verdadeiros na condição que passei

function filtrarNumerosMaioresQueDez(numeros) {
    const MaiorQDez= numeros.filter(numeros=> numeros >10);
    return MaiorQDez;
  
}

console.log(filtrarNumerosMaioresQueDez([5, 10, 15, 20, 25])); // saída esperada: [15, 20, 25]
//////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

// 6. Crie uma função que receba dois arrays como parâmetros e retorne outro array contendo a concatenação dos dois primeiros

//Criado uma constante para guarda o novo array que será resultado da concatenação do primeiro com o segundo array

function concatenarArrays(primeiroArray, segundoArray) {
    const arrayConcat= primeiroArray.concat(segundoArray);
    return arrayConcat;
}

console.log(concatenarArrays([1, 2, 3], [4, 5, 6])); // saída esperada: [1, 2, 3, 4, 5, 6]
//////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

export { dobrarNumero, somarNumeros, filtrarNumerosPares, filtrarNumerosImpares, filtrarNumerosMaioresQueDez, concatenarArrays };

// REST

// 1- FUNÇÃO QUE RECEBE UM NÚMERO INDEFINIDO DE PARAMETROS E RETORNA A SOMA DELES

// USADO O SPREAD(...) PARA INDICAR UM NÚMERO INDEFINIDO DE PARAMETROS
function soma_rest(...numeros){
    // VARIAVEL QUE ARMAZENARA A SOMA DE TODO ARRAY
    let soma = 0;
    numeros.forEach(function(i){
        // AQUI É ONDE O SHOW ESTÁ ACONTECENDO
        soma += i;
    });
    // RETORNANDO A SOMA DOS PARAMETROS
    return soma;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2- FUNÇÃO QUE RECEBE UM NÚMERO INDEFINIDO DE PARAMETROS E RETORNA A MÉDIA DELES

function media_rest(...numeros){
    // VARIAVEL QUE ARMAZENARA A SOMA DE TODO ARRAY
    let soma = 0;
    numeros.forEach(function(i){
        // AQUI É ONDE É REALIZADO A SOMA DOS NÚMEROS
        soma += i;
    });
    // A MAGICA ACONTECE AQUI, ESTOU RETORNANDO A SOMA DIVIDIDO PELO TAMANHO DO ARRAY, DANDO A MÉDIA
    return soma / numeros.length;
}
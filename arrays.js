// ARRAYS

// 1- FUNÇÃO PARA VALIDAR SE O NÚMERO É PAR OU IMPAR
function par_impar(numero){
    // ESTÁ VERIFICANDO SE O NÚMERO É DIVISIVEL POR 2
    if(numero % 2 === 0){
        // SE FOR DIVISIVEL POR 2 ELE VAI RETORNAR "TRUE", QUE SIGNIFICA QUE O NÚMERO É PAR
        return true;
    }
    // SE ELE NÃO ENTRAR NO LAÇO ELE RETORNA "FALSE", QUE SIGNIFICA QUE O NÚMERO É IMPAR
    return false;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2- FUNÇÃO QUE RECEBE UM ARRAY DE NÚMEROS E RETORNA O SOMA DELES
function soma_array(array) {
    // VARIAVEL RESPONSAVEL DE FAZER A SOMA DOS NÚMEROS DO ARRAY
    let soma = 0;
    // UTILIZADO O MÉTODO forEach QUE RECEBE UMA FUNÇÃO callback PARA PERCORRER TODO ARRAY
    array.forEach(function(numero) {
        // AQUI É ONDE A MAGICA ACONTECE
        soma += numero;
    });
    // ESTÁ RETORNANDO A SOMA DE TODOS OS NÚMEROS DO ARRAY
    return soma;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3- FUNÇÃO QUE RECEBE UM ARRAY E RETORNA APENAS OS NÚMEROS PARES DESSE ARRAY

function array_de_pares(array) {
    // ARRAY QUE VAI SER USADO PARA ARMAZENAR OS NÚMEROS PARES
    let array_par = [];
    // MÉTODO forEach PARA PERCORRER TODO ARRAY
    array.forEach(function(numero){
        // VALIDANDO O NÚMERO, PARA VER SE É DIVISIVEL POR 2
        if(numero % 2 === 0){
            // ADICIONANDO OS NÚMEROS PARES NO ARRAY CRIADO PARA ISSO
            array_par.push(numero);
        }
    });
    // RETORNANDO UM ARRAY APENAS COM NÚMEROS PARES
    return array_par;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4- FUNÇÃO QUE RECEBE UM ARRAY E RETORNA APENAS OS NÚMEROS IMPARES DESSE ARRAY

function array_de_impar(array) {
    // ARRAY QUE VAI SER USADO PARA ARMAZENAR OS NÚMEROS IMPARES
    let array_impar = [];
    // MÉTODO forEach PARA PERCORRER TODO ARRAY
    array.forEach(function(numero){
        // VALIDANDO O NÚMERO, PARA VER SE NÃO É DIVISIVEL POR 2
        if(numero % 2 !== 0){
            // ADICIONANDO OS NÚMEROS IMPARES NO ARRAY CRIADO PARA ISSO
            array_impar.push(numero);
        }
    });
    // RETORNANDO UM ARRAY APENAS COM NÚMEROS IMPARES
    return array_impar;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5- FUNÇÃO QUE RECEBE UM ARRAY E RETORNA APENAS OS NÚMEROS MAIORES QUE 10 DESSE ARRAY

function maior_que_10(array) {
    // ARRAY QUE VAI SER USADO PARA ARMAZENAR OS NÚMEROS MAIORES QUE 10
    let array_maior_10 = [];
    // MÉTODO forEach PARA PERCORRER TODO ARRAY
    array.forEach(function(numero){
        // VALIDANDO O NÚMERO, PARA VER SE É MAIOR QUE 10
        if(numero > 10){
            // ADICIONANDO OS NÚMEROS MAIOR QUE 10 NO ARRAY CRIADO PARA ISSO
            array_maior_10.push(numero);
        }
    });
    // RETORNANDO UM ARRAY APENAS COM NÚMEROS MAIOR QUE 10
    return array_maior_10;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// 6- FUNÇÃO QUE RECEBE 2 ARRAYS E RETORNA A JUNÇÃO DESSES ARRAYS

function juntando_arrays(array1, array2){
    // CRIANDO O ARRAY E UTILIZANDO O MÉTODO concat PARA JUNTAR OS DOIS ARRAYS EM UM SÓ
    let concatArrays = array1.concat(array2);
    // RETORNANDO A JUNÇÃO DOS ARRAYS
    return concatArrays;
}
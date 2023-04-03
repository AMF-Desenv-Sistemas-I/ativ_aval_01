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


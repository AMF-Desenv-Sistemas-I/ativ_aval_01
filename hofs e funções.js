//   HOFS E FUNÇÕES

// 1- FUNÇÃO QUE RETORNA UM ARRAY CONTENDO AS CHAVES DO OBJETO

function chave_objeto(objeto){
    // UTILIZA O METODO Object.keys PARA RETORNAR UM ARREY CONTENDO AS CHAVES DESSE OBJETO
    return Object.keys(objeto);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2- FUNÇÃO QUE RECEBE UM OBJETO COM NOMES E RETORNA UMA LISTA COM TODOS OS NOMES EM MAIUSCULO

function nomeMaiusculo(){
    // UMA LISTA ALEATORIA DE PESSOAS
    const pessoas = [
        {nome: "Vitor"},
        {nome: "Matheus"},
        {nome: "Guilherme"},
    ];
    // NESSE RETURN EU ESTOU PEGANDO O nome DO OBJETO E DEIXANTO TODOS EM CAIXA ALTA
    return pessoas.map(pes => pes.nome.toUpperCase());
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3- FUNÇÃO QUE RECEBE UM OBJETO COM PREÇOS DE PRODUTOS E RETORNA ELES COM 10% DE DESCONTO

function Desconto(){
    // LISTA ALEAtÓRIOA DE PRODUTOS
    const produtos = [
        {nome: "Bolacha", preco: 4},
        {nome: "Refri", preco: 8},
        {nome: "Pizza", preco: 30},
    ];
    // RETURN QUE ESTA PEGANDO O preco DE TODOS OS OBJETOS E DANDO 10% DE DESCONTO
    return produtos.map(prod => prod.preco * 0.9);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4- FUNÇÃO QUE RECEBE UM OBJETO E RETORNA UMA LISTA COM O PESSOAL DE MAIOR IDADE

function maior_idade(){
    // UMA LISTA ALEATORIA DE PESSOAS
    const pessoas = [
        {nome: "Vitor", idade: 20},
        {nome: "Matheus", idade: 17},
        {nome: "Guilherme", idade: 31},
    ];
    // ESTOU FILTRANDO POR IDADE AS PESSOAS DO OBJETO E ARMAZENANDO NA VARIAVEL maiorIdade
    let maiorIdade = pessoas.filter(pes => pes.idade >= 18);
    // ESTOU RETORNANDO A LISTA DE PESSOAS COM MAIS DE 18 ANOS
    return maiorIdade;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5- RECEBE UMA LISTA DE STINGS E RETORNA UMA LISTA COM AS STINGS MAIOR QUE 5 CARACTERES

function listaString5(lista){
    // AQUI EU ESTOU FILTRANDO A LISTA QUE RECEBI E PEGANDO AS STINGS COM MAIS DE 5 CARACTERES E ARMAZENANDO NA VARIALVEL
    let lista_mais_que_5 = lista.filter(list => list.length > 5);
    // RETORNANDO A LISTA COM AS STINGS MAIORES QUE 5
    return lista_mais_que_5;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// 6-

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// 7-

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// 8-

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// 9-

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// 10-

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// 11-

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// 12-

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// 13-
// 1. Faça uma requisição GET para a API do Chuck Norris e exiba no console uma piada aleatória
// https://api.chucknorris.io/jokes/random
// import fetch from 'node-fetch' 
async function randomJokes() {
    try {
        //await aguarda até que a promise finaliza e fetch busca recursos de froma asincrona na rede
        const response = await fetch("https://api.chucknorris.io/jokes/random");
        //data aguarda a promise e converte o conteudo da requisição para .json
        const data = await response.json();
        // console.log(data.value);
        //retorna o valor
        return data;
        
    } catch (error) {
        console.log(error);
    }
}
randomJokes();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. Faça uma requisição GET para a API do GitHub e exiba no console os dados retornados
// https://api.github.com/users/**NOMEDOUSUARIO** 
async function gitHubUsers() {
    try {
        //faz uma requisição http e espera ate que a promise seja concluida
        const response = await fetch("https://api.github.com/users/nunesfb");
        //converte para .json
        const data = await response.json();
        // console.log(data);
        return data;
       
    } catch (error) {
        console.log(error);
    }
}

gitHubUsers();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export { randomJokes, gitHubUsers };
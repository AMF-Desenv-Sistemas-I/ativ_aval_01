// 1. Faça uma requisição GET para a API do Chuck Norris e exiba no console uma piada aleatória
// https://api.chucknorris.io/jokes/random
async function randomJokes() {
    try {
        const response = await fetch("https://api.chucknorris.io/jokes/random");  //  faz a ligação com o api
        const data = await response.json();  // aguarda a resposta e transforma em json
        console.log(data.value);   // mostra na tela
    } catch (error) {
        console.error(error);  // caso de algum erro ele apresenta
    }
    
}
randomJokes();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////



// 2. Faça uma requisição GET para a API do GitHub e exiba no console os dados retornados
// https://api.github.com/users/**NOMEDOUSUARIO** 
async function gitHubUsers() {
    try {
        const response = await fetch("https://api.github.com/users/Igor532 ");  //  faz a ligação com o api
        const data = await response.json();  // aguarda a resposta e transforma em json
        console.log(data);  // mostra na tela
    } catch (error) {  
        console.error(error);  // caso de algum erro ele apresenta
    }
}

gitHubUsers();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export { randomJokes, gitHubUsers };
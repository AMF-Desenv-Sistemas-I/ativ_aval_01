// 1. Faça uma requisição GET para a API do Chuck Norris e exiba no console uma piada aleatória
// https://api.chucknorris.io/jokes/random
async function randomJokes() {
    return fetch("https://api.chucknorris.io/jokes/random").then(response => response.json()).then(data => console.log(data.value));
}
randomJokes();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. Faça uma requisição GET para a API do GitHub e exiba no console os dados retornados
// https://api.github.com/users/**NOMEDOUSUARIO** 
async function gitHubUsers() {
    return fetch("https://api.github.com/users/TimoteoMalves ").then(response => response.json()).then(data => console.log(data));
}

gitHubUsers();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export { randomJokes, gitHubUsers };
// 1. Faça uma requisição GET para a API do Chuck Norris e exiba no console uma piada aleatória
// https://api.chucknorris.io/jokes/random
async function randomJokes() {
    fetch('https://api.chucknorris.io/jokes/random') // Faz uma requisição ao site solicitado 
        .then(response => response.json()) // Converto a resposta em formato JSON
        .then(data => console.log(data.value)) // Dou console.log nos dados
        .catch(error => console.error(error)); // Trata erros caso ocorram durante a requisição
}
randomJokes();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. Faça uma requisição GET para a API do GitHub e exiba no console os dados retornados
// https://api.github.com/users/**NOMEDOUSUARIO** 
async function gitHubUsers() { 
    fetch('https://api.github.com/users/nunesfb') // Faz uma requisição ao GitHub para obter informações sobre o usuário "nunesfb"
    .then(response => response.json()) // Converto a resposta em formato JSON
    .then(data => console.log(data)) // Dou console.log nos dados
    .catch(error => console.error(error)); // Trata erros caso ocorram durante a requisição
}

gitHubUsers();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export { randomJokes, gitHubUsers };

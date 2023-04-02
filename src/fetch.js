// 1. Faça uma requisição GET para a API do Chuck Norris e exiba no console uma piada aleatória
// https://api.chucknorris.io/jokes/random
//A função randomJokes() é assíncrona e retorna uma Promise que resolve em um objeto de piada aleatória.
//A variável response usa a função fetch() para enviar uma solicitação HTTP GET à URL da API.
//A variável data usa o método json() para analisar o corpo da resposta HTTP como JSON e extrair os dados da piada.
//A função randomJokes() retorna o objeto de dados de piada aleatória.
async function randomJokes() {
    const response = await fetch("https://api.chucknorris.io/jokes/random"); 
    const data = await response.json(); 
    return data
}
randomJokes()
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. Faça uma requisição GET para a API do GitHub e exiba no console os dados retornados
// https://api.github.com/users/**NOMEDOUSUARIO** 
//A função gitHubUsers() é assíncrona e retorna uma Promise que resolve em um objeto de dados do usuário.
//A variável resposta usa a função fetch() para enviar uma solicitação HTTP GET à API do GitHub para buscar informações do usuário "hericrian".
//A variável data usa o método json() para analisar o corpo da resposta HTTP como JSON e extrair os dados do usuário.
//A função gitHubUsers() retorna o objeto de dados do usuário.
async function gitHubUsers() {
    //await para esperar a promisse
    const resposta = await fetch("https://api.github.com/users/hericrian") 
    const data = await resposta.json()  
    return data
}

gitHubUsers();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export { randomJokes, gitHubUsers };
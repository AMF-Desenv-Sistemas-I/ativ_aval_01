// 1. Faça uma requisição GET para a API do Chuck Norris e exiba no console uma piada aleatória
// https://api.chucknorris.io/jokes/random
async function randomJokes() {
    //await para esperar a promisse
    const response = await fetch("https://api.chucknorris.io/jokes/random"); // url da api do chucknorris onde gerar uma piada aleatoria 
    const data = await response.json(); //precisa utilizar  await por conta da promisse do json
    return data
}
randomJokes()
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. Faça uma requisição GET para a API do GitHub e exiba no console os dados retornados
// https://api.github.com/users/**NOMEDOUSUARIO** 
async function gitHubUsers() {
    //await para esperar a promisse
   const resposta = await fetch("https://api.github.com/users/nunesfb") //url do perfil do git
   const data = await resposta.json()  //precisa utilizar  await por conta da promisse do json
   return data
}

gitHubUsers();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export { randomJokes, gitHubUsers };
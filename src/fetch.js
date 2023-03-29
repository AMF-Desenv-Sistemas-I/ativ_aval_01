// 1. Faça uma requisição GET para a API do Chuck Norris e exiba no console uma piada aleatória
// https://api.chucknorris.io/jokes/random
async function randomJokes() { //funcao assincrona
  try {
    const response = await fetch(`https://api.chucknorris.io/jokes/random`); //fetch para fazer a requisicao
    const data = await response.json(); //transformando a resposta em json
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}
randomJokes();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. Faça uma requisição GET para a API do GitHub e exiba no console os dados retornados
// https://api.github.com/users/**NOMEDOUSUARIO** 
async function gitHubUsers() { //funcao assincrona
  try { //tenta rodar o bloco
    const response = await fetch(`https://api.github.com/users/nunesfb`); //fetch para fazer a requisicao
    const data = await response.json(); //transformando a resposta em json
    console.log(data);
  } catch (e) { //caso dê erro imprime a mensagem
    console.log(e);
  }
}

gitHubUsers();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export { randomJokes, gitHubUsers };
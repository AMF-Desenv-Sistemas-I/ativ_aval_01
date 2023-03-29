// 1. Faça uma requisição GET para a API do Chuck Norris e exiba no console uma piada aleatória
// https://api.chucknorris.io/jokes/random
async function randomJokes() {
  try {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response.json();
    console.log(data.value);
  } catch (error) {
    console.error(error);
  }
}
randomJokes();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. Faça uma requisição GET para a API do GitHub e exiba no console os dados retornados
// https://api.github.com/users/**NOMEDOUSUARIO** 
async function gitHubUsers() {
  try {
    const response = await fetch("https://api.github.com/users/vitor47");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

gitHubUsers();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export { randomJokes, gitHubUsers };
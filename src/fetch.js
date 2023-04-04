// 1. Faça uma requisição GET para a API do Chuck Norris e exiba no console uma piada aleatória
// https://api.chucknorris.io/jokes/random
// usei o fetch para buscar o json e dei console.log no value
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
// usei o fetch para buscar o json e dei console.log no data
async function gitHubUsers() {
  try {
    const response = await fetch("https://api.github.com/users/nunesfb");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

gitHubUsers();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export { randomJokes, gitHubUsers };
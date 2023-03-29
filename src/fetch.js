// 1. Faça uma requisição GET para a API do Chuck Norris e exiba no console uma piada aleatória
// https://api.chucknorris.io/jokes/random
const randomJokes = async () => {
  let data;
  try { // incia um bloco de codigo  
    const response = await fetch(`https://api.chucknorris.io/jokes/random`); // faz a requisição para a API
    data = response.json(); // salva a resposta
  } catch (e) { // caso aconteça erro na requisição
    console.log(e);
  }
  return data.value;
};
randomJokes();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. Faça uma requisição GET para a API do GitHub e exiba no console os dados retornados
// https://api.github.com/users/**NOMEDOUSUARIO**
const gitHubUsers = async () => {
  let data;
  try { // incia um bloco de codigo  
    const response = await fetch(`https://api.github.com/users/nunesfb`); // faz a requisição para a API
    data = response.json(); // salva a resposta
  } catch (e) { // caso aconteça erro na requisição
    console.log(e);
  }
  return data;
};

gitHubUsers();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export { randomJokes, gitHubUsers };

// 1. Faça uma requisição GET para a API do Chuck Norris e exiba no console uma randomJokes aleatória
// https://api.chucknorris.io/jokes/random
const randomJokes = async () => {
    let result;
    try {
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      const data = await response.json();
      result = data.value;
    } catch (e) {
      console.log(e);
    }
    return result;
  }
  
  randomJokes().then(joke => {
    console.log(joke);
  }).catch(error => {
    console.log(error);
  });
/*   função, randomJokes, faz uma requisição GET para a API do Chuck Norris, que retorna uma piada aleatória do Chuck Norris. 
A função utiliza o async/await para tratar a resposta da API de forma assíncrona, e retorna o valor da piada para o usuário.
 *///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. Faça uma requisição GET para a API do GitHub e exiba no console os dados retornados
// https://api.github.com/users/**NOMEDOUSUARIO** 
const gitHubUsers = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/nunesfb`);
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
  
      return data;
  
    } catch (error) {
      console.error(`TURURUUUUU: ${error.message}`);
      return null;
    }
  };
  
  gitHubUsers().then(data => console.log(data));
/*   função, gitHubUsers, faz uma requisição GET para a API do GitHub, utilizando a interpolação de strings para substituir o nome de usuário desejado na URL.
A função também utiliza o async/await para tratar a resposta da API, e retorna os dados do usuário para o usuário.
 *///////////////////////////////////////////////////////////////////////////////////////////////////////////////

export { randomJokes, gitHubUsers };
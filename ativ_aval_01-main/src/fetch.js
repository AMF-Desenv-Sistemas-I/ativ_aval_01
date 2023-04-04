// 1. Faça uma requisição GET para a API do Chuck Norris e exiba no console uma piada aleatória
// https://api.chucknorris.io/jokes/random
const piada = async () => {
    let result;
    try {
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      const data = await response.json();                                       //requisição GET para a API do chuck norris
      result = data.value;                                                      //retorna uma piada aleatoria
    } catch (e) {
      console.log(e);                                   
    }
    return result;
  }
  
  piada().then(joke => {
    console.log(joke);                                                           //conseguiu a piada
  }).catch(error => {
    console.log(error);                                                          //caso der erro
  });
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. Faça uma requisição GET para a API do GitHub e exiba no console os dados retornados
// https://api.github.com/users/**NOMEDOUSUARIO** 
async function gitHubUsers() {
  try {
    const response = await fetch("https://api.github.com/users/nunesfb");
    const data = await response.json();                                     //requisita o JSON
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}


gitHubUsers();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export { randomJokes, gitHubUsers };
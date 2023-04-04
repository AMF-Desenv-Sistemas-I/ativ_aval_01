// 1. Faça uma requisição GET para a API do Chuck Norris e exiba no console uma piada aleatória
// https://api.chucknorris.io/jokes/random

//usada a função assincrona para conectar a uma api e aguarda o retorno dela

async function randomJokes() {
    try{
        const response = await fetch("https://api.chucknorris.io/jokes/random");
        const data = await response.json();
        console.log(data.value);
    }catch (error){
        console.error(error);
    }
}
randomJokes();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. Faça uma requisição GET para a API do GitHub e exiba no console os dados retornados
// https://api.github.com/users/**NOMEDOUSUARIO** 

//usado função Async para conectar e aguardar a API do git retorna os dados do usuario e se estiver errado os dados dar uma mensagem de erro

async function gitHubUsers() {
    try{
        const response = await fetch("https://api.github.com/users/nunesfb");
        const data = await response.json();
        console.log(data);
    }catch (error){
        console.error(error);
    }
   
}

gitHubUsers();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export { randomJokes, gitHubUsers };
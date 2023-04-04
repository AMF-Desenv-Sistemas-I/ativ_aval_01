// 1. Crie uma função que recebe um número indeterminado de parâmetros e retorne a soma desses parâmetros

//usado um forEach para somar os numeros recebidos de um rest

function somar(...numeros) {
    let soma=0;
    numeros.forEach(num => {
        soma+=num;
    })
   return soma;
}

console.log(somar(1, 2, 3, 4, 5)); // saída esperada: 15
console.log(somar(10, 20, 30)); // saída esperada: 60


//////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

// 2. Crie uma função que recebe um número indeterminado de parâmetros e retorne a média desses parâmetros

//usado um forEach para percorre todo o array e soma-lo após no retorno divido a soma pelo total de elementos do array para retornar a média 

function calcularMedia(...numeros) {
   let media=0;
   numeros.forEach(med =>{
    media += med;
   })
return media/numeros.length;
}

console.log(calcularMedia(1, 2, 3, 4, 5)); // saída esperada: 3
console.log(calcularMedia(10, 20, 30)); // saída esperada: 20  
//////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

// 3. Crie uma função que recebe um objeto e um número indeterminado de propriedades e valores, e retorne um novo objeto contendo as propriedades e valores do objeto original e as propriedades e valores recebidos.

//usado um forEach para percorrer e adiconar novos dados no objeto original atualizando ele quando coloco ele igual a rest de objeto + rest de tes  

function adicionarPropriedades(objeto, ...novasPropriedades) {
  const novo = novasPropriedades.forEach( tes => {
    objeto = {...objeto,...tes}
  })
  return objeto;
}

const pessoa = {
    nome: 'Fulano',
    idade: 30,
};

console.log(adicionarPropriedades(pessoa, { cidade: 'São Paulo' }, { profissao: 'Programador' })); // saída esperada: { nome: 'Fulano', idade: 30, cidade: 'São Paulo', profissao: 'Programador' }  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export { somar, calcularMedia, adicionarPropriedades };

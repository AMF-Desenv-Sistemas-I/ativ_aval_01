// ARRAYS

//1. Crie uma função que dobre o numero
function dobrarNumero(numero) {
  return numero*2;      //retorna o dobro do parametro recebido
}

console.log(dobrarNumero(5)); // saída esperada: 10
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//2. Crie uma função que receba um array de números como parâmetro e retorne a soma dos valores deste array
function somarNumeros(numeros) {
    var soma=0, i;
    if(numeros==null)
    {
      return 0;
    }
    else{
    for(i=0;i<numeros.length;i++)
    {
        soma+=numeros[i];              //for vai percorrer todo o array
                                        //soma vai receber ser igual a soma de cada elemento do array
    }
    return soma;                        //retorna o valor total da soma
  }
}

console.log(somarNumeros([1, 2, 3, 4, 5])); // saída esperada: 15
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//3. Crie uma função que receba um array de números como parâmetro e retorne outro array contendo apenas os números pares
function filtrarNumerosPares(numeros) {
    
        const novoArray=[];
        var i, j=0;
        for(i=0;i<numeros.length;i++)
        {
            if(numeros[i]%2==0)                 //verifica se o numero é par
            {
                novoArray[j] = numeros[i];      //se for par, a posição J do novo array vai receber o 
                                                //valor par da array numeros.
                j++;                            //A posição do novo array vai ser incrementado
            }

        }
        return novoArray;
}

console.log(filtrarNumerosPares([1, 2, 3, 4, 5, 6, 7, 8])); // saída esperada: [2, 4, 6, 8]
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//4. Crie uma função que receba um array de números como parâmetro e retorne outro array contendo apenas os números ímpares.
function filtrarNumerosImpares(numeros) {
  const array=[];
  var i, j=0;
  for(i=0;i<numeros.length;i++)
  {
      if(numeros[i]%2==1)                 //verifica se o numero é impar
      {
          array[j] = numeros[i];      //se for impar, a posição J do novo array vai receber o 
                                          //valor par da array numeros.
          j++;                            //A posição do novo array vai ser incrementado
      }

  }
  return array;
  
}

console.log(filtrarNumerosImpares([1, 2, 3, 4, 5, 6, 7, 8])); // saída esperada: [1, 3, 5, 7]
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5.Crie uma função que receba um array de números como parâmetro e retorne outro array contendo apenas os números maiores que 10
function filtrarNumerosMaioresQueDez(numeros) {
      const maioresque10=[];

      var i, j=0, maior=10;
      for(i=0;i<numeros.length;i++)
      {                                   //se o elemento do array na posicao i for maior que a variavel
                                          //maior, que é 10, a posição j do novo array vai receber o valor
                                          //do array na posicao i.
        if(numeros[i]>maior)
        {
          maioresque10[j]=numeros[i];
          j++;
        }
      }
      return maioresque10;
}

console.log(filtrarNumerosMaioresQueDez([5, 10, 15, 20, 25])); // saída esperada: [15, 20, 25]
//////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

// 6. Crie uma função que receba dois arrays como parâmetros e retorne outro array contendo a concatenação dos dois primeiros
function concatenarArrays(primeiroArray, segundoArray) {
  
    var resultado=primeiroArray.concat(segundoArray);  //utiliza a função concat, que concatena os dois arrays.
    return resultado;


}

console.log(concatenarArrays([1, 2, 3], [4, 5, 6])); // saída esperada: [1, 2, 3, 4, 5, 6]
//////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

export { dobrarNumero, somarNumeros, filtrarNumerosPares, filtrarNumerosImpares, filtrarNumerosMaioresQueDez, concatenarArrays };

// 1. Crie uma função que recebe um número indeterminado de parâmetros e retorne a soma desses parâmetros
function somar(...numeros) {
  let valor = 0
  numeros.forEach((numero) => (valor += numero))
  return valor
}

console.log(somar(1, 2, 3, 4, 5)) // saída esperada: 15
console.log(somar(10, 20, 30)) // saída esperada: 60
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. Crie uma função que recebe um número indeterminado de parâmetros e retorne a média desses parâmetros
function calcularMedia(...numeros) {
  let valor = 0
  numeros.forEach((numero) => (valor += numero))
  return valor / numeros.length
}

console.log(calcularMedia(1, 2, 3, 4, 5)) // saída esperada: 3
console.log(calcularMedia(10, 20, 30)) // saída esperada: 20
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3. Crie uma função que recebe um objeto e um número indeterminado de propriedades e valores, e retorne um novo objeto contendo as propriedades e valores do objeto original e as propriedades e valores recebidos.
function adicionarPropriedades(objeto, ...novasPropriedades) {
  novasPropriedades.forEach(prop => objeto = {...objeto, ...prop});
  return objeto;
}

const pessoa = {
  nome: "Fulano",
  idade: 30,
}

console.log(
  adicionarPropriedades(
    pessoa,
    { cidade: "São Paulo" },
    { profissao: "Programador" }
  )
) // saída esperada: { nome: 'Fulano', idade: 30, cidade: 'São Paulo', profissao: 'Programador' }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export { somar, calcularMedia, adicionarPropriedades }

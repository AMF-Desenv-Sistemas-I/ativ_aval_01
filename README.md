ATIVIDADE AVALIATIVA
--------------------

## Antes de iniciar o desenvolvimento, faça isso! 

1.  Clone o repositório

-   `git clone xxxxxx`.
-   Entre na pasta do repositório que você acabou de clonar:
    -   `cd xxxxxx`

2.  Instale as dependências e inicialize o projeto

-   Instale as dependências:
    -   `npm install`

3.  Crie uma branch a partir da branch `main`

-   Verifique que você está na branch `main`
    -   Exemplo: `git branch`
-   Se não estiver, mude para a branch `main`
    -   Exemplo: `git checkout main`
-   Agora, crie uma branch onde você vai guardar os `commits` do seu projeto
    -   Você deve criar uma branch no seguinte formato: `seunome-nomecolega`
    -   Exemplo: `git checkout -b mariasilva-joaoalves`

4.  Quando fizer mudanças, adicione-as ao *stage* do Git e faça um `commit`

-   Verifique que as mudanças ainda não estão no *stage*
    -   Exemplo: `git status` (deve aparecer as alterações realizadas em vermelho)
-   Adicione o novo arquivo ao *stage* do Git
    -   Exemplo:
        -   `git add .` (adicionando todas as mudanças - *que estavam em vermelho* - ao stage do Git)
        -   `git status` (deve aparecer listado os arquivos em verde)
-   Faça o `commit` inicial
    -   Exemplo:
        -   `git commit -m 'start no projeto'` (fazendo o primeiro commit)
        -   `git status` (deve aparecer uma mensagem tipo *nothing to commit* )

5.  Adicione a sua branch com o novo `commit` ao repositório remoto

-   Usando o exemplo anterior: `git push -u origin mariasilva-joaoalves`

6.  Crie um novo `Pull Request` *(PR)*

-   Vá até a página de *Pull Requests* do [repositório no GitHub](https://github.com/tryber/sd-0x-project-shopping-cart/pulls)
-   Clique no botão verde *"New pull request"*
-   Clique na caixa de seleção *"Compare"* e escolha a sua branch com atenção
    -   Coloque um título para a sua *Pull Request*
    -   Exemplo: *"Cria tela de busca"*
-   Clique no botão verde *"Create pull request"*
-   Adicione uma descrição para o *Pull Request*, um título claro que o identifique, e clique no botão verde *"Create pull request"*
- Não faça o merge na branch main

7. Obrigatório que todos os códigos estejam comentados.

8. Para rodar seu projeto, execute o comando npm run dev

9. Para rodar os testes, rode o comando npm run test

## LISTA DE EXERCÍCIOS AVALIATIVOS

### ARRAYS

1.  Crie uma função que receba um número como parâmetro e retorne true se ele for par ou false se ele for ímpar

2.  Crie uma função que receba um array de números como parâmetro e retorne a soma dos valores deste array

3.  Crie uma função que receba um array de números como parâmetro e retorne outro array contendo apenas os números pares.

4.  Crie uma função que receba um array de números como parâmetro e retorne outro array contendo apenas os números ímpares.

5.  Crie uma função que receba um array de números como parâmetro e retorne outro array contendo apenas os números maiores que 10.

6.  Crie uma função que receba dois arrays como parâmetros e retorne outro array contendo a concatenação dos dois primeiros.

### REST

1.  Crie uma função que recebe um número indeterminado de parâmetros e retorne a soma desses parâmetros.

2.  Crie uma função que recebe um número indeterminado de parâmetros e retorne a média desses parâmetros.

3.  Crie uma função que recebe um objeto e um número indeterminado de propriedades e valores, e retorne um novo objeto contendo as propriedades e valores do objeto original e as propriedades e valores recebidos.

### HOFS e FUNÇÕES

1.  Crie uma função que receba um objeto como parâmetro e retorne um array contendo as chaves desse objeto.

2.  Dada uma lista de objetos que representam pessoas, crie uma nova lista com o nome de cada pessoa em maiúsculas e retorne essa lista

3.  Dada uma lista de objetos que representam produtos, crie uma nova lista com o preço de cada produto com desconto de 10% e retorne essa lista

4.  Dada uma lista de objetos que representam pessoas, crie uma nova lista com as pessoas maiores de idade (idade >= 18) e retorne essa lista

5.  Dada uma lista de strings, crie uma nova lista com as strings que têm mais de 5 caracteres e retorne essa lista

6.  Dada uma lista de objetos que representam produtos, crie uma nova lista com os produtos que custam mais de 50 reais e retorne essa lista

7.  Dada uma lista de objetos que representam produtos, calcule o preço total de todos eles e retorne esse valor

8.  Dada uma lista de objetos que representam alunos, imprima no console o nome de cada um deles

9.  Dada uma lista de objetos que representam produtos, calcule o preço total de todos eles e imprima no console

10. Dada uma lista de produtos, verifique se todos têm um preço maior que R$ 10,00

11. Dada uma lista de nomes, verifique se pelo menos um deles começa com a letra "A"

12. Dado um array de objetos, encontre o objeto com o nome "João"

13. Dado um array de objetos, encontre o objeto com a maior idade

### FETCH E ASYNC/AWAIT

1.  Faça uma requisição GET para a API do Chuck Norris e exiba no console uma piada aleatória

    1.  <https://api.chucknorris.io/jokes/random>

2.  Faça uma requisição GET para a API do GitHub e exiba no console os dados retornados

    1.  <https://api.github.com/users/**NOMEDOUSUARIO**>

## DESAFIO FINAL (EXTRA)

1. Acesse o site https://www.mygreatlearning.com/academy/learn-for-free/courses/introduction-to-javascript
2. Realize a inscrição no curso e tente finalizar ele
3. Ganhe o certificado!


## BIG BOSS (EXTRA)
1. Acesse o site https://www.simplilearn.com/learn-javascript-basics-free-course-skillup
2. Realize a inscrição no curso e tente finalizar ele
3. Ganhe o certificado!
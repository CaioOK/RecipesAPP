<h1 align="center" >
  <img src="https://user-images.githubusercontent.com/78622405/147672747-6f2bb453-684e-4c30-b307-67dce2e184a1.png" alt="Logo App de receitas" />
</h1>

<p align="center">Sinta a experiência de ser um Chef preparando receitas incríveis compartilhadas por pessoas do mundo todo!</p> 

<br/>
<br/>

# 📖 Índice
<!--ts-->
  * [Sobre o projeto](#ℹ️-sobre-o-projeto)
  * [Tecnologias](#-tecnologias)
  * [Testes](#testes)
  * [Linter](#linter)
  * [APIs](#-apis)
  * [Pré Requisitos](#-pré-requisitos)
  * [Screenshots](#-screenshots)
  * [Autores](#-autores)
<!--te-->

<br/>

---

<br />

## ℹ️ Sobre o projeto
Um aplicativo onde você encontra diversas receitas de refeições e drinks de todas as partes do mundo.
Possui uma estrutura simples, detalhada e prática que dá o poder ao usuário de ser seu próprio Chef.

Para utilizar o usuário se cadastra e cria um perfil e o acessa fazendo login com email e senha.
Ao fazer login será direcionado á pagina principal com receitas de comida.
As receitas podem ser favoritadas e compartilhadas. Caso ainda não tenha decorado será muito fácil encontrar AQUELA receita e prepará-la novamente.

Ao clicar em uma receita será redirecionado para uma página onde há uma explicação detalhada de como preparar esta receita e também um vídeo tutorial.

### Estrutura
  - No header há a opção de acessar o perfil ou abrir a barra de pesquisa onde pode pesquisar receitas pelo nome de um ingrediente, pelo nome da receita, ou pela primeira letra do nome.
  - No body são apresentadas as receitas de acordo com a página e/ou os filtros
  - No footer há três opções: 
    - Ir para a página de comidas
    - Ir para a página de drinks
    - Explorar
      - O usuário pode explorar os diversos ingredientes, explorar receitas pelo local de origem ou selecionar a opção Me Surpreenda onde é exibida uma receita alearória

**Nota**: Este foi o projeto avaliativo final do módulo de Front-End do curso de Desenvolvimento Web full-stack da [Trybe](https://www.betrybe.com/) para colocarmos em prática tudo o que havíamos aprendido até então, como o conhecimento técnico das linguagens e frameworks, e também metodologias ágeis e soft skills.
Toda a estutura do projeto com as orientações, requisitos, protótipo e kanban foram fornecidos pela [Trybe](https://www.betrybe.com/)

### Protótipo do projeto
Para o protótipo utilizando a ferramenta [Figma](https://www.figma.com/)
<br/>
Você pode conferir aqui:
<br/>
<a href="https://www.figma.com/file/WatDxtKl7g54QxhDi9qdbq/App-Receitas?node-id=0%3A1">
  <img alt="Badge Figma" src="https://img.shields.io/badge/Prot%C3%B3tipo-Figma-%23603F8B?style=for-the-badge">
</a>

### Ferramenta kanban
Para organizar o fluxo de produção e dividir as tarefas utilizamos o [Trello](https://trello.com/)
<br/>
Confira aqui o quadro utilizado:
<br/>
<a href="https://trello.com/b/Br6c3Gh5/grupo-24-project-recipes-app/">
  <img alt="Badge Trello" src="https://img.shields.io/badge/Kanban-Trello-informational?style=for-the-badge">
</a>

---

## 🛠 Tecnologias
- <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML">
  <img alt="Badge HTML5" src="https://img.shields.io/badge/-HTML5-%23050A30?style=for-the-badge&logo=html5">
</a>

- <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS">
  <img alt="Badge CSS3" src="https://img.shields.io/badge/-CSS3-%231572B6?style=for-the-badge&logo=css3">
</a>

- <a href="https://www.javascript.com/">
  <img alt="Badge JavaScript" src="https://img.shields.io/badge/-JavasCript-%23181818?style=for-the-badge&logo=javascript">
</a>

- <a href="https://pt-br.reactjs.org/">
  <img alt="Badge ReactJS" src="https://img.shields.io/badge/-ReactJS-%23181818?style=for-the-badge&logo=react">
</a>

- <a href="https://reactrouter.com/">
  <img alt="Badge React Router" src="https://img.shields.io/badge/-React%20Router-%23181818?style=for-the-badge&logo=reactrouter">
</a>

## Testes

- <a href="https://jestjs.io/pt-BR/">
  <img alt="Badge Jest" src="https://img.shields.io/badge/-Jest-%23C21325?style=for-the-badge&logo=jest">
</a>

- <a href="https://testing-library.com/">
  <img alt="Badge Testing Library" src="https://img.shields.io/badge/-Testing%20Library-%23181818?style=for-the-badge&logo=testinglibrary">
</a>

## Linter

Para garantir a qualidade do código de forma a tê-lo mais legível, de mais fácil manutenção e seguindo as boas práticas de desenvolvimento nós utilizamos neste projeto o linter `ESLint`. Caso queira rodar o linter localmente execute o comando abaixo:

```bash
npm run lint
```

## 🖥 APIs

### 🍝 TheMealDB API

O [TheMealDB](https://www.themealdb.com/) é um banco de dados aberto, mantido pela comunidade, com receitas e ingredientes de todo o mundo.

Os end-points são bastante ricos, você pode [vê-los aqui](https://www.themealdb.com/api.php)

O modelo de resposta para uma `meal` é o seguinte:
  <details>
    <summary>Ver modelo de resposta para uma meal</summary>

  ```json
    {
      "meals":[
          {
            "idMeal":"52882",
            "strMeal":"Three Fish Pie",
            "strDrinkAlternate":null,
            "strCategory":"Seafood",
            "strArea":"British",
            "strInstructions":"Preheat the oven to 200C\/400F\/Gas 6 (180C fan).\r\nPut the potatoes into a saucepan of cold salted water. Bring up to the boil and simmer until completely tender. Drain well and then mash with the butter and milk. Add pepper and taste to check the seasoning. Add salt and more pepper if necessary.\r\nFor the fish filling, melt the butter in a saucepan, add the leeks and stir over the heat. Cover with a lid and simmer gently for 10 minutes, or until soft. Measure the flour into a small bowl. Add the wine and whisk together until smooth.\r\nAdd the milk to the leeks, bring to the boil and then add the wine mixture. Stir briskly until thickened. Season and add the parsley and fish. Stir over the heat for two minutes, then spoon into an ovenproof casserole. Scatter over the eggs. Allow to cool until firm.\r\nSpoon the mashed potatoes over the fish mixture and mark with a fork. Sprinkle with cheese.\r\nBake for 30-40 minutes, or until lightly golden-brown on top and bubbling around the edges.",
            "strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/spswqs1511558697.jpg",
            "strTags":"Fish,Seafood,Dairy,Pie",
            "strYoutube":"https:\/\/www.youtube.com\/watch?v=Ds1Jb8H5Sg8",
            "strIngredient1":"Potatoes",
            "strIngredient2":"Butter",
            "strIngredient3":"Milk",
            "strIngredient4":"Gruy\u00e8re",
            "strIngredient5":"Butter",
            "strIngredient6":"Leek",
            "strIngredient7":"Plain Flour",
            "strIngredient8":"White Wine",
            "strIngredient9":"Milk",
            "strIngredient10":"Parsley",
            "strIngredient11":"Salmon",
            "strIngredient12":"Haddock",
            "strIngredient13":"Smoked Haddock",
            "strIngredient14":"Eggs",
            "strIngredient15":"",
            "strIngredient16":"",
            "strIngredient17":"",
            "strIngredient18":"",
            "strIngredient19":"",
            "strIngredient20":"",
            "strMeasure1":"1kg",
            "strMeasure2":"Knob",
            "strMeasure3":"Dash",
            "strMeasure4":"50g",
            "strMeasure5":"75g",
            "strMeasure6":"2 sliced",
            "strMeasure7":"75g",
            "strMeasure8":"150ml",
            "strMeasure9":"568ml",
            "strMeasure10":"2 tbs chopped",
            "strMeasure11":"250g",
            "strMeasure12":"250g",
            "strMeasure13":"250g",
            "strMeasure14":"6",
            "strMeasure15":"",
            "strMeasure16":"",
            "strMeasure17":"",
            "strMeasure18":"",
            "strMeasure19":"",
            "strMeasure20":"",
            "strSource":"https:\/\/www.bbc.co.uk\/food\/recipes\/three_fish_pie_58875",
            "dateModified":null
          }
      ]
    }
  ```
  </details>

### 🍹 The CockTailDB API

Bem similar (inclusive mantida pela mesma entidade) a TheMealDB API, só que focado em bebidas.

Os end-points também são bastante ricos, você pode [vê-los aqui](https://www.thecocktaildb.com/api.php)

As respostas seguem a mesma estrutura, com algumas particularidade relativas as bebidas (como ser ou não alcoólica, por exemplo)

  <details>
    <summary>Ver modelo de resposta para drinks</summary>

  ```json
    {
      "drinks":[
          {
            "idDrink":"17256",
            "strDrink":"Martinez 2",
            "strDrinkAlternate":null,
            "strDrinkES":null,
            "strDrinkDE":null,
            "strDrinkFR":null,
            "strDrinkZH-HANS":null,
            "strDrinkZH-HANT":null,
            "strTags":null,
            "strVideo":null,
            "strCategory":"Cocktail",
            "strIBA":null,
            "strAlcoholic":"Alcoholic",
            "strGlass":"Cocktail glass",
            "strInstructions":"Add all ingredients to a mixing glass and fill with ice.\r\n\r\nStir until chilled, and strain into a chilled coupe glass.",
            "strInstructionsES":null,
            "strInstructionsDE":"Alle Zutaten in ein Mischglas geben und mit Eis f\u00fcllen. Bis zum Abk\u00fchlen umr\u00fchren und in ein gek\u00fchltes Coup\u00e9glas abseihen.",
            "strInstructionsFR":null,
            "strInstructionsZH-HANS":null,
            "strInstructionsZH-HANT":null,
            "strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/fs6kiq1513708455.jpg",
            "strIngredient1":"Gin",
            "strIngredient2":"Sweet Vermouth",
            "strIngredient3":"Maraschino Liqueur",
            "strIngredient4":"Angostura Bitters",
            "strIngredient5":null,
            "strIngredient6":null,
            "strIngredient7":null,
            "strIngredient8":null,
            "strIngredient9":null,
            "strIngredient10":null,
            "strIngredient11":null,
            "strIngredient12":null,
            "strIngredient13":null,
            "strIngredient14":null,
            "strIngredient15":null,
            "strMeasure1":"1 1\/2 oz",
            "strMeasure2":"1 1\/2 oz",
            "strMeasure3":"1 tsp",
            "strMeasure4":"2 dashes",
            "strMeasure5":null,
            "strMeasure6":null,
            "strMeasure7":null,
            "strMeasure8":null,
            "strMeasure9":null,
            "strMeasure10":null,
            "strMeasure11":null,
            "strMeasure12":null,
            "strMeasure13":null,
            "strMeasure14":null,
            "strMeasure15":null,
            "strCreativeCommonsConfirmed":"No",
            "dateModified":"2017-12-19 18:34:15"
          }
      ]
    }
  ```
  </details>

<br/>

---

<br/>

## 🔧 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com) e o gerenciador de pacotes [NPM](https://www.npmjs.com/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)
- Tutorial de como [Instalar NPM no Linux](http://devfuria.com.br/nodejs/instalando-npm/)
- Tutorial de como [Instalar NPM no Windows](https://dicasdejavascript.com.br/instalacao-do-nodejs-e-npm-no-windows-passo-a-passo/)

**Nota:** Este projeto é uma simulação de um APP Mobile e não está otimizado para web e a resolução ideal para visualizá-lo é 360 x 800.
Se estiver utilizando o Chrome, pressione a tecla F12 e depois CTRL + SHIFT + M para abrir o Device Toolbar e aplicar uma resolução customizada.

### 🚀 Rodando a aplicação localmente

```bash
# Clone este repositório
$ git clone https://github.com/CaioOK/RecipesAPP

# Acesse a pasta do projeto no terminal/cmd
$ cd RecipesAPP

# Instale as dependências
$ npm install

# Execute a aplicação
$ npm start

# O servidor inciará na porta:3000 - Seu navegador padrão abrirá o seguinte link http://localhost:3000
# É preciso haver conexão com a internet ao iniciar a aplicação
```

<br/>

---

<br/>

## 📸 Screenshots

<h3>
  <img src="https://user-images.githubusercontent.com/78622405/147676282-ae26a47f-2c1c-451e-b767-b54747445734.png" alt="Tela de login"/>
  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
  <img src="https://user-images.githubusercontent.com/78622405/147676507-acecdcc1-1098-46b7-a055-b0cbc3d1a9bc.png" alt="Tela principal de comidas" />
  <img align="right" height="500" width="230" src="https://user-images.githubusercontent.com/78622405/147679295-d8737000-13c8-4867-9386-50f52bd68c0a.png" alt="Tela de comidas barra de pesquisa" />
</h3>
  
<br/>
<br/>
<br/>

<h3>
  <img height="500" width="230" src="https://user-images.githubusercontent.com/78622405/147682226-e8792c1d-b45f-486c-bb1f-529961539880.png" alt="Tela de comidas pesquisando por beef" />
  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
  <img height="500" width="230" src="https://user-images.githubusercontent.com/78622405/147678119-8de6ed0d-dad4-4b00-a0b1-7bd40a0de229.png" alt="Tela comidas pesquisando por chicken" />
  <img align="right" height="500" width="230" src="https://user-images.githubusercontent.com/78622405/147682234-314ebcb2-fc09-410d-b6d6-e2d3daea0311.png" alt="Tela de comidas pesquisando por f"/>
</h3>

<br/>
<br/>
<br/>

<h3>
  <img height="500" width="230" src="https://user-images.githubusercontent.com/78622405/147683248-7d53b261-c514-440b-90f6-4eaaafe57b28.png" alt="Tela principal de bebidas" />
  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
  <img height="500" width="230" src="https://user-images.githubusercontent.com/78622405/147683250-7822c214-302c-4d43-ad39-ffde2a4d5654.png" alt="Tela de bebidas pesquisando por milk" />
  <img align="right" height="500" width="230" src="https://user-images.githubusercontent.com/78622405/147683261-4118b2e9-fea3-40a4-9543-043934f9ca09.png" alt="Tela de Comidas Pesquisando por cocktail"/>
</h3>

<br/>
<br/>
<br/>

<h3>
  <img height="500" width="230" src="https://user-images.githubusercontent.com/78622405/147686262-90a40669-4696-4a6a-8442-1aee8e539b76.png" alt="Tela de detalhes de receita exibindo big mac 1" />
  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
  <img height="500" width="230" src="https://user-images.githubusercontent.com/78622405/147686136-145f9bca-6582-4e4d-9747-5967ee3769f5.png" alt="Tela de detalhes de receita exibindo big mac 2" />
  <img align="right" height="500" width="230" src="https://user-images.githubusercontent.com/78622405/147686155-55d03ca8-d908-42fe-a315-d3d1e2d217b0.png" alt="Tela de detalhes de receita exibindo big mac 3"/>
</h3>

<br/>
<br/>

---

<br/>
<br/>

## 📝 Autores

<table align="center">
  <tr>
    <td align="center"><a href="https://github.com/CaioOK"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/78622405?v=4" width="100px;" alt="Caio Oliveira"/><br /><sub><b>Caio Oliveira</b></sub></a><br /><a href="https://github.com/CaioOK" title="GitHub Caio Oliveira"><img src="https://img.shields.io/badge/-GitHub-gray?style=flat&logo=github" alt="GitHub"/></a><br /><a href="https://www.linkedin.com/in/caiook/" title="Linkedin Caio"><img src="https://img.shields.io/badge/-Linkedin-informational?style=flat&logo=linkedin" alt="Linkedin Caio"/></a></td>
    <td align="center"><a href="https://github.com/rcalvs"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/72619953?v=4" width="100px;" alt="RCalvs"/><br /><sub><b>RCalvs</b></sub></a><br /><a href="https://github.com/rcalvs" title="GitHub RCalvs"><img src="https://img.shields.io/badge/-GitHub-gray?style=flat&logo=github" alt="GitHub RCalvs"/></a><br /><a href="https://www.linkedin.com/in/rafaelcalvette/" title="Linkedin RCalvs"><img src="https://img.shields.io/badge/-Linkedin-informational?style=flat&logo=linkedin" alt="Linkedin RCalvs"/></td>
    <td align="center"><a href="https://github.com/LucasCAndre"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/78621898?v=4" width="100px;" alt="Lucas André"/><br /><sub><b>Lucas C. M. C. André</b></sub></a><br /><a href="https://github.com/LucasCAndre" title="GitHub Lucas C. M. C. André"><img src="https://img.shields.io/badge/-GitHub-gray?style=flat&logo=github" alt="GitHub Lucas C. M. C. André"/></a><br /><a href="https://www.linkedin.com/in/lucascandre/" title="Linkedin Lucas C. M. C. André"><img src="https://img.shields.io/badge/-Linkedin-informational?style=flat&logo=linkedin" alt="Linkedin Lucas C. M. C. André"/></td>
    <td align="center"><a href="https://github.com/itIsV"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/78622360?v=4" width="100px;" alt="Vinícios Fraga"/><br /><sub><b>Vinícios Fraga</b></sub></a><br /><a href="https://github.com/itIsV" title="GitHub Vinícios Fraga"><img src="https://img.shields.io/badge/-GitHub-gray?style=flat&logo=github" alt="GitHub Vinícios Fraga"/></a><br /><a href="https://www.linkedin.com/in/viniciosfraga/" title="Linkedin Vinícios Fraga"><img src="https://img.shields.io/badge/-Linkedin-informational?style=flat&logo=linkedin" alt="Linkedin Vinícios Fraga"/></td>
  </tr>
</table>

<p align="center">Projeto realizado com um admirável trabalho em equipe, onde foi empregado muito ❤️, empenho, esforço e colaboração</>

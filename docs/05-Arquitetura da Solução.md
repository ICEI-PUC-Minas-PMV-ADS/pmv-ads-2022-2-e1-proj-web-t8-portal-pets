# Arquitetura da Solução

Nesta seção são apresentados os detalhes técnicos da solução criada pela equipe, tratando dos componentes que fazem parte da solução e do ambiente de hospedagem da solução.


## Diagrama de componentes

Os componentes que fazem parte da solução são apresentados na Figura que se segue.

![arquitetura-software](img/arquitetura-software.png)

A solução implementada conta com os seguintes módulos:
- **Navegador** - Interface básica do sistema  
  - **Páginas Web** - Conjunto de arquivos HTML, CSS, JavaScript e imagens que implementam as funcionalidades do sistema.
   - **Local Storage** - armazenamento mantido no Navegador, onde são implementados bancos de dados baseados em JSON. São eles: 
     - **Postagens** - publicações do portal 
     - **Comentários** - registro de opiniões dos usuários sobre as postagens
     - **Projetos Sociais** - lista de projetos de ONGs para acesso durante a leitura de uma postagem
 - **Hospedagem** - local na Internet onde as páginas são mantidas e acessadas pelo navegador. 


## Tecnologias Utilizadas

> - [![HTML5][HTML5]][HTML5-url]
> - [![CSS3][CSS3]][CSS3-url]
> - [![JavaScript][JavaScript]][JavaScript-url]
> - [![Heroku][Heroku]][Heroku-url]
> - [![GitHub][GitHub]][GitHub-url]
> - [![VSCode][VSCode]][VSCode-url]


## Hospedagem

O site utiliza a plataforma do Heroku como ambiente de hospedagem do site do projeto. O site é mantido no ambiente da URL: 

[https://portal-pets.herokuapp.com/](https://portal-pets.herokuapp.com/)

A publicação do site no Heroku é feita por meio da Command Line Interface (CLI) do Heroku. Para o deploy do site no Heroku, ele é feito automaticamente após um git push do código no repositório local da main branch, para o repositório Heroku remoto. 

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[VSCode]: https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white
[VSCode-url]: https://code.visualstudio.com/
[GitHub]: https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white
[GitHub-url]: https://github.com/
[Heroku]: https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white
[Heroku-url]: https://dashboard.heroku.com
[JavaScript]: https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E
[JavaScript-url]: https://www.javascript.com/
[CSS3]: https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white
[CSS3-url]: https://www.w3schools.com/css/
[HTML5]: https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white
[HTML5-url]: https://www.w3schools.com/html/

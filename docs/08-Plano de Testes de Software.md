# Plano de Testes de Software

Os requisitos para realização dos testes de software são:
-   Site publicado na Internet
-   Navegador da Internet - Chrome, Firefox ou Edge
-   Conectividade de Internet para acesso ao site

Os testes funcionais a serem realizados no site são descritos a seguir.

## CT-01 - Visualizar Home Page

### Requisitos Associados
- RF-01: O site deve apresentar na página principal dicas, guias e informações em geral sobre cuidados com pets.
- RF-02: O site deve apresentar, para cada postagem, uma imagem e um título correspondente.
- RF-04: O site deve apresentar na página principal as postagens mais recentes e as em destaque.

### Objetivo do Teste
Verificar se a home está sendo carregada corretamente

### Passos
- Acessar o site no navegador
- Visualizar a página principal

### Critérios de Êxito
- O site deve apresentar 6 posts em destaque e 3 posts recentes
- Cada um dos posts apresentadas deve conter uma imagem, um título, autor e data da postagem

-Funcionando corretamente 
![image](https://user-images.githubusercontent.com/90425477/206814018-1f0989e0-af84-4931-b02d-c01812296a28.png)

## CT-02 - Visualizar Postagem

### Requisitos Associados
- RF-03: O site deve permitir ao usuário visualizar o texto completo da postagem ao clicá-la.

### Objetivo do Teste
Verificar se as postagens estão sendo carregadas corretamente

### Passos
- Acessar o site no navegador
- Visualizar a página principal
- Clicar em alguma das postagens

### Critérios de Êxito
- O site deve carregar uma nova tela referente a postagem clicada, ou seja, mesmo título, mesma imagem e um texto coerente.

-Funcionando corretamente 
![image](https://user-images.githubusercontent.com/90425477/206814110-ea0e5694-49cb-4de4-8de7-612696cb2ff3.png)


## CT-03 - Visualizar Tela de Contato

### Requisitos Associados
- RF-06: O site deve permitir visualizar as informações de contatos do mantenedor do site.

### Objetivo do Teste
Verificar se a tela de contato está sendo carregada corretamente

### Passos
- Acessar o site no navegador
- Visualizar a página principal
- Clicar em "Contato" no cabeçalho do site

### Critérios de Êxito
- O site deve carregar uma nova tela com informações de como entrar em contato com o mantenedor do site.

-Funcionando corretamente (tela carregando sem erros) 
![image](https://user-images.githubusercontent.com/90425477/206814186-5935dfab-28b3-4f7d-ab3f-b7f95bdc59b0.png)


## CT-04 - Compartilhar nas redes sociais

### Requisitos Associados
- RF-07: O site deve permitir o compartilhamento de postagens em plataformas de redes sociais.

### Objetivo do Teste
Verificar se é possível compartilhar as postagens em redes sociais

### Passos
- Estar logado no Facebook e no Twitter
- Acessar o site no navegador
- Visualizar a página principal
- Clicar em alguma postagem
- Visualizar a página da postagem
- Clicar no ícone do *Facebook*
- Clicar no ícone do *Twitter*

### Critérios de Êxito
- Abrir a tela de publicação da rede social escolhida com o link do site já preenchido

-Funcionando corretamente 
![image](https://user-images.githubusercontent.com/90425477/206814286-150f12b0-0eac-4f5a-867c-21831a2700e8.png)

![image](https://user-images.githubusercontent.com/90425477/206814439-bbf49dc6-2db4-4a3f-830b-f11a506cbbe4.png)



## CT-05 - Comentários em Postagens

### Requisitos Associados
- RF-08: O site deve permitir que usuários possam comentar as postagens.
- RF-09: O site deve exibir os comentários registrados ao final da postagem.

### Objetivo do Teste
Verificar se é possível comentar nas postagens e se é possível visualizar comentários de outras pessoas.

### Passos
- Acessar o site no navegador
- Visualizar a página principal
- Clicar em alguma postagem
- Visualizar a página da postagem
- Visualizar no final do texto a seção de comentários
- Preencher os campos erroneamente e tentar enviar o comentário
- Preencher os campos corretamente e publicar o comentário

### Critérios de Êxito
- Se os campos não forem preenchidos corretamente uma mensagem avisando deve aparecer e o comentário não será enviado.

-Funcionando corretamente (Se os campos não foram preenchidos corretamente o erro vai aparecer assim que tentar publicar) 
![image](https://user-images.githubusercontent.com/90425477/206814615-ce52e759-0878-4a04-b706-6a510236c743.png)

- Se os campos forem preenchidos corretamente ele deverá ser publicado e estar visível abaixo do formulário.
- O comentário deve conter um avatar de animal aleátorio e a data do envio.
- O comentário deve estar visível ao acessar as propriedades de localStorage da página.

-Funcionando corretamente (O comentário aparece junto com a data de envio e a foto de perfil de um animal aleátorio)
![image](https://user-images.githubusercontent.com/90425477/206814671-509ef48e-27da-40b0-b467-73fa3075c223.png)



## CT-06 - Divulgação de Projetos

### Requisitos Associados
- RF-10: O site deve permitir divulgação de adoções.
- RF-13: O site deve permitir ao usuário encontrar projetos sociais de ONGs cuidadoras de animais.
- RF-14: O site deve permitir aos usuários compartilharem projetos sociais em prol dos animais.

### Objetivo do Teste
Verificar se é possível divulgar projetos sociais no site.

### Passos
- Acessar o site no navegador
- Visualizar a página principal
- Clicar em "Escreva" no cabeçalho do site
- Preencher o formulário de divulgação e enviar
- Clicar em "Ínicio" no cabeçalho do site
- Visualizar a sidebar "Projetos e Ações"
- Clicar em algum dos links

### Critérios de Êxito
- Mensagem de sucesso aparecendo após divulgar a ação social.

-Funcionando corretamente 
![image](https://user-images.githubusercontent.com/90425477/206814832-a40fbc22-972e-4ef7-b08f-abcd9739af88.png)

- Ao clicar em algum link da sidebar abre o site da ONG que está sendo divulgada no site.

-Funcionando corretamente (Ao clicar em algum link da sidebar o usuario é redirecionado para a ONG divulgada)
![image](https://user-images.githubusercontent.com/90425477/206814862-161c4e85-e073-4414-8198-c1c34f9efe13.png)

![image](https://user-images.githubusercontent.com/90425477/206814897-1d61d6e3-ec52-42e4-ae13-1123f3db89f9.png)


## CT-07 - Navegabilidade

### Requisitos Associados
- RF-12: O site deve possuir um painel com atalhos dos principais tópicos.

### Objetivo do Teste
Verificar se a navegação do site está funcionando corretamente.

### Passos
- Acessar o site no navegador
- Visualizar a página principal
- Clicar em "Escreva" no cabeçalho do site
- Clicar em "Quem Somos" no cabeçalho do site
- Clicar em "Contato" no cabeçalho do site
- Clicar em "Ínicio" no cabeçalho do site

### Critérios de Êxito
- Deve abrir uma tela nova condizente com o atalho clicado.

-Funcionando corretamente
![image](https://user-images.githubusercontent.com/90425477/206814967-0d9a2280-5b68-4afe-b5c5-9e3dcf0c258b.png)

-Funcionando corretamente (Depois de clicar no atalho "Quem Somos" voce é redirecionado para a pagina "Quem Somos")
![image](https://user-images.githubusercontent.com/90425477/206815001-65807934-ecfe-40f0-98ea-718f2c6ec00d.png)



## CT-08 - Postagens Relacionadas

### Requisitos Associados
- RF-15: O site deve apresentar postagens relacionadas às que o usuário mais acompanha.

### Objetivo do Teste
Verificar se as postagens relacionadas estão aparecendo.

### Passos
- Acessar o site no navegador
- Visualizar a página principal
- Clicar em alguma postagem
- Visualizar a página da postagem

### Critérios de Êxito
- Deve haver uma sidebar "Postagens Relacionadas" com algumas postagens aparecendo

- As postagens que aparecerem devem ser pertinentes com o post clicado. 

-Funcionando corretamente
![image](https://user-images.githubusercontent.com/90425477/206815378-f42a7148-a982-45ba-9bab-4d0bfb2be76e.png)

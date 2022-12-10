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
- Se os campos forem preenchidos corretamente ele deverá ser publicado e estar visível abaixo do formulário.
- O comentário deve conter um avatar de animal aleátorio e a data do envio.
- O comentário deve estar visível ao acessar as propriedades de localStorage da página.



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

- Ao clicar em algum link da sidebar abre o site da ONG que está sendo divulgada no site.


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



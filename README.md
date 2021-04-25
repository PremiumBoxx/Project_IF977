# PremiumBox
Projeto ES 2020.1

## Descrição

Esta API suporta o aplicativo chamado PremiumBox.
A missão do PremiumBox é ofertar pacotes de conteúdos específicos de diversas áreas do conhecimento. 

## Oportunidade

Dadas as atuais circunstâncias globais (pandemia do covid-19), identificamos uma oportunidade de mercado para inovação nos modelos de negócio que exigem a figitalização de novos empreendimentos. Atentos a essas necessidades desenvolvemos o PremiumBox, o aplicativo que empoderará o produtor de conteúdo ao possibilitar que oferte um pacote de serviços e/ou produtos administrando autonomamente seus lucros.

## Cenário

**Todos os usuários tem o mesmo nível de acesso às funcionalidades, porém existem possibilidades diferentes:**

- Para o usuário criador de conteúdo por assinatura será possível criar, ver, editar e deletar pacotes de conteúdos (que podem ou não conter pacotes de produtos físicos especificados no anúncio); ver, editar e deletar seu perfil e ver perfil dos demais usuários do sistema. 
- Para o usuário consumidor será possível ver os pacotes de conteúdo por assinatura ofertados, ver os pacotes de conteúdo por assinatura adquiridos; ver, editar e deletar seu perfil e ver perfil dos demais usuários do sistema.

## Público-Alvo

- Pessoas que desejam figitalizar seus serviços e/ou produtos de quaisquer áreas.

## Personas

<img src="https://i.imgur.com/45zacnV.png" width="200">

### Camila Cassiano, 23

**Camila** é uma jovem de 23 anos recém-formada em Design. Ela deseja seguir carreira como digital influencer do mercado de moda e beleza, focando em produtos de maquiagem para pele negra. 
Além de oferecer um curso online para digitais influencers, Camila deseja vender um pacote de assinatura (press kit) para divulgar seu novo curso com produtos de maquiagem (que é voltado para esse público). Contudo ela gostaria de oferecer os dois serviços numa mesma plataforma na modalidade de serviços por assinatura.

<img src="https://i.imgur.com/gr42xxT.png" width="200">

### Carlos Ferraz, 52

**Carlos** tem 52 anos e se aposentou recentemente. Ele trabalhou na fabricação de móveis de alta qualidade durante 28 anos e por isso quer oferecer uma consultoria online aos alunos que comprarem seu curso de marcenaria que contém vídeos com aulas de confecção e informações sobre móveis de diferentes estilos e materiais. Tudo isso com um ebook de fotos das peças que Carlos produziu durante seus anos de trabalho e um ebook para acompanhar as aulas do curso. Carlos precisa de uma plataforma simples e de acesso fácil e intuitivo para gerir todos os produtos e serviços que ele deseja oferecer.

## Equipe
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="https://api.whatsapp.com/send?phone=5581994197894"><img src="https://i.imgur.com/Uy99VJk.png" width="100px;" alt="Matheus Brant"/><br /><sub><b>Matheus Brant</b></sub></a><br /><a href="https://github.com/mathrbrantn"title="Code">💻</a></td>
     <td align="center"><a href="https://api.whatsapp.com/send?phone=55819973885834"><img src="https://i.imgur.com/WgQAu4R.png" width="100px;" alt="Itérbio Arantes"/><br /><sub><b>Itérbio Arantes</b></sub></a><br /><a href="https://github.com/IterbioArantes"title="Code">💻</a></td>
    <td align="center"><a href="https://api.whatsapp.com/send?phone=5581991840455"><img src="https://i.imgur.com/S0mEw97.png" width="100px;" alt="Vinícius Rosa"/><br /><sub><b>Vinícius Rosa</b></sub></a><br /><a href="https://github.com/vrs2"title="Code">💻</a></td>
    <td align="center"><a href="https://api.whatsapp.com/send?phone=558181992901019"><img src="https://i.imgur.com/rxMqFbW.png" width="100px;" alt="Isabela Carneiro"/><br /><sub><b>Isabela Carneiro</b></sub></a><br /><a href="https://github.com/isabelamenezs"title="Design">🎨</a></td>
  </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

## Comunicação

- Remota (Via Whatsapp e Discord).
- Google Meet para reuniões diárias e semanais.

## Homologação

A homologação do projeto foi feita por meio de reuniões entre a equipe para validar a especificação de requisitos e formulários de consulta para definir o público-alvo entre possíveis usuários.
Para construção do formulário [📄](https://docs.google.com/forms/d/e/1FAIpQLSfipBrult6CVg1pS6MutPBrWdOMs5BQl69xLn9KB5aqwcXk4A/viewform) de especificação do projeto utilizamos perguntas relacionadas à usabilidade, uma vez que será o indicador de qualidade (nível de satisfação do usuário) utilizado no teste de usabilidade do produto final.

## Metodologia

- Metodolgia XGH (eXtreme Go Horse). 🐎🤠
(Uma brincadeira pra descontrair professor! 😅)

## Protótipo

Para auxiliar na prototipação elaboramos casos de uso para cada funcionalidade definida como requisito. Segue abaixo a tela e os casos de uso correspondentes aos seus respectivos processos.

## Tela de Login

<img src="https://i.imgur.com/yHH1sZm.png" width="1000">

### UC001 - Login
**Pré-Condições:**
- Possuir usuário válido cadastrado no sistema.

**Pós-Condições:**
- Acesso à tela inicial do PremiumBox.

**Fluxo Principal:**
- Acessar o [link]();
- Preencher os campos "Login" e "Senha";
- Acionar o botão "Entrar";
- O sistema apresenta a tela inicial do PremiumBox.

**Fluxos Secundários:**
- **FS0001:** O usuário pode cancelar a qualquer momento acionando o botão "Sair" na tela inicial do PremuimBox.
- **FS0002:** Caso o usuário e a senha estejam incorretos ou o usuário não exista o sistema apresentará a seguinte mensagem: "Usuário ou senha incorretos, tente novamente."

### Tela Inicial

<img src="https://i.imgur.com/MGqdu0W.png" width="1000">

### Telas de Cadastro de Usuário e Pacotes

<img src="https://i.imgur.com/EO4gGXS.png" width="1000">

<img src="https://i.imgur.com/o1vSIsO.png" width="1000">

### UC002 - Criar usuário
**Pré-Condições:**
- Não possuir usuário válido cadastrado no sistema com o e-mail utilizado.

**Pós-Condições:**
- Criação de um novo usuário do PremiumBox.

**Fluxo Principal:**
- Acessar a tela de criação usuários clicando na opção "Cadastre-se" da tela de login;
- Preencher no mínimo os campos obrigatórios;
- Acionar o botão "Salvar".

**Fluxos Secundários:**
- **FS0003:** O usuário pode cancelar a operação a qualquer momento acionando o botão "Cancelar" para retornar tela de login.
- **FS0004:** Caso os campos obrigatórios não sejam preenchidos, o sistema apresentará a mensagem “O campo <nome do campo> é obrigatório! Por favor informe o <nome do campo> antes de salvar.”.

### UC003 - Criar pacote
**Pré-Condições:**
- Possuir usuário válido cadastrado no sistema.
- Não possuir pacote válido cadastrado no sistema com o nome utilizado.

**Pós-Condições:**
- Criação de um novo pacote do PremiumBox.

**Fluxo Principal:**
- Acessar a tela de edição do usuário clicando no ícone de perfil do canto superior esquerdo da tela inicial;
- Acionar o botão "Criar Pacote";
- Preencher no mínimo os campos obrigatórios;
- Acionar o botão "Salvar".

**Fluxos Secundários:**
- **FS0003:** O usuário pode cancelar a operação a qualquer momento acionando o botão "Cancelar" para retornar tela inicial.
- **FS0004:** Caso os campos obrigatórios não sejam preenchidos, o sistema apresentará a mensagem “O campo <nome do campo> é obrigatório! Por favor informe o <nome do campo> antes de salvar.”.

### Telas de Edição de Usuário e Pacotes

<img src="https://i.imgur.com/iXCbeMV.png" width="1000">

<img src="https://i.imgur.com/oxH8yoo.png" width="1000">

### UC004 - Editar usuário cadastrado
**Pré-Condições:**
- Possuir usuário válido cadastrado no sistema.


**Pós-Condições:**
- Edição de um usuário cadastrado no PremiumBox.

**Fluxo Principal:**
- Acessar a tela de edição do usuário clicando no ícone de perfil do canto superior esquerdo da tela inicial;
- Caso altere, preencher no mínimo os campos obrigatórios;
- Acionar o botão "Salvar".

**Fluxos Secundários:**
- **FS0003:** O usuário pode cancelar a operação a qualquer momento acionando o botão "Cancelar" para retornar tela inicial.
- **FS0004:** Caso os campos obrigatórios não sejam preenchidos, o sistema apresentará a mensagem “O campo <nome do campo> é obrigatório! Por favor informe o <nome do campo> antes de salvar.”.

### UC005 - Editar Pacote Cadastrado
**Pré-Condições:**
- Possuir usuário válido cadastrado no sistema.
- Possuir pacote válido cadastrado no sistema.

**Pós-Condições:**
- Edição de um pacote cadastrado no PremiumBox.

**Fluxo Principal:**
- Acessar a tela de edição do usuário clicando no ícone de perfil do canto superior esquerdo da tela inicial;
- Acionar o botão "Editar Pacote";
- Caso altere, preencher no mínimo os campos obrigatórios;
- Acionar o botão "Salvar".

**Fluxos Secundários:**
- **FS0003:** O usuário pode cancelar a operação a qualquer momento acionando o botão "Cancelar" para retornar tela inicial.
- **FS0004:** Caso os campos obrigatórios não sejam preenchidos, o sistema apresentará a mensagem “O campo <nome do campo> é obrigatório! Por favor informe o <nome do campo> antes de salvar.”.


### UC006 - Deletar usuário cadastrado
**Pré-Condições:**
- Possuir usuário válido cadastrado no sistema.


**Pós-Condições:**
- Exclusão de um usuário cadastrado no PremiumBox.

**Fluxo Principal:**
- Acessar a tela de edição do usuário clicando no ícone de perfil do canto superior esquerdo da tela inicial;
- Acionar o botão "Deletar Conta";
- Ao aparecer a mensagem "Tem certeza que deseja deletar sua conta do PremiumBox? Essa operação nãp é reversível." acionar o botão "Salvar".

**Fluxos Secundários:**
- **FS0003:** O usuário pode cancelar a operação a qualquer momento acionando o botão "Cancelar" para retornar tela inicial.

### UC007 - Deletar Pacote Cadastrado
**Pré-Condições:**
- Possuir usuário válido cadastrado no sistema.
- Possuir pacote válido cadastrado no sistema.

**Pós-Condições:**
- Edição de um pacote cadastrado no PremiumBox.

**Fluxo Principal:**
- Acessar a tela de edição do usuário clicando no ícone de perfil do canto superior esquerdo da tela inicial;
- Acionar o botão "Deletar Pacote";
- Ao aparecer a mensagem "Tem certeza que deseja deletar seu pacote do PremiumBox? Essa operação nãp é reversível." acionar o botão "Salvar".

**Fluxos Secundários:**
- **FS0003:** O usuário pode cancelar a operação a qualquer momento acionando o botão "Cancelar" para retornar tela de login.

### Tela de Pesquisa

<img src="https://i.imgur.com/hSW4y7e.png" width="1000">

### Tela de Visualização do Perfil do Usuário

<img src="https://i.imgur.com/CuxLAWy.png" width="1000">

### Tela de Visualização do Pacote

<img src="https://i.imgur.com/ve4HOIQ.png" width="1000">

### UC008 - Pesquisar usuário ou pacote cadastrados
**Pré-Condições:**
- Possuir usuário válido cadastrado no sistema.
- Possuir pacote válido cadastrado no sistema.

**Pós-Condições:**
- Visualização de um usuário ou pacote cadastrados no PremiumBox.

**Fluxo Principal:**
- Acionar a barra de pesquisa no centro superior da tela inicial e digitar o nome do usuário ou pacote desejados;
- Ao visualizar o usuário ou pacote na barra de pesquisa, clicar sobre a opção desejada.

**Fluxos Secundários:**
N/A



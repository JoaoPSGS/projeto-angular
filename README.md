# :computer: Projeto Aprendizagem Angular
### Programa mobile para ajudar com algumas utilidades do framework Angular

## 🛠️ Ferramentas Utilizadas

* Angular
* HTML
* Ionic
* Node
* SCSS
* TypeScript

## 🚀 Iniciando um Projeto Ionic/Angular

1. Instale a IDE do [Visual Studio Code](https://code.visualstudio.com/)
2. Instale o [Node.js](https://nodejs.org/)
3. Reinicie sua máquina para efetivar as instalações do Node.js
4. Abra o Visual Studio Code e faça a instalação das extensões do Ionic (as duas extensões certificadas)

<img src="https://github.com/JoaoPSGS/projeto-angular/blob/main/assets/prints/4ionic.png"> 

5. Instale a extensão do Angular

<img src="https://github.com/JoaoPSGS/projeto-angular/blob/main/assets/prints/4angular.png">

6. Abra o terminal do CMD do VSCode **(Ctrl+Shift+')** e execute o seguinte comando:  **_npm install -g @ionic/cli_**

<img src="https://github.com/JoaoPSGS/projeto-angular/blob/main/assets/prints/6.png">

7. Crie uma pasta vazia e abra ela no VSCode

8. Abra a opção "Ionic" que foi criada na guia lateral esquerda do VS Code e selecione "New Angular Project", e em seguida "blank"

<img src="https://github.com/JoaoPSGS/projeto-angular/blob/main/assets/prints/7.png">

9. Crie os arquivos e substitua-os pelos arquivos deste repositório
10. Pronto !!! Basta executar o seguinte comando no CMD para executar o projeto: **_ionic serve_**

## 📁 Criando Pastas e Arquivos

* Para uma nova página, basta executar o comando: **_ionic generate page nomeDaPasta/nomeDaPagina_**
* Para criar um novo service, execute: **_ionic generate service nomeDaPasta/nomeDoService_**

## Modelo C4

* Diagrama de Contexto

O aplicativo será utilizado pelos usuários e o administrador, onde o usuário poderá utilizar o conteúdo do aplicativo e também fazer o envio de sugestões. Já o adminitrador, fará a gerência dos dados dos usuários e das sugestões recebidas, além de corrigir eventuais erros e atualizar o aplicativo.

<img src="https://github.com/JoaoPSGS/projeto-angular/blob/main/assets/c4/C4%20Contexto.png">

* Diagrama de Container

No diagrama container, o usuário acessa a aplicação mobile, que têm função de armazenar os dados de cadastro e login no banco de dados. Igualmente acontece para o administrador, que têm acesso a um conteúdo a parte, que nele é armazenado os dados dos usuários e as sugestões, que podem ser modificadas realizando a comunicação com o banco de dados.

<img src="https://github.com/JoaoPSGS/projeto-angular/blob/main/assets/c4/C4%20Container.png">

* Diagrama de Componentes

A aplicação se inicia no "Login Controller", que pode te direcionar para o "Cadastro Controller" (que têm função de realizar um novo cadastro, fazendo isso enviando os dados ao "DataBase Controller" que se comunica com o "DataBase". Outra direção após o login é comunicar-se com o "DataBase Controller", que vai realizar a autenticação para saber qual dos dois próximo caminhos o utilizador será redirecionado. Um caminho é o "Home Controller", que pode te direcionar para a "Pages Controller" (te direciona para as páginas que possuem o conteúdo do aplicativo) ou para o "Comentarios Controller" (que te leva à páginas de envio de sugestões, lembrando que este componente se comunica com o "DataBase Controller"). Outro caminho é seguir para o "Home Adm Controller", que possui opções para seguir para "Comentarios Controller" e "Usuarios Controller", que são os componentes responsáveis por realizar o gerenciamento dos dados do aplicativo, além disso, os dois componente se comunicam com o "DataBase Controller".

<img src="https://github.com/JoaoPSGS/projeto-angular/blob/main/assets/c4/C4%20Componentes.png">

* Diagrama de Casos de Uso

Diagrama indica que o usuário pode realizar cadastro e login. Após o login, ele terá acesso ao conteúdo do aplicativo, bem como a opção de enviar sugestões. No caso do administrador, ele poderá fazer o gerenciamento dos dados e das sugestões, ou seja, ele terá acesso aos dados dos usuários e as sugestões enviadas por eles, podendo fazer as operações de CRUD necessárias.

<img src="https://github.com/JoaoPSGS/projeto-angular/blob/main/assets/c4/Caso%20de%20Uso.png">

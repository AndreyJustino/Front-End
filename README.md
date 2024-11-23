# Hackathon Project: Categorization and Filtering Platform

## 1. Introdução

### Descrição Resumida:  
Este projeto visa melhorar a experiência dos usuários em uma plataforma de hospedagens, facilitando a busca por opções relevantes. A solução se concentra em categorizar as hospedagens e criar um sistema de filtros, permitindo uma navegação mais eficiente e personalizada.

### Meta:  
O objetivo principal deste projeto é proporcionar uma experiência mais agradável e intuitiva para os usuários, ajudando-os a encontrar hospedagens de forma mais rápida e eficaz, por meio de uma categorização clara e filtros dinâmicos.

### Equipe:  
- Andrey Justino – Líder  
- [Débora Laís](https://github.com/Debora-Laiss) – QA  
- [Kenned Ferreira](https://github.com/kennedfer) – Front-End  
- [Jamyle Elen](https://github.com/Jamyle-Elen) – Design  
- [Gil Maik](https://github.com/JuniorReisx) – Back-End  

---

## 2. Problema

Atualmente, a plataforma de hospedagens possui uma grande variedade de opções, o que dificulta a busca por alternativas que atendam às necessidades dos usuários. O grande número de opções sem categorização pode fazer com que os usuários se sintam sobrecarregados ao tentar encontrar o que realmente precisam.

### Desafios identificados:
- **Dificuldade na navegação:** Usuários têm dificuldades para encontrar hospedagens que atendam aos seus critérios específicos.
- **Falta de organização:** As hospedagens não estão organizadas de forma a permitir uma pesquisa eficiente.
- **Experiência do usuário comprometida:** A experiência de busca e seleção de hospedagens não é otimizada para diferentes tipos de preferências.

---

## 3. Solução

Para resolver esse problema, desenvolvemos uma aplicação que categoriza as hospedagens e implementa filtros personalizados, oferecendo uma solução mais eficaz para os usuários encontrarem rapidamente as opções ideais. A plataforma agora permite que os usuários filtrem as hospedagens com base em preferências como localização, preço, tipo de acomodação, entre outros.

### Inovações e diferenciais da solução:
- **Sistema de Categorização:** Hospedagens organizadas por categorias específicas, como tipo de imóvel, faixa de preço, e avaliações, tornando a busca mais intuitiva.
- **Filtros Dinâmicos:** Um sistema de filtros interativo que se adapta às preferências do usuário, possibilitando uma busca refinada e personalizada.
- **Interface Amigável:** Layout simples e fácil de usar, proporcionando uma navegação rápida e eficiente.

---

## 4. Tecnologias Utilizadas

A aplicação foi desenvolvida utilizando um conjunto de tecnologias modernas para garantir desempenho, escalabilidade e uma boa experiência ao usuário. Abaixo estão as principais ferramentas e tecnologias utilizadas:

### Front-end:
- **React:** Utilizado para criar uma interface interativa e dinâmica.
- **Vite:** Ferramenta de build rápida e moderna para otimizar o desenvolvimento com React.

### Back-end:
- **Node.js:** Ambiente de execução para JavaScript no lado do servidor.
- **Express:** Framework minimalista e flexível para Node.js, utilizado para criar as rotas e gerenciar a comunicação com o front-end.

### Banco de Dados:
- **PostgreSQL:** Sistema de gerenciamento de banco de dados relacional robusto, utilizado para armazenar as informações das hospedagens e dos usuários.

### ORM (Object-Relational Mapping):
- **Sequelize:** ORM para Node.js, utilizado para simplificar a interação com o banco de dados PostgreSQL, permitindo operações de banco de dados mais eficientes e seguras.

### Autenticação:
- **JWT (JSON Web Tokens):** Sistema de autenticação utilizado para garantir que os usuários estejam autenticados antes de acessar certas funcionalidades da aplicação. O JWT é gerado no login e validado em cada requisição subsequente.

### Categorization:
- **Google Gemini:** Utilizado para categorizar automaticamente as hospedagens com base em características e preferências dos usuários, melhorando a busca e a filtragem.

---

## 5. Funcionalidades Principais

O projeto possui uma série de funcionalidades que melhoram a experiência do usuário ao buscar e interagir com as hospedagens. As principais funcionalidades são:

- **Filtros Personalizados:**  
  Permite aos usuários refinar a busca de hospedagens com base em critérios como localização, faixa de preço, tipo de acomodação, avaliações, entre outros. O sistema de filtros é dinâmico e se adapta de acordo com as opções selecionadas.

- **Sistema de Categorização Automática:**  
  Utilizando o **Google Gemini**, as hospedagens são categorizadas automaticamente com base em características como tipo de imóvel, conforto, e preferências dos usuários. Isso facilita a organização e a busca por opções específicas.

- **Autenticação de Usuários:**  
  Com o uso de **JWT (JSON Web Tokens)**, a aplicação garante que apenas usuários autenticados possam acessar funcionalidades específicas, como reservas e modificações no perfil, proporcionando segurança e controle.

- **Interface Amigável:**  
  A interface foi projetada para ser simples, intuitiva e de fácil navegação. Com uma navegação clara e organizada, os usuários conseguem encontrar rapidamente as hospedagens que atendem às suas necessidades.

- **Cadastro e Login de Usuários:**  
  A aplicação permite que os usuários se cadastrem e façam login de forma rápida e segura. O sistema de autenticação verifica as credenciais via JWT, garantindo que apenas usuários autorizados possam acessar a plataforma.

- **Exibição de Hospedagens com Detalhes:**  
  As hospedagens são exibidas de forma clara, com informações detalhadas, incluindo preços, descrição, imagens, e avaliações de outros usuários, facilitando a escolha da opção ideal.

## 6. Como Usar

Para rodar o projeto React com Vite localmente, siga as etapas abaixo:

### 1. Clonar o Repositório

Clone o repositório para o seu computador:

    ```bash
    https://github.com/AndreyJustino/Front-End
    ```

### 2. Instalar as Dependências

Acesse o diretório do projeto e instale as dependências necessárias com o npm:

    ```bash
    cd front-end
    npm install
    ```

### 3. Rodar o Servidor de Desenvolvimento

Inicie o servidor de desenvolvimento com o comando:

    ```bash
    npm run dev
    ```

### 4. Rodar o Servidor de Desenvolvimento

Inicie o servidor de desenvolvimento com o comando:

    ```bash
    npm run dev
    ```

Isso fará o servidor rodar localmente. Você verá no terminal um link para acessar a aplicação, geralmente http://localhost:5173.

Agora você está pronto para rodar o projeto React com Vite no seu ambiente local!
# CRUD em Realidade Virtual (VR) 🕶️

Este projeto foi desenvolvido para a disciplina de Computação Gráfica e Ambientes Virtuais. O objetivo é demonstrar a aplicação de operações CRUD (Create, Read, Update, Delete) em um ambiente 3D imersivo.

## 🚀 Tecnologias Utilizadas
* **A-Frame.js**: Renderização da cena 3D e realidade virtual.
* **JavaScript (ES6)**: Lógica de manipulação do DOM e estado.
* **LocalStorage**: Persistência de dados no navegador.
* **JSON Server (v0.17.4)**: Simulação de API REST (Opcional/Configurado).

## 🧠 Lógica de Negócio (Mapeamento HTTP)
O projeto respeita conceitualmente os verbos HTTP para manipulação dos objetos na cena:
- **POST (Create)**: Adiciona uma nova `a-box` com cor e posição aleatória.
- **GET (Read)**: Renderiza dinamicamente todos os itens salvos no `LocalStorage`.
- **PUT/PATCH (Update)**: Altera a propriedade de cor do objeto selecionado para amarelo.
- **DELETE (Delete)**: Remove o objeto da cena e da base de dados.

## 🛠️ Como rodar o projeto
1. **No GitHub Codespaces**:
   - Abra o terminal e instale as dependências:
     ```bash
     npm install
     ```
   - (Opcional) Inicie o servidor mock:
     ```bash
     npm run server
     ```
2. **No Navegador**:
   - Abra o arquivo `index.html`.
   - Use o cursor no centro da tela (Gaze/Click) para interagir com os cubos.

## 👤 Desenvolvedores
**Artur Tabosa** *Estudante de Ciência da Computação - Faculdade Nova Roma*

**Gabriel Loyo** *Estudante de Ciência da Computação - Faculdade Nova Roma*

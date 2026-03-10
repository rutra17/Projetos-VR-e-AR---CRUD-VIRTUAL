# CRUD Virtual - Catálogo de Comidas 3D 🕶️

Este projeto foi desenvolvido para a disciplina de Realidade Aumenta e Realidade Virtual na **FNR - Faculdade Nova Roma**. O objetivo é demonstrar a viabilidade de realizar operações de CRUD (Create, Read, Update, Delete) dentro de um ambiente imersivo de Realidade Virtual (RV).

## 🎯 Objetivo do Projeto
Desenvolver uma aplicação funcional onde a manipulação de dados reflete instantaneamente em objetos 3D, utilizando conceitos de persistência local e lógica de estados.

## 🛠️ Tecnologias Utilizadas
* **A-Frame.js:** Framework para criação de experiências de Realidade Virtual na web.
* **JavaScript (ES6+):** Lógica do CRUD e manipulação do DOM virtual.
* **LocalStorage:** Persistência de dados do navegador.
* **CSS3:** Estilização de interface auxiliar.

## 🔄 Mapeamento de Conceitos (Verbos HTTP)
A aplicação foi estruturada respeitando conceitualmente os verbos de uma API REST:

| Verbo HTTP | Função no Código | Descrição |
| :--- | :--- | :--- |
| **GET** | `getItems()` / `renderScene()` | Lê os dados do LocalStorage e renderiza os objetos na cena. |
| **POST** | `handleCreate()` | Gera uma nova comida aleatória em um slot livre do grid. |
| **PUT** | `handleUpdate()` | Modifica o nome e a cor do item selecionado no ambiente. |
| **DELETE** | `handleDelete()` | Remove o registro do LocalStorage e o objeto da cena. |

## 🚀 Funcionalidades de Destaque
* **Grid Inteligente:** O sistema de criação identifica automaticamente o primeiro espaço vazio no cenário para posicionar o novo item, evitando sobreposição de objetos.
* **HUD Interativo:** Um menu flutuante permite a interação direta, facilitando o uso em dispositivos VR.
* **Seleção Visual:** Ao clicar em um objeto, ele aumenta de escala para indicar que está selecionado para edição ou exclusão.

## 📦 Como Executar
1.  Acesse o repositório pelo **GitHub Codespaces** ou clone localmente.
2.  Abra o arquivo `index.html` em um navegador moderno.
3.  Com o Live Server ativo, clique em Go Live
4.  Para interagir:
    * **Mouse:** Clique nos botões do menu ou nos objetos.
    * **VR Gaze:** Caso use óculos VR, mantenha o cursor (mira) sobre os botões por 1.2s para ativar o clique (Fuse).

---
**Desenvolvido por:** Artur Tabosa Rodrigues Reis
                      Gabriel Loyo de Holanda Lisboa

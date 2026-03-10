// --- DATABASE LOGIC (LocalStorage) ---
const DB_KEY = 'meu_crud_3d';

function getItems() {
    return JSON.parse(localStorage.getItem(DB_KEY)) || [];
}

function saveItems(items) {
    localStorage.setItem(DB_KEY, JSON.stringify(items));
    renderScene(); // Atualiza a visão 3D sempre que salvar
}

// --- CRUD ACTIONS ---

// CREATE (POST)
function handleCreate() {
    const name = document.getElementById('itemName').value || 'Objeto';
    const items = getItems();
    const newItem = {
        id: Date.now(),
        name: name,
        color: '#' + Math.floor(Math.random()*16777215).toString(16), // Cor aleatória
        pos: { x: (Math.random() - 0.5) * 4, y: 1, z: (Math.random() - 0.5) * 4 }
    };
    items.push(newItem);
    saveItems(items);
}

// DELETE (DELETE)
function handleDelete(id) {
    const items = getItems().filter(item => item.id !== id);
    saveItems(items);
}

// UPDATE (PUT)
function handleUpdate(id) {
    const items = getItems().map(item => {
        if (item.id === id) {
            item.color = 'yellow'; // Exemplo de atualização visual
            return item;
        }
        return item;
    });
    saveItems(items);
}

// --- RENDER LOGIC (READ/GET) ---
function renderScene() {
    const container = document.querySelector('#itemContainer');
    container.innerHTML = ''; // Limpa a cena antes de re-renderizar
    
    const items = getItems();
    
    items.forEach(item => {
        const entity = document.createElement('a-box');
        entity.setAttribute('position', item.pos);
        entity.setAttribute('color', item.color);
        entity.setAttribute('class', 'clickable');
        
        // Texto sobre o objeto
        const text = document.createElement('a-text');
        text.setAttribute('value', item.name);
        text.setAttribute('align', 'center');
        text.setAttribute('position', '0 0.7 0');
        text.setAttribute('scale', '0.5 0.5 0.5');
        entity.appendChild(text);

        // Interação de Clique (Delete ou Update)
        entity.addEventListener('click', () => {
            const action = confirm(`Deseja atualizar (OK) ou deletar (Cancelar) o item: ${item.name}?`);
            if (action) handleUpdate(item.id);
            else handleDelete(item.id);
        });

        container.appendChild(entity);
    });
}

// Inicializa a cena ao carregar
window.onload = renderScene;

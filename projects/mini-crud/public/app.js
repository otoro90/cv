const API = '/api/items';

async function fetchItems(){
  const res = await fetch(API);
  return res.json();
}

async function createItem(title, desc){
  const res = await fetch(API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ Title: title, Description: desc })
  });
  return res.json();
}

async function updateItem(id, title, desc){
  const res = await fetch(`${API}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ Title: title, Description: desc })
  });
  return res.json();
}

async function deleteItem(id){
  const res = await fetch(`${API}/${id}`, { method: 'DELETE' });
  return res.json();
}

function createCard(item){
  const el = document.createElement('div');
  el.className = 'item';

  const meta = document.createElement('div');
  meta.className = 'meta';
  const title = document.createElement('strong');
  title.innerText = item.Title;
  const time = document.createElement('span');
  time.innerText = `#${item.id}`;
  meta.appendChild(title);
  meta.appendChild(time);

  const p = document.createElement('p');
  p.innerText = item.Description;

  const actions = document.createElement('div');
  actions.className = 'item-actions';
  const edit = document.createElement('button');
  edit.className = 'update';
  edit.innerText = 'Editar';
  edit.onclick = async ()=>{
    const newTitle = prompt('Nuevo title', item.Title);
    const newDesc = prompt('Nueva descripcion', item.Description);
    if(!newTitle) return;
    await updateItem(item.id, newTitle, newDesc);
    loadItems();
  }
  const del = document.createElement('button');
  del.className = 'delete';
  del.innerText = 'Eliminar';
  del.onclick = async ()=>{
    if(!confirm('Seguro quieres borrar?')) return;
    await deleteItem(item.id);
    loadItems();
  }
  actions.appendChild(edit);
  actions.appendChild(del);

  el.appendChild(meta);
  el.appendChild(p);
  el.appendChild(actions);
  return el;
}

async function loadItems(){
  const container = document.getElementById('items');
  container.innerHTML = '';
  const it = await fetchItems();
  it.forEach(i=> container.appendChild(createCard(i)));
}

window.addEventListener('DOMContentLoaded', ()=>{
  const createBtn = document.getElementById('create-btn');
  const clearBtn = document.getElementById('clear-btn');
  const titleInput = document.getElementById('title');
  const descInput = document.getElementById('description');

  createBtn.addEventListener('click', async ()=>{
    const title = titleInput.value.trim();
    const desc = descInput.value.trim();
    if(!title) return alert('El title es requerido');
    await createItem(title, desc);
    titleInput.value = '';
    descInput.value = '';
    loadItems();
  });
  clearBtn.addEventListener('click', ()=>{ titleInput.value=''; descInput.value=''; });

  loadItems();
});

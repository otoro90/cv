const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// In-memory store to simulate a SharePoint list
let items = [
  { id: 1, Title: 'Primer item', Description: 'Item inicial' },
  { id: 2, Title: 'Segundo item', Description: 'Otro item' }
];
let nextId = 3;

// API endpoints mimicking CRUD operations
app.get('/api/items', (req, res) => {
  res.json(items);
});

app.get('/api/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const found = items.find(i => i.id === id);
  if (!found) return res.status(404).json({ error: 'Not found' });
  res.json(found);
});

app.post('/api/items', (req, res) => {
  const { Title, Description } = req.body;
  const item = { id: nextId++, Title, Description };
  items.push(item);
  res.status(201).json(item);
});

app.put('/api/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { Title, Description } = req.body;
  const idx = items.findIndex(i => i.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Not found' });
  items[idx] = { id, Title, Description };
  res.json(items[idx]);
});

app.delete('/api/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const idx = items.findIndex(i => i.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Not found' });
  const deleted = items.splice(idx, 1)[0];
  res.json(deleted);
});

// Serve index
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Mini-CRUD server running on http://localhost:${PORT}`);
});

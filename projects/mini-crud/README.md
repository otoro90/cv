# mini-crud - Demo CRUD (simulando SharePoint)

Este mini-proyecto simula la API de SharePoint para practicar operaciones CRUD (Create/Read/Update/Delete).

Estructura:
```
mini-crud/
├─ public/
│  ├─ index.html
│  ├─ styles.css
│  └─ app.js
├─ server.js
├─ package.json
└─ README.md
```

Requisitos:
- Node.js (16+ recomendado)

Instalación y ejecución:

```powershell
cd projects/mini-crud
npm install
npm start
# Abre http://localhost:4000
```

Qué hace:
- `GET /api/items` — lista items
- `GET /api/items/:id` — obtiene item
- `POST /api/items` — crea item (JSON: { Title, Description })
- `PUT /api/items/:id` — actualiza item
- `DELETE /api/items/:id` — elimina item

Cómo usarlo para aprender SharePoint:
- Reemplazar llamadas de `fetch` por PnPJS cuando estés en un SPFx web part.
- Registrar la aplicación en Azure AD y probar Microsoft Graph.
- Practicar migraciones y provisioning con PnP PowerShell en tu dev-tenant.

Notas:
- Este servidor usa una datastore en memoria; los cambios se pierden si reinicias el servidor.

Proyectos sugeridos:
- Migrar la UI para usar React y PnPJS
- Añadir autenticación (MSAL) y simulación de permisos
- Crear pipeline de CI para build y deploy

Ejemplo: Reemplazar fetch por PnPJS (SPFx / Web Part React)
```ts
// Importar PnPJS en SPFx: npm i @pnp/sp @pnp/graph @pnp/common
import { sp } from '@pnp/sp/presets/all';

// Leer items
const items = await sp.web.lists.getByTitle('MiLista').items.select('ID','Title','Description').get();

// Crear
const create = await sp.web.lists.getByTitle('MiLista').items.add({ Title: 'Item de prueba', Description: 'Demo' });

// Actualizar
await sp.web.lists.getByTitle('MiLista').items.getById(1).update({ Title: 'Actualizado' });

// Borrar
await sp.web.lists.getByTitle('MiLista').items.getById(1).delete();
```

# SPFx Starter - Guía rápida

Este directorio no contiene un proyecto SPFx completo (que es pesado), pero incluye una guía rápida y fragmentos para **comenzar** un Web Part SPFx con PnPJS y operaciones CRUD sobre SharePoint lists.

## 1) Preparar entorno
Instala las herramientas:

```powershell
# Node LTS (16 o 18 según versión SPFx requerida)
node -v
npm -v

npm install -g yo gulp @microsoft/generator-sharepoint
npm install -g @pnp/cli-microsoft365
Install-Module -Name PnP.PowerShell -Scope CurrentUser
```

Regístrate para Microsoft 365 dev tenant (https://developer.microsoft.com/microsoft-365/dev-program) y crea un App Catalog.

## 2) Scaffolding (Yeoman generator)

```powershell
mkdir spfx-sample
cd spfx-sample
yo @microsoft/sharepoint
# Responde: Web part, React, TypeScript, SharePoint Online
```

Luego puedes `gulp serve` para probar en local. Para un despliegue, empaqueta el web part (`gulp bundle --ship` y `gulp package-solution --ship`) y sube el paquete al App Catalog.

## 3) Snippets: SPFx + PnPJS CRUD (React)
Abre `src/webparts/<tuWebPart>/components/<...>.tsx` y usa PnPJS:

```ts
import { sp } from '@pnp/sp/presets/all';

// Crear item
await sp.web.lists.getByTitle('MiLista').items.add({ Title: 'Mi item', Description: 'Desc' });

// Leer items
const items = await sp.web.lists.getByTitle('MiLista').items.select('ID','Title','Description').top(100).get();

// Actualizar
await sp.web.lists.getByTitle('MiLista').items.getById(5).update({ Title: 'Nuevo' });

// Eliminar
await sp.web.lists.getByTitle('MiLista').items.getById(5).delete();
```

## 4) Deploy y envios a App Catalog
- Genera la solución empaquetada y súbela al App Catalog.
- Añade a un sitio y prueba.

## 5) Referencias
- SPFx docs: https://learn.microsoft.com/sharepoint/dev/spfx
- PnPJS: https://pnp.github.io/pnpjs/
- Microsoft Graph: https://developer.microsoft.com/graph
- PnP PowerShell: https://pnp.github.io/powershell/

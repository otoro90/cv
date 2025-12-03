# Prompts útiles para IA (ChatGPT / Copilot)

Usa estos prompts para acelerar desarrollo en SPFx / Power Platform / Azure:

1. SPFx Web Part con React para listar documentos
```
Genera un SPFx React webpart que liste los documentos de una SharePoint Document Library usando PnPJS, mostrando título, autor y fecha de modificación. Incluye paginación y manejo de errores.
```

2. PnP PowerShell para crear site y listas
```
Generar script PnP PowerShell para crear un Communication site, añadir una lista llamada 'Incidencias' con campos Title, Estado y Descripción; configurar vista personalizada y permisos a un grupo.
```

3. Pipeline YAML para SPFx CI/CD
```
Generar pipeline YAML de Azure DevOps que instale dependencias, corra tests linter, construya paquete SPFx y suba artefacto .sppkg
```

4. Solucionar 403 en SharePoint REST
```
Tengo un error 403 al hacer POST a /_api/web/lists/getbytitle('MiLista')/items. Aquí está el request y headers: {...}. ¿Qué podría estar fallando y cómo lo arreglo? Indica pasos concretos para revisar permisos y validación de request digest o autenticación.
```

5. Migración con PnP
```
Genera un script de PnP PowerShell para migrar items desde un CSV a una SharePoint list, conservando Created/Modified si es posible, y registra errores en un CSV de salida.
```

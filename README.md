# 📄 Hoja de Vida - Oscar Miguel Toro Torres

Curriculum vitae profesional e interactivo creado con HTML5, CSS3 y JavaScript. Diseño moderno optimizado tanto para visualización web como para impresión.

---

## ✨ Características Principales

### 🌐 Diseño Web Moderno
- **Layout profesional de 2 columnas** con sidebar informativa
- **Gradientes y colores modernos** con paleta profesional
- **Animaciones suaves** al hacer scroll (Intersection Observer)
- **Efectos hover interactivos** en tarjetas de experiencia
- **Barra de progreso de scroll** en tiempo real
- **Tipografía elegante** con Google Fonts (Inter)
- **Iconos FontAwesome 6.0** para mejor UX visual
- **100% Responsive** - optimizado para todos los dispositivos

### 🖨️ Optimización para Impresión
- **Layout compacto de 2 columnas** para papel carta/letter
- **Colores preservados** con print-color-adjust para impresión profesional
- **Tipografía optimizada** (9-13pt) para máxima legibilidad
- **Márgenes ajustados** (0.4in x 0.5in) aprovecha todo el espacio
- **URLs visibles** - muestra enlaces después del texto
- **Sin elementos web** - oculta botones, footers y animaciones
- **Prevención de cortes** - evita dividir secciones entre páginas
- **Alto contraste** - funciona perfecto en blanco y negro

---

## 🎨 Paleta de Colores

```css
Primary:    #2c3e50  /* Azul Oscuro Profesional */
Secondary:  #3498db  /* Azul Cielo */
Accent:     #e74c3c  /* Rojo Coral */
Background: Linear gradient (#667eea → #764ba2)
Text Dark:  #2c3e50
Text Light: #7f8c8d
```

---

## 🚀 Tecnologías Utilizadas

- **HTML5** - Semántico y accesible (ARIA)
- **CSS3** - Variables CSS, Grid Layout, Flexbox
- **JavaScript (ES6+)** - Vanilla JS puro
- **Google Fonts** - Inter
- **Font Awesome 6.0** - Iconografía profesional
- **Intersection Observer API** - Animaciones eficientes

---

## 📁 Estructura del Proyecto

```
cv-html-project/
├── index.html          # Estructura HTML del CV
├── README.md           # Esta documentación
├── css/
│   └── styles.css      # Estilos principales + media queries de impresión
└── js/
    └── main.js         # Interacciones, animaciones y funcionalidad
```

---

## 🎯 Cómo Usar

### Visualizar en el Navegador
1. Abre el archivo `index.html` en tu navegador favorito
2. Disfruta del diseño interactivo y responsive

### Imprimir o Guardar como PDF
1. Haz clic en el botón **"IMPRIMIR CV"** o presiona:
   - Windows/Linux: `Ctrl + P`
   - Mac: `Cmd + P`
2. Configuración recomendada:
   - **Tamaño:** Carta/Letter
   - **Márgenes:** Predeterminados
   - **Gráficos de fondo:** ✅ Activado (preserva colores)
   - **Escala:** 100%
3. Guarda como PDF o imprime directamente

---

## 💡 Características Destacadas

### Para Web
✨ Animaciones suaves con fade-in al scroll  
🎯 Efectos hover en tarjetas y enlaces  
📱 Responsive design (mobile-first)  
🎨 Gradientes y sombras modernas  
⚡ Barra de progreso de lectura superior  
🔗 Smooth scroll entre secciones  
♿ Accesible con ARIA labels  

### Para Impresión
📄 Optimizado para papel carta  
🎨 Colores profesionales preservados  
📐 Layout compacto de 2 columnas  
🔍 Tipografía clara (Calibri/Arial fallback)  
🚫 Oculta elementos innecesarios  
✂️ Evita cortes de página problemáticos  
🔗 Enlaces visibles con URL completa  

---

## 📱 Responsive Breakpoints

| Dispositivo | Ancho | Layout |
|------------|-------|---------|
| **Desktop** | > 1024px | 2 columnas completas (350px + 1fr) |
| **Tablet** | 768px - 1024px | 2 columnas adaptadas (320px + 1fr) |
| **Mobile** | < 768px | 1 columna apilada verticalmente |

---

## 🛠️ Personalización

### Cambiar Colores
Edita las variables CSS en `styles.css` (líneas 2-14):
```css
:root {
    --primary-color: #2c3e50;    /* Tu color principal */
    --secondary-color: #3498db;  /* Tu color secundario */
    --accent-color: #e74c3c;     /* Tu color de acento */
    /* ... más variables */
}
```

### Modificar Contenido
Edita el texto directamente en `index.html`

### Cambiar Tipografía
1. Visita [Google Fonts](https://fonts.google.com/)
2. Selecciona tu fuente favorita
3. Reemplaza el link en `<head>` de `index.html`
4. Actualiza `font-family` en `styles.css`

### Ajustar Animaciones
Modifica las transiciones en `styles.css`:
```css
--transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

---

## 🔧 Mejoras Implementadas

✅ Sistema de variables CSS para fácil personalización  
✅ Animaciones con Intersection Observer (performance)  
✅ Barra de progreso de scroll dinámica  
✅ Layout Grid moderno y flexible  
✅ Media queries optimizadas para impresión  
✅ Tipografía profesional con Google Fonts  
✅ Efectos hover y transiciones suaves  
✅ Accesibilidad mejorada (ARIA, semántica)  
✅ Smooth scroll nativo  
✅ Optimización de impresión con print-color-adjust  

---

## 📄 Licencia

Este proyecto es de uso personal para **Oscar Miguel Toro Torres**.

---

## 👤 Contacto

**Oscar Miguel Toro Torres**  
📧 Email: omigueltoro@gmail.com  
📱 Teléfono: +57 313 496 5969  
📍 Ubicación: Villavicencio - META, Colombia

---

**Última actualización:** Noviembre 2025  
**Versión:** 2.0 - Diseño Mejorado
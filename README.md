# Portfolio Martina Blanco 🎨

Landing page moderna y profesional para Martina Blanco, técnica en administración con orientación en marketing estratégico.

## 🚀 Tecnologías

- **React 19** con TypeScript
- **Vite** para desarrollo y build
- **TailwindCSS** para estilos
- **Framer Motion** para animaciones
- **Google Fonts** (IBM Plex Sans, Work Sans)

## 🎨 Paleta de Colores

- **Pink**: `#ff99c8` - Elementos principales
- **Yellow**: `#fcf6bd` - Fondos secundarios
- **Mint**: `#d0f4de` - Información
- **Sky**: `#a9def9` - Contacto
- **Purple**: `#e4c1f9` - Elementos destacados

## 📱 Características

- ✨ **Diseño Responsive** - Optimizado para todos los dispositivos
- 🎭 **Animaciones Suaves** - Efectos de scroll y hover
- 🎯 **Stacked Cards** - Efecto visual de tarjetas apiladas
- 🚀 **Performance Optimizada** - Carga rápida y eficiente
- 📱 **Mobile First** - Experiencia móvil prioritaria

## 🏗️ Estructura del Proyecto

```
src/
├── components/
│   ├── Header.tsx      # Navegación principal
│   ├── Hero.tsx        # Sección principal
│   ├── AboutMe.tsx     # Sobre mí
│   ├── Servicios.tsx   # Servicios ofrecidos
│   ├── Contacto.tsx    # Información de contacto
│   └── Footer.tsx      # Pie de página
├── hooks/
│   └── useScrollAnimation.ts  # Hooks personalizados
├── styles/
│   └── index.css       # Estilos globales
└── App.tsx             # Componente principal
```

## 🚀 Instalación y Desarrollo

```bash
# Clonar el repositorio
git clone https://github.com/Ariel200609/PortfolioMartinaBlaco.git
cd PortfolioMartinaBlaco

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 🌐 Despliegue en GitHub Pages

### Opción 1: Automático (Recomendado)

1. **Crear repositorio en GitHub** (si no existe)
2. **Subir el código**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```
3. **Configurar GitHub Pages**:
   - Ir a Settings > Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages`
   - Folder: `/ (root)`

### Opción 2: Manual

```bash
# Build del proyecto
npm run build

# Crear branch gh-pages
git checkout -b gh-pages

# Agregar archivos de build
git add dist -f
git commit -m "Deploy to GitHub Pages"

# Subir a GitHub
git push origin gh-pages

# Volver a main
git checkout main
```

## 📋 Secciones de la Landing Page

1. **Hero Section** - Presentación principal con avatar y CTAs
2. **Sobre Mí** - Información profesional y formación
3. **Servicios** - 5 servicios principales con cards animadas
4. **Contacto** - Formulario y información de contacto

## 📞 Información de Contacto

- **WhatsApp**: 2923 564152
- **Email**: martiblanco05@gmail.com
- **Instagram**: @martublenco25

## 🎯 Servicios Ofrecidos

- 📱 Promoción en Redes Sociales
- 🎯 Diseño de Estrategias de Comunicación
- 📊 Análisis e Investigación de Mercado
- 📈 Optimización de Campañas Publicitarias
- 🧠 Branding Personal y Profesional

## 📄 Licencia

ISC License

---

**Desarrollado con ❤️ para Martina Blanco** 
# 🚀 Portafolio Personal - Jordan Talahua

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.3.4-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

### 🌟 Portafolio profesional de desarrollador Full Stack

*Diseño moderno, responsivo y multiidioma*

[🔗 Ver Demo](#) • [📧 Contacto](mailto:jordantalahua@gmail.com) • [💼 LinkedIn](https://www.linkedin.com/in/jordan-talahua-ba2b28208/)

</div>

---

## 📋 ¿Qué es este proyecto?

Este es mi **portafolio personal** como desarrollador Full Stack. Es una aplicación web moderna que muestra mis habilidades, proyectos y experiencia de manera elegante y profesional.

### 🎯 Objetivo
Crear una presencia digital impactante que demuestre mis capacidades técnicas y creativas, facilitando a reclutadores y clientes conocer mi trabajo.

---

## ✨ Características Principales

### 🖥️ **Diseño de 3 Zonas**
- **📋 Sidebar Izquierdo**: Información personal, contacto y redes sociales
- **🧭 Navbar Superior**: Navegación entre secciones y controles
- **📱 Área Central**: Contenido principal con scroll independiente

### 🌍 **Multiidioma**
- 🇪🇸 **Español** (por defecto)
- 🇺🇸 **Inglés**
- Cambio instantáneo entre idiomas
- Persistencia de preferencia del usuario

### 🌓 **Modo Claro/Oscuro**
- 🌞 **Tema Claro**: Diseño limpio y profesional
- 🌙 **Tema Oscuro**: Perfecto para desarrolladores
- Cambio suave con animaciones
- Guardado automático de preferencia

### 📱 **Totalmente Responsivo**
- **📱 Móvil**: Diseño mobile-first con drawer lateral
- **💻 Tablet**: Adaptación fluida del layout
- **🖥️ Desktop**: Experiencia completa de 3 zonas
- **📐 4K/Ultrawide**: Sidebar adaptativo (15% del ancho)

---

## 🛠️ Tecnologías Utilizadas

### **Frontend Core**
- **⚛️ React 18** - Librería principal de UI
- **🔄 Next.js 15.3.4** - Framework React con SSR y optimizaciones
- **📘 TypeScript** - Tipado estático para mayor robustez
- **🎨 Tailwind CSS** - Framework de estilos utility-first

### **Animaciones y UX**
- **🎭 Framer Motion** - Animaciones fluidas y profesionales
- **🎯 Lucide React** - Iconos modernos y consistentes

### **3D y Interactividad**
- **🌐 Three.js** - Gráficos 3D para elementos llamativos
- **⚡ React Three Fiber** - Integración de Three.js con React
- **🎪 React Three Drei** - Helpers y componentes 3D pre-construidos

### **Gestión de Estado**
- **🎛️ Custom Hooks** - Manejo de idiomas y navegación
- **💾 Local Storage** - Persistencia de preferencias
- **🔄 Context API** - Estado global reactivo

### **Desarrollo y Calidad**
- **📏 ESLint** - Linting y mejores prácticas
- **🔧 PostCSS** - Procesamiento avanzado de CSS
- **📦 npm** - Gestión de dependencias

---

## 🎨 Sistema de Diseño

### **🎨 Paleta de Colores**

#### Tema Claro 🌞
- **Fondo**: `bg-gray-50` - Gris suave y profesional
- **Tarjetas**: `bg-white` - Blanco puro para contraste
- **Texto Principal**: `text-gray-900` - Negro intenso
- **Texto Secundario**: `text-gray-600` - Gris medio
- **Acentos**: `pink-500`, `purple-500`, `blue-500`

#### Tema Oscuro 🌙
- **Fondo**: `bg-gray-900` - Negro profundo
- **Tarjetas**: `bg-gray-800` - Gris oscuro elegante
- **Texto Principal**: `text-white` - Blanco puro
- **Texto Secundario**: `text-gray-300` - Gris claro
- **Acentos**: Mismos colores con mayor saturación

### **🎭 Animaciones**
- **Entrada**: Fade-in con desplazamiento suave
- **Hover**: Transformaciones sutiles y cambios de color
- **Transiciones**: 300ms cubic-bezier para naturalidad
- **Stagger**: Animaciones escalonadas en listas

---

## 📁 Estructura del Proyecto

```
portafolio/
├── 📄 src/
│   ├── 🎨 app/                    # App Router de Next.js
│   │   ├── layout.tsx            # Layout principal con 3 zonas
│   │   ├── page.tsx              # Página principal con router
│   │   └── globals.css           # Estilos globales
│   ├── 🧩 components/
│   │   ├── layout/               # Componentes de layout
│   │   │   ├── Navbar.tsx        # Navegación y controles
│   │   │   └── Sidebar.tsx       # Información personal
│   │   ├── sections/             # Secciones del portafolio
│   │   │   └── Home.tsx          # Página principal
│   │   └── ui/                   # Componentes reutilizables
│   ├── 🎣 hooks/                  # Custom hooks
│   │   ├── useLanguage.ts        # Gestión de idiomas
│   │   └── useNavigation.ts      # Navegación entre secciones
│   └── 📚 lib/
│       ├── translations/         # Archivos de traducciones
│       │   ├── es.json          # Traducciones en español
│       │   └── en.json          # Traducciones en inglés
│       └── utils.ts             # Funciones auxiliares
├── 📦 package.json               # Dependencias del proyecto
├── ⚙️ next.config.ts             # Configuración de Next.js
├── 🎨 tailwind.config.ts         # Configuración de Tailwind
└── 📖 README.md                  # Este archivo
```

---

## 🌐 Sistema de Traducciones

### **📝 Estructura JSON**
Las traducciones están organizadas por secciones para fácil mantenimiento:

```json
{
  "navigation": { ... },    // Menú de navegación
  "sidebar": { ... },       // Información personal
  "home": { ... },          // Página principal
  "placeholders": { ... }   // Secciones en desarrollo
}
```

### **🔄 Funcionamiento**
- **Función `t(key)`**: Busca traducciones usando notación de punto
- **Ejemplo**: `t("home.greeting")` → "¡Hola! Soy" / "Hello! I'm"
- **Fallback**: Si no encuentra la clave, muestra la clave misma
- **Persistencia**: El idioma se guarda en localStorage

---

## 🚀 Instalación y Uso

### **📋 Requisitos Previos**
- **Node.js 18+** ([Descargar aquí](https://nodejs.org/))
- **npm** (incluido con Node.js)

### **⚡ Instalación Rápida**

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/portafolio.git

# 2. Entrar al directorio
cd portafolio

# 3. Instalar dependencias
npm install

# 4. Ejecutar en modo desarrollo
npm run dev
```

### **🔗 URLs**
- **Desarrollo**: http://localhost:3000
- **Producción**: [Tu dominio aquí]

### **📦 Comandos Disponibles**

```bash
npm run dev      # 🔥 Servidor de desarrollo
npm run build    # 🏗️ Construcción para producción
npm start        # 🚀 Servidor de producción
npm run lint     # 🔍 Verificar código
```

---

## 📱 Características Técnicas

### **🎯 Performance**
- ✅ **Server-Side Rendering** (SSR)
- ✅ **Optimización automática de imágenes**
- ✅ **Code splitting** automático
- ✅ **Lazy loading** de componentes
- ✅ **Compresión y minificación**

### **♿ Accesibilidad**
- ✅ **Navegación por teclado**
- ✅ **Contraste de colores WCAG**
- ✅ **Lectores de pantalla**
- ✅ **Semántica HTML correcta**

### **🔍 SEO**
- ✅ **Meta tags optimizados**
- ✅ **Estructura semántica**
- ✅ **URLs amigables**
- ✅ **Sitemap automático**

---

## 🎮 Cómo Usar la Aplicación

### **🖥️ En Desktop**
1. **👀 Explora** la información en el sidebar izquierdo
2. **🧭 Navega** usando los botones del navbar superior
3. **🌓 Cambia** el tema con el botón luna/sol
4. **🌍 Selecciona** idioma con el dropdown de banderas

### **📱 En Móvil**
1. **☰ Toca** el primer hamburger para ver mi información
2. **🧭 Usa** el segundo hamburger para navegar
3. **🌓 Cambia** tema y idioma desde la barra superior

---

## 👨‍💻 Sobre el Desarrollador

### **Jordan Talahua**
🚀 **Desarrollador Full Stack** especializado en React y tecnologías modernas

- 📍 **Ubicación**: Quito, Ecuador
- 📅 **Edad**: 21 años (12 de Enero, 2003)
- 💼 **Experiencia**: 3+ años en desarrollo web
- 🎯 **Enfoque**: Crear experiencias digitales excepcionales

### **🛠️ Especialidades**
- **Frontend**: React, Next.js, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express, Python, PostgreSQL
- **Móvil**: React Native, Flutter
- **Diseño**: UI/UX, Figma, Adobe XD

---

## 📞 Contacto

<div align="center">

### 🤝 ¡Conectemos!

[![Email](https://img.shields.io/badge/Email-jordantalahua@gmail.com-red?style=for-the-badge&logo=gmail&logoColor=white)](mailto:jordantalahua@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-jordan--talahua-blue?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jordan-talahua-ba2b28208/)
[![GitHub](https://img.shields.io/badge/GitHub-jordantalahua123-black?style=for-the-badge&logo=github&logoColor=white)](https://github.com/jordantalahua123)
[![Phone](https://img.shields.io/badge/Teléfono-+593_969183227-green?style=for-the-badge&logo=whatsapp&logoColor=white)](tel:+593969183227)

</div>

---

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT** - mira el archivo [LICENSE](LICENSE) para más detalles.

---

<div align="center">

### ⭐ Si te gusta este proyecto, ¡dale una estrella!

**Hecho con ❤️ por Jordan Talahua**

*Convirtiendo ideas en experiencias digitales extraordinarias*

</div>

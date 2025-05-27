# CalFin Empresarial 📊

**Calculadora Empresarial Inteligente** que te ayuda a descubrir tus costos, ingresos y utilidades sin necesidad de conocimientos avanzados en cálculo.

![Next.js](https://img.shields.io/badge/Next.js-13+-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-18+-blue?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3+-38B2AC?style=flat-square&logo=tailwind-css)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=flat-square&logo=javascript)

## 🚀 Características Principales

### 📈 Módulos de Análisis
- **Costos Totales**: Calcula automáticamente costos fijos, variables y marginales
- **Ingresos Acumulados**: Proyecta ingresos futuros basándose en datos históricos
- **Proyección de Utilidades**: Analiza rentabilidad y optimiza estrategias empresariales

### 🎯 Ventajas Clave
- ✅ **Sin Matemáticas Complejas**: No necesitas conocimientos de cálculo
- ⚡ **Resultados Rápidos**: Análisis completos en minutos
- 📊 **Visualización Clara**: Gráficos y reportes intuitivos
- 🔧 **Adaptable**: Funciona con cualquier tipo de negocio

## 🛠️ Tecnologías Utilizadas

- **Frontend**: Next.js 13+ con App Router
- **Styling**: Tailwind CSS
- **Interactividad**: React Hooks (useState)
- **Iconos**: SVG integrados
- **Responsive**: Diseño mobile-first

## 📋 Requisitos Previos

- Node.js 18.0 o superior
- npm o yarn
- Navegador web moderno

## ⚙️ Instalación

1. **Clona el repositorio**
```bash
git clone https://github.com/tu-usuario/calfin-empresarial.git
cd calfin-empresarial/calfin
```

2. **Instala las dependencias**
```bash
npm install
# o
yarn install
```

3. **Ejecuta el servidor de desarrollo**
```bash
npm run dev
# o
yarn dev
```

4. **Abre tu navegador**
```
http://localhost:3000
```

## 📁 Estructura del Proyecto

```
calfin/
├── src/
│   └── app/
│       ├── components/
│       │   ├── Footer.js          # Footer con enlaces y redes sociales
│       │   └── Navbar.js          # Navegación principal
│       ├── costos/
│       │   └── page.js            # Módulo de Costos Totales
│       ├── ingresos/
│       │   └── page.js            # Módulo de Ingresos Acumulados
│       ├── utilidades/
│       │   └── page.js            # Módulo de Proyección de Utilidades
│       ├── acerca-de/
│       │   └── page.js            # Información del equipo
│       ├── contacto/
│       │   └── page.js            # Formulario de contacto
│       ├── como-funciona/
│       │   └── page.js            # Explicación detallada
│       ├── preguntas-frecuentes/
│       │   └── page.js            # FAQ interactivo
│       ├── terminos/
│       │   └── page.js            # Términos de uso
│       ├── privacidad/
│       │   └── page.js            # Política de privacidad
│       ├── layout.js              # Layout principal
│       ├── page.js                # Página de inicio
│       └── globals.css            # Estilos globales
├── public/                        # Archivos estáticos
├── package.json
└── README.md
```

## 🎮 Cómo Usar CalFin

### 1. Módulo de Costos Totales
1. Ingresa tus costos fijos mensuales (alquiler, salarios, etc.)
2. Proporciona el costo variable por unidad
3. Indica las unidades producidas por mes
4. Selecciona tu tipo de negocio
5. Obtén tu función de costos optimizada y análisis

### 2. Módulo de Ingresos Acumulados
1. Ingresa el precio promedio por unidad
2. Proporciona las unidades vendidas mensualmente
3. Incluye datos históricos de ventas
4. Selecciona la estacionalidad de tu negocio
5. Define tu expectativa de crecimiento
6. Recibe proyecciones a 1, 3 y 6 meses

### 3. Módulo de Proyección de Utilidades
1. Ingresa tus ingresos mensuales promedio
2. Proporciona costos fijos y variables
3. Indica el porcentaje de impuestos
4. Define tu meta de utilidad mensual
5. Selecciona el período de análisis
6. Obtén análisis completo de rentabilidad

## 📊 Funcionalidades Detalladas

### Análisis de Costos
- Cálculo automático de función de costos
- Determinación de costo marginal
- Visualización de costos vs unidades
- Recomendaciones de optimización

### Proyección de Ingresos
- Análisis de tendencias históricas
- Ajustes por estacionalidad
- Proyecciones con crecimiento compuesto
- Ingresos acumulados proyectados

### Análisis de Utilidades
- Utilidad bruta y neta
- Margen de rentabilidad
- Punto de equilibrio
- ROI proyectado
- Comparación con metas

## 🎨 Diseño y UX

- **Tema**: Diseño limpio y moderno
- **Colores**: 
  - Azul (utilidades): `#2563eb`
  - Verde (costos): `#16a34a`
  - Amarillo (ingresos): `#ca8a04`
- **Tipografía**: Inter
- **Responsive**: Optimizado para móviles y desktop
- **Accesibilidad**: Contraste adecuado y navegación por teclado

## 📱 Páginas Incluidas

### Páginas Principales
- **Inicio**: Presentación de módulos y características
- **Costos**: Calculadora de costos totales
- **Ingresos**: Proyección de ingresos acumulados
- **Utilidades**: Análisis de rentabilidad

### Páginas Informativas
- **Acerca de Nosotros**: Equipo, misión y valores
- **Cómo Funciona**: Explicación detallada del proceso
- **Preguntas Frecuentes**: FAQ interactivo con acordeón
- **Contacto**: Formulario y información de contacto

### Páginas Legales
- **Términos de Uso**: Condiciones de servicio
- **Política de Privacidad**: Protección de datos

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Producción
npm run build        # Construye la aplicación
npm run start        # Inicia servidor de producción

# Linting
npm run lint         # Ejecuta ESLint
```

## 🌟 Características Técnicas

### Componentes Interactivos
- Formularios con validación
- Navegación paso a paso
- Acordeones para FAQ
- Estados dinámicos con React Hooks

### Optimizaciones
- Componentes reutilizables
- Carga optimizada de imágenes
- CSS modular con Tailwind
- SEO-friendly con Next.js

### Responsive Design
- Mobile-first approach
- Breakpoints: sm, md, lg, xl
- Grids adaptativos
- Navegación móvil optimizada

## 🚀 Despliegue

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Sube la carpeta 'out' a Netlify
```

### Servidor Propio
```bash
npm run build
npm run start
```

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Roadmap

### Próximas Funcionalidades
- [ ] Gráficos interactivos con Chart.js
- [ ] Exportación de reportes en PDF
- [ ] Guardado de análisis en localStorage
- [ ] Comparación de escenarios
- [ ] Integración con APIs de datos financieros
- [ ] Dashboard personalizable
- [ ] Análisis de sensibilidad
- [ ] Modo oscuro

### Mejoras Técnicas
- [ ] Tests unitarios con Jest
- [ ] Integración continua
- [ ] PWA (Progressive Web App)
- [ ] Optimización de performance
- [ ] Internacionalización (i18n)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Jesus Murcia**
- GitHub: [@tu-usuario](https://github.com/tu-usuario)
- Email: contacto@calfin.com
- LinkedIn: [Tu LinkedIn](https://linkedin.com/in/tu-perfil)

## 🙏 Agradecimientos

- Equipo de Next.js por el excelente framework
- Tailwind CSS por el sistema de diseño
- Comunidad de desarrolladores por el feedback

## 📞 Soporte

¿Necesitas ayuda? Contáctanos:

- **Email**: soporte@calfin.com
- **Teléfono**: +1 (555) 123-4567
- **Horario**: Lun-Vie 9:00 AM - 6:00 PM

---

⭐ **¡Si te gusta CalFin Empresarial, no olvides darle una estrella al repositorio!** ⭐

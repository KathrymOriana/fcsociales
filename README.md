# Facultad de Ciencias Sociales — Licenciatura en Innovación Social y Transformación Digital

Sitio web informativo de 3 páginas (Inicio, Plan de Estudios, Admisión), desarrollado con enfoque **Mobile First**, HTML5 semántico, Bootstrap 5.3, Bootstrap Icons, AOS y JavaScript vanilla.

## Estructura del proyecto

    ├── index.html            → Página de inicio
    ├── plan-estudios.html    → Malla curricular, metodología y competencias
    ├── admision.html         → Proceso de admisión, requisitos, costos y formulario
    ├── css/
    │   └── styles.css        → Estilos propios (variables, componentes, responsive)
    ├── js/
    │   └── script.js         → Interacciones: navbar, validaciones, contador, toasts
    └── assets/
        └── images/           → Imagenes usadas en el proyecto
        └── svg/              → Svg usados
        └── videos/           → Videos institucionales

## Cómo abrir el sitio

No requiere instalación ni build. Basta con abrir `index.html` en el navegador
(recomendado servirlo con un servidor local simple para que funcionen todas
las rutas relativas correctamente, por ejemplo la extensión
"Live Server" de VS Code).

## Tecnologías utilizadas (todas por CDN, sin instalación)

- HTML5 semántico (header, nav, main, section, article, aside, footer)
- CSS3 con variables personalizadas (custom properties)
- Bootstrap 5.3.3 (grid, componentes: navbar, offcanvas, accordion, carousel,
  modal, toast, tooltips de validación)
- Bootstrap Icons 1.11.3
- AOS 2.3.4 (animaciones on-scroll: fade-up, fade-left, zoom-in)
- Google Fonts — Poppins
- Google Maps (iframe embebido, sin API key)
- JavaScript vanilla (sin frameworks)

## Accesibilidad implementada

- HTML semántico con landmarks (`header`, `nav`, `main`, `footer`, `section`)
- Atributos `aria-label`, `aria-current`, `aria-expanded`, `aria-controls`,
  `aria-required`, `aria-live` en componentes interactivos
- Texto alternativo (`alt`) en todas las imágenes; decorativas con `alt=""`
- Foco visible (`:focus-visible`) en todos los elementos interactivos
- Enlace "Saltar al contenido principal" (skip link)
- Contraste de color AA en textos sobre fondos claros y oscuros
- Formularios con `<label>` asociado a cada campo y mensajes de error
  descriptivos (`.invalid-feedback`)
- Botones y áreas táctiles de mínimo 44–48px de alto
- Respeta `prefers-reduced-motion`

## Usabilidad implementada

- Menú fijo (sticky header) con sombra dinámica al hacer scroll
- Scroll suave (`scroll-behavior: smooth`) con offset por header fijo
- Botón "Volver arriba" presente en las 3 páginas
- Formularios con validación nativa + Bootstrap (`novalidate` + JS) y
  retroalimentación visual inmediata
- Confirmación de envío mediante Toast accesible (`role="status"`, `aria-live`)
- Breadcrumb en páginas internas
- Menú lateral (offcanvas) en móvil, con enlaces grandes y foco atrapado
- Jerarquía visual clara y espaciado consistente entre secciones

## Autor

Kathrym Paredes Calisaya

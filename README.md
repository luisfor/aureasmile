# 🦷 Aurea Smile — Rediseño Web Premium & Ecosistema de Conversión Digital

> **Resumen del Proyecto (350 caracteres):**  
> `Rediseño web premium para Aurea Smile (Dra. Jailin Rada). Odontología digital 3D y experiencia multisensorial en el Caribe. Incluye landing page bilingüe (ES/EN), chatbot clínico con IA, WhatsApp directo, carrusel de reseñas, embudo /calificanos para Google Maps, blog especializado, auditoría técnica global y propuesta comercial de alta conversión.`

[![Estado](https://img.shields.io/badge/Estado-Listo%20para%20Producci%C3%B3n-success?style=flat-square)](https://aureasmile.com)
[![Arquitectura](https://img.shields.io/badge/Arquitectura-HTML5%20%7C%20CSS3%20%7C%20Vanilla%20JS-blue?style=flat-square)](#)
[![Velocidad](https://img.shields.io/badge/Velocidad-Carga%20%3C%200.8s-orange?style=flat-square)](#)
[![Bilingüe](https://img.shields.io/badge/Idiomas-Espa%C3%B1ol%20%7C%20Ingl%C3%A9s-informational?style=flat-square)](#)

---

## 🌟 Descripción General

Este repositorio contiene la reconstrucción integral, auditoría digital y plataforma de captación de pacientes diseñada para **Aurea Smile – Odontología Especializada**, clínica boutique dirigida por la **Dra. Jailin Rada** en el Caribe Colombiano.

La plataforma eleva la identidad visual de la clínica al nivel de un servicio médico de lujo (**$30,000 Look**), integrando tecnología de odontología digital 3D con un enfoque multisensorial y relajante. Está optimizada tanto para pacientes locales como para **turismo dental internacional**.

---

## 🚀 Módulos y Características Clave

### 1. 🎨 Diseño de Vanguardia y Paleta de Marca Fiel
- **Paleta Oficial:** Naranja cálido (`#f76a0c`), Azul caribeño (`#87c3da`), Azul navy clínico (`#091b33`) y fondos blanco/marfil de lujo (`#ffffff` / `#f8fafc`).
- **Tipografía Editorial:** Google Fonts `Montserrat` (encabezados de alta autoridad) y `Poppins` (cuerpo altamente legible).
- **Regla High-Ticket:** Cero texto justificado (`text-align: left`) para evitar ríos blancos y maximizar legibilidad en smartphones.

### 2. 🌍 Motor Bilingüe Instantáneo (ES / EN)
- Selector de idioma dinámico en el encabezado `[ ES | EN ]` (con Español como idioma predeterminado).
- Alterna instantáneamente todo el contenido, testimonios, llamadas a la acción y diálogos del chatbot sin recargas de página toscas.

### 3. 🤖 Asistente Virtual Inteligente con Guardarraíles de Clínica
- Chatbot flotante interactivo desarrollado para cualificar prospectos en tiempo real 24/7.
- **Guardarraíles estrictos:** Se niega amablemente a responder temas ajenos a la odontología, nunca entrega cotizaciones fijas automáticas (educa sobre la necesidad del diagnóstico 3D previo) y canaliza cada consulta hacia el agendamiento formal con la Dra. Jailin Rada.

### 4. 📱 Botón Flotante Persistente de WhatsApp
- Enlace directo a la línea clínica oficial (`+57 316 147 3568`) con mensaje inicial predeterminado para solicitar cita.
- Visible tanto en el primer pantallazo como durante todo el scroll en móvil y escritorio.

### 5. ⭐ Slider de Reseñas Estilo Google Maps
- Carrusel de opiniones con valoración de 5.0 estrellas, avatares y citas reales.
- Sistema de botones de navegación exteriores (que nunca tapan el texto de las tarjetas), puntos de navegación y autoplay inteligente que se pausa al interactuar.

### 6. 🛡️ Embudo Oculto de Reputación (`calificanos.html`)
- Página post-servicio para enviar por WhatsApp o correo a los pacientes atendidos.
- **Lógica de protección de marca:**
  - **4 y 5 estrellas:** Redirección inmediata a Google Maps para captar reseñas públicas 5★.
  - **1 a 3 estrellas:** Abre un formulario privado de sugerencias conectado a FormSubmit/correo directo, permitiendo resolver cualquier queja de forma privada sin exponerla en público.

### 7. 📰 Blog Especializado en Odontología Digital
- Estructura con 3 artículos clave sobre sus tratamientos reales:
  1. *Escaneo Intraoral 3D vs. Pastas Incómodas.*
  2. *Diseño de Sonrisa Natural vs. Dientes Artificialmente Blancos.*
  3. *Coronas Metal-Free de Disilicato de Litio y Zirconio.*

---

## 📁 Estructura del Proyecto

```text
├── assets/                       # Logotipos, retratos médicos y texturas optimizadas
│   ├── logo.png                  # Logo oficial de Aurea Smile
│   ├── dra-jailin.jpg            # Retrato oficial de la Dra. Jailin Rada
│   ├── dra-jailin-2.jpeg         # Foto clínica en consulta
│   ├── hero-dental.png           # Imagen de impacto de estética dental
│   └── fondo-2.png               # Textura de fondo suave
├── index.html                    # Landing page principal completa y bilingüe
├── calificanos.html              # Embudo oculto de reputación y reseñas Google Maps
├── branding.json                 # Extracción estructurada de colores, tipografías y copy
├── diagnostico.md                # Auditoría técnica detallada con los 5 fallos resueltos
├── propuesta_comercial.html      # Propuesta ejecutiva formal (A4 lista para exportar a PDF)
├── web-lista.zip                 # Paquete comprimido autónomo listo para despliegue
└── README.md                     # Documentación oficial del repositorio
```

---

## 💻 Vista Previa y Ejecución Local

Para previsualizar la página en cualquier entorno local sin necesidad de instalar dependencias pesadas:

```bash
# Iniciar servidor local en el puerto 8777
python3 -m http.server 8777
```

Abre en tu navegador:
- **Landing Principal:** `http://localhost:8777/`
- **Embudo de Reseñas:** `http://localhost:8777/calificanos.html`
- **Propuesta Comercial en PDF:** Abre `propuesta_comercial.html` en el navegador y presiona `Cmd + P` o `Ctrl + P` (Guardar como PDF).

---

## ☁️ Opciones de Despliegue

1. **Cloudflare Pages (Recomendado):**
   - Conecta este repositorio en el panel de Cloudflare Pages o despliega la carpeta con `npx wrangler pages deploy .`.
   - Ofrece CDN global gratuito, certificados SSL automáticos y velocidad de carga sub-segundo.

2. **Hostinger / Servidor cPanel:**
   - Sube directamente el archivo `web-lista.zip` al `public_html` del administrador de archivos y descomprímelo.

3. **Netlify Drop:**
   - Arrastra la carpeta del proyecto a [app.netlify.com/drop](https://app.netlify.com/drop) para obtener una URL pública inmediata.

---

## 👨‍💻 Créditos y Autoría

- **Cliente:** Dra. Jailin Rada — *Aurea Smile Odontología Especializada*
- **Desarrollo y Dirección Estratégica:** Luis Canedo — **Canedo Web Studio**
- **Contacto:** `+57 316 043 7913` | `lcanedo12@gmail.com`

# 🌿 Vivero Flora — Solución del ejercicio integrador (Semanas 1 y 2)

Mini tienda hecha con **React + Vite + React Router**. Es la resolución de referencia del ejercicio integrador: mismo tipo de pantallas que el proyecto real de la mueblería (Home con hero y destacados, Productos con buscador, Carrito con estado compartido, Contacto con formulario), a menor escala.

## Cómo correrla

```bash
npm install
npm run dev
```

Abrí **http://localhost:5173**.

## Estructura

```
src/
├── main.jsx              ← monta <App /> envuelto en <BrowserRouter>
├── App.jsx                ← estado del carrito + <Routes>
├── index.css
├── datos/
│   └── productos.js       ← array de productos (hardcodeado)
├── components/            ← se usan en más de una pantalla
│   ├── NavBar.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   └── ProductoCard.jsx
└── paginas/                ← una por cada ruta
    ├── Home.jsx
    ├── Productos.jsx
    ├── Carrito.jsx
    └── Contacto.jsx
```

Todo el código tiene comentarios "🧑‍🏫 Nota de profe" explicando las decisiones (por qué el carrito vive en `App`, por qué se usa `key`, por qué no se muta el estado, etc.). Para la explicación paso a paso completa, ver `guion-resolucion-ejercicio-integrador.pdf`.

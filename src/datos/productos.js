// 🧑‍🏫 Nota de profe: en un proyecto real estos datos vendrían de una API
// (¡eso es lo próximo que van a aprender: useEffect + fetch!). Por ahora,
// para practicar props, estado y listas, alcanza con un array fijo como este.
//
// Cada producto tiene "destacado: true" en los que van a aparecer en el Home.
// Fijate que es UN SOLO array: tanto el Home como la página de Productos lo
// usan (uno filtrado, otro completo). Así evitamos escribir los datos dos veces.

const PRODUCTOS = [
  { id: 1, nombre: 'Maceta de barro', precio: 4500, emoji: '🪴', destacado: true },
  { id: 2, nombre: 'Regadera de metal', precio: 6200, emoji: '🚿', destacado: true },
  { id: 3, nombre: 'Tijera de podar', precio: 3800, emoji: '✂️', destacado: true },
  { id: 4, nombre: 'Bolsa de sustrato', precio: 2900, emoji: '🛍️', destacado: false },
  { id: 5, nombre: 'Guantes de jardín', precio: 3200, emoji: '🧤', destacado: false },
  { id: 6, nombre: 'Cactus chico', precio: 2500, emoji: '🌵', destacado: false },
  { id: 7, nombre: 'Helecho', precio: 5100, emoji: '🌿', destacado: false },
  { id: 8, nombre: 'Abono orgánico', precio: 1800, emoji: '🌱', destacado: false },
]

export default PRODUCTOS

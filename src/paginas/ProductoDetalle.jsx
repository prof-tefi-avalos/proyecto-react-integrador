import { useParams } from 'react-router-dom'
import PRODUCTOS from '../datos/productos.js'

// esta pantalla muestra, a propósito, solo el nombre del
// producto. La idea no es que quede "completa" (podrían agregarle precio,
// imagen grande, descripción...), sino mostrar con el mínimo código posible
// cómo funciona la navegación CON PARÁMETROS, que es lo nuevo acá.
//
// useParams() es otro Hook de React Router: lee los "pedacitos" de la URL que
// marcamos con ":" en la ruta (en App.jsx: path="/productos/:id") y nos los
// devuelve en un objeto. Si la URL es /productos/3, entonces params.id es la
// STRING "3" (ojo: siempre llega como texto, nunca como número).
function ProductoDetalle() {
  const params = useParams()
console.log(params)

  // producto.id es un número (lo definimos así en productos.js), pero id acá
  // es un string. Por eso comparamos convirtiendo producto.id a string con
  // String(...), en lugar de comparar número contra string directamente.
  const producto = PRODUCTOS.find((p) => String(p.id) === params.id)

  if (!producto) {
    return <p>No encontramos ese producto.</p>
  }

  return <h2 className="titulo-seccion">{producto.nombre}</h2>
}

export default ProductoDetalle

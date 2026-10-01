import { Link } from 'react-router-dom'

// Este es el componente que más veces se repite en toda la
// app (en el Home aparece 3 veces, en Productos aparece una vez por cada
// producto filtrado). Por eso vale la pena que sea chico y que reciba todo por
// props: no sabe si lo están usando en el Home o en Productos, y no le importa.
//
// "onAgregar" es una función que le pasa el padre. ProductoCard no toca el
// carrito directamente (no sabe ni que existe un carrito): solo avisa "me
// apretaron" llamando a la función que le dieron. Quien realmente actualiza el
// estado del carrito es App, que es quien lo creó. Esto es lo mismo que vimos
// con props.children y las props de tipo función: el hijo avisa, el padre decide.
//
// El nombre y la imagen van ADENTRO de un <Link to={`/productos/${id}`}>: es
// una ruta con parámetro, el mismo /productos/1, /productos/2, etc. según el
// id de cada producto. Ojo con un detalle de HTML: un <button> no puede ir
// adentro de un <Link> (serían dos elementos "clickeables" anidados), por eso
// "Agregar al carrito" queda afuera del Link, como hermano, no como hijo.
function ProductoCard({ producto, onAgregar }) {
  const { id, nombre, precio, emoji } = producto

  return (
    <article className="tarjeta-producto">
      <Link to={`/productos/${id}`} className="tarjeta-producto-link">
        <span className="emoji">{emoji}</span>
        <h3>{nombre}</h3>
        <p className="precio">${precio.toLocaleString('es-AR')}</p>
      </Link>
      <button onClick={() => onAgregar(producto)}>Agregar al carrito</button>
    </article>
  )
}

export default ProductoCard

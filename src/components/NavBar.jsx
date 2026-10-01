import { NavLink } from 'react-router-dom'

// Usamos <NavLink> en vez de <Link>. Hace exactamente lo
// mismo (navega sin recargar la página), pero además le agrega automáticamente
// una clase "activo" al link de la página en la que estás parado. Así podemos
// pintar en qué sección estamos, sin tener que calcularlo nosotros a mano.
//
// El NavBar es un componente COMÚN a las 4 pantallas: se define una sola vez
// acá y se usa siempre igual desde App.jsx. Por eso recibe "cantidadCarrito"
// por props: no tiene su propio estado del carrito, solo muestra el número
// que le pasan desde afuera.
function NavBar({ cantidadCarrito }) {
  const claseLink = ({ isActive }) => (isActive ? 'activo' : '')

  return (
    <header className="navbar">
      <span className="marca">🌿 Vivero Flora</span>
      <nav>
        <NavLink to="/" className={claseLink} end>
          Inicio
        </NavLink>
        <NavLink to="/productos" className={claseLink}>
          Productos
        </NavLink>
        <NavLink to="/carrito" className={claseLink}>
          Carrito
          {cantidadCarrito > 0 && <span className="badge">{cantidadCarrito}</span>}
        </NavLink>
        <NavLink to="/contacto" className={claseLink}>
          Contacto
        </NavLink>
      </nav>
    </header>
  )
}

export default NavBar

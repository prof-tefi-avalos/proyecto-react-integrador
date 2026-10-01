import { useState } from 'react'
import ProductoCard from '../components/ProductoCard.jsx'
import PRODUCTOS from '../datos/productos.js'

// acá vive el buscador. El estado "busqueda" es propio de
// esta página: al Carrito o al Contacto no les importa qué estás escribiendo
// acá, así que no hace falta subirlo a App. Regla general: el estado vive en
// el componente más chico posible que lo necesite, y solo se "sube" (se lifted)
// cuando dos o más componentes distintos lo necesitan compartir, como pasa con
// el carrito.
function Productos({ onAgregar }) {
  const [busqueda, setBusqueda] = useState('')

  // Dato derivado: NO es estado, se recalcula en cada render a partir de
  // PRODUCTOS y busqueda. Si lo guardáramos en un useState aparte, tendríamos
  // que acordarnos de actualizarlo cada vez que cambia busqueda: total innecesario.
  const visibles = PRODUCTOS.filter((p) =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase()),
  )

  return (
    <>
      <h2 className="titulo-seccion">Todos los productos</h2>

      <input
        className="buscador"
        type="text"
        placeholder="Buscar por nombre…"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      {visibles.length === 0 && (
        <p className="sin-resultados">No encontramos productos que coincidan con "{busqueda}".</p>
      )}

      <div className="grilla-productos">
        {visibles.map((producto) => (
          <ProductoCard key={producto.id} producto={producto} onAgregar={onAgregar} />
        ))}
      </div>
    </>
  )
}

export default Productos

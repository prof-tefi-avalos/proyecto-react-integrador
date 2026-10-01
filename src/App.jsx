import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'
import Home from './paginas/Home.jsx'
import Productos from './paginas/Productos.jsx'
import ProductoDetalle from './paginas/ProductoDetalle.jsx'
import Carrito from './paginas/Carrito.jsx'
import Contacto from './paginas/Contacto.jsx'
import { useState } from 'react'

// App es el "padre común" de toda la app, así que es acá
// donde vive el estado del carrito. Tanto Home como Productos necesitan poder
// AGREGAR productos, y Carrito necesita poder LEERLOS y QUITARLOS: como más de
// una pantalla necesita el mismo dato, ese dato se levanta hasta el ancestro
// común de todas ellas. Cada página recibe por props solo lo que le hace
// falta: a Home y Productos les pasamos agregarAlCarrito; a Carrito, el
// array carrito y quitarDelCarrito.
function App() {
  const [carrito, setCarrito] = useState([])

  function agregarAlCarrito(producto) {
    setCarrito((prev) => {
      const yaEsta = prev.find((item) => item.id === producto.id)

      if (yaEsta) {
        // Ya estaba en el carrito: creamos un array NUEVO donde ese ítem
        // tiene la cantidad aumentada en 1. Nunca mutamos "prev" ni el
        // objeto del ítem directamente (nada de yaEsta.cantidad++).
        return prev.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item,
        )
      }

      // No estaba: lo agregamos al final con cantidad 1, usando spread para
      // copiar los productos que ya había en el carrito.
      return [...prev, { ...producto, cantidad: 1 }]
    })
  }

  function quitarDelCarrito(id) {
    setCarrito((prev) => prev.filter((item) => item.id !== id))
  }

  // Dato derivado, no estado: se recalcula solo a partir de "carrito" cada vez
  // que se agrega o se quita algo. Lo usa el NavBar para mostrar el numerito.
  const cantidadCarrito = carrito.reduce((total, item) => total + item.cantidad, 0)

  return (
    <div className="app">
      <NavBar cantidadCarrito={cantidadCarrito} />

      <main className="contenido">
        {/* Routes mira la URL actual y decide qué página mostrar. Fuera de la
            URL que corresponda, el resto del árbol (NavBar y Footer) siempre
            se ve igual: por eso quedan afuera de <Routes>, no adentro. */}
        <Routes>
          <Route path="/" element={<Home onAgregar={agregarAlCarrito} />} />
          <Route path="/productos" element={<Productos onAgregar={agregarAlCarrito} />} />
          {/* ":id" es un parámetro de ruta: matchea /productos/1, /productos/2,
              etc. ProductoDetalle lee ese valor con useParams(). */}
          <Route path="/productos/:pepe" element={<ProductoDetalle />} />
          <Route path="/carrito" element={<Carrito carrito={carrito} onQuitar={quitarDelCarrito} />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App

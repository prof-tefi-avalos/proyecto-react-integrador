import { useNavigate } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import ProductoCard from '../components/ProductoCard.jsx'
import PRODUCTOS from '../datos/productos.js'

// useNavigate es un Hook de React Router (una función que
// empieza con "use", como useState) que nos deja cambiar de pantalla desde
// código, no solo con un <Link> que el usuario clickea. Lo usamos para que el
// botón del Hero mande directamente a la página de Productos.
function Home({ onAgregar }) {
  const irA = useNavigate()

  // Del array completo de productos, nos quedamos solo con los marcados como
  // destacados. .filter() no modifica PRODUCTOS: devuelve un array nuevo, más
  // corto. Es la misma idea que .map(), otro método de array que no muta.
  const destacados = PRODUCTOS.filter((p) => p.destacado)

  return (
    <>
      <Hero
        titulo="Todo para tu jardín, en un solo lugar"
        texto="Plantas, macetas y herramientas para que tu casa se llene de verde."
        textoBoton="Ver todos los productos"
        onClickBoton={() => irA('/productos')}
      />

      <h2 className="titulo-seccion">Destacados</h2>
      <div className="grilla-productos">
        {destacados.map((producto) => (
          // key={producto.id}: cada tarjeta necesita una key única y estable
          // para que React pueda identificarla en la lista. Usamos el id del
          // producto, nunca el índice, porque si el orden cambiara el índice
          // ya no identificaría siempre al mismo producto.
          <ProductoCard key={producto.id} producto={producto} onAgregar={onAgregar} />
        ))}
      </div>
    </>
  )
}

export default Home

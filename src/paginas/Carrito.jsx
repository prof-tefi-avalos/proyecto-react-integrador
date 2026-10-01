// Esta página NO tiene su propio estado del carrito.
// Recibe "carrito" y "onQuitar" por props, igual que ProductoCard recibía
// "producto" y "onAgregar". El estado real vive en App, un nivel más arriba,
// porque tanto Home/Productos (que agregan) como Carrito (que lee y quita)
// necesitan acceder a los mismos datos. A esto se lo llama "levantar el
// estado" (lifting state up): cuando dos componentes hermanos necesitan
// compartir un dato, ese dato se guarda en el padre común más cercano.
function Carrito({ carrito, onQuitar }) {
  if (carrito.length === 0) {
    return (
      <>
        <h2 className="titulo-seccion">Tu carrito</h2>
        <p className="vacio">Todavía no agregaste ningún producto. 🌱</p>
      </>
    )
  }

  // reduce() recorre el array y lo "reduce" a un solo valor: acá, la suma de
  // precio * cantidad de cada línea. Es otro método de array, como map y
  // filter, que tampoco modifica el original.
  const total = carrito.reduce((acumulado, item) => acumulado + item.precio * item.cantidad, 0)

  return (
    <>
      <h2 className="titulo-seccion">Tu carrito</h2>

      {carrito.map((item) => (
        <div className="item-carrito" key={item.id}>
          <div className="info">
            <span className="emoji">{item.emoji}</span>
            <div>
              <p>
                <strong>{item.nombre}</strong>
              </p>
              <p>
                {item.cantidad} × ${item.precio.toLocaleString('es-AR')}
              </p>
            </div>
          </div>
          <button className="quitar" onClick={() => onQuitar(item.id)}>
            Quitar
          </button>
        </div>
      ))}

      <div className="total-carrito">
        <span>Total</span>
        <span>${total.toLocaleString('es-AR')}</span>
      </div>
    </>
  )
}

export default Carrito

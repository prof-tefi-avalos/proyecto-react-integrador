// El Footer no recibe props ni tiene estado. No todos los
// componentes necesitan datos de afuera: a veces alcanza con que devuelvan
// siempre el mismo JSX. Igual sigue siendo un componente, porque lo reutilizamos
// en las 4 pantallas escribiéndolo una sola vez acá.
function Footer() {
  return (
    <footer className="footer">
      <p>🌿 Vivero Flora · Hecho con React para el ejercicio integrador · {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer

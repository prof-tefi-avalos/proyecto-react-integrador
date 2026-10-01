// El Hero recibe TODO por props (título, texto y qué hacer
// al hacer click en el botón). Así queda genérico: si mañana lo quisiéramos
// usar en otra página con otro mensaje, no hay que tocar este archivo, alcanza
// con pasarle props distintas desde donde lo usemos.
function Hero({ titulo, texto, textoBoton, onClickBoton }) {
  return (
    <section className="hero">
      <h1>{titulo}</h1>
      <p>{texto}</p>
      <button className="boton-cta" onClick={onClickBoton}>
        {textoBoton}
      </button>
    </section>
  )
}

export default Hero

import { useState } from 'react'

const FORM_VACIO = { nombre: '', email: '', mensaje: '' }

// Expresión regular simple para "algo@algo.algo". No cubre el 100% de los
// casos raros de un email válido (ningún regex chico lo hace), pero alcanza
// para detectar los errores típicos: que falte la @ o el dominio.
const EMAIL_VALIDO = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Un solo estado-objeto con los tres campos, y una sola
// función "cambiar" para los tres inputs. La clave dinámica [e.target.name]
// es la misma idea que vimos en la Semana 2: usamos el atributo "name" de
// cada input para saber qué parte del objeto actualizar, sin escribir tres
// funciones casi iguales.
//
// Esta versión valida de verdad, en React, no solo con el "required" de HTML.
// ¿Por qué no alcanza con "required" y type="email"? Porque son válidos, pero
// son silenciosos: no le mostramos nada al usuario sobre qué está mal, no
// podemos revisar reglas propias (por ejemplo, "el mensaje no puede tener
// menos de 10 caracteres") y, más importante para esta materia, no practican
// nada de lo que venimos viendo: estado, condicionales y objetos.
function Contacto() {
  const [form, setForm] = useState(FORM_VACIO)
  const [errores, setErrores] = useState({})
  const [enviado, setEnviado] = useState(false)

  function cambiar(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // Devuelve un objeto con un mensaje de error por cada campo que esté mal.
  // Si un campo está bien, directamente no aparece como propiedad del objeto.
  function validar(datos) {
    const nuevosErrores = {}

    if (!datos.nombre.trim()) {
      nuevosErrores.nombre = 'Ingresá tu nombre.'
    }

    if (!datos.email.trim()) {
      nuevosErrores.email = 'Ingresá tu email.'
    } else if (!EMAIL_VALIDO.test(datos.email)) {
      nuevosErrores.email = 'Ese email no parece válido (ej: nombre@mail.com).'
    }

    if (datos.mensaje.trim().length < 10) {
      nuevosErrores.mensaje = 'Contanos un poco más: al menos 10 caracteres.'
    }

    return nuevosErrores
  }

  function enviar(e) {
    // Sin esta línea, el navegador recargaría la página entera al enviar el
    // formulario (su comportamiento por defecto) y perderíamos todo el estado.
    e.preventDefault()

    const erroresEncontrados = validar(form)
    setErrores(erroresEncontrados)

    // Object.keys(objeto).length cuenta cuántas propiedades tiene el objeto.
    // Si no encontramos ningún error, ese objeto queda vacío ({}) y length es 0.
    const esValido = Object.keys(erroresEncontrados).length === 0
    if (!esValido) {
      setEnviado(false) // por si habían mandado uno válido antes y ahora corrigieron mal
      return // cortamos acá: no mandamos nada mientras haya errores
    }

    setEnviado(true)
    setForm(FORM_VACIO) // limpiamos el formulario para la próxima consulta
    setErrores({})
  }

  return (
    <>
      <h2 className="titulo-seccion">Contacto</h2>

      {/* noValidate le dice al navegador "no valides vos con las reglas de
          HTML (required, type=email)": la validación la hacemos nosotros,
          a mano, para poder mostrar mensajes propios y explicar cómo funciona. */}
      <form className="form-contacto" onSubmit={enviar} noValidate>
        <div>
          <label htmlFor="nombre">Nombre</label>
          <input id="nombre" name="nombre" value={form.nombre} onChange={cambiar} />
          {errores.nombre && <p className="error-campo">{errores.nombre}</p>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" value={form.email} onChange={cambiar} />
          {errores.email && <p className="error-campo">{errores.email}</p>}
        </div>
        <div>
          <label htmlFor="mensaje">Mensaje</label>
          <textarea id="mensaje" name="mensaje" rows={4} value={form.mensaje} onChange={cambiar} />
          {errores.mensaje && <p className="error-campo">{errores.mensaje}</p>}
        </div>
        <button type="submit">Enviar consulta</button>
      </form>

      {enviado && (
        <p className="confirmacion">¡Gracias! Recibimos tu mensaje y te vamos a contestar a la brevedad.</p>
      )}
    </>
  )
}

export default Contacto

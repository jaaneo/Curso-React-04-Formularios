import { React, useState } from 'react'

export const FormularioComponent = () => {

  // eslint-disable-next-line no-unused-vars
  const [usuario, setUsuario] = useState({});

  const conseguirDatosFormulario = e => {
    e.preventDefault();

    let datos = e.target;
    let usuario = {
      nombre: datos.nombre.value,
      apellido: datos.apellido.value,
      genero: datos.genero.value,
      bio: datos.bio.value,
    };

    console.log(usuario);
    setUsuario(usuario);

  }
  return (
    <div>

      <h1>Formulario Component</h1>
      
      {usuario.bio && usuario.bio.length >= 1 && 
        (
          <div className="info_usuario label-gray">
          {usuario.nombre} {usuario.apellido} es un {usuario.genero} y su biografía es {usuario.bio}
          </div>
        )
      }
      <form onSubmit={conseguirDatosFormulario}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre" />
        <input
          type="text"
          name="apellido"
          placeholder="Apellido" />
        <select name="genero">
          <option value="hombre">Hombre</option>
          <option value="mujer">Mujer</option>
        </select>
        <textarea
          name="bio"
          placeholder="Biografía" />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

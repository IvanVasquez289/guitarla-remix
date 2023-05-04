import { Link } from "@remix-run/react";

const Guitarra = ({guitarra}) => {
  const {nombre, descripcion, imagen, url, precio} = guitarra
    console.log(url)
//   console.log(imagen.data.attributes.formats.medium.url)
  const imagenUrl = imagen.data.attributes.formats.medium.url;

  return (
    <div className='guitarra'>
        <img src={imagenUrl} alt= {`imagen guitarra ${nombre}`} />
        <div className="contenido">
            <h3>{nombre}</h3>
            <p className="descripcion"> {descripcion} </p>
            <p className="precio"> ${precio} </p>
            <Link className="enlace" to={`/guitarras/${url}`}>Ver producto</Link>
        </div>

    </div>
  )
}

export default Guitarra
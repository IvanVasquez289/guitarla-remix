import { useLoaderData } from "@remix-run/react"
import { getGuitarra } from "~/models/guitarras.server"
import styles from '~/styles/tienda.css'

export async function loader({params}){
  // params es lo que tenemos en la url
  const {guitarraUrl} = params
  const guitarra = await getGuitarra(guitarraUrl)
  console.log(guitarra)

  if(guitarra.data.length === 0){
    throw new Response ('',{
      status: 404,
      statusText: 'Guitarra no encontrada'
    })
  }

  return guitarra
}

export function meta({data}){
  if(!data){
    return[
      {
        title: 'GuitarLA - Guitarra no encontrada',
        description: `Guitarras, venta de guitarras, guitarra no encontrada`
      }
    ]
  }
  return[
    {
      title: `GuitarLA - ${data.data[0].attributes.nombre}`,
      description: `Guitarras, venta de guitarras, ${data.data[0].attributes.nombre}`
    }
  ]
}

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}


const Guitarra = () => {
  const guitarra = useLoaderData()
  const {nombre, imagen, descripcion, precio} = guitarra.data[0].attributes;
  // console.log(imagen.data.attributes.url)

  return (
    <main className="contenedor guitarra">
      <img className="imagen" src={imagen.data.attributes.url} alt={`imagen de la guitarra ${nombre}`}/>

      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="texto">{descripcion}</p>
        <p className="precio">${precio}</p>

        <form className="formulario">
          <label htmlFor="cantidad">Cantidad</label>
          <select id="cantidad">
            <option value="">--Seleccione--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <input type="submit" value="Agregar al carrito" />
        </form>

      </div>

     
    </main>
  )
}

export default Guitarra
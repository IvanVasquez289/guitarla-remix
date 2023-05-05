import { useLoaderData } from "@remix-run/react"
import { getGuitarra } from "~/models/guitarras.server"
import styles from '~/styles/tienda.css'

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export async function loader({params}){
  // params es lo que tenemos en la url
  const {guitarraUrl} = params
  const guitarra = await getGuitarra(guitarraUrl)
  return guitarra
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
      </div>
    </main>
  )
}

export default Guitarra
import { useLoaderData } from "@remix-run/react"
import { getGuitarras } from "~/models/guitarras.server"
import ListadoGuitarras from '../components/listado-guitarras'
import style from '~/styles/tienda.css'

export async function loader(){
  const guitarras = await getGuitarras()
  return guitarras.data
}

export function meta(){
  return[
    {
      title: 'GuitarLA - Tienda',
      description: 'Nuestra coleccion de guitarras'
    }
  ]
}

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: style,
    }
  ]
}

const Tienda = () => {
  const guitarras = useLoaderData()

  return (
    <main className="contenedor">
      <ListadoGuitarras guitarras={guitarras}/>
    </main>
  )
}

export default Tienda
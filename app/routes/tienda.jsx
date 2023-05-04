import { useLoaderData } from "@remix-run/react"
import { getGuitarras } from "~/models/guitarras.server"
import Guitarra from "~/components/guitarra"
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
      <h2 className="heading">Tienda</h2>

      {guitarras?.length && (
        <div className="guitarras-grid">
          {guitarras.map( guitarra => (
            <Guitarra
              key={guitarra?.id}
              guitarra = {guitarra?.attributes}
            />
          ) )}
        </div>
      )}
    </main>
  )
}

export default Tienda
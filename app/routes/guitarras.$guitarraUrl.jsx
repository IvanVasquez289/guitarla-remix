import { useLoaderData } from "@remix-run/react"
import { getGuitarra } from "~/models/guitarras.server"


export async function loader({params}){
  // params es lo que tenemos en la url
  const {guitarraUrl} = params
  
  // { guitarraUrl: 'cobain' }  esto es un ejemplo de lo que se muestra en consola del lado del server
  console.log(params)

  const guitarra = await getGuitarra(guitarraUrl)
  // console.log(guitarra.data[0].attributes.nombre)

  return guitarra
}

const Guitarra = () => {
  const guitarra = useLoaderData()
  return (
    <div>Guitarra dinamico</div>
  )
}

export default Guitarra
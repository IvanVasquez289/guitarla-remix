import { useLoaderData } from '@remix-run/react'
import {getGuitarras } from '~/models/guitarras.server.js'
import {getPots } from '~/models/posts.server.js'
import ListadoGuitarras from '../components/listado-guitarras'
import style from '~/styles/tienda.css'

export function meta(){

}

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: style,
    }
  ]
}

export async function loader(){

  const [guitarras , posts] = await Promise.all([
    getGuitarras(),
    getPots()
  ])

  console.log(guitarras)
  console.log(posts)
  return {
    guitarras: guitarras.data,
    posts: posts.data
  }
}


const Index = () => {

  const {guitarras, posts} = useLoaderData()

 
  return (
    <main className='contenedor'>
      <ListadoGuitarras guitarras={guitarras}/>
    </main>
  )
}

export default Index
import { useLoaderData } from '@remix-run/react'
import {getGuitarras } from '~/models/guitarras.server.js'
import {getPots } from '~/models/posts.server.js'
import ListadoGuitarras from '../components/listado-guitarras'
import ListadoPosts from "../components/listado-posts"
import styleGuitarras from '~/styles/tienda.css'
import stylesPosts from '~/styles/blog.css'

export function meta(){

}

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: styleGuitarras,
    },
    {
      rel: 'stylesheet',
      href: stylesPosts,
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
    <>
      <main className='contenedor'>
        <ListadoGuitarras guitarras={guitarras}/>
      </main>
      <section className='contenedor'>
        <ListadoPosts posts={posts}/>
      </section>
    </>
  )
}

export default Index
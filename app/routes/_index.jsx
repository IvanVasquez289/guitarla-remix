import { useLoaderData } from '@remix-run/react'
import {getGuitarras } from '~/models/guitarras.server.js'
import {getPosts } from '~/models/posts.server.js'
import {getCurso } from '~/models/curso.server.js'
import ListadoGuitarras from '../components/listado-guitarras'
import ListadoPosts from "../components/listado-posts"
import styleGuitarras from '~/styles/tienda.css'
import stylesPosts from '~/styles/blog.css'
import stylesCurso from '~/styles/curso.css'
import Curso from '../components/curso'

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
    },
    {
      rel: 'stylesheet',
      href: stylesCurso,
    }
  ]
}

export async function loader(){

  const [guitarras , posts, curso] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso()
  ])

  // console.log(guitarras)
  // console.log(posts)
  console.log(curso)
  return {
    guitarras: guitarras.data,
    posts: posts.data,
    curso: curso.data
  }
}


const Index = () => {

  const {guitarras, posts, curso} = useLoaderData()

 
  return (
    <>
      <main className='contenedor'>
        <ListadoGuitarras guitarras={guitarras}/>
      </main>

      <Curso curso={curso.attributes}/>

      <section className='contenedor'>
        <ListadoPosts posts={posts}/>
      </section>
    </>
  )
}

export default Index
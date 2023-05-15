import { useLoaderData, Link } from '@remix-run/react'
import {getGuitarrasIndex } from '~/models/guitarras.server.js'
import {getPostsIndex } from '~/models/posts.server.js'
import {getCurso } from '~/models/curso.server.js'
import ListadoGuitarras from '../components/listado-guitarras'
import ListadoPosts from "../components/listado-posts"
import styleGuitarras from '~/styles/tienda.css'
import stylesPosts from '~/styles/blog.css'
import stylesCurso from '~/styles/curso.css'
import Curso from '../components/curso'

export function meta(){
  return[
    {
      title: 'GuitarLA - Tienda',
      description: 'Nuestra coleccion de guitarras'
    },{ name: "viewport", content: "width=device-width,initial-scale=1" }

  ]
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
    getGuitarrasIndex(),
    getPostsIndex(),
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

      <Link to={"/guitarras"} className='contenedor info'>
        Ver todas las guitarras...
      </Link>

      <Curso curso={curso.attributes}/>

      <section className='contenedor'>
        <ListadoPosts posts={posts}/>
      </section>

      <Link to={"/blog"} className='contenedor info'>
        Ver todos los posts...
      </Link>
    </>
  )
}

export default Index
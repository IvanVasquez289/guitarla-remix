import { useLoaderData } from "@remix-run/react"
import { getPots } from "~/models/posts.server"
import ListadoPosts from "../components/listado-posts"
import styles from '~/styles/blog.css'

export function meta(){
  return[
    {
      title: 'GuitarLA - Nuestro blog',
      description: 'Blog de musica, venta de guitarras'
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

export async function loader(){
  const posts = await getPots()
  return posts.data
}

const Blog = () => {
  const posts = useLoaderData()
  // console.log(posts)
  return (
    <main className="contenedor">
      <ListadoPosts posts={posts}/>
    </main>
  )
}

export default Blog
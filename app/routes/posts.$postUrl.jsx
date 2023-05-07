import { useLoaderData } from "@remix-run/react";
import { getPost } from "~/models/posts.server";
import { formatearFecha } from "~/utils/helper";
import styles from '~/styles/blog.css'

export function meta({data}){
  // console.log(data.data[0].attributes.titulo)
  console.log(data)
  if(!data){
    return[
      {
        title: 'GuitarLA - Entrada no encontrada',
        description: `Guitarras, venta de guitarras, guitarra no encontrada`
      }
    ]
  }
  return[
    {
      title: `GuitarLA - ${data.data[0].attributes.titulo}`,
      description: `Guitarras, venta de guitarras, ${data.data[0].attributes.titulo}`
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

export async function loader({params}){
  const {postUrl} = params;
 
  const post = await getPost(postUrl)
  if(post.data.length ===0){
    throw new Response('',{
      status: 404,
      statusText: 'Entrada no encontrada'
    })
  }

  return post;
}

const Post = () => {
  const post = useLoaderData()
  const {contenido, imagen, titulo, publishedAt} = post?.data[0]?.attributes;
  return (
    // Article es para entradas de blog
    <article className="contenedor post mt-3">
        <img src={imagen.data.attributes.url} alt={`imagen post ${titulo}`} />
        <div className="contenido">
            <h3>{titulo}</h3>
            <p className="fecha">{formatearFecha(publishedAt)}</p>
            <p className='texto'>{contenido}</p>
        </div>
    </article>
  )
}

export default Post
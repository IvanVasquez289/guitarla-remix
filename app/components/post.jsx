import { Link } from "@remix-run/react";
const Post = ({post}) => {

  const {contenido, imagen, titulo, url, publishedAt} = post;

  console.log(post)
  return (
    <article className='post'>
        <img src={imagen.data.attributes.formats.small.url} alt={`imagen post ${titulo}`} />
        <div className="contenido">
            <h3>{titulo}</h3>
            <p className="fecha">{publishedAt}</p>
            <p className='resumen'>{contenido}</p>
            <Link className="enlace" to={`/posts/${url}`}>Leer post</Link>
        </div>
    </article>
  )
}

export default Post
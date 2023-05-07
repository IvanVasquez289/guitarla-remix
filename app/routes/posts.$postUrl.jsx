import { useLoaderData } from "@remix-run/react";
import { getPost } from "~/models/posts.server";

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
  const {contenido, imagen, titulo, publishedAt} = post.data[0].attributes;

  return (
    <div>Post</div>
  )
}

export default Post
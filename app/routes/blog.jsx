import { useLoaderData } from "@remix-run/react"
import { getPots } from "~/models/posts.server"
import Post from "~/components/post"

export async function loader(){
  const posts = await getPots()
  return posts.data
}

const Blog = () => {
  const posts = useLoaderData()
  // console.log(posts)
  return (
    <main className="contenedor">
      <h2 className="heading">Blog</h2>
      <div className="blog">
        {posts.map( post => (
          <Post
            key={post.id}
            post = {post.attributes}
          />
        ))}
      </div>
    </main>
  )
}

export default Blog
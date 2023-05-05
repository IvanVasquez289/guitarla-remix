
export async function loader({params}){
  const {guitarraUrl} = params
  
  // console.log(params)
  console.log(guitarraUrl)

  return{}
}

const Guitarra = () => {
  return (
    <div>Guitarra dinamico</div>
  )
}

export default Guitarra
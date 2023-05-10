import styles from '~/styles/carrito.css'

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export function meta(){
  return[
    {
      title: 'GuitarLA - Carrito',
      description: 'Venta de guitarras, carrito de compras'
    }
  ]
}

const Carrito = () => {
  return (
    <main className='contenedor'>
      <h1 className="heading">Carrito de compras</h1>

      <div className="contenido">
        <div>
          <h2 className='carrito'>Articulos</h2>
        </div>

        <aside className="resumen">
          <h3>Resumen total del pedido</h3>
          <p>Total a pagar: $</p>
        </aside>
      </div>
    </main>
  )
}

export default Carrito
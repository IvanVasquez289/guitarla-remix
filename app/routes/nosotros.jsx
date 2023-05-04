import imagen from '../../public/img/nosotros.jpg'
import style from  '~/styles/nosotros.css'

export function meta(){
  return [
    {
      title: 'GuitarLa - Nosotros',
      description: 'Venta de guitarras'
    }
  ]
}

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: style,
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}
const Nosotros = () => {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src={imagen} alt="imagen nosotros" />

        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum ultricies accumsan. Ut vel maximus neque, id eleifend arcu. Integer pharetra accumsan eleifend. Ut hendrerit tortor non ligula sodales vehicula. In facilisis dolor maximus leo vehicula pretium. Curabitur sit amet bibendum quam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum ultricies accumsan. Ut vel maximus neque, id eleifend arcu. Integer pharetra accumsan eleifend. Ut hendrerit tortor non ligula sodales vehicula. In facilisis dolor maximus leo vehicula pretium. Curabitur sit amet bibendum quam.
          </p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros
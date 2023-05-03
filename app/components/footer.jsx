import Navegacion from "./navegacion"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="contenedor contenido">
            <Navegacion/>

            <a className="copyright">Todos los derechos reservados {new Date().getFullYear()}</a>
        </div>
    </footer>
  )
}

export default Footer
import Navegacion from "./navegacion"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="contenedor contenido">
            <Navegacion/>
            
            <nav className=" nose">
            <p className="copyright">Todos los derechos reservados {new Date().getFullYear()} :)</p>
            <a className="copyright" href="https://github.com/IvanVasquez289">Ivan Vasquez</a>
            </nav>
        </div>
    </footer>
  )
}

export default Footer
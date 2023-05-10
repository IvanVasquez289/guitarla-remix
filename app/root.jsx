import { useState } from "react";
import { 
    Meta,
    Links,
    Outlet,
    Scripts,
    LiveReload,
    useRouteError,
    isRouteErrorResponse,
    Link
} from "@remix-run/react"
import style from '~/styles/index.css'
import Header from "~/components/header";
import Footer from "~/components/footer";

export function meta() {
    return [
      { charset: "utf-8" },
      { title: "GuitarLA - Remix" },
      { name: "viewport", content: "width=device-width,initial-scale=1" },
    ];
}

export function links(){
    return[
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossOrigin: 'true'
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap'
        },
        {
            rel: 'stylesheet',
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        },
        {
            rel: 'stylesheet',
            href: style
        }
    ]
}


export default function app(){
    const [carrito,setCarrito] = useState([])
    
    const agregarCarrito = guitarra => {
        console.log('agregando...')
        setCarrito([...carrito, guitarra])
    }

    return (
        <Document>
            <Outlet
                context={{
                    agregarCarrito
                }}
            />
        </Document>
    )
}

function Document ({children}){


    return(
        <html lang="es">
            <head>
                <Meta/>
                <Links/>
            </head>
            <body>
                <Header/>
                {children}

                <Footer/>
                {/* Carga las optimizaciones para evitar los flashazos con los enlaces del navbar */}
                {/* Live reload para que la pagina se recarge solita */}
                <Scripts/> 
                <LiveReload/>
            </body>
        </html>
    )
}


// MANEJO DE ERRORES 
export function ErrorBoundary(){
    const error = useRouteError()
    if(isRouteErrorResponse(error)){
        return(
            <Document>
                <p className="error"> {error.status} {error.statusText}  </p>
                <Link to='/' className="error-enlace">Tal vez quieras regresar a la pagina principal</Link>
            </Document>
        )
    }

    return(
        <Document>
            <p className="error"> {error.status} {error.statusText} </p>
            <Link to='/' className="error-enlace">Tal vez quieras regresar a la pagina principal jeje</Link>
        </Document>
    )

}


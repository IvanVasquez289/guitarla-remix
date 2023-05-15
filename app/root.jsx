import { useState, useEffect} from "react";
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
    const carritoLs = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('carrito')) || []
    const [carrito,setCarrito] = useState(carritoLs)

    useEffect(() => {
        if(typeof window !== 'undefines'){
            localStorage.setItem('carrito',JSON.stringify(carrito))
        }
    }, [carrito])
    
    
    const agregarCarrito = guitarra => {

        const guitarraExiste = carrito.some(guitarraState => guitarraState.id === guitarra.id)

        if(guitarraExiste){
            console.log('Ya existe')
            const guitarrasActualizado = carrito.map(guitarraState => {
                if(guitarraState.id === guitarra.id){
                    guitarraState.cantidad = guitarra.cantidad
                }
                return guitarraState
            }) 
            setCarrito(guitarrasActualizado)
        }else{
            // Nuevo registro
            console.log('Nuevo registro')
            setCarrito([...carrito, guitarra])
        }
    }


    const actualizarCantidad = guitarra => {
        const guitarrasActualizado = carrito.map(guitarraState => {
            if(guitarraState.id === guitarra.id){
                guitarraState.cantidad = guitarra.cantidad
            }
            return guitarraState
        })

        setCarrito(guitarrasActualizado)
    }

    const eliminarProducto = id => {
        const guitarrasActualizado = carrito.filter( producto => producto.id !== id)
        setCarrito(guitarrasActualizado)
    }

    return (
        <Document>
            <Outlet
                context={{
                    agregarCarrito,
                    carrito,
                    actualizarCantidad,
                    eliminarProducto
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


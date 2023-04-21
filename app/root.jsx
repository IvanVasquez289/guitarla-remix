import { Meta, Links } from "@remix-run/react"
import style from './styles/index.css'

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
    return (
        <Document>
            <h1>Hola mundo</h1>
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
                {children}
            </body>
        </html>
    )
}
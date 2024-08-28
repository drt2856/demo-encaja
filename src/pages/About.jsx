import { Link, NavLink } from "react-router-dom";
import { Header } from "./Header";

export function About() {

    return (
        <>
            <Header />

            <section className="p-3">
    <article>
        <h1>Sobre EnCaja demo 1.0</h1>
        <p>
            Encaja "demo" se presenta ante usted como una sencilla solución para los emprendedores que hacen su cierre de ventas
            de esta forma tan particular. De hecho, nació para ayudar a uno de estos emprendedores que es amigo.
            Funciona tanto para el empleado como para el empleador. Está presentado de una manera
            minimalista, imitando a una libreta de notas para una mayor comodidad.
        </p>
        <p>
            Esta web es una versión demo de EnCaja. Para saber más acerca de esto haga click <Link to={"/demo-encaja/help#pro"}>aquí</Link>. Manténgase en contacto para
            que no se pierda el lanzamiento de la versión PRO.
        </p>
    </article>
    <article>
        <h2>Contáctame</h2>
        <p>
            Así como realicé este sitio para dar solución a este pequeño problema, puedo ayudarte con los tuyos.
            Mi nombre es Daniel, soy desarrollador web y hago software a medida para ti. Puedes contactarme mediante:
        </p>
        <ul>
            <li>
                Email:  <a href="mailto:drt2856@gmail.com">
                    drt2856@gmail.com
                </a>
            </li>
            <li>
                WhatsApp: <a href="https://wa.me/qr/3QZ7NUMCZL7DD1" target="_blank" rel="noopener noreferrer">https://wa.me/qr/3QZ7NUMCZL7DD1</a>
            </li>
            <li>
                Mi perfil de  <a href="https://www.linkedin.com/in/daniel-rodriguez-torres-571424260/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </li>
            <li>
                Mi  <a href="http://" target="_blank" rel="noopener noreferrer">portfolio</a> por si quieres ver otros trabajos
            </li>
        </ul>
    </article>
</section>

        </>)
}
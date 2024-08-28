import { useEffect } from "react";
import { Header } from "./Header";
import { useLocation } from "react-router-dom";

export function Help() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);
    return (
        <>
            <section className="p-3">
                <h1>Ayuda</h1>
                <p>La app cuenta con 3 secciones principales: Productos, Cierre de Caja e Historial de cierres de caja</p>
                <article>
                    <h2>Productos</h2>
                    <p>En esta sección usted podrá crear los productos que tiene en su negocio. En nombre puede agregar el nombre
                        del producto y algunos detalles como unidades de medida "Frijol p/lb", "de 1Kg", etc. Debe agregar además
                        el precio de compra o producción de su producto y el precio de venta, así como la cantidad de ellos que
                        tenga disponibles a la venta. Cuando usted introduzca un precio de venta menor al precio de compra se le señalará
                        en color rojo el error.
                    </p>
                    <p>Usted podrá modificar los datos de los productos en cualquier momento con solo tocar alguno de los productos que
                        aparecen en la lista
                    </p>
                </article>
                <article>
                    <h2>Cierre de caja</h2>
                    <p>Aquí usted podrá hacer sus cierres de caja una o varias veces al día, donde se tomará la cantidad
                        de productos al principio y al cierre de caja para generar las estadísticas necesarias para realizar el cierre.
                        Igualmente cuando se cometa un error se le señalará en color rojo. Cuando esté listo y satisfecho con las
                        cuentas realizadas debe oprimir el botón de guardar cierre para actualizar la base de datos e introducir otros datos
                        importantes como el nombre del cajero de turno y algunas notas de cualquier suceso que ocurriera ese día.</p>
                    <p>Nota: La fecha por defecto es la de hoy, no tiene que modificarla si no lo desea</p>
                </article>
                <article>
                    <h2>Historial de cierres de caja</h2>
                    <p>En esta sección usted podrá visualizar y eliminar los cierres de caja realizados con sus datos.</p>
                </article>
                <article>
                    <h2>Datos y seguridad</h2>
                    <p>Sabemos que en algunas ocasiones usted como usuario tiene la necesidad de mostrarle los valores de venta a algún trabajador o cliente,
                        y por tanto en la sección de cierres de caja usted podrá elegir si quiere enseñar las ganancias y los precios de compra de los productos.
                    </p>
                    <p>
                        En ningún momento usted comparte sus datos con nosotros, todos sus datos son únicamente almacenados en el dispositivo con el cual usted
                        accede a nuestro sitio web. Por lo cual tiene completa privacidad y seguridad de sus datos.
                    </p>
                </article>

                <article id="pro">
                    <h2 className="text-danger">Importante</h2>
                    <p>La versión a la cual usted está accediendo es una versión demo de EnCaja, por lo cual cuenta con una serie
                        de desventajas con respecto a la versión PRO que en estos momentos se encuentra en desarrollo. En la versión
                        Pro usted podrá:
                    </p>
                    <ul style={{ listStyle: "inherit" }}>
                        <li>Acceder a sus datos desde cualquier dispositivo</li>
                        <li>No más promociones de terceros</li>
                        <li>Acceso a una gran cantidad de datos como ganancias y ventas mensuales, anuales, proyección y pronóstico
                            de ventas, etc.
                        </li>
                        <li>Solución del problema de refrescar la página que presentan algunos dispositivos en esta versión libre</li>
                        <li>Seguridad y respaldo de datos en la nube</li>
                        <li>Diseño moderno</li>
                        <li>Entre otras sorpresas que no serán reveladas para no ayudar a la competencia :)</li>
                    </ul>
                </article>


            </section>


        </>)
}
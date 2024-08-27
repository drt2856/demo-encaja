import { NavLink } from "react-router-dom"
import { useProduct } from "../hooks/useProduct"
import Product from "./Product"

export function Products() {

    const { products } = useProduct()

    return (
        <div>
            
            <ul className="navegation">
                    <li>
                        <NavLink to={"/demo-encaja/product"}>Productos</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/demo-encaja/product/balance/"}>Cierre de caja</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/demo-encaja/historical_balances"}>Historial de cierres de caja</NavLink>
                    </li>
                </ul>

            <ul class="notebook-list">
                {products.map(product => (
                    product.enabled === true && <li><Product key={product.id} prevProduct={product} /></li>
                ))}
            </ul>

            <NavLink
                to={"/demo-encaja/product/create/"}
                className="btn btn-primary redounder"
            >+</NavLink>


        </div>
    )
}
import { NavLink } from "react-router-dom"
import { useProduct } from "../hooks/useProduct"
import Product from "./Product"

export function Products() {

    const { products } = useProduct()

    return (
        <div>
            <ul className="notebook-list">
                {products.map(product => (
                    product.enabled === true && <li><Product key={product.id} prevProduct={product} /></li>
                ))}
            </ul>

            <NavLink
                to={"/product/create/"}
                className="btn btn-primary redounder"
            >+</NavLink>


        </div>
    )
}
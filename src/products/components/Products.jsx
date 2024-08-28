import { NavLink } from "react-router-dom"
import { useProduct } from "../hooks/useProduct"
import Product from "./Product"
import { Header } from "../../pages/Header"

export function Products() {

    const { products } = useProduct()

    return (
        <div>
            
            <Header/>

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
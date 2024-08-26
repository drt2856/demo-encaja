import { NavLink } from "react-router-dom"
import { useProduct } from "../hooks/useProduct"
import Product from "./Product"

export function Products() {

    const { products } = useProduct()
    
    return (
        <div>
            <div>
                <NavLink to={"/demo-encaja/product"}>Productos</NavLink>
                <NavLink to={"/demo-encaja/product/balance/"}>Cierre de caja</NavLink>
            </div>
            <div>
                {products.map(product => (
                    product.enabled===true&&<Product key={product.id} prevProduct={product} />
                ))}
            </div>


            <NavLink
                to={"/demo-encaja/product/create/"}
                className="btn btn-primary redounder"
            >+</NavLink>


        </div>
    )
}
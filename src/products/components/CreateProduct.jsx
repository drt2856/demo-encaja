import { useState } from "react";
import { useProduct } from "../hooks/useProduct";
import { useNavigate, useParams } from "react-router-dom";

export function CreateProduct() {



    const [product, setProduct] = useState({
        id: "",
        name: "",
        costPrice: "",
        salePrice: "",
        enabled: true,
        visible: true,
    })

    const { createProduct } = useProduct()

    const navigate = useNavigate()


    function handleChange(event) {


        setProduct((prevState) => ({
            ...prevState,
            [event.target.id]: event.target.value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault();
        createProduct(product)
        navigate("/demo-encaja/product/")
    }

    return (
        <div>
            <div className="" >
                <div>
                    <label htmlFor="tilte" className="col-12">Nombre del producto</label>
                    <input type="text" id="name" className="col-12" value={product.name} onChange={handleChange} />
                </div>
                <div >
                    <label htmlFor="costPrice" className="col-12">Precio de compra</label>
                    <input style={{backgroundColor:product.costPrice>=product.salePrice?"red":"white"}} type="number" id="costPrice" className="col-12" value={product.costPrice} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="salePrice" className="col-12">Precio de venta</label>
                    <input style={{backgroundColor:product.costPrice>=product.salePrice?"red":"white"}} type="number" id="salePrice" className="col-12" value={product.salePrice} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="firstCount" className="col-12">Cuantos hay en inventario</label>
                    <input type="number" id="firstCount" className="col-12" value={product.firstCount} onChange={handleChange} />
                </div>
                <div>
                    <button className="btn btn-secondary mx-3" onClick={() => navigate("/demo-encaja/product/")} >
                        <i className="material-symbols-outlined">
                            arrow_back
                        </i>
                    </button>
                    <button className="btn btn-primary" onClick={handleSubmit}> crear </button>
                </div>
            </div>
        </div>
    )

}
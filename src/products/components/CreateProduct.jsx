import { useState } from "react";
import { useProduct } from "../hooks/useProduct";
import { useNavigate, useParams } from "react-router-dom";

export function CreateProduct() {



    const [product, setProduct] = useState({
        id: "",
        name: "",
        costPrice: 0,
        salePrice: 0,
        enabled: true,
        visible: true,
        firstCount:0
    })

    const { createProduct } = useProduct()

    const navigate = useNavigate()


    function handleChange(event) {
        if(event.target.id==="costPrice"||event.target.id==="salePrice"||event.target.id==="firstCount"){
            if(event.target.value<0){
                return
            }
        }

        setProduct((prevState) => ({
            ...prevState,
            [event.target.id]: event.target.value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault();
        createProduct(product)
        navigate("/product/")
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }} >
            <div style={{ maxWidth: "500px" }} >
            <div>
                    <label htmlFor="tilte" className="col-12">Nombre del producto</label>
                    <input type="text" id="name" className="col-12" value={product.name} onChange={handleChange} />
                </div>
                <div >
                    <label htmlFor="costPrice" className="col-12">Precio de compra</label>
                    <input style={{backgroundColor:Number(product.costPrice)>=Number(product.salePrice)?"red":"#fdfd96"}} type="number" id="costPrice" className="col-12" value={product.costPrice} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="salePrice" className="col-12">Precio de venta</label>
                    <input style={{backgroundColor:Number(product.costPrice)>=Number(product.salePrice)?"red":"#fdfd96"}} type="number" id="salePrice" className="col-12" value={product.salePrice} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="firstCount" className="col-12">Cuantos hay en inventario</label>
                    <input type="number" min={0} id="firstCount" className="col-12" value={product.firstCount} onChange={handleChange} />
                </div>
                <div>
                    <button className="btn btn-secondary mx-3" onClick={() => navigate("/product/")} >
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
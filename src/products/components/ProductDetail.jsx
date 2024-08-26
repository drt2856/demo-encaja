import React, { useMemo, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProduct } from '../hooks/useProduct';
import DeleteProduct from './DeleteProduct';

export function ProductDetail() {
   
    const { editProduct, products } = useProduct();
    const { productId } = useParams();
    const navigate = useNavigate();

    const initialState = useMemo(() => {
        return products.find(product => product.id == productId);
    }, [products, productId]);

    const [showModal, setShowModal] = useState("none");
    const [product, setProduct] = useState(initialState);

    useEffect(() => {
        editProduct(product);
    }, [product]);

    const handleChange = (event) => {
        const { id, value } = event.target;
        setProduct(prevState => ({ ...prevState, [id]: value }));
    };

    return (
        <div>
            <div>
                
            <div>
                    <label htmlFor="tilte" className="col-12">Nombre del producto</label>
                    <input type="text" id="name"  className="col-12" value={product.name} onChange={handleChange} />
                </div>
                <div >
                    <label htmlFor="costPrice" className="col-12">Precio de compra</label>
                    <input style={{backgroundColor:product.costPrice>=product.salePrice?"red":"#fdfd96"}} type="number" id="costPrice" className="col-12" value={product.costPrice} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="salePrice" className="col-12">Precio de venta</label>
                    <input style={{backgroundColor:product.costPrice>=product.salePrice?"red":"#fdfd96"}} type="number" id="salePrice" className="col-12" value={product.salePrice} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="firstCount" className="col-12">Cuantos hay en inventario</label>
                    <input type="number" id="firstCount" className="col-12" value={product.firstCount} onChange={handleChange} />
                </div>
                <div>
                    <button className="btn btn-secondary mx-3" onClick={() => navigate("/demo-encaja/product/")} >
                        <i className="material-symbols-outlined">arrow_back</i>
                    </button>
                    <button className="btn btn-danger mx-3" onClick={() => setShowModal("DELETE")}>
                        <i className="material-symbols-outlined">delete</i>
                    </button>
                </div>
                {showModal === "DELETE" && <DeleteProduct setShowModal={setShowModal} productId={productId}  />}
            </div>
        </div>
    );
}

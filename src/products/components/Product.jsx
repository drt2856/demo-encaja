
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../hooks/useProduct";

export default function Product({ prevProduct }) {

    const navigate = useNavigate()
    const { editProduct } = useProduct()

    const [product, setProduct] = useState({ ...prevProduct });

    useEffect(() => {
        editProduct(product);
    }, [product]);

    const handleChange = (event) => {
        const { id, checked } = event.target;
        setProduct(prevState => ({ ...prevState, [id]: checked }));
    };

    return (<>
        <div className="row"  >
            
            <div className="col-11" onClick={() => navigate("/demo-encaja/product/"+product.id)}>
                <h3>{product?.name}.....${product?.salePrice}</h3>
            </div>
        </div>
    </>

    )
}
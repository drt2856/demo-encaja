
import { useProduct } from "../hooks/useProduct"
import { useNavigate } from "react-router-dom";

export default function DeleteProduct({ setShowModal, productId }) {

    const { deleteProduct } = useProduct()
    const navigate = useNavigate()

    function deleteG(event) {
        deleteProduct(productId)
        navigate("/product/")
    }


    return (    
        <div className="my-modal">
            <div className="my-modal-body" >
                Esta seguro que desea eliminar este producto
                <div className="push-bottom">
                    <button className="btn-secondary btn" onClick={() => setShowModal("none")}>
                        Cancelar
                    </button>
                    <button value="Eliminar" className="btn-danger btn" onClick={deleteG} >Eliminar</button>
                </div>
            </div>

        </div>
    )
}
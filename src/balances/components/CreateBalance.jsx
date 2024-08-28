import { useState } from "react";
import { useBalance } from "../hooks/useBalance";
import { useProduct } from "../../products/hooks/useProduct";
import { useNavigate } from "react-router-dom";

export function CreateBalance({ balances, setShowModal }) {

    const { createBalance } = useBalance()
    const {setProducts} = useProduct()
    const navigate = useNavigate()

    const [newBalance, setNewBalance] = useState({
        id: "",
        date: new Date(),
        cashier: "",
        notes: "",
        balances
    })

    function handleChange(event) {
        setNewBalance(prevState => ({
            ...prevState,
            [event.target.id]: event.target.value
        }))
    }

    const productsCopy = balances.map(balance => ({
        ...balance,
        firstCount:balance.secondCount
    }))

    function handleSubmit() {
        if(newBalance.cashier===""){
            alert("Introdusca el cajero del cierre de caja")
            return
        }


        createBalance(newBalance)
        setProducts(productsCopy)
        setShowModal("none")
        navigate("/historical_balances/")
        alert("Cierre de caja realizado con exito")
    }

    


    return (
        <div className="my-modal">
            <div className="my-modal-body">
                <div>
                    <label htmlFor="date" className="col-12">Fecha de cuadre</label>
                    <input type="date" id="date" className="col-12" value={newBalance.date} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="cashier" className="col-12">Cajero del cuadre</label>
                    <input type="text" id="cashier" className="col-12" value={newBalance.cashier} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="notes" className="col-12">Notas</label>
                    <textarea 
                    style={{ backgroundColor:"#fdfd96", width:"100%", minHeight: 100 }}
                     id="notes" className="col-12" value={newBalance.notes} onChange={handleChange} />
                </div>
                <small style={{fontSize:15}}>La fecha por defecto es la de hoy: no tiene que especificarla si lo deseea</small>
           
                <div>
                    <button className="btn btn-secondary mx-3" onClick={() => setShowModal("none")}>
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
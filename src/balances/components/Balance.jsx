import { useEffect } from "react";
import { useGain } from "../../hooks/useShowGain";
import { useBalance } from "../hooks/useBalance";
import { useState } from "react";


export default function Balance({ prevBalance }) {

    const { seeShow } = useGain();
    const { deleteBalance } = useBalance()
    const [statics, setStatics] = useState("")

    useEffect(()=>{
        setStatics(findStatics(prevBalance.balances))
    },[])

    function findStatics(balances) {
        const sta = { ventas: 0, ganancias: 0 }
        for (let index = 0; index < balances.length; index++) {
            const aux = balances[index]
            sta.ventas = sta.ventas + ((aux.firstCount - aux.secondCount) * aux.salePrice)
            sta.ganancias = sta.ganancias + ((aux.firstCount - aux.secondCount) * (aux.salePrice - aux.costPrice))
        } 
        return "Se vendieron $" + sta.ventas + seeShow(" , y se gano: " + sta.ganancias)
    }

    return (
        <>
            <div className="col-10">
                <p>
                    {new Date(prevBalance.date).toLocaleDateString('es-ES', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric'
                    })}
                </p>
                <p>{prevBalance.cashier}</p>
                <p>{prevBalance.notes}</p>
                <p>
                    {statics}
                </p>
            </div>
                    <button 
                    className="btn btn-danger"
                    onClick={()=>deleteBalance(prevBalance.id)}
                    >
                        delete
                    </button>
        </>

    )
}
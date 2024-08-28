import { useEffect } from "react";
import { useState } from "react";
import { useProduct } from "../../products/hooks/useProduct";
import { NavLink } from "react-router-dom";
import { CreateBalance } from "./CreateBalance";
import { useGain } from "../../hooks/useShowGain";
import { Header } from "../../pages/Header";

export function ProductBalance() {
    const { products } = useProduct()
    const { seeShow, checkShowGain } = useGain();

    const initialState = products.map(product => ({
        ...product,
        secondCount: product.firstCount,
        productId: product.id
    }))

    const [balances, setBalances] = useState(initialState)
    const [error, setError] = useState("")
    const [showModal, setShowModal] = useState("none")

    const [statics, setStatics] = useState({
        ventas: 0,
        ganancias: 0,
    })


    useEffect(() => {
        const sta = { ventas: 0, ganancias: 0 }
        for (let index = 0; index < balances.length; index++) {
            const aux = balances[index]
            sta.ventas = sta.ventas + ((aux.firstCount - aux.secondCount) * aux.salePrice)
            sta.ganancias = sta.ganancias + ((aux.firstCount - aux.secondCount) * (aux.salePrice - aux.costPrice))

            if (Number(aux.firstCount) < Number(aux.secondCount)) {
                setError("Hay un error: usten no puede tener más " + aux.name + " al inicio del dia que en el cierre")
            } else {
                if (Number(aux.costPrice) >= Number(aux.salePrice)) {
                    setError("Hay un error: el producto" + aux.name + " tiene un precio de costo superior al de venta")
                } else {
                    setError("")
                }
            }

        }
        setStatics(sta)



    }, [balances])

    function handleChange(event, balance) {

        setBalances(prevState => {
            balance[event.target.id] = event.target.value
            const newBalances = prevState.map(prevBalance => {
                return (
                    prevBalance.id === balance.id ? balance : prevBalance
                )
            })
            return (newBalances)
        })
    }

    return (
        <div>
            <Header/>
            <table className="my-table">
                <caption>Cierre de ventas
                    Obtuviste ${statics.ventas} en ventas {seeShow(" y $"+statics.ganancias+" en ganancia")}
                    <span className="bg-danger">{error === "" && error}</span>
                </caption>
                <thead>
                    <tr>
                        <th>
                            Producto
                        </th>
                        <th>
                            Cuantos habia
                        </th>
                        <th>
                            Cuantos hay
                        </th>
                        <th>
                            Se vendieron
                        </th>

                        <th>
                            En dinero
                        </th>
                        {seeShow(<>
                            <th>
                                Ganancia
                            </th>
                            <th>
                                Precio de compra
                            </th>
                        </>)}


                        <th>
                            Precio de venta
                        </th>

                    </tr>
                </thead>
                <tbody>
                    {balances && balances.map(balance => (
                        <tr key={balance.id}>
                            <td>{balance.name}</td>
                            {/* si el first es menor que el secodn poner una clase que marqu error */}
                            <td >
                                <input
                                    style={{ backgroundColor: Number(balance.firstCount) < Number(balance.secondCount) ? "red" : "#fdfd96" }}
                                    type="number"
                                    id="firstCount"
                                    className="balances-input"
                                    value={balance.firstCount}
                                    onChange={(event) => handleChange(event, balance)}
                                />
                            </td>
                            <td>
                                <input
                                    style={{ backgroundColor: Number(balance.firstCount) < Number(balance.secondCount) ? "red" : "#fdfd96" }}
                                    type="number"
                                    id="secondCount"
                                    className="balances-input"
                                    value={balance.secondCount}
                                    onChange={(event) => handleChange(event, balance)}
                                />
                            </td>
                            <td >{balance.firstCount - balance.secondCount}</td>
                            <td>{(balance.firstCount - balance.secondCount) * balance.salePrice}</td>
                            {seeShow(
                                <>
                                    <td>{(balance.firstCount - balance.secondCount) * (balance.salePrice - balance.costPrice)}</td>
                                    <td >
                                        <input
                                            style={{ backgroundColor: Number(balance.costPrice) >= Number(balance.salePrice) ? "red" : "#fdfd96" }}
                                            type="number"
                                            id="costPrice"
                                            className="balances-input"
                                            value={balance.costPrice} onChange={(event) => handleChange(event, balance)}
                                        />
                                    </td>
                                </>
                            )}

                            <td>
                                <input
                                    style={{ backgroundColor: Number(balance.costPrice) >= Number(balance.salePrice) ? "red" : "#fdfd96" }}
                                    type="number"
                                    id="salePrice"
                                    className="balances-input"
                                    value={balance.salePrice}
                                    onChange={(event) => handleChange(event, balance)}
                                />
                            </td>
                        </tr>
                    ))}

                </tbody>
                <tfoot>
                    <td colSpan={4}>
                    {checkShowGain}
                        <button
                            onClick={() => setShowModal("create")}
                            className="btn btn-primary"
                        >Guardar cierre</button>
                    </td>
                </tfoot>
            </table>

            {showModal === "create" && <CreateBalance balances={balances} setShowModal={setShowModal} />}
        </div>
    )
}
import { useEffect } from "react";
import { useState } from "react";
import { useProduct } from "../hooks/useProduct";

export function ProductBalance() {
    const { products } = useProduct()
    const initialState = products.map(product => ({
        ...product,
        secondCount: product.firstCount
    }))

    const [balances, setBalances] = useState(initialState)

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
            <h1>Cierre de ventas</h1>
            <table className="balance">
                <caption>Cierre de ventas
                    Obtuviste ${statics.ventas} en ventas y + ${statics.ganancias} en ganancia

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
                        <th>
                            Ganancia
                        </th>
                        <th>
                            Precio de compra
                        </th>
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
                                    style={{ backgroundColor: balance.firstCount < balance.secondCount ? "red" : "white" }}
                                    type="number"
                                    id="firstCount"
                                    className="col-12"
                                    value={balance.firstCount}
                                    onChange={(event) => handleChange(event, balance)}
                                />
                            </td>
                            <td>
                                <input
                                    style={{ backgroundColor: balance.firstCount < balance.secondCount ? "red" : "white" }}
                                    type="number"
                                    id="secondCount"
                                    className="col-12"
                                    value={balance.secondCount}
                                    onChange={(event) => handleChange(event, balance)}
                                />
                            </td>
                            <td>{balance.firstCount - balance.secondCount}</td>
                            <td>{(balance.firstCount - balance.secondCount) * balance.salePrice}</td>
                            <td>{(balance.firstCount - balance.secondCount) * (balance.salePrice - balance.costPrice)}</td>
                            <td >
                                <input
                                    style={{ backgroundColor: balance.costPrice >= balance.salePrice ? "red" : "white" }}
                                    type="number"
                                    id="costPrice"
                                    className="col-12"
                                    value={balance.costPrice} onChange={(event) => handleChange(event, balance)}
                                />
                            </td>
                            <td>
                                <input
                                    style={{ backgroundColor: balance.costPrice >= balance.salePrice ? "red" : "white" }}
                                    type="number"
                                    id="salePrice"
                                    className="col-12"
                                    value={balance.salePrice}
                                    onChange={(event) => handleChange(event, balance)}
                                />
                            </td>
                        </tr>
                    ))}

                </tbody>
                <tfoot>
                    <td colSpan={4}>Aquí voy a poner los botones</td>
                </tfoot>
            </table>
        </div>
    )
}
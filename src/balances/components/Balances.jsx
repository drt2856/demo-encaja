import { NavLink } from "react-router-dom"
import { useBalance } from "../hooks/useBalance"
import Balance from "./Balance"
import { Header } from "../../pages/Header"
import { useGain } from "../../hooks/useShowGain"

export function Balances() {

    const { balances } = useBalance()
    const {checkShowGain} = useGain()

    return (
        <div>
        <Header/>
        {checkShowGain}
            <ul className="notebook-list">
                {balances && balances
                    .sort((a, b) => new Date(b.date) - new Date(a.date)) // Ordenar por fecha
                    .map(balance => (
                        <li key={balance.id}><Balance prevBalance={balance} /></li>
                    ))}
            </ul>


        </div>
    )
}
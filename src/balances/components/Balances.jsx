import { NavLink } from "react-router-dom"
import { useBalance } from "../hooks/useBalance"
import Balance from "./Balance"

export function Balances() {

    const { balances } = useBalance()

    return (
        <div>
            <header id="header" >
                <nav className='navbar navbar-expand-lg navegation'>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse navbar-text " id="navbarSupportedContent">
                        <ul className='navbar-nav ms-auto '>
                            <li className='nav-item'>
                                <NavLink className='nav-link' to={"/demo-encaja/product"}>Productos</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className='nav-link' to={"/demo-encaja/product/balance/"}>Cierre de caja</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className='nav-link' to={"/demo-encaja/historical_balances"}>Historial de cierres de caja</NavLink>
                            </li>
                        </ul>

                    </div>

                </nav>
            </header>
            <ul className="navegation">
                <li>

                </li>
                <li>

                </li>
                <li>

                </li>
            </ul>

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
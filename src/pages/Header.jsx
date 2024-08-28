import { NavLink } from "react-router-dom";

export function Header() {
    
    return(<header id="header" >
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
                    <li className='nav-item'>
                        <NavLink className='nav-link' to={"/demo-encaja/help"}>Ayuda</NavLink>
                    </li>
                </ul>

            </div>

        </nav>
    </header>)
}
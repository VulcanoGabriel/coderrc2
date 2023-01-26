import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCaretDown} from "@fortawesome/free-solid-svg-icons"
import CartWidget from "./CartWidget"
import "./styles/NavBar.css"

const NavBar = ({background}) => {
    return(
        <>
        <header className={`header background--${background}`}></header>

        <div className="header-container">

        <div className="header-carrito">
            <CartWidget/>
          </div>
           <div className="menu-button">
            {/* <FontAwesomeIcon icon="fa-Bars" size="lg" color="white" /> */}
            <FontAwesomeIcon icon={faCaretDown} size="lg" color="black" />
            <small>Menu</small>
            <nav>
                <ul className="nav-container">
                    <li className="">
                        <a href="*">Inicio</a>
                    </li>
                    <li>
                        <a href="*">Servicios</a>
                    </li>
                    <li>
                        <a href="*">Trabajos Realizados</a>
                    </li>
                    <li>
                        <a href="*">Contacto</a>
                    </li>
                </ul>
            </nav>
  
          </div>

        </div>
  
        </>
    )
}


export default NavBar;
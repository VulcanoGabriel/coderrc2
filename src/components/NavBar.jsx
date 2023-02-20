import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCaretDown} from "@fortawesome/free-solid-svg-icons"
import { Link, NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"
import "./styles/NavBar.css"
import Logo from "../components/recursos/logoredondo.png"

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
                <div>
                 <Link to="/">
                <img className="logo-brand" src={Logo} alt="logo" />
                </Link>
                </div>
                <div>
                    <NavLink className={({estaActivo}) => estaActivo ? "claseActivo" : "claseInactivo"} to="/" >Inicio</NavLink>
                    <NavLink className={({estaActivo}) => estaActivo ? "claseActivo" : "claseInactivo"} to="/servicios/alizado" >Alizado</NavLink>
                    <NavLink className={({estaActivo}) => estaActivo ? "claseActivo" : "claseInactivo"} to="/servicios/keratina" >Keratina</NavLink>
                    <NavLink className={({estaActivo}) => estaActivo ? "claseActivo" : "claseInactivo"} to="/servicios/ondulado" >Ondulado</NavLink>
                    <NavLink className={({estaActivo}) => estaActivo ? "claseActivo" : "claseInactivo"} to="/servicios/bucles" >Bucles</NavLink>
                </div>
            </nav>
  
          </div>

        </div>
  
        </>
    )
}


export default NavBar;
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons"
import "./styles/CartWidget.css"

const CartWidget = (contador) => {
    return (
            <div className="carrito-icono">
              
                <FontAwesomeIcon icon={faShoppingCart} color="black" size="lg" />
                <div>0</div>
        </div>

    )
}

export default CartWidget
import { Link } from "react-router-dom"
import "./styles/item.css"

export const ItemCard = ({item}) => {
    return(
        <div className="item-card">
            <img src={item.pictureUrl} alt={item.title} />
            <h4>{item.title}</h4>
            <p>$ {item.price}</p>
            <Link to={`/item/${item.id}`}>
        <button className="btn-itemcard">Mas informacion</button>
            </Link>

        </div>



    )
}
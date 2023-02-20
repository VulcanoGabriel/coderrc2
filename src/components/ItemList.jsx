import {ItemCard} from "../components/ItemCard"


export const ItemList = ({items}) => {

    return(
        <div className="tipo-servicios">
            <div style={{width:"50%"}}> listado item</div>
                {
                    items.map(producto => (
                        // <Link key={producto.id} to={"/item/${producto.id}"}>
                        <ItemCard key={producto.id} item={producto}/>
                        // </Link>
                    ))
                }
            </div>





    )

}
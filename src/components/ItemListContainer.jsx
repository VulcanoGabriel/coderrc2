import "./styles/ItemListContainer.css"

const ItemListContainer = ({greeting}) => {
    return (
        <>
        <section>
            <h1  className="greeting">{greeting}</h1>
        </section>
        <div className="contenedor-servicios">
        <ul className="nav-servicios">
                    <li >
                        <a href="">Alizado</a>
                    </li>
                    <li>
                        <a href="">Keratina</a>
                    </li>
                    <li>
                        <a href="">Ondulado</a>
                    </li>
                    <li>
                        <a href="">Rizado</a>
                    </li>
                </ul>

        </div>
        </>
    )
}

export default ItemListContainer
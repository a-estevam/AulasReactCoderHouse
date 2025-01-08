import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css';


const ItemListContainer = ({greeting}) =>{


    return(
        <>
        <section className='itemListContainer container'>
             <h3>{greeting}</h3>
             <ItemCount stock={15} initial={1} />
        </section>
        </>
    )
}

export default ItemListContainer
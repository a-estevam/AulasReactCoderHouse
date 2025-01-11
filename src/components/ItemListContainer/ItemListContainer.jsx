import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';


const ItemListContainer = ({greeting}) =>{


    return(
        <>
        <section className='itemListContainer container'>
             <h3>{greeting}</h3>

             <p>componente ItemCount</p>
             <ItemCount stock={15} initial={1} />

             <br />

             <p>componente ItemList</p>
             <ItemList/>
        </section>
        </>
    )
}

export default ItemListContainer
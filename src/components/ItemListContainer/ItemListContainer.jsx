import './ItemListContainer.css'

const ItemListContainer = ({greeting}) =>{
    return(
        <>
        <section className='itemListContainer container'>
            <h3>{greeting}</h3>
        </section>
        </>
    )
}

export default ItemListContainer
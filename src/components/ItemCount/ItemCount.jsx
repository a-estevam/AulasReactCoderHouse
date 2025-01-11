import { useRef, useState } from 'react'
import anelImg from '../../assets/imagens/anel_de _prata_01.png'
import './ItemCount.css'

const ItemCount = ({ stock, initial, onAdd}) =>{
    const [item, setItem] = useState(initial)
    const btnRef = useRef();
    

    const increment = () =>{
        if(item >= stock){
           alert(`A quantidade do estoque é de ${stock} peças`)
           
        } else{
             setItem(item +1)
             if (btnRef.current) {
                btnRef.current.disabled = false;
                btnRef.current.style.backgroundColor = '#335231';
                btnRef.current.style.cursor = 'pointer';
            }
        }
    }

    const decrement = () =>{
        if(item == 0){
            if (btnRef.current) {
                btnRef.current.style.backgroundColor = 'gray';
                btnRef.current.style.cursor = 'not-allowed';
                btnRef.current.disabled = true;
            }
           
        } else{
             setItem(item -1)
             
             
        }
    }
    
    const handleAdd = () => {
        if (onAdd) {
            onAdd(item); 
        }
        if (item == 0) {
            alert(`Adicione uma quantidade`);
        } else if (item == 1)  {
            alert(`${item} peça adicionada ao carrinho`);
        } else{
            alert(`${item} peças adicionadas ao carrinho`);
        }

        
    };


    return(
        <div className="card">
            <div className="card_content">
                <img className="card_img" src={anelImg} alt="anel_promocão"/>
                <p>{stock} peças em estoque</p>

                <div id="counter">
                    <div className='counter_itens'>
                        <button id="minus" className="card_button" onClick={decrement}>-</button>
                        <span id="value">{item}</span>
                        <button id="plus" className="card_button" onClick={increment}>+</button>
                    </div>
                </div>
                <button id='addCart' ref={btnRef} onClick={handleAdd}>Adicionar ao carrinho</button>
             </div>

             
        </div>
    )
}


export default ItemCount
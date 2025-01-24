import { useState } from 'react'
import './ItemDetail.css'
import { useEffect } from 'react'


const ItemDetail = () =>{

    const [itens, setItens] = useState([])

    useEffect(() =>{
        const getItens = () => {
            fetch('https://sheetdb.io/api/v1/7rjw6p8rn2x9g')
            .then((response) =>{
                if(!response){
                    console.log('sem resposta do servidor')
                }
                return response.json()
            })

            .then((data) =>{
                setItens(data)
            })

            .catch((error) =>{
                console.log('erro', error)
            })
        }

        getItens()
    },[])



    return(
        <div className="list_detail">{itens.map((item) => (
            <div className="list_container_detail" key={item.id}>
              
              <div className="list_detail_content">
                <img className='list_img_detail' src={item.photoId} alt="" />
                
                <div className="list_detail_description">
                    <h2>{item.products}</h2>
                    <p className={`list_category_detail`}>{item.category}</p>
                    <p className="list_stock">Em estoque: {itens.stock} peças</p>
                    <p>{item.description}</p>
                    <h2 className="list_detail_price" >R$ {item.price}</h2>
                    <button className="list_btn_detail" >Comprar</button>
                </div>

              </div>
            </div>
          ))}
        </div>
    )
}


export default ItemDetail

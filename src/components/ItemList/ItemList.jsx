import { useEffect, useState } from "react";
import dataProducts from "../../assets/Data/Data.json";
import './ItemList.css'

const ItemList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProducts(dataProducts);
      console.log(dataProducts);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="list">
      {products.map((product) => (
        <div className="list_container" key={product.ID}>
          <p className={`list_category ${product.CATEGORY}`}>{product.CATEGORY}</p>
          {/* <img className="list_img" src={`./src/assets/imagens${product.PHOTO}` } alt={product.PRODUCT} /> */}
          <img className="list_img" src={`/ImgProducts${product.PHOTO}` } alt={product.PRODUCT} />
          <img className="list_img" src={product.PHOTO} alt={product.PRODUCT} />
          <p className="list_stock">Em estoque: {product.STOCK} peças</p>
          <button className="list_btn" >Saiba Mais</button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

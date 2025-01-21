import { useState, useEffect } from "react";





const NovoComponenten = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://sheetdb.io/api/v1/5ogc5mkg3civ7"
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log("Erro ao buscar o post:", error);
      }
    };
    fetchPosts();
  }, []);

  return (
    
    <div className="list">{products.map((product) => (
        <div className="list_container" key={product.id}>
          <p className={`list_category ${product.category}`}>{product.category}</p>
          <p>{product.products}</p>
          <img className="list_img" src={product.photoId} alt={product.photoId} />
          <p className="list_stock">Em estoque: {product.stock} peças</p>
          <button className="list_btn" >Saiba Mais</button>
        </div>
      ))}
    </div>
      
  
  );
};

export default NovoComponenten;

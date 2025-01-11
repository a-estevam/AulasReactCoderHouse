import { useState, useEffect } from "react";







const NovoComponenten = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbzItQr1MzQTFe2kR11BzGhCLH_z-bn1BpJqUN5B_pf4OjVQoMqSKFyPv2DBgNs_oueM/exec"
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.log("Erro ao buscar o post:", error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <>
      <h1>Lista de Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.ID}>
            <p>{post.PRODUCTS} - {post.STOCK}</p>
            {post.PHOTO && (
              <img 
                src={post.PHOTO} 
                style={{ width: "200px", height: "auto" }} 
              />
            )}
          </li>
        ))}
      </ul>
      
    </>
  );
};

export default NovoComponenten;

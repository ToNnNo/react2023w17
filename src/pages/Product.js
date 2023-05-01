import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import Loading from "../component/Loading";

export default function Product() {
  const [products, setProducts] = useState([]);
  
  const findProducts = useCallback( async () => {
    const result = await axios.get('http://localhost:3200/products');
    setProducts(result.data);
  }, []);

  useEffect( () => {
    findProducts();
  }, [findProducts]);

  if(0 === products.length) {
    return <Loading />
  }
  console.log(products);

  return (
    <>
      <h2>Liste des produits</h2>

      <div className="row">
        {
          products.map( (product) => (
            <div className="col-3 mb-3" key={product.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{ product.name }</h5>
                  <p className="card-text">{ product.price }</p>
                </div>
              </div>   
            </div>
          ))
        }
      </div>
    </>
  );
}
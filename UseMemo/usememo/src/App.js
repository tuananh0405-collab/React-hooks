import { useState, useMemo } from "react";
function App() {
  const [product, setProduct] = useState({ id: "", namee: "", price: " " });
  const [list, setList] = useState([]);

  const handleName = (e) => {
    // e.preventDefault();
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  const handlePrice = (e) => {
    // e.preventDefault();
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  const addProduct = () => {
    if(product.namee && product.price){
      setList([...list, product]);
    setProduct({  namee: "", price: "" }); 
    //setProduct("")
    
    }
  };
  const deleteProduct = (productId) => {
    setList((prev) => prev.filter((product) => product.id !== productId));
  };
  const total = useMemo(() => {
    return list.reduce((prev, product) => prev + parseFloat(product.price), 0);
  },[list]);
  return (
    <div className="App" style={{padding:"30px"}}>
      <div className="info">
        <input
          type="text"
          placeholder="san pham"
          name="namee"
          value={product.namee}
          onChange={handleName}
        />
        <input
          type="text"
          placeholder="gia"
          name="price"
          value={product.price}
          onChange={handlePrice}
        />
        <button onClick={addProduct}>Add</button>
      </div>
      <ul>
        {list.map((product) => (
          <li key={product.id}>
            {product.namee} : {product.price}vnd
            <button onClick={()=>deleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <p>Total: {total}vnd</p>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
const FetchX3 = () => {
  const [url, setUrl] = useState("https://dummyjson.com/products");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((dataa) => setData(dataa.data));
  }, [url]);

  const handleCLick = (newUrl) => {
    setUrl(newUrl);
  };

  return (
    <div>
      <h1>Data list</h1>
      <div>
        <button onClick={() => handleCLick("https://dummyjson.com/products")}>
          Products
        </button>
        <button onClick={() => handleCLick("https://dummyjson.com/users")}>
          Users
        </button>
        <button onClick={() => handleCLick("https://dummyjson.com/carts")}>
          Carts
        </button>
      </div>
      <ul>
        {data.length > 0 &&
          data.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default FetchX3;

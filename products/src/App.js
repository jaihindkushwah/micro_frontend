import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import "./App.css";
const url = `https://fakestoreapi.com/products`;
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getAllProducts() {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    }
    getAllProducts();
  }, []);
  return (
    <div className="App">
      {data.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
}

export default App;

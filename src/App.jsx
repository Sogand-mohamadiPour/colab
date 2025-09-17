import { useState } from "react";
import Card from "./components/Cards";
import "./App.css";

function App() {
  const Product = [
    { name: "Samsungs24", price: "50000", id: "1" },
    { name: "Samsungs23", price: "40000", id: "2" },
    { name: "Samsungs22", price: "30000", id: "3" },
    { name: "Samsungs21", price: "20000", id: "4" },
    { name: "Samsungs20", price: "10000", id: "5" },
  ];

  return (
    <div className="cardContainer">
      {Product.map((item) => (
        <Card data={item} key={item.id} />
      ))}
    </div>
  );
}

export default App;

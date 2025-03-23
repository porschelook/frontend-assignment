 'use client'
import * as React from "react";
import { useState } from "react";

export default function Home() {
  const initialItems = [
    { type: "Fruit", name: "Apple" },
    { type: "Vegetable", name: "Broccoli" },
    { type: "Vegetable", name: "Mushroom" },
    { type: "Fruit", name: "Banana" },
    { type: "Vegetable", name: "Tomato" },
    { type: "Fruit", name: "Orange" },
    { type: "Fruit", name: "Mango" },
    { type: "Fruit", name: "Pineapple" },
    { type: "Vegetable", name: "Cucumber" },
    { type: "Fruit", name: "Watermelon" },
    { type: "Vegetable", name: "Carrot" },
  ];

  const [items, setItems] = useState(initialItems);
  const [FruitSet, setFruitSet] = useState([]);
  const [VegetableSet, setVegetableSet] = useState([]);

  const moveToColumn = (item) => {
    if (item.type === "Fruit") {
      setFruitSet((prev) => [...prev, item]);
      setItems((prev) => prev.filter((i) => i.name !== item.name));

      let timeoutticket = setTimeout(() => {
        setFruitSet((prev) => prev.filter((i) => i.name !== item.name));
        setItems((prev) => [...prev, item]);
      }, 5000);

      item.ticket = timeoutticket;
    } else {
      setVegetableSet((prev) => [...prev, item]);
      setItems((prev) => prev.filter((i) => i.name !== item.name));

      let timeoutticket = setTimeout(() => {
        setVegetableSet((prev) => prev.filter((i) => i.name !== item.name));
        setItems((prev) => [...prev, item]);
      }, 5000);

      item.ticket = timeoutticket; // Remove this if timeout is not used
    }
  };

  const moveBackImmediately = (item) => {
    clearTimeout(item.ticket);
    if (item.type === "Fruit") {
      setFruitSet((prev) => prev.filter((i) => i.name !== item.name));
    } else {
      setVegetableSet((prev) => prev.filter((i) => i.name !== item.name));
    }
    setItems((prev) => [...prev, item]);
  };
  const mainStyle = {
    display: "grid",
    gap: "3%",
    gridTemplateColumns: "auto auto auto",
    // backgroundColor: "dodgerblue",
    padding: "10px",
    textAlign: "center",
    minHeight: "600px",
  };

  const rowStyles = {
    display: "flex",
    flexDirection: "column", // Makes new items appear on top
    alignItems: "center",
    gap: "10px",
    backgroundColor: "white",
    borderColor: "rgba(239, 239, 239, 0.82)",
    boxShadow: "0px 4px 10px rgba(31, 20, 20, 0.1)",
    minHeight: "200px",
    minWidth: "400px",
  };

  const buttonStyles = {
    display: "flex",
    flexDirection: "column", // Makes new items appear on top
    alignItems: "center",
    borderColor: "rgba(239, 239, 239, 0.82)",
    backgroundColor: "white",
    padding: "15px",
    // minHeight: "100px",
    minWidth: "90%",
  };
  const headStyles = {
    display: "flex",
    flexDirection: "column", // Makes new items appear on top
    alignItems: "center",
    borderColor: "rgba(239, 239, 239, 0.82)",
    backgroundColor: "rgba(239, 239, 239, 0.82)",
    // boxShadow: "0px 4px 10px rgba(87, 87, 87, 0.77)",
    minHeight: "30px",
    minWidth: "100%",
  };
  const spanStyles = {
    padding: "10px",
    fontWeight: "bold",
    fontSize: "20px",
  };

  return (
    <main style={mainStyle}>
      <div style={rowStyles}>
        {items.map((item) => (
          <button
            style={buttonStyles}
            key={item.name}
            onClick={() => moveToColumn(item)}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div style={rowStyles}>
        <div style={headStyles}>
          <span style={spanStyles}>Fruit</span>
        </div>
        {FruitSet.map((item) => (
          <button
            style={buttonStyles}
            key={item.name}
            onClick={() => moveBackImmediately(item)}
          >
            {item.name}  
          </button>
        ))}
      </div>
      <div style={rowStyles}>
        <div style={headStyles}>
          <span style={spanStyles}>Vegetable</span>
        </div>
        {VegetableSet.map((item) => (
          <button
            style={buttonStyles}
            key={item.name}
            onClick={() => moveBackImmediately(item)}
          >
            {item.name}  
          </button>
        ))}
      </div>
    </main>
  );
}

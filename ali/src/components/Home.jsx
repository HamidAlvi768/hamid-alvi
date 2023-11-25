import React, { useState } from "react";

export const Home = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(""); // Changed state variable name
  const [category, setCategory] = useState(""); // Changed state variable name
  const [company, setCompany] = useState(""); // Changed state variable name

  const addProduct = async () => {
    let result = await fetch("http://localhost:5000/add-products", {
      method: "POST",
      body: JSON.stringify({ name, price, category, company }), // Updated state variable names
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
  };

  return (
    <div className="home">
      <h1>Welcome to the Home Page</h1>
      <form onSubmit={addProduct}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Product Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)} // Updated state variable name
        />
        <input
          type="text"
          placeholder="Product Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)} // Updated state variable name
        />
        <input
          type="text"
          placeholder="Product Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)} // Updated state variable name
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};


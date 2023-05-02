import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory , setCategory] = useState("All")
  const filter =(e)=>{
    setCategory(e.target.value)
  }

  const cartFilter = items.filter((food)=>{
    if(selectedCategory==="All") return true
    else return food.category ===selectedCategory
  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={filter} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {cartFilter.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [name, setName] = useState("");
  let [category, setCategory]= useState("Dessert")


  function handleNameChange(namee){
    setName(namee.target.value);
  }

  function handleCatergoryChange(categoryy){
    setCategory(categoryy.target.value);
  }

  function handleSubmit(submit){
    submit.preventDefault();
    onItemFormSubmit({
      id: uuid(),
      name,
      category,
    });
  }





  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={handleNameChange} />
      </label>

      <label>
        Category:
        <select name="category" value={category} onChange={handleCatergoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;

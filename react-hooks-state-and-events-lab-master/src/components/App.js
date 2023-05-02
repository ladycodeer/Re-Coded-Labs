import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

const [mode, setMode]=useState(false)
function changeMode(){
  setMode(!mode)
}

  const appClass = mode ? "App dark" : "App light"
  const modeName = mode ? "dark" : "light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={changeMode}>{modeName} Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
// Code Keypad Component Here
import React from "react";

function Keypad (){
    const changeHandler = () => {
        console.log("Entering password...")
    }

    return (
        <input type='text' onChange={changeHandler} />
    )
}

export default Keypad;
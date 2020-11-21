import React,{useState} from "react"

export default function Button(){
    const [buttonText, setButtonText] = useState("Show map");
    function handleClick() {
      return setButtonText("Map showing");
    }
    return <button onClick = {handleClick}>{buttonText}</button>
}
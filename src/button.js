import React,{useState} from "react"


export default function Button(){
    const [buttonText, setButtonText] = useState("Search");
    function handleClick() {
      return setButtonText("Searching now");
    }
    return <button onClick = {handleClick}>{buttonText}</button>
}
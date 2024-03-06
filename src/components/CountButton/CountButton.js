import React, { useState } from "react";

const CountButton = (props) => {
    
const [currentCount, setCurrentCount] = useState(0)

    const handelClick = () =>{
        setCurrentCount(currentCount + props.incrementBy)
    }

    const divStyle = {
        color: "blue"
    }

    const buttonColor = {
        background: props.buttonColor,
        boaderRadius: "10px"
    }
    return( 
    <div style={divStyle} className="count-body">
        <button style={buttonColor} onClick={handelClick}>+{props.incrementBy}</button>
        <div className="count-display">{currentCount}</div>
    </div>)
}

export default CountButton 
import React from "react";
import pt from "prop-types"
function PropValidation(props)
{
    return(
        <>
        <h1>name :-{props.pname}</h1>
        <h1>Array :-{props.parray}</h1>
        <h1>Boolean is  :-{props.pbool?"it is true":"it is false"}</h1>
        <h1>Number  :-{props.pnumber}</h1>
        <h1> function is :={props.pfunc(3)}</h1>
        </>
    );

    
}

PropValidation.propTypes={
    pname:pt.string.isRequired,
    parray:pt.array.isRequired,
    pbool:pt.bool.isRequired,
    pnumber:pt.number.isRequired,
    pfunc:pt.func.isRequired
}

export default PropValidation;
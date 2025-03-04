import React from "react";



function EventDemo()
{
    const data={
        width:100,
        height:100,
        background:"blue"
    }
    function getvalue()
    {
        alert("button is clicked")
    }
    return(
        <input type="submit" onSubmit={getvalue} />
    );
}

export default EventDemo;
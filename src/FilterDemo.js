import React from "react";


function FilterDemo()
{
    const abc=[45,67,88,90,12,25,18,19,10,11]

    const result=abc.filter((abc)=>abc<=50).map((abc)=><h1>{abc}</h1>)
    return(
    <h1>{result}</h1>
    );
}

export default FilterDemo;
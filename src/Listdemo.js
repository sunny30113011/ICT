import React from "react";

function Listdemo()
{

    const abc=[33,45,24,56,57,77,67,34,45,25,60,98,99]
const result=abc.filter((abc)=>abc>=50)

    .map((abc,index)=><h1 key={abc.id}>{abc} index is {index}</h1>)
    return(
        <>
       <h1>{result}</h1>
       </>
    );
}
export default Listdemo;
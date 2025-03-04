import React from "react";


class RefDemo2 extends React.Component

{ 
    constructor()
    {
        super();
        this.InputRef=React.createRef();
    }

    getvalue=()=>
    {
        this.InputRef.current.style.color="red";
        this.InputRef.current.style.background="black"
    }
    render()
    {
        
        return(
            <>
          <input type="text" ref={this.InputRef}/>
          <button onClick={this.getvalue}>ok</button>
          </>
        );
    }
}

export default RefDemo2;
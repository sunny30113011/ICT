import React from "react";


class Refdemo extends React.Component
{
    constructor()
    {
        super();
        this.inputRef=React.createRef();
    }

    getvalue=()=>
    {
        this.inputRef.current.style.color="red"; 
        this.inputRef.current.style.background="maroon"
    }
    render()
    {
        return( 
 <div>

            <h1>react in ref</h1>
<input type="text" ref={this.inputRef} />

<button onClick={this.getvalue} >  change ref </button>
</div>
    );
    }
}

export default Refdemo;
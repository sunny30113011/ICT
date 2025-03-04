import React from "react";

import './Card.css';
function Cards(props)
{
    const data={
        color:"blue",
         float:"left",
         margin: 10,
         width:  350,
         height: 350,
         padding:30
    }
    return(
        <div>

<div class="card-container" style={data}>
<a href={props.matchlink}>
        <div class="card">
            <img src={props.match1} alt="Nature"/>
            <div class="card-content">
                <h6>{props.matchname}</h6>
                <p>{props.result}</p>
                <a href={props.matchlink} class="btn btn-primary">watch</a>
            </div>
        </div>
</a>
       

      </div>

    </div>
    
    );
    
  
}
export default Cards;
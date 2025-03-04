import React from "react";

function Caroussel1(props)
{
    const data={
      
        margin:30,
        color:"blue"

    }
 
return(
    <>
<div class="container-fluid" style={data}>
<div id="carouselExampleDark" class="carousel carousel-dark slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={props.match11} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <strong>{props.title}</strong>
        <strong>{props.timed}</strong>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={props.match11} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <strong>{props.title}</strong>
        <strong>{props.timed}</strong>
      </div>
    </div>
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
<div>
           <center><h4 style={data}>Match Highlights</h4></center>
           <hr></hr>
           </div>


           
</>
);
}

export default Caroussel1;
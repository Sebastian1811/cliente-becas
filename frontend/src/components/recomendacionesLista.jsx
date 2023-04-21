import React from "react";
import BecaTarjeta from "./becaTarjeta";

const ListaRecomendaciones = ({becas}) => {
    return (
      <div className="carousel w-full">
        {becas.map( (beca,index) => (
          <div id={`slide${index + 1}`} className="carousel-item relative w-full" key={index}>
            <BecaTarjeta key ={beca.id} beca={beca}  />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href={`#slide${index === 0 ? becas.length : index}`} className="btn btn-circle">❮</a> 
            <a href={`#slide${index === becas.length - 1 ? 1 : index + 2}`} className="btn btn-circle">❯</a>
            </div>
          </div>
        )
        )}
      </div>
    );
  }
export default ListaRecomendaciones;
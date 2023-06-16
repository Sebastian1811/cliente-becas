import React from "react";
import BecaTarjeta from "./becaTarjeta";

const ListaBecas = ({becas}) => {
    return (
      <div className="grid grid-cols-3 gap-4 mt-5" >
        {becas.map( (beca) => (
            <BecaTarjeta key ={beca.id} beca={beca}  />
        )
        )}
      </div>
    );
  }

export default ListaBecas;

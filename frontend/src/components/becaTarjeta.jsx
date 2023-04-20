import React from "react";

const BecaTarjeta = (props) => {
    return (
        <div className="card w-96 bg-neutral text-neutral-content my-6 mx-auto"  >
        <div className="card-body items-center text-center">
          <h2 className="card-title mb-4" >{props.beca.name}</h2>
          <p>Niveles de estudio: {props.beca.study_level}</p>
          <div className="card-actions justify-end">
            <button class="btn btn-accent btn-outline"><a href="/detail">Accept</a></button>
          </div>
        </div>
      </div>
);
}

export default BecaTarjeta;
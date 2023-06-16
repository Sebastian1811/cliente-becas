import React from "react";
import "../styles/tailwind.css";

const Card = () => {
    return (
        <div className="card w-96 bg-neutral text-neutral-content my-6" >
        <div className="card-body items-center text-center">
          <h2 className="card-title">Beca!</h2>
          <p>Lorem ipsum dolorem.</p>
          <div className="card-actions justify-end">
            <button class="btn btn-accent btn-outline"><a href="/detail">Accept</a></button>
          </div>
        </div>
      </div>
);
}
export default Card;


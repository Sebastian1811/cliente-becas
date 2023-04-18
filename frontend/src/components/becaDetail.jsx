import React from "react";
import "../styles/tailwind.css";


const BecaDetails = () => {
  return (
    <div className="flex flex-col gap-3 m-10">
      <div className="bg-blue-600 text-white p-5">
        <h1 className="m-0">Título</h1>
      </div>
      <div className="bg-gray-100 p-5">
        <h2 className="m-0">Descripción</h2>
        <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className="bg-gray-300 p-5">
        <h2 className="m-0">Requisitos</h2>
        <ul className="m-0">
          <li>Requisito 1</li>
          <li>Requisito 2</li>
          <li>Requisito 3</li>
        </ul>
      </div>
      <div className="bg-gray-100 p-5">
        <h2 className="m-0">Países</h2>
        <ol className="m-0">
          <li>País 1</li>
          <li>País 2</li>
          <li>País 3</li>
        </ol>
      </div>
    </div>
  );
};


export default BecaDetails;
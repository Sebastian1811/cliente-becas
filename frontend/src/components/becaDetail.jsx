import React from "react";
import "../styles/tailwind.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import CountryHostList from './countryHostList'
import Recomendaciones from './recomendaciones'
import NavBar from "./navbar";
const BecaDetails = () => {

  const { id } = useParams();
  const [beca, setBeca] = useState([]);
    useEffect(() => {
      axios.get(`http://localhost:3000/beca/${id}`)
        .then(response => setBeca(response.data))
        .catch(error => console.log(error));
    }, [id]);

  return(
    <div>
    <NavBar/>
    <div className="flex flex-col gap-3 m-10">
        <div className="bg-blue-600 text-white p-5">
          <h1 className="m-0">{beca.name}</h1>
        </div>
          <CountryHostList id={id}/>
          <div className="bg-gray-300 p-5">
            <h2 className="m-0">Niveles de estudio</h2>
              <p>{beca.study_level}</p>
          </div>
          <div className="bg-gray-300 p-5">
            <h2 className="m-0">Requisitos</h2>
              <p>{beca.requirements}</p>
          </div>
          <div >
            <h1 className="m-0">Listado de Recomendaciones</h1>
            <Recomendaciones id={id} />
          </div>
    </div>
    </div>
  )
   
};


export default BecaDetails;
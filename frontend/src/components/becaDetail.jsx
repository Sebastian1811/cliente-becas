import React from "react";
import "../styles/tailwind.css";
import { useParams } from "react-router-dom";
import {withRouter} from "react-router"
import { useState, useEffect } from "react";
import axios from "axios";
import CountryHostList from './countryHostList'
import Recomendaciones from './recomendaciones'
import NavBar from "./navbar";
import Footer from "./footer";

const BecaDetails = () => {
  const apiUrl = import.meta.env.VITE_API_BECAS
  const { id } = useParams();
  const [beca, setBeca] = useState([]);
    useEffect(() => {
      axios.get(`${apiUrl}/beca/${id}`)
        .then(response => setBeca(response.data))
        .catch(error => console.log(error));
        console.log(id)
    }, [id]);

  const htmlreq = beca.htmlreqs

  return(
    <div>
    <NavBar/>
    <div className="flex flex-col gap-3 m-10">
        <div className="bg-blue-300 text-white p-5">
          <h1 className="m-0 text-black font-bold">{beca.name}</h1>
        </div>
          <CountryHostList id={id}/>
          <div className="bg-gray-100 p-5 ">
            <h2 className="m-0 text-black font-bold">Niveles de estudio:</h2>
              <p className="m-0 text-black">{beca.study_level}</p>
          </div>
          <div className="bg-gray-100 p-5">
            <h2 className="m-0 text-black font-bold">Enlace:</h2>
              <a className="text-blue-300 hover:text-blue-500 font-bold" href={`${beca.url}`} target="_blank" rel="noopener noreferrer">Más información aqui</a>
          </div>
          <div className="bg-gray-100 p-5">
            <h2 className="m-0 text-black font-bold">Requisitos:</h2>
            <div className="m-0 text-black" dangerouslySetInnerHTML={{ __html: htmlreq }}></div>
            
            {/* <p className="m-0 text-black font-bold">{beca.requirements}</p> */}
              {/* <a className="text-blue-300 hover:text-blue-500 font-bold" href={`${beca.url}`} target="_blank" rel="noopener noreferrer">Más información aqui</a> */}
          </div>
          <div className="container w-2/4 mt-9">
            <h1 className="m-0 text-purple-700 font-bold text-4xl border-b border-gray-400 py-4">Recomendaciones:</h1>
            </div> 
            <div>
              <Recomendaciones id={id}/>
            </div>
          
    </div>
    <Footer/>
    </div>
  )
   
};

export default withRouter(BecaDetails);
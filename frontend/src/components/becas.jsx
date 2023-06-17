import React, { useState, useEffect } from "react";
import ListaBecas from "./becaLista";
import axios from "axios";

const Becas = () => {

    const ITEMS_PER_PAGE = 12
   
    
    const [becas, setBecas] = useState([]);
    
    useEffect(() => {
      axios.get('http://localhost:3000/beca/all')
      .then(response => setBecas(response.data))
      .catch(error => console.log(error));
    }, []);
    console.log(becas)
    const nextHandler = () => {
      const TotalElements = becas.length
      console.log(TotalElements)
    }

    const prevHandler = () => {
        console.log("anterior pagina")
    }
    const [currentPage, setCurrentPage] =  useState(0)
    return (
      <div>
        <h1 className=" p-3 font-title text-purple-500 inline-flex text-lg transition-all duration-200 md:text-3xl ml-4 mt-6">Listado de becas</h1>
        <br/>
        <button onClick={prevHandler} className="btn btn-accent btn-outline mr-10 mb-8  ml-10" >Prev</button>
        <button onClick={nextHandler} className="btn btn-accent btn-outline mr-10 mb-8  ml-10" >Next</button>
        <ListaBecas page={currentPage} becas={becas.splice(0,ITEMS_PER_PAGE)} />
      </div>
    );
  }
  export default Becas;
import React, { useState, useEffect } from "react";
import ListaBecas from "./becaLista";
import axios from "axios";
import {withRouter} from "react-router"
import { Link } from "react-router-dom";

const Becas = (props) => {
  
    const ITEMS_PER_PAGE = 12
  
    const page = parseInt(props.currentpage)// PARA PASO DE PARAM DESDE HOME
    
    let firstIndex = page * ITEMS_PER_PAGE // PARA PASO DE PARAM DESDE HOME

   
    const [becas, setBecas] = useState([]);
    useEffect(() => {
      axios.get('http://localhost:3000/beca/all')
      .then(response => setBecas(response.data))
      .catch(error => console.log(error));
    }, []);
    
    const [items, setItems] = useState(becas)
    useEffect(() => {
      setItems([...becas].splice(firstIndex,ITEMS_PER_PAGE));
    }, [becas]);

    const [currentPage, setCurrentPage] =  useState(page)

    const nextHandler = () => {
      const TotalElements = becas.length
      const nextPage = currentPage + 1
      const firstIndex = nextPage * ITEMS_PER_PAGE  
      if (firstIndex >= TotalElements) return
      setItems([...becas].splice(firstIndex,ITEMS_PER_PAGE))
      setCurrentPage(nextPage)   
    }

    const prevHandler = () => {
        const prevPage = currentPage -1
        if (prevPage < 0) {setCurrentPage(-1)}
        const firstIndex = prevPage * ITEMS_PER_PAGE
        setItems([...becas].splice(firstIndex,ITEMS_PER_PAGE))
        setCurrentPage(prevPage)
    }
  
    if (currentPage < 0){
      return(
       <div className="flex justify-center items-center mt-20 mb-20">
        <Link to={`/`}className=" font-bold  hover:bg-green-700 btn alert alert-warning w-1/4 flex justify-center items-center ">
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
        Parece que te perdiste si quieres volver haz click
      </Link>
       </div>
      );
    }
    else {
      return (
        <div>
          <h1 className=" p-3 font-title text-purple-500 inline-flex text-lg transition-all duration-200 md:text-3xl ml-4 mt-6">Listado de becas disponibles</h1>
          <br/>
          <ListaBecas becas={items} />
          <div className="join flex justify-center items-center">
            <Link onClick={prevHandler} to={`/page/${currentPage-1}`} className="join-item btn">«</Link>
            <h1 className="join-item btn ml-2 mr-2">{currentPage}</h1>
            <Link onClick={nextHandler} to={`/page/${currentPage+1}`} className="join-item btn">»</Link>
          </div>
        </div>
    );
    }
    
  }

  export default Becas;
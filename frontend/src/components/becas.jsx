import React, { useState, useEffect } from "react";
import ListaBecas from "./becaLista";
import axios, { isAxiosError } from "axios";

const Becas = () => {

    const ITEMS_PER_PAGE = 12
   
    
    const [becas, setBecas] = useState([]);
    
    useEffect(() => {
      axios.get('http://localhost:3000/beca/all')
      .then(response => setBecas(response.data))
      .catch(error => console.log(error));
    }, []);
    
    const [items, setItems] = useState(becas)

    useEffect(() => {
      setItems([...becas].splice(0,ITEMS_PER_PAGE));
    }, [becas]);

    // console.log('soy copy',copy)
  
    const [currentPage, setCurrentPage] =  useState(0)

    const nextHandler = () => {
      const TotalElements = becas.length
      const nextPage = currentPage + 1
      const firstIndex = nextPage * ITEMS_PER_PAGE
      console.log('estoy4', firstIndex, TotalElements)
      if (firstIndex >= TotalElements) return
      console.log(becas,firstIndex)
      setItems([...becas].splice(firstIndex,ITEMS_PER_PAGE))
      setCurrentPage(nextPage)
     
    }

    const prevHandler = () => {
        const prevPage = currentPage -1
        if (prevPage < 0) return
        const firstIndex = prevPage * ITEMS_PER_PAGE
        console.log("anterior pagina")
        setItems([...becas].splice(firstIndex,ITEMS_PER_PAGE))
        setCurrentPage(prevPage)
    }
    return (
      <div>
        <h1 className=" p-3 font-title text-purple-500 inline-flex text-lg transition-all duration-200 md:text-3xl ml-4 mt-6">Listado de becas</h1>
        <br/>
        <button onClick={prevHandler} className="btn btn-accent btn-outline mr-10 mb-8  ml-10" >Prev</button>
        <button onClick={nextHandler} className="btn btn-accent btn-outline mr-10 mb-8  ml-10" >Next</button>
        <ListaBecas page={currentPage} becas={items} />
      </div>
    );
  }
  export default Becas;
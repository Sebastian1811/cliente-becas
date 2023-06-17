import React, { useState, useEffect } from "react";
import ListaBecas from "./becaLista";
import axios from "axios";
import {withRouter} from "react-router"
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom"; para paso por parametro directo

const Becas = (props) => {
    // const {page} = useParams(); //PARA PASO  POR PARAMETRO DIRECTO
    // const pagina = parseInt(page)  //PARA PASO  POR PARAMETRO DIRECTO
    const ITEMS_PER_PAGE = 12
    // let pagem = pagina * ITEMS_PER_PAGE PARA PASO  POR PARAMETRO DIRECTO
    
    const page = parseInt(props.currentpage) // PARA PASO DE PARAM DESDE HOME
    
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
      console.log(currentPage)
      const nextPage = currentPage +1
      console.log("nextpage is",nextPage)
      const firstIndex = nextPage * ITEMS_PER_PAGE  
      // console.log('estoy4', firstIndex, TotalElements)
      if (firstIndex >= TotalElements) return
      // console.log(becas,firstIndex,currentPage)
      setItems([...becas].splice(firstIndex,ITEMS_PER_PAGE))
      setCurrentPage(nextPage)
     
    }

    const prevHandler = () => {
        const prevPage = currentPage -1
        if (prevPage < 0) return
        const firstIndex = prevPage * ITEMS_PER_PAGE
        // console.log("anterior pagina")
        setItems([...becas].splice(firstIndex,ITEMS_PER_PAGE))
        setCurrentPage(prevPage)
    }
    return (
      <div>
        <h1 className=" p-3 font-title text-purple-500 inline-flex text-lg transition-all duration-200 md:text-3xl ml-4 mt-6">Listado de becas</h1>
        <br/>
        {/* <button onClick={prevHandler} className="btn btn-accent btn-outline mr-10 mb-8  ml-10" >Prev</button>
        <button onClick={nextHandler} className="btn btn-accent btn-outline mr-10 mb-8  ml-10" >Next</button> */}

        <Link onClick={prevHandler} to={`/page/${currentPage-1}`} className="btn btn-accent btn-outline mr-10 mb-8  ml-10" >Prev</Link>
        <Link onClick={nextHandler} to={`/page/${currentPage+1}`} className="btn btn-accent btn-outline mr-10 mb-8  ml-10" >Next</Link>
        <ListaBecas becas={items} />
      </div>
    );
  }
  export default Becas;
import React, { useState, useEffect } from "react";
import ListaBecas from "./becaLista";
import axios from "axios";

const Becas = () => {
    const [becas, setBecas] = useState([]);
    useEffect(() => {
      axios.get('http://localhost:3000/beca/all')
        .then(response => setBecas(response.data))
        .catch(error => console.log(error));
    }, []);
    return (
      <div>
        <h1 className=" p-3 font-title text-purple-500 inline-flex text-lg transition-all duration-200 md:text-3xl ml-4 mt-6">Listado de becas</h1>
        <ListaBecas becas={becas} />
      </div>
    );
  }
  export default Becas;
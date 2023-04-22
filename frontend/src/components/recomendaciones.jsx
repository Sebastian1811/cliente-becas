import React, { useState, useEffect } from "react";
import ListaRecomendaciones from "./recomendacionesLista";
import axios from "axios";
import { withRouter } from "react-router";

const Recomendaciones = ({id}) => {
    const [becas, setBecas] = useState([]);
    
    useEffect(() => {
      axios.get(`http://localhost:3000/recommends/${id}`)
      .then(response => setBecas(response.data))
      .catch(error => console.log(error));
      console.log(id)
    }, [id]);
    return (
      <div>
        {/* <h1 className="font-title text-gray-100 inline-flex text-lg transition-all duration-200 md:text-3xl ml-4">Listado de becas</h1> */}
        <ListaRecomendaciones becas={becas} />
      </div>
    );
  }

  export default withRouter(Recomendaciones);
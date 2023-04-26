import React from "react";
import "../styles/tailwind.css";
import axios from "axios";
import { useState, useEffect } from "react";
const CountryHostList = ({id}) => {

    const [beca, setBeca] = useState([]);
    useEffect(() => {
      axios.get(`http://localhost:3000/beca/${id}`)
        .then(response => setBeca(response.data))
        .catch(error => console.log(error));
    }, [id]);

    let paises = ` ${beca.country_host}`

    if (paises.includes(',')) {
        // El string contiene comas, así que se separa en elementos
        const items = paises.split(',');
        return (
            <div className="bg-gray-100 p-5">
                <h2 className="m-0 text-black font-bold">El/los pais de destino:</h2>
                <ul className="m-0 text-black">
                    {items.map((item) => (
                        <li key={item}>{item.trim()}</li>
                    ))}
                </ul>
            </div> 
        );

    }else {
        return (
        <div className="bg-gray-100 p-5">
            <h2 className="m-0 text-black font-bold">El/los pais de destino:</h2>
            <ul  className="m-0 text-black">
            <li>{paises.trim()}</li>
            </ul>
        </div>
      )
    }

}

export default CountryHostList;
import React from 'react'
import { Link } from "react-router-dom";

const AboutPage = () => {
    return (
        <div className="p-3 bg-base-100 container">
         <h1 className="font-title text-purple-500 text-4xl font-semibold w-2/4 border-b border-gray-400 py-4" >About MatchWise</h1>
         
         <div className="p-3 bg-base-100 font-mono text-xl my-6 container max-w-5xl">
          <p className="text-justify mb-8"> MatchWise es una herramienta construida con el proposito de intentar facilitar el acceso a 
          la educación superior divulgando Y generando recomendaciones, a partir de una recopilación de convocatorias de becas para complementar, iniciar o culminar estudios
          superiores en las areas de la ingeniería y ciencias de la computación.</p>

          <p className="text-justify mb-6"> MatchWise utiliza un algoritmo de recomendación que fue desarrollado usando tecnicas
           de procesamiento de lenguaje natural y redes neuronales que permite detectar similitudes entre los requisitos de diferentes becas, de esta 
           manera, MatchWise te puede recomendar un top de las becas más similares a la que elijas en el 
           <Link  className="text-blue-300 hover:text-blue-500 font-bold" to={"/"}> home page</Link>.</p>

           <p className="text-justify mb-6"> Está herramienta es solo un prototipo que se desarrolló como parte de un trabajo
           de grado, por tanto, su funcionalidad aún es limitada y puede que presente fallas.</p>
        </div>

        </div>
    )
}

export default AboutPage;
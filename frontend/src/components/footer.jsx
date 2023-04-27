import React from "react";
import "../styles/tailwind.css";
import image from "../assets/owl.svg"

const Footer = () => {
    return(
        <footer className="footer items-center p-4 bg-base text-neutral-content">
        <div className="items-center grid-flow-col">
        {/* <div><img  className="w-12 h-12 mx-auto" src={image} alt="wise_owl" /></div>  */}
          <p className="p-2 font-mono font-semibold">Desarrollado por: Sebastian Andica @ 2023</p>
        </div> 
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a href="https://github.com/Sebastian1811" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className="fill-current"><path d="M12 0a12 12 0 0 0-3.81 23.4c.6.1.82-.26.82-.58v-2.02c-3.34.72-4.04-1.61-4.04-1.61-.54-1.37-1.32-1.74-1.32-1.74-1.08-.73.08-.72.08-.72 1.2.08 1.84 1.23 1.84 1.23 1.07 1.83 2.81 1.3 3.5 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.3.46-2.36 1.23-3.19-.12-.3-.54-1.52.1-3.17 0 0 1-.32 3.3 1.23a11.38 11.38 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.64 1.65.22 2.87.1 3.17.77.83 1.23 1.89 1.23 3.19 0 4.6-2.8 5.63-5.48 5.93.43.37.82 1.1.82 2.22v3.3c0 .32.21.68.83.57A12 12 0 0 0 12 0"></path></svg></a>
        </div>
      </footer>
    )
}

export default Footer
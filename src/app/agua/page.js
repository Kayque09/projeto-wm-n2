
"use client"
import Header from "../components/header/header"
import agua from "./agua.css"
import { Waves } from "lucide-react";
import { useEffect, useState } from "react";

function Aguas() {

    const[data, setData] = useState(null)

      useEffect(() => {
        fetch("https://servicodados.ibge.gov.br/api/v3/malhas/estados/SP")
        .then( (response) => response.json() )
         .then( (data) => {
          setData(data)
      })
    }, [])
      
    return (
      <>
        <Header/>
        <section className="container_agua">
            <h1>Verifique a qualidade da água em São Paulo</h1>
    
        </section>

        <div className="cartao_agua">
        <Waves className="logo_agua" />
        <p>Cidade: {JSON.stringify(data)}</p>
        <p>Qualidade da água:  </p>
        
        </div>
        </>
    );
  }
  export default Aguas;
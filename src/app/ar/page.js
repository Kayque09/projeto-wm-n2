"use client"
import { useEffect, useState } from "react";
import Header from "../components/header/header"
import ar from "./ar.css"
import { Wind } from "lucide-react";

function Ar() {

      const[data, setData] = useState (null)

      useEffect(() => {
        fetch(
        (function api  (w,  d,  t,  f)  {  
          w[f]  =  w[f]  ||  function  (c,  k,  n)  {  
            s  =  w[f],  k  =  s['k']  =  (s['k']  ||  (k  ?  ('&k='  +  k)  :  ''));  s['c']  =  
              c  =  (c  instanceof  Array)  ?  c  :  [c];  s['n']  =  n  =  n  ||  0;  L  =  d.createElement(t),  e  =  d.getElementsByTagName(t)[0];  
            L.async  =  1;  L.src  =  '//feed.aqicn.org/feed/'  +  (c[n].city)  +  '/'  +  (c[n].lang  ||  '')  +  '/feed.v1.js?n='  +  n  +  k;  
            e.parentNode.insertBefore(L,  e);  
          };  
        })(window,  document,  'script',  '_aqiFeed')  
      
        .then( (response) => response.json() )
         .then( (data) => {
          setData(data)
      }))
    }, [])


    return (
      <>
        <Header/>
        <section className="container_ar">
            <h1>Verifique a qualidade do ar em São Paulo</h1>
        </section>

        <div className="cartao_ar">
        <Wind className="logo_ar" />
        <p>Cidade: {JSON.stringify(data.api)}</p>
        <p>Qualidade do ar:</p>
        </div>
        </>
    );
  }
  export default Ar;
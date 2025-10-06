"use client";

import { Github, Linkedin, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import React, { useEffect, useState } from "react";


import "../styles/hero.css"

function useWindowWidth(){
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return width;
}

export function Hero() {
  const width = useWindowWidth();
  let n_vids = 0;
  if (width<=880){
    n_vids=1
  }else if(width>880&&width<1200){
    n_vids=2
  }else{
    n_vids=3
  }
  
  const vid_names = ["_sinai", "_ds", "_SS"];
  const divvid=[]
  for(let i=0; i<(n_vids); i++){
    divvid.push(<div><video src={"./videos/"+vid_names[i]+".mp4"} autoPlay loop muted /></div>) 
  }

  
  return (
    <section id="hero">
      <div className="hero_cont">

        {width>664 ? <div className="imgContainer">
           <img
              src="/images/profile-photo.png"
              alt="Juan Miguel Padilla Galera"
            />
        </div>:null}
        
        <div className="vidCont">
          {divvid.map((vid)=>(vid))}
          {width<664 ? <div className="imgContainer">
                <img
                    src="/images/profile-photo.png"
                    alt="Juan Miguel Padilla Galera"
                  />
              </div>:null} 
          <div className="vidLayer" ></div>
          <div className="intro_cont">
            <div className="i1">
              <div className="space-y-4">
                <h1 className="nombre text-4xl lg:text-5xl font-bold text-balance">Juan Miguel Padilla Galera</h1>
                <p className="especialidades text-xl text-muted-foreground">Físico / Programador / Analista de datos</p>
              </div>

              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <a href="https://github.com/Juamp667" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="icon"
                  >
                    <Github className="h-5 w-5" />
                  </Button>
                </a>

                <a
                  href="https://www.linkedin.com/in/juan-miguel-padilla-galera-03725a228"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="icon"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </a>

                <a href="https://www.youtube.com/@JuampDev" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="icon"
                  >
                    <Youtube className="h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>

            <div className="i2 resumen">
              <p>
                Graduado en <a href="https://grados.ugr.es/fisica">Física por la Universidad de Granada</a>. Actualmente cursando el <a href="https://masteres.ugr.es/datcom"> máster en Ciencia de Datos e Ingerniería de Computadores </a> de la
                misma universidad, con el objetivo de impactar el entorno social y económico a partir de la explotación del dato.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

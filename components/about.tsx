"use client";

import "../styles/about.css"
import React, { useEffect, useState } from "react";

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

function updateImg2(){
  const [img2_index, set_img2Index] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      set_img2Index(prev => (prev < 4 ? prev + 1 : 1));
    }, 1000);

    return () => clearInterval(interval); // limpiar intervalo al desmontar
  }, []);

  return img2_index;
}



export function About() {
  const width = useWindowWidth();
  const img1 = <img src="./images/collage.png"></img>;

  const img2_index = updateImg2();
  const img2 = <img src={`/images/set${img2_index}.png`}></img>;

  return (
    <section id="about">
      <div className="aboutCont">
      
        <div className="i1">
          <h2 className="text-3xl font-bold mb-8">Sobre mí</h2>
        </div>

        <div className="i2">
          <p className="p1">
            Desde pequeño he sido una persona que siempre andaba cuestionando funcionamiento de la realidad, el porqué de las cosas; a la par que a la que le apasionaba aquello con un diseño estructurado y razonado a partir de una sólida pero diminuta base (como lo son las matemáticas).
            <br/><br/>
            Apreciando esa especial pasión que habitaba en mi interior, desde pequeño mis padres me apoyaron inicialmente con infinidad de puzzles y legos, y posteriormente incribiéndome en todo posible curso de ciencias, robótica y programación.
            <br/><br/>

            Con el paso de los años me fui apasionando más y más por todo lo relacionado con la electrónica y la programación. Siempre que a algún familiar se le rompía algún dispositivo electrónico aprovechaba para arreglarlo, o, como poco, extraer aquellos componentes más útiles, a la espera de implementarlos en otros montajes.
            <br/><br/>
          </p>
          <div className="imgCont">
            {width>1250 ? img1:img2}
          </div>
          
          <p className="p2">
            Tal era la pasión por la temática que, hasta un año antes de entrar de comenzar la universidad tenía claro que quería estudiar una ingeniería. Sin embargo, poco a poco empezaron a aparecer en mi <i>feed</i> de youtube vídeos sobre las sorprendentes implicaciones de la física cuántica o las extrañas consecuencias de la relatividad... Me impactaron tanto fenómenos como el tunelamiento cuántico o la dilatación temporal que decidí embarcarme en un viaje que me permitiera vislumbrar la razón y el fundamento tras ese y muchos otros fenómenos de la realidad. Quería saber  <i>el porqué de la realidad</i>.
            <br/><br/>
            Lo que me traslada hasta hoy día, tras finalizar un grado con el que, aunque no comprendo todo lo que querría la arquitectura de la realidad, me sitúa un paso más cerca de lograrlo. 
            <br/><br/>
            Así, actualmente curso el máster en Ciencia de Datos ofertado por la facultad de Granada, con el objetivo de poder trasladar todo el pensamiento lógico, razonado y estratégico adquirido durante el grado (antes mencionado) en un impacto en el ambito social y económico. A la par de lo anterior, continuo formándome en tecnologías relacionadas con la programación (abarcando sectores desde el desarrollo web hasta el diseño de redes neuronales) y la electrónica digital (diseñando mis propios dispositivos o reparando otros ya existentes).
          </p>

        </div>

      </div>
    </section>
  )
}

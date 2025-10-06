"use client";
import { useEffect, useRef, useState } from "react";
import { CardExper } from "./card";
import "../styles/exper.css";

type DateBoxProps = { date: number | string };
function DateBox({ date }: DateBoxProps) {
  return (
    <div className="dateBox">
      <p>{date}</p>
    </div>
  );
}

export function LifePath() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const directionRef = useRef<"forward" | "backward">("forward");
  const [isPaused, setIsPaused] = useState(false);
  const [showPauseButton, setShowPauseButton] = useState(false);

  // 🔹 Mostrar u ocultar botón de pausa según el ancho de pantalla
  useEffect(() => {
    const updateButtonVisibility = () => {
      setShowPauseButton(window.innerWidth < 1024);
    };

    updateButtonVisibility();
    window.addEventListener("resize", updateButtonVisibility);
    return () => window.removeEventListener("resize", updateButtonVisibility);
  }, []);

  // 🔹 Movimiento automático bidireccional
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const speed = 2;
    const interval = setInterval(() => {
      if (pausedRef.current) return;

      if (directionRef.current === "forward") {
        slider.scrollLeft += speed;
        if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 2) {
          directionRef.current = "backward";
        }
      } else {
        slider.scrollLeft -= speed;
        if (slider.scrollLeft <= 0) {
          directionRef.current = "forward";
        }
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  // 🔹 Botón de pausa manual
  const togglePause = () => {
    pausedRef.current = !pausedRef.current;
    setIsPaused(pausedRef.current);
  };

  // 🔹 Pausa al pasar el ratón por encima del slider
  const handleMouseEnter = () => {
    pausedRef.current = true;
  };

  const handleMouseLeave = () => {
    pausedRef.current = isPaused; // si estaba pausado manualmente, sigue pausado
  };

  return (
    <section id="exper">
      <div className="i1">
        <b>Experiencia</b>
      </div>

      {/* 🔘 Botón de pausa solo en pantallas <1024px */}
      {showPauseButton && (
        <div className="pauseButtonCont">
          <button onClick={togglePause}>
            {isPaused ? "▶️ Reanudar" : "⏸️ Pausar movimiento"}
          </button>
        </div>
      )}

      <div className="legendCont">
        <div
          className="legend"
          style={{
            gridColumn: "3/-1",
            gridRow: "1/2",
            justifyItems: "end",
            alignItems: "start",
          }}
        >
          <div className="c">
            <div
              className="hArrow"
              style={{
                width: "25px",
                backgroundColor: "transparent",
                border: "2px solid #2e537d",
              }}
            ></div>
            <p>Completado</p>
          </div>

          <div className="c">
            <div
              className="hArrow"
              style={{
                width: "25px",
                backgroundColor: "transparent",
                border: "2px dashed #2e537d",
              }}
            ></div>
            <p>En progreso</p>
          </div>
        </div>
      </div>

      <div className="title">
        <b>Formativa</b>
      </div>

      {/* 🔽 Slider con pausa al hover */}
      <div
        className="sliderCont"
        ref={sliderRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="formativa">
          <div className="i 2025">
            <DateBox date={2025} />
            <CardExper
              imgSrc="/images/ugrLogo.png"
              title="Máster en Ciencia de Datos e Ingeniería de Computadores (UGR)"
              date="Sept. 2025 - actualidad"
              finished={false}
              description="Programa de posgrado centrado en ciencia de datos, inteligencia artificial y computación avanzada. Enfocado en la aplicación práctica de técnicas de machine learning, big data y optimización algorítmica."
            />
            <CardExper
              imgSrc="/images/udemyLogo.png"
              title="PyTorch for Deep Learning Bootcamp (Udemy)"
              date="Sept. 2025 - actualidad / 52h"
              finished={false}
              description={`
                <p>Aprendizaje profundo con PyTorch:</p>
                <ul>
                  <li>Redes convolucionales (CNN)</li>
                  <li>Redes recurrentes (RNN)</li>
                  <li>Transfer learning</li>
                </ul>
                <p>Enfoque práctico con proyectos reales.</p>
              `}
            />
            <CardExper
              imgSrc="/images/cambridgeLogo.png"
              title="Intensivo C1 Inglés (Cambridge)"
              date="Oct. 2025 - actualidad / 100h"
              finished={false}
              description="Curso avanzado para la obtención del nivel C1 en inglés, con enfoque en comunicación profesional, comprensión auditiva y redacción técnica en entornos internacionales."
            />
            <CardExper
              imgSrc="/images/udemyLogo.png"
              title="Machine Learning A-Z: AI, Python & R (Udemy)"
              date="Jul - Ago 2025 / 42.5h"
              finished={true}
              description="Curso práctico de machine learning aplicado con Python y R. Incluye modelos de regresión, clasificación, clustering, reducción de dimensionalidad y evaluación de rendimiento."
            />
          </div>

          <div className="doubleDate">
            <div className="i 2024">
              <DateBox date={2024} />
              <CardExper
                imgSrc="/images/udemyLogo.png"
                title="The Complete 2024 Web Development Bootcamp (Udemy)"
                date="Jul - Sept 2024 / 61h"
                finished={true}
                description="Curso completo de desarrollo web moderno con HTML, CSS, JavaScript, React, Node.js y bases de datos. Foco en la creación de aplicaciones responsive y funcionales para producción."
              />
            </div>

            <div className="i 2021">
              <DateBox date={2021} />
              <CardExper
                imgSrc="/images/ugrLogo.png"
                title="Grado en Física (UGR)"
                date="Sept. 2021 - Jun. 2025"
                finished={true}
                description="Grado universitario con especialización en física teórica y computacional. TFG centrado en simulaciones de la ecuación de Schrödinger y dinámica cuántica en 1D y 2D."
              />
            </div>
          </div>

          <div className="doubleDate">
            <div className="i 2020">
              <DateBox date={2020} />
              <CardExper
                imgSrc="/images/logoAnimacion.png"
                title="Curso de Animación Infantil (Ayto. Vera)"
                date="2020 / 20h"
                finished={true}
                description="Curso orientado al trabajo en equipo y la dinamización de grupos infantiles, desarrollando habilidades de comunicación y liderazgo."
              />
              <CardExper
                imgSrc="/images/logoDelf.png"
                title="Certificación B1 Francés (DELF)"
                date="2020"
                finished={true}
                description="Certificación oficial de nivel intermedio en francés otorgada por el Ministerio de Educación de Francia (DELF B1)."
              />
            </div>

            <div className="i 2018">
              <DateBox date={2018} />
              <CardExper
                imgSrc="/images/cambridgeLogo.png"
                title="Certificación B1 Inglés (Cambridge)"
                date="2018"
                finished={true}
                description="Acreditación oficial B1 de Cambridge English, validando competencia intermedia en comprensión lectora, auditiva y expresión oral."
              />
            </div>
          </div>

          <div className="doubleDate">
            <div className="i 2014_2016">
              <DateBox date={"2014-2016"} />
              <CardExper
                imgSrc="/images/logoRobotica.png"
                title="Cursos/Talleres de Robótica (Ayto. Huércal Overa)"
                date="2014 - 2016 / 180h"
                finished={true}
                description="Iniciación temprana a la robótica y programación mediante kits LEGO Mindstorms y Arduino, fomentando el pensamiento lógico y la creatividad tecnológica."
              />
            </div>
          </div>
        </div>
      </div>

      <div className="title">
        <b>Profesional</b>
      </div>

      <div className="profesional">
        <CardExper
          imgSrc="/images/mentoorLogo.png"
          title="Docente de Física y Matemáticas (Mentoor)"
          date="Ago. 2023 - Sept. 2025"
          finished={true}
          description="Impartición de clases personalizadas de Física y Matemáticas a estudiantes universitarios y de secundaria. Enfoque en la comprensión conceptual y el razonamiento científico."
        />
        <div className="vArrow"></div>

        <CardExper
          imgSrc="/images/logoFormaRobotik.png"
          title="Monitor de talleres de robótica (FORMA-ROBOTIK SL)"
          date="Durante 2022"
          finished={true}
          description="Diseño e impartición de talleres educativos de robótica y programación con LEGO y Arduino para centros escolares de primaria y secundaria."
        />
        <div className="vArrow"></div>

        <CardExper
          imgSrc="/images/logoEuroseper.png"
          title="Monitor de robótica y programación (Grupo Euroseper)"
          date="Oct. 2019 - Mayo 2020"
          finished={true}
          description="Responsable de talleres extracurriculares de robótica y pensamiento computacional en centros educativos. Introducción a la programación visual y trabajo colaborativo."
        />
      </div>
    </section>
  );
}

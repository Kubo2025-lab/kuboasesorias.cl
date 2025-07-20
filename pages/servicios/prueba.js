import Head from "next/head";
import { useEffect, useState, Fragment } from "react";

import Header from "../../src/components/Header";
import Facts from "../../src/components/sections/Facts";
import Portfolio from "../../src/components/sections/Portfolio";
import Testimonials from "../../src/components/sections/Testimonials";
import Copyright from "../../src/components/sections/Copyright";

export default function Pruebas() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("wowjs").then(({ WOW }) => {
        new WOW({ live: false }).init();
      });
    }
  }, []);

const frases = [
  "¿Sigues copiando y pegando propuestas? Te estás quedando en el pasado.",
  "Automatiza el armado técnico y económico en minutos, no días.",
  "Menos tiempo haciendo documentos, más tiempo ganando licitaciones.",
  "Plantillas inteligentes que se adaptan al proyecto y al cliente.",
  "Ahorra horas de trabajo, elimina errores y postula con ventaja."
];

  const [texto, setTexto] = useState("");
  const [fraseIndex, setFraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [borrando, setBorrando] = useState(false);

  useEffect(() => {
    let timer;
    if (!borrando && charIndex < frases[fraseIndex].length) {
      timer = setTimeout(() => {
        setTexto((prev) => prev + frases[fraseIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 40);
    } else if (!borrando && charIndex === frases[fraseIndex].length) {
      timer = setTimeout(() => {
        setBorrando(true);
      }, 1500);
    } else if (borrando && charIndex > 0) {
      timer = setTimeout(() => {
        setTexto((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, 20);
    } else if (borrando && charIndex === 0) {
      setBorrando(false);
      setFraseIndex((prev) => (prev + 1) % frases.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, borrando, fraseIndex]);

  return (
    <div className="vertical-scroll">
      <Head>
        <title>Prueba de Scroll Vertical | Kubo</title>
      </Head>
      <Header />

      {/* Sección Home integrada aquí */}
      <section className="home image" id="home">
        <div>
          <div className="position-relative">
            <h1>
              <span><span className="animated-layer">Automatiza.<span>.</span></span></span>
              <span><span className="animated-layer">Propón.</span></span>
              <span><span className="animated-layer">Gana.</span></span>
            </h1>
            <span className="intro animated-layer maquina">{texto}<span className="cursor">|</span></span>
          </div>
        </div>
        <span className="animated-layer animated-btn cta" id="cta"><span></span></span>
      </section>

      <Facts />
      <Testimonials />
      <Copyright />
    </div>
  );
}

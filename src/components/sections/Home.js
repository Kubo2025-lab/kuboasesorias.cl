import { useEffect, useState } from "react";

const Home = () => {
  const frases = [
    "Impulsamos tu crecimiento con estrategia comercial, control presupuestario y foco en resultados concretos.",
    "Transformamos la gestión de tu empresa para que venda más, planifique mejor y ejecute con excelencia.",
    "Estrategia, orden y ejecución: el método para que tu negocio compita de verdad y gane donde importa.",
    "Desde el diagnóstico hasta la adjudicación: acompañamos a PYMES que quieren dejar de improvisar y empezar a crecer.",
    "Te ayudamos a estructurar, postular y cerrar con éxito: menos intuición, más planificación comercial."
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
      }, 40); // velocidad de escritura
    } else if (!borrando && charIndex === frases[fraseIndex].length) {
      timer = setTimeout(() => {
        setBorrando(true);
      }, 30000); // espera antes de borrar
    } else if (borrando && charIndex > 0) {
      timer = setTimeout(() => {
        setTexto((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, 20); // velocidad de borrado
    } else if (borrando && charIndex === 0) {
      setBorrando(false);
      setFraseIndex((prev) => (prev + 1) % frases.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, borrando, fraseIndex]);

  return (
    <section className="home image" id="home">
      <div>
        <div className="position-relative">
          <h1>
            <span>
              <span className="animated-layer">
                Hola<span>.</span>
              </span>
            </span>
            <span>
              <span className="animated-layer">Somos</span>
            </span>
            <span>
              <span className="animated-layer">Kubo Asesorías</span>
            </span>
          </h1>

          {/* 👇 Frase rotativa con efecto máquina */}
          <span className="intro animated-layer maquina">
            {texto}<span className="cursor">|</span>
          </span>
        </div>
      </div>

      {/* CALL TO ACTION STARTS */}
      <span className="animated-layer animated-btn cta" id="cta">
        <span></span>
      </span>
      {/* CALL TO ACTION ENDS */}
    </section>
  );
};

export default Home;



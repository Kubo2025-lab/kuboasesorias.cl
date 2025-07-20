import { Fragment, useEffect } from "react";
import Head from "next/head";

const Prueba = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("blog-page");
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Zona de Pruebas Kubo</title>
        <link rel="stylesheet" href="/css/servicios-pruebas.css" />
      </Head>

      <a href="/" className="back-btn">
        <i className="fa-solid fa-arrow-left"></i>
      </a>

      <section className="hero-section">
        <div className="contenido-limitado">
          <div className="hero-content">
            <h1>Zona de pruebas visuales y funcionales</h1>
            <p style={{ marginBottom: "1rem" }}>
              Esta página es para testear nuevas ideas antes de pasarlas a producción.
            </p>
            <a href="#prototipo1" className="custom-btn">Ir a Prototipo 1</a>
          </div>
        </div>
      </section>

      <section id="prototipo1" className="benefits-section">
        <div className="section-container">
          <h2>Prototipo 1: Grid con animación hover</h2>
          <div className="benefits-grid">
            <div className="benefit-box prueba-hover">
              <i className="fa-solid fa-microchip"></i>
              <h4>Componente 1</h4>
              <p>Este bloque tiene un hover especial para destacar ideas nuevas.</p>
            </div>
            <div className="benefit-box prueba-hover">
              <i className="fa-solid fa-rocket"></i>
              <h4>Componente 2</h4>
              <p>Útil para probar colores, sombras, efectos o animaciones temporales.</p>
            </div>
            <div className="benefit-box prueba-hover">
              <i className="fa-solid fa-vial"></i>
              <h4>Componente 3</h4>
              <p>Todo lo que se cree aquí puede migrarse fácilmente a producción.</p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Prueba;

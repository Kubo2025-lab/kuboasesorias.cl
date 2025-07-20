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
            <h1>Zona de Pruebas Visuales</h1>
            <p style={{ marginBottom: "1rem" }}>
              Aquí probamos componentes antes de llevarlos a producción.
            </p>
          </div>
        </div>
      </section>

      {/* 1. Métrica destacada */}
      <section className="metricas-section">
        <div className="section-container">
          <div className="metric-card">
            <h2 className="counter">+31</h2>
            <p>Proyectos adjudicados por nuestros clientes este año</p>
          </div>
        </div>
      </section>

      {/* 2. Caja testimonial */}
      <section className="testimonial-section">
        <div className="section-container">
          <div className="testimonial-box">
            <p>
              "Gracias a Kubo, hoy gano más licitaciones y paso menos horas en
              Excel. Su sistema me salvó."
            </p>
            <strong>– Carolina Osorio, Técnica en Licitaciones</strong>
          </div>
        </div>
      </section>

      {/* 3. Comparador visual */}
      <section className="comparador-section">
        <div className="section-container">
          <h4>Antes vs. Después</h4>
          <div className="image-compare">
            <img src="/assets/test/antes.jpg" alt="Antes" className="img-left" />
            <img src="/assets/test/despues.jpg" alt="Después" className="img-right" />
          </div>
        </div>
      </section>

    </Fragment>
  );
};

export default Prueba;

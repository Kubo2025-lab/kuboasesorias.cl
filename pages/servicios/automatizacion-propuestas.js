// pages/automatizacion-propuestas.js
import Head from "next/head";
import Script from "next/script";
import React from "react";

const AutomatizacionPropuestas = () => {
  return (
    <div className="servicio-page">
      <Head>
        <title>Automatiza tus propuestas | Kubo Asesorías</title>
        <meta
          name="description"
          content="Ahorra tiempo y gana más licitaciones con plantillas inteligentes integradas con PRESTO, BIM y Excel."
        />
        <link rel="stylesheet" href="/css/servicios.css" />
      </Head>

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Automatiza tus propuestas y gana más licitaciones</h1>
          <p>
            Plantillas inteligentes + PRESTO + BIM + Excel: la fórmula para dejar de perder tiempo y aumentar tu tasa de éxito.
          </p>
          <a href="#contacto" className="custom-btn">
            Quiero Automatizar Mis Propuestas
          </a>
        </div>
        <div className="hero-video">
          <iframe
            src="https://www.youtube.com/embed/VIDEOCODE"
            title="Automatización de Propuestas"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="benefits-section">
        <h2>¿Por qué automatizar?</h2>
        <div className="benefits-grid">
          <div className="benefit-box">
            <i className="fa-solid fa-clock"></i>
            <h3>70% menos tiempo</h3>
            <p>Se acelera drásticamente el armado gracias a plantillas conectadas.</p>
          </div>
          <div className="benefit-box">
            <i className="fa-solid fa-briefcase"></i>
            <h3>+ profesionalismo</h3>
            <p>Menos errores, mejor presentación y foco en lo que realmente importa.</p>
          </div>
          <div className="benefit-box">
            <i className="fa-solid fa-trophy"></i>
            <h3>+ tasa de adjudicación</h3>
            <p>Propuestas con alto puntaje técnico, entregadas a tiempo y con sello de calidad.</p>
          </div>
        </div>
      </section>

      {/* PROPUESTA SECTION */}
      <section className="propuesta-section">
        <h2>¿Qué incluye nuestro servicio?</h2>
        <ul>
          <li><strong>✅ Diagnóstico inicial:</strong> levantamiento de tu proceso actual</li>
          <li><strong>🧠 Plantillas:</strong> entrega de formatos configurables y escalables</li>
          <li><strong>📊 Integración:</strong> conexión con PRESTO, Excel y BIM según rubro</li>
          <li><strong>🎓 Capacitación:</strong> sesiones grabadas + seguimiento 1 a 1</li>
          <li><strong>📁 Repositorio:</strong> acceso privado a documentos y videos</li>
        </ul>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section" id="contacto">
        <h2>¡Conversemos!</h2>
        <form className="formulario-contacto">
          <input type="text" name="nombre" placeholder="Tu nombre" required />
          <input type="email" name="email" placeholder="Correo electrónico" required />
          <textarea name="mensaje" placeholder="Cuéntanos tu necesidad..." required />
          <button type="submit" className="custom-btn">Enviar consulta</button>
        </form>
        <div className="respuesta-contacto"></div>
      </section>

      {/* BOTÓN WHATSAPP */}
      <a
        href="https://wa.me/56921792366"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>

      {/* FontAwesome */}
      <Script
        src="https://kit.fontawesome.com/58b3d4ebac.js"
        crossOrigin="anonymous"
      ></Script>
    </div>
  );
};

export default AutomatizacionPropuestas;





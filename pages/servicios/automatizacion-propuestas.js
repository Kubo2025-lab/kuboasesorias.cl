// automatizacion-propuestas.js

import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Scrollbar from "./src/components/Scrollbar";

const AutomatizacionPropuestas = () => {
  return (
    <>
      <Head>
        <title>Automatización de Propuestas | Kubo Asesorías</title>
        <meta name="description" content="Optimiza tu proceso de licitación con automatización inteligente usando PRESTO, Excel, y BIM." />
        <link rel="stylesheet" href="/public/css/servicios.css" />
      </Head>

      <Scrollbar>
        <div className="servicio-page">
          {/* HERO SECTION */}
          <section className="hero-section">
            <div className="hero-content">
              <h1>Automatiza tus propuestas y gana más licitaciones</h1>
              <p>
                Plantillas inteligentes + PRESTO + BIM + Excel: la fórmula para dejar de perder tiempo y aumentar tu tasa de éxito.
              </p>
              <Link href="#cta">
                <button className="custom-btn">Quiero Automatizar Mis Propuestas</button>
              </Link>
            </div>
            <div className="hero-video">
              <iframe
                src="https://www.youtube.com/embed/AqcjdkPMPJA"
                frameBorder="0"
                allowFullScreen
                title="Video Kubo"
              ></iframe>
            </div>
          </section>

          {/* BENEFICIOS */}
          <section className="benefits-section">
            <h2>¿Por qué automatizar?</h2>
            <div className="benefits-grid">
              <div className="benefit-box">
                <i className="fa-solid fa-clock" />
                <h3>70% menos tiempo</h3>
                <p>El armado de propuestas se acelera drásticamente gracias a plantillas conectadas.</p>
              </div>
              <div className="benefit-box">
                <i className="fa-solid fa-briefcase" />
                <h3>+ profesionalismo</h3>
                <p>Menos errores, mejor presentación y foco en el contenido que realmente importa.</p>
              </div>
              <div className="benefit-box">
                <i className="fa-solid fa-star" />
                <h3>+ tasa de adjudicación</h3>
                <p>Propuestas con mejor puntaje técnico, entregadas a tiempo y con sello de calidad.</p>
              </div>
            </div>
          </section>

          {/* PROPUESTA */}
          <section className="propuesta-section">
            <h2>¿Qué incluye la automatización?</h2>
            <ul>
              <li><strong>✅ Plantillas PRESTO:</strong> con fórmulas, referencias y formatos prearmados.</li>
              <li><strong>✅ Integración Excel:</strong> para lectura y consolidación de cantidades y partidas.</li>
              <li><strong>✅ Conexión BIM:</strong> desde modelos SketchUp y Revit con extracción directa de metrado.</li>
              <li><strong>✅ Manual de uso:</strong> PDF y videotutorial personalizado.</li>
            </ul>
          </section>

          {/* CTA FINAL */}
          <section className="cta-section" id="cta">
            <h2>¿Listo para automatizar y ganar más?</h2>
            <form className="formulario-contacto">
              <input type="text" placeholder="Nombre" required />
              <input type="email" placeholder="Correo" required />
              <textarea placeholder="Cuéntanos tu necesidad..." required></textarea>
              <button type="submit" className="custom-btn">Enviar</button>
            </form>
            <div className="respuesta-contacto" id="respuestaContacto"></div>
          </section>

          {/* BOTÓN WHATSAPP */}
          <a
            href="https://wa.me/56921792366"
            className="whatsapp-float"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contáctanos por WhatsApp"
          >
            <i className="fab fa-whatsapp"></i>
          </a>

          {/* BOTÓN VOLVER */}
          <Link href="/servicios">
            <div className="back-button">
              <i className="fas fa-arrow-left"></i>
            </div>
          </Link>
        </div>
      </Scrollbar>

      {/* ICONOS */}
      <Script src="https://kit.fontawesome.com/ea0c215c3b.js" crossOrigin="anonymous" />
    </>
  );
};

export default AutomatizacionPropuestas;





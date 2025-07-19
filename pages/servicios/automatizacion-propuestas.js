import Head from "next/head";
import { Fragment, useEffect } from "react";

const AutomatizacionPropuestas = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("servicio-page");
  }, []);

  return (
    <Fragment>
      <Head>
        <link rel="stylesheet" href="/css/servicios.css" />
      </Head>

      <a href="/" className="back-btn">
        <i className="fa-solid fa-arrow-left"></i>
      </a>

      {/* Botón flotante de WhatsApp */}
      <a
        href="https://wa.me/56921792366"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>

      <section className="hero-section">
        <div className="hero-content">
          <h1 className="animated-layer fadeInUp wow">
            Automatiza tus propuestas y gana más licitaciones
          </h1>
          <p className="animated-layer fadeInUp wow">
            Plantillas inteligentes + PRESTO + BIM + Excel: la fórmula para dejar de perder tiempo y aumentar tu tasa de éxito.
          </p>
          <a href="#contacto" className="custom-btn animated-layer fadeInUp wow">
            Quiero automatizar mis propuestas
          </a>
        </div>
        <div className="hero-video">
          <iframe
            className="youtube-video"
            src="https://www.youtube.com/embed/9aTWRphGdnA"
            title="Video demostrativo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="benefits-section">
        <h2>¿Por qué automatizar?</h2>
        <div className="benefits-grid">
          <div className="benefit-box">
            <i className="fa-solid fa-clock"></i>
            <h4>70% menos tiempo</h4>
            <p>El armado de propuestas se acelera drásticamente gracias a plantillas conectadas.</p>
          </div>
          <div className="benefit-box">
            <i className="fa-solid fa-file-circle-check"></i>
            <h4>+ profesionalismo</h4>
            <p>Menos errores, mejor presentación y foco en el contenido que realmente importa.</p>
          </div>
          <div className="benefit-box">
            <i className="fa-solid fa-trophy"></i>
            <h4>+ tasa de adjudicación</h4>
            <p>Propuestas con mejor puntaje técnico, entregadas a tiempo y con sello de calidad.</p>
          </div>
        </div>
      </section>

      <section className="propuesta-section">
        <h2>¿Cómo funciona nuestro servicio?</h2>
        <ul>
          <li><strong>01.</strong> Diagnóstico de tu proceso actual de armado</li>
          <li><strong>02.</strong> Diseño de plantillas inteligentes en PRESTO y Excel</li>
          <li><strong>03.</strong> Integración con tu flujo BIM (si aplica)</li>
          <li><strong>04.</strong> Capacitación en uso y documentación del sistema</li>
        </ul>
      </section>

      <section id="contacto" className="cta-section">
        <h2>Solicita tu diagnóstico gratuito</h2>
        <form
          className="formulario-contacto"
          onSubmit={async (e) => {
            e.preventDefault();
            const form = new FormData(e.target);
            const data = Object.fromEntries(form.entries());
            data.motivo = "Automatización de propuestas";

            try {
              await fetch("https://branddata.app.n8n.cloud/webhook/formulario-k-u-b-o", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
              });
              document.getElementById("respuesta").style.display = "block";
              e.target.reset();
            } catch (err) {
              console.error("Error al enviar:", err);
            }
          }}
        >
          <input type="text" name="nombre" placeholder="Tu nombre" required />
          <input type="email" name="email" placeholder="Tu correo electrónico" required />
          <textarea name="mensaje" placeholder="Cuéntanos tu necesidad" required></textarea>
          <button type="submit" className="custom-btn">Enviar mensaje</button>
        </form>
        <div id="respuesta" className="respuesta-contacto" style={{ display: "none" }}>
          <p>Gracias por contactarnos. Te responderemos pronto.</p>
          <a href="https://www.kuboasesorias.cl/#portfolio" className="custom-btn">
            Volver a servicios
          </a>
        </div>
      </section>
    </Fragment>
  );
};

export default AutomatizacionPropuestas;




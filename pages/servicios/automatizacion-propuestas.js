import Head from "next/head";
import Link from "next/link";
import Layout from "@/src/layouts/Layout";
import ScrollToTop from "@/src/components/ScrollToTop";

const AutomatizacionPropuestas = () => {
  return (
    <Layout pageClassName="servicio-page">
      <Head>
        <title>Automatiza tus Propuestas | Kubo Asesorías</title>
        <meta
          name="description"
          content="Automatiza tus propuestas con plantillas inteligentes, PRESTO, BIM y Excel. Aumenta tu tasa de adjudicación y reduce tiempos."
        />
      </Head>

      <section className="hero-section">
        <div className="hero-content">
          <h1>Automatiza tus propuestas y gana más licitaciones</h1>
          <p>
            Plantillas inteligentes + PRESTO + BIM + Excel: la fórmula para dejar de perder tiempo y aumentar tu tasa de éxito.
          </p>
          <a href="#formulario" className="custom-btn">
            Quiero Automatizar Mis Propuestas
          </a>
        </div>

        <div className="hero-video">
          <iframe
            src="https://www.youtube.com/embed/AqcjdkPMPJA"
            title="Video de automatización de propuestas"
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
            <i className="fa-solid fa-briefcase"></i>
            <h4>+ profesionalismo</h4>
            <p>Menos errores, mejor presentación y foco en el contenido que realmente importa.</p>
          </div>
          <div className="benefit-box">
            <i className="fa-solid fa-star"></i>
            <h4>+ tasa de adjudicación</h4>
            <p>Propuestas con mejor puntaje técnico, entregadas a tiempo y con sello de calidad.</p>
          </div>
        </div>
      </section>

      <section className="propuesta-section">
        <h2>¿Cómo funciona nuestro servicio?</h2>
        <ul>
          <li><strong>1. Diagnóstico:</strong> Analizamos tu proceso actual de armado de propuestas.</li>
          <li><strong>2. Diseño:</strong> Creamos plantillas inteligentes en PRESTO y Excel.</li>
          <li><strong>3. Integración:</strong> Automatizamos con tus flujos BIM (si aplica).</li>
          <li><strong>4. Capacitación:</strong> Te entrenamos y entregamos documentación lista.</li>
        </ul>
      </section>

      <section className="cta-section" id="formulario">
        <h2>Solicita una asesoría gratuita</h2>
        <form className="formulario-contacto">
          <input type="text" placeholder="Tu nombre" required />
          <input type="email" placeholder="Tu correo electrónico" required />
          <textarea placeholder="Cuéntanos tu necesidad..." required></textarea>
          <button type="submit" className="custom-btn">Enviar</button>
        </form>
        <div className="respuesta-contacto">Te responderemos en menos de 24h.</div>
      </section>

      <a
        href="https://wa.me/56921792366"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-whatsapp"></i>
      </a>

      <ScrollToTop />
    </Layout>
  );
};

export default AutomatizacionPropuestas;





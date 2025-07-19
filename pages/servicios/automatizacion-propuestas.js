// /pages/servicios/automatizacion-propuestas.js
import Head from "next/head";
import { useState } from "react";
import Blog from "../../components/sections/Blog";
import Contact from "../../components/sections/Contact";

// CSS
import "../../public/css/style.css";
import "../../public/css/bootstrap.min.css";
import "../../public/css/all.min.css";
import "../../public/css/devicon.min.css";
import "../../public/css/swiper-bundle.min.css";
import "../../public/css/jquery.m.Custom.Scrollbar.min.css";
import "../../public/css/stylewitcher.css";

const AutomatizacionPropuestas = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    motivo: "Automatización de propuestas",
    mensaje: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("https://branddata.app.n8n.cloud/webhook/formulario-k-u-b-o", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  return (
    <>
      <Head>
        <title>Automatización de Propuestas | Kubo Asesorías</title>
        <meta
          name="description"
          content="Automatizamos propuestas técnicas y económicas usando plantillas inteligentes conectadas a PRESTO, Excel y BIM."
        />
      </Head>

      <section className="main-section" id="automatizacion-propuestas">
        <div className="custom-title">
          <h3>
            <span>Automatización de Propuestas</span>
          </h3>
        </div>

        <div className="portfolio-details">
          <img
            src="/assets/portfolio/project-1.jpg"
            alt="Automatización de propuestas"
            className="img-fluid"
          />
          <p>
            Automatizamos el armado de propuestas técnicas y económicas usando
            plantillas inteligentes conectadas a PRESTO, Excel y BIM.
          </p>
          <ul>
            <li>Servicio: Consultoría</li>
            <li>Modalidad: A distancia</li>
            <li>Duración: 3 meses</li>
          </ul>

          {!submitted ? (
            <form className="formulario-contacto" onSubmit={handleSubmit}>
              <input
                type="text"
                name="nombre"
                placeholder="Tu nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Tu correo electrónico"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="mensaje"
                placeholder="Cuéntanos tu necesidad"
                value={formData.mensaje}
                onChange={handleChange}
                required
              />
              <button type="submit" className="custom-btn">
                Enviar mensaje
              </button>
            </form>
          ) : (
            <div className="respuesta-contacto">
              <p>Gracias por contactarnos. Te responderemos pronto.</p>
              <a href="https://www.kuboasesorias.cl/#portfolio" className="custom-btn">
                Volver a servicios
              </a>
            </div>
          )}
        </div>
      </section>

      <Blog />
      <Contact />
    </>
  );
};

export default AutomatizacionPropuestas;

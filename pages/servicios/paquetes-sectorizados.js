import { Fragment, useEffect } from "react";
import Head from "next/head";

const PaquetesSectorizados = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("blog-page");

    const frases = [
      "No todas las propuestas son iguales: cada sector tiene sus códigos, tiempos y prioridades.",
      "Tu estrategia en Salud no puede ser la misma que en Infraestructura Verde o Deporte.",
      "Nuestros paquetes sectorizados te preparan con contenido y herramientas diseñadas para cada rubro.",
      "Gana licitaciones hablando el lenguaje del sector al que postulas.",
      "Kubo crea paquetes que no solo cumplen, sino que destacan técnica y estratégicamente."
    ];

    const contenedor = document.getElementById("frase-dinamica");
    let index = 0;
    let charIndex = 0;
    let currentTimeout;

    const escribirFrase = () => {
      const frase = frases[index];
      if (charIndex <= frase.length) {
        contenedor.innerHTML = `<p>${frase.substring(0, charIndex)}<span class="cursor">|</span></p>`;
        charIndex++;
        currentTimeout = setTimeout(escribirFrase, 40);
      } else {
        setTimeout(borrarFrase, 3000);
      }
    };

    const borrarFrase = () => {
      const frase = frases[index];
      if (charIndex >= 0) {
        contenedor.innerHTML = `<p>${frase.substring(0, charIndex)}<span class="cursor">|</span></p>`;
        charIndex--;
        currentTimeout = setTimeout(borrarFrase, 30);
      } else {
        index = (index + 1) % frases.length;
        setTimeout(escribirFrase, 1000);
      }
    };

    escribirFrase();
    return () => clearTimeout(currentTimeout);
  }, []);

  return (
    <Fragment>
      <Head>
        <link rel="stylesheet" href="/css/servicios.css" />
      </Head>

      <a href="/" className="back-btn">
        <i className="fa-solid fa-arrow-left"></i>
      </a>

      <a
        href="https://wa.me/56921792366"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>

      {/* HERO */}
      <section className="hero-section">
        <div className="contenido-limitado">
          <div className="hero-content">
            <h1>Paquetes integrales por sector que hablan el lenguaje de cada rubro</h1>
            <div className="frase-dinamica" id="frase-dinamica">
              <p>Gana más licitaciones con contenido adaptado al sector donde compites.</p>
            </div>
            <a href="#contacto" className="custom-btn">Solicitar Paquete Sectorizado</a>
          </div>

          <div className="hero-video">
            <iframe
              src="https://www.youtube.com/embed/LgSGP-E6naM"
              title="Paquetes Sectorizados Kubo"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* FEATURES – ADVANTAGES – BENEFITS */}
      <section className="benefits-section">
        <div className="section-container">
          <h2>¿Qué contiene cada paquete?</h2>

          {/* SALUD */}
          <div className="benefits-grid">
            <div className="benefit-box">
              <i className="fa-solid fa-kit-medical"></i>
              <h4>PAQUETE SALUD</h4>
              <p><strong>Features:</strong> Plantillas de equipamiento clínico, criterios técnicos de MINSAL, modelo de carta GES.</p>
              <p><strong>Advantages:</strong> Ajustado a bases tipo Salud y requerimientos de continuidad operativa.</p>
              <p><strong>Benefits:</strong> Mejor puntuación técnica, claridad ante unidades compradoras, menor rechazo por errores formales.</p>
            </div>

            {/* DEPORTE */}
            <div className="benefit-box">
              <i className="fa-solid fa-futbol"></i>
              <h4>PAQUETE DEPORTE</h4>
              <p><strong>Features:</strong> Fichas de implementación deportiva, criterios MINDEP, estructura para obras menores.</p>
              <p><strong>Advantages:</strong> Formato optimizado para postulación a infraestructura y talleres deportivos.</p>
              <p><strong>Benefits:</strong> Aumento en la tasa de adjudicación en proyectos comunales y fondos FNDR.</p>
            </div>

            {/* INFRA VERDE */}
            <div className="benefit-box">
              <i className="fa-solid fa-tree-city"></i>
              <h4>PAQUETE INFRAESTRUCTURA VERDE</h4>
              <p><strong>Features:</strong> Modelos de ficha para arborización, ciclo-infraestructura, áreas verdes urbanas.</p>
              <p><strong>Advantages:</strong> Adaptado a criterios del MINVU, SUBDERE y bases participativas.</p>
              <p><strong>Benefits:</strong> Propuestas más sustentables, técnica y políticamente mejor valoradas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className="cta-section">
        <div className="section-container">
          <h2>Solicita tu paquete sectorizado</h2>
          <form
            className="formulario-contacto"
onSubmit={async (e) => {
  e.preventDefault();
  const form = new FormData(e.target);
  const data = Object.fromEntries(form.entries());
  data.motivo = "Paquetes Sectorizados";

  const respuestaDiv = document.getElementById("respuesta");
  const formulario = e.target;

  formulario.style.display = "none";
  respuestaDiv.innerHTML = "<p>📨 Enviando tu solicitud de paquete sectorizado...</p>";
  respuestaDiv.style.display = "block";

  try {
    const resp = await fetch("https://branddata.app.n8n.cloud/webhook/formulario-k-u-b-o", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const resultado = await resp.json();
    if (resp.ok && resultado.status === "ok") {
      respuestaDiv.innerHTML = `
        <p>✅ Solicitud enviada con éxito. Pronto recibirás una respuesta personalizada.</p>
        <a href="https://www.kuboasesorias.cl/#portfolio" class="custom-btn">Volver a servicios</a>`;
      e.target.reset();
    } else {
      throw new Error("Error en la respuesta del servidor");
    }
  } catch (err) {
    console.error("Error al enviar:", err);
    respuestaDiv.innerHTML = `
      <p>❌ Ocurrió un error. Intenta nuevamente o contáctanos por WhatsApp.</p>
      <button onclick="location.reload()" class="custom-btn">Reintentar</button>`;
    formulario.style.display = "block";
  }
}}

          >
            <input type="text" name="nombre" placeholder="Tu nombre" required />
            <input type="email" name="email" placeholder="Tu correo electrónico" required />
            <textarea name="mensaje" placeholder="¿Qué paquete te interesa? (Salud, Deporte, Verde)" required></textarea>
            <button type="submit" className="custom-btn">Solicitar ahora</button>
          </form>
          <div id="respuesta" className="respuesta-contacto" style={{ display: "none" }}>
            <p>Tu solicitud fue enviada. Te responderemos pronto.</p>
            <a href="https://www.kuboasesorias.cl/#portfolio" className="custom-btn">
              Volver a servicios
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default PaquetesSectorizados;


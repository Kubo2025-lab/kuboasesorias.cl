import { Fragment, useEffect } from "react";
import Head from "next/head";

const CapacitacionCertificada = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("blog-page");

    const frases = [
      "¿Cuántos puntos estás perdiendo en cada licitación por no tener una certificación que respalde tu experiencia?",
      "Una buena capacitación no solo te entrena, te diferencia frente a la competencia en la evaluación técnica.",
      "Dejar de estudiar es dejar de competir. Capacítate con enfoque práctico, real y orientado al mercado público.",
      "Nuestro contenido está hecho por consultores que ganan licitaciones, no por teóricos ni improvisados.",
      "Certifícate, potencia tu perfil en ChileCompra y destaca en cada presentación técnica que entregues."
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

      <section className="hero-section">
        <div className="contenido-limitado">
          <div className="hero-content">
            <h1>Certifica tus habilidades y gana con ventaja</h1>
            <div className="frase-dinamica" id="frase-dinamica">
              <p>Capacítate con cursos pensados para ganar licitaciones.</p>
            </div>
            <a href="#contacto" className="custom-btn">Quiero Certificarme con Kubo</a>
          </div>

          <div className="hero-video">
            <iframe
              src="https://www.youtube.com/embed/Kh6V8n-4wGM"
              title="Capacitación Certificada KUBO"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="section-container">
          <h2>¿Por qué capacitarte con nosotros?</h2>
          <div className="benefits-grid">
            <div className="benefit-box">
              <i className="fa-solid fa-certificate"></i>
              <h4>+ puntaje técnico</h4>
              <p>Nuestras certificaciones mejoran tu presentación en licitaciones públicas y privadas.</p>
            </div>
            <div className="benefit-box">
              <i className="fa-solid fa-user-graduate"></i>
              <h4>+ posicionamiento profesional</h4>
              <p>Tu nombre y perfil destacan en plataformas como ChileCompra y LinkedIn.</p>
            </div>
            <div className="benefit-box">
              <i className="fa-solid fa-laptop-code"></i>
              <h4>100% online y flexible</h4>
              <p>Estudia a tu ritmo con acceso 24/7 desde cualquier lugar.</p>
            </div>
          </div>
          <div className="benefits-grid">
            <div className="benefit-box">
              <i className="fa-solid fa-cubes"></i>
              <h4>Módulos especializados</h4>
              <p>Contenido adaptado según el rubro o especialidad técnica.</p>
            </div>
            <div className="benefit-box">
              <i className="fa-solid fa-shield-halved"></i>
              <h4>Certificación con respaldo</h4>
              <p>Incluye insignia digital y diploma verificable en línea.</p>
            </div>
            <div className="benefit-box">
              <i className="fa-solid fa-people-group"></i>
              <h4>Comunidad exclusiva</h4>
              <p>Acceso a foros privados, descuentos y asesorías grupales.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="propuesta-section">
        <div className="contenido-limitado">
          <h2>¿Qué incluye nuestra capacitación?</h2>
          <ul>
            <li><strong>01.</strong> Diagnóstico de tus brechas y fortalezas técnicas</li>
            <li><strong>02.</strong> Selección personalizada de módulos según tu perfil o rubro</li>
            <li><strong>03.</strong> Acceso 24/7 a plataforma online con videos y recursos descargables</li>
            <li><strong>04.</strong> Evaluaciones prácticas con retroalimentación</li>
            <li><strong>05.</strong> Certificación digital con validación pública</li>
            <li><strong>06.</strong> Asistencia para mejorar tu perfil profesional en ChileCompra</li>
            <li><strong>07.</strong> Acceso por 1 año al contenido actualizado</li>
            <li><strong>08.</strong> Bono exclusivo: plantilla editable de propuesta técnica</li>
          </ul>
        </div>
      </section>

      <section id="contacto" className="cta-section">
        <div className="section-container">
          <h2>Solicita una clase gratuita</h2>
          <form
            className="formulario-contacto"
            onSubmit={async (e) => {
  e.preventDefault();
  const form = new FormData(e.target);
  const data = Object.fromEntries(form.entries());
  data.motivo = "Capacitación Certificada";

  const respuestaDiv = document.getElementById("respuesta");
  const formulario = e.target;

  formulario.style.display = "none";
  respuestaDiv.innerHTML = "<p>📨 Enviando tu solicitud... Danos un segundo.</p>";
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
        <p>✅ Clase gratuita solicitada con éxito. Revisa tu correo 📩</p>
        <a href="https://www.kuboasesorias.cl/#portfolio" class="custom-btn">
          Volver a servicios
        </a>`;
      e.target.reset();
    } else {
      throw new Error("Error de servidor");
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
            <textarea name="mensaje" placeholder="¿Qué tipo de curso te interesa?" required></textarea>
            <button type="submit" className="custom-btn">Solicitar clase gratuita</button>
          </form>
          <div id="respuesta" className="respuesta-contacto" style={{ display: "none" }}>
            <p>Gracias por contactarnos. Te enviaremos acceso a tu clase muy pronto.</p>
            <a href="https://www.kuboasesorias.cl/#portfolio" className="custom-btn">
              Volver a servicios
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default CapacitacionCertificada;

import { Fragment, useEffect } from "react";
import Head from "next/head";

const ModeloFreemium = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("blog-page");

    const frases = [
      "Empieza con acceso gratuito a herramientas y contenido clave para ganar licitaciones.",
      "No necesitas pagar para mejorar tu estrategia desde hoy. Aprovecha nuestra base gratuita.",
      "Cuando tu negocio crezca, estarás listo para escalar con servicios premium sin fricciones.",
      "Todo parte por aprender: cursos base, alertas y plantillas están a tu alcance sin costo.",
      "Freemium en Kubo no es una muestra: es un camino real para crecer con apoyo progresivo."
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

      {/* ATTENTION */}
      <section className="hero-section">
        <div className="contenido-limitado">
          <div className="hero-content">
            <h1>Accede gratis a herramientas para licitar mejor</h1>
            <div className="frase-dinamica" id="frase-dinamica">
              <p>Todo parte por aprender. Y en Kubo, eso es gratuito.</p>
            </div>
            <a href="#contacto" className="custom-btn">Quiero Empezar Gratis</a>
          </div>

  <div className="hero-video">
      <iframe
        src="https://www.youtube.com/embed/9aTWRphGdnA"
        title="Automatización de Propuestas KUBO"
        allowFullScreen
      ></iframe>
    </div>
        </div>
      </section>

      {/* INTEREST */}
      <section className="benefits-section">
        <div className="section-container">
          <h2>¿Qué incluye el plan gratuito?</h2>
          <div className="benefits-grid">
            <div className="benefit-box">
              <i className="fa-solid fa-bell"></i>
              <h4>Alertas de licitaciones</h4>
              <p>Recibe oportunidades segmentadas directo a tu correo.</p>
            </div>
            <div className="benefit-box">
              <i className="fa-solid fa-book-open"></i>
              <h4>Guías prácticas</h4>
              <p>Accede a recursos clave para postular con éxito desde cero.</p>
            </div>
            <div className="benefit-box">
              <i className="fa-solid fa-video"></i>
              <h4>Clases grabadas</h4>
              <p>Capacitación inicial en mercado público, sin costo alguno.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DESIRE */}
      <section className="propuesta-section">
        <div className="contenido-limitado">
          <h2>¿Qué ganas al pasar al plan premium?</h2>
          <ul>
            <li><strong>✔</strong> Acceso a estudios de licitaciones personalizados</li>
            <li><strong>✔</strong> Asesoría directa en armado de propuestas</li>
            <li><strong>✔</strong> Plantillas exclusivas en PRESTO, Excel y Word</li>
            <li><strong>✔</strong> Participación en comunidad privada</li>
            <li><strong>✔</strong> Descuentos en capacitación, automatización y más</li>
            <li><strong>✔</strong> Evaluación técnica de tus postulaciones antes del envío</li>
            <li><strong>✔</strong> Soporte personalizado para contrataciones públicas</li>
          </ul>
        </div>
      </section>

      {/* ACTION */}
      <section id="contacto" className="cta-section">
        <div className="section-container">
          <h2>Empieza gratis, escala cuando estés listo</h2>
          <form
            className="formulario-contacto"
           onSubmit={async (e) => {
  e.preventDefault();
  const form = new FormData(e.target);
  const data = Object.fromEntries(form.entries());
  data.motivo = "Modelo Freemium";

  const respuestaDiv = document.getElementById("respuesta");
  const formulario = e.target;

  formulario.style.display = "none";
  respuestaDiv.innerHTML = "<p>📨 Registrando tu cuenta gratuita... Un momento.</p>";
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
        <p>✅ Cuenta gratuita creada con éxito. Revisa tu correo para comenzar 📩</p>
        <a href="https://www.kuboasesorias.cl/#portfolio" class="custom-btn">Volver a servicios</a>`;
      e.target.reset();
    } else {
      throw new Error("Error en la respuesta del servidor");
    }
  } catch (err) {
    console.error("Error al enviar:", err);
    respuestaDiv.innerHTML = `
      <p>❌ Ocurrió un error al crear tu cuenta. Intenta nuevamente o contáctanos por WhatsApp.</p>
      <button onclick="location.reload()" class="custom-btn">Reintentar</button>`;
    formulario.style.display = "block";
  }
}}

          >
            <input type="text" name="nombre" placeholder="Tu nombre" required />
            <input type="email" name="email" placeholder="Tu correo electrónico" required />
            <textarea name="mensaje" placeholder="¿En qué quieres que te ayudemos primero?" required></textarea>
            <button type="submit" className="custom-btn">Crear cuenta gratuita</button>
          </form>
          <div id="respuesta" className="respuesta-contacto" style={{ display: "none" }}>
            <p>Tu cuenta gratuita ha sido registrada. Te enviaremos acceso pronto.</p>
            <a href="https://www.kuboasesorias.cl/#portfolio" className="custom-btn">
              Volver a servicios
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ModeloFreemium;

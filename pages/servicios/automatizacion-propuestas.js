import { Fragment, useEffect } from "react";
import Head from "next/head";

const AutomatizacionPropuestas = () => {
 useEffect(() => {
  document.querySelector("body").classList.add("blog-page");

const frases = [
  "¿Vas a seguir gastando horas cada semana copiando, corrigiendo y ajustando propuestas mientras tus competidores ya las generan en minutos?",
  "Cada día que sigues armando propuestas manualmente, estás dejando pasar oportunidades más grandes y clientes que no volverán.",
  "Si una sola propuesta mal hecha puede costarte un contrato millonario... ¿vale la pena seguir improvisando?",
  "Automatizar no es solo ahorrar tiempo, es dejar de perder licitaciones por errores evitables y documentos desordenados.",
  "Tu equipo vale más que repetir tareas. Automatiza y enfoca tu energía donde realmente haces la diferencia: ganando contratos."
];


  const contenedor = document.getElementById("frase-dinamica");
  let index = 0;
  let charIndex = 0;
  let escribiendo = true;
  let currentTimeout;

  const escribirFrase = () => {
    const frase = frases[index];
    if (charIndex <= frase.length) {
      contenedor.innerHTML = `<p>${frase.substring(0, charIndex)}<span class="cursor">|</span></p>`;
      charIndex++;
      currentTimeout = setTimeout(escribirFrase, 40); // total escritura ~8s para frases largas
    } else {
      escribiendo = false;
      setTimeout(borrarFrase, 3000); // espera 3s antes de borrar
    }
  };

  const borrarFrase = () => {
    const frase = frases[index];
    if (charIndex >= 0) {
      contenedor.innerHTML = `<p>${frase.substring(0, charIndex)}<span class="cursor">|</span></p>`;
      charIndex--;
      currentTimeout = setTimeout(borrarFrase, 30); // borrado ~3s
    } else {
      index = (index + 1) % frases.length;
      escribiendo = true;
      setTimeout(escribirFrase, 1000); // pausa 1s antes de siguiente frase
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
  <div className="contenido-limitado">
    <div className="hero-content">
      <h1>Automatiza tus propuestas y gana más licitaciones</h1>
      <div className="frase-dinamica" id="frase-dinamica">
  <p>Agiliza tus propuestas técnicas sin perder calidad.</p>
</div>

      <a href="#contacto" className="custom-btn">Quiero Automatizar Mis Propuestas</a>
    </div>

    {/* ⬇️ Video DEBAJO del contenido */}
    <div className="hero-video">
      <iframe
        src="https://www.youtube.com/embed/9aTWRphGdnA"
        title="Automatización de Propuestas KUBO"
        allowFullScreen
      ></iframe>
    </div>
  </div>
</section>

      <section className="benefits-section">
        <div className="section-container"> {/* Nuevo contenedor */}
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
                    <div className="benefits-grid">
            <div className="benefit-box">
              <i className="fa-solid fa-clock"></i>
              <h4>+ integración de herramientas</h4>
              <p>Conecta PRESTO, Excel, BIM y tu flujo interno en una sola estructura.</p>
            </div>
            <div className="benefit-box">
              <i className="fa-solid fa-file-circle-check"></i>
              <h4>+ control de versiones</h4>
              <p>Evita errores por archivos duplicados o mal gestionados.</p>
            </div>
            <div className="benefit-box">
              <i className="fa-solid fa-trophy"></i>
              <h4>+ foco estratégico</h4>
              <p>Dedica más tiempo a lo que realmente importa: ganar.</p>
            </div>
          </div>
        </div> {/* Fin Nuevo contenedor */}
      </section>

<section className="propuesta-section">
  <div className="contenido-limitado">
    <h2>¿Cómo funciona nuestro servicio?</h2>
    <ul>
      <li><strong>01.</strong> Diagnóstico personalizado de tu proceso actual de armado</li>
      <li><strong>02.</strong> Diseño de plantillas inteligentes en PRESTO y Excel según tus rubros más frecuentes</li>
      <li><strong>03.</strong> Integración con tu flujo BIM o softwares complementarios (si aplica)</li>
      <li><strong>04.</strong> Capacitación completa en uso, edición y gestión de las nuevas herramientas</li>
      <li><strong>05.</strong> Documentación técnica del sistema implementado y manual de usuario</li>
      <li><strong>06.</strong> Validación en una propuesta real o simulada para comprobar resultados</li>
      <li><strong>07.</strong> Ajustes finales según feedback de tu equipo o responsables técnicos</li>
      <li><strong>08.</strong> Soporte post implementación durante 30 días para resolver dudas y afinar detalles</li>
    </ul>
  </div>
</section>

      <section id="contacto" className="cta-section">
        <div className="section-container"> {/* Nuevo contenedor */}
          <h2>Solicita tu diagnóstico gratuito</h2>
          <form
            className="formulario-contacto"
onSubmit={async (e) => {
  e.preventDefault();
  const form = new FormData(e.target);
  const data = Object.fromEntries(form.entries());
  data.motivo = "Automatización de propuestas";

  const respuestaDiv = document.getElementById("respuesta");
  const formulario = e.target;

  // Ocultar formulario y mostrar mensaje "enviando..."
  formulario.style.display = "none";
  respuestaDiv.innerHTML = "<p>Enviando mensaje... Danos un minuto ⏳</p>";
  respuestaDiv.style.display = "block";

  try {
const resp = await fetch("https://branddata.app.n8n.cloud/webhook/formulario-k-u-b-o", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data),
});

if (resp.ok) {
  const respuesta = await resp.json();
  if (respuesta.redirect) {
    window.location.href = respuesta.redirect;
  } else {
    document.getElementById("respuesta").innerHTML = "<p>✅ Mensaje enviado con éxito</p>";
    document.getElementById("respuesta").style.display = "block";
  }
} else {
  throw new Error("Error en la respuesta del servidor");
}
  } catch (err) {
    console.error("Error al enviar:", err);
    respuestaDiv.innerHTML = `
      <p>❌ Ocurrió un error al enviar el mensaje. Intenta nuevamente más tarde.</p>
      <a href="https://www.kuboasesorias.cl/#contacto" class="custom-btn">
        Reintentar
      </a>`;
    formulario.style.display = "block";
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
        </div> {/* Fin Nuevo contenedor */}
      </section>
    </Fragment>
  );
};

export default AutomatizacionPropuestas;





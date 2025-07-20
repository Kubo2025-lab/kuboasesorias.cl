import { Fragment, useEffect } from "react";
import Head from "next/head";

const PostAdjudicacion = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("blog-page");

    const frases = [
      "Te adjudicaste el contrato. ¿Y ahora qué?",
      "La ejecución técnica no espera, el informe mensual tampoco.",
      "Muchos ganan... y después pierden por errores en la entrega.",
      "¿Tienes claridad sobre tus obligaciones técnicas y fiscales post-adjudicación?",
      "Con Kubo te acompañamos desde la firma hasta el último informe entregado a tiempo."
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

      {/* PROBLEMA */}
      <section className="hero-section">
        <div className="contenido-limitado">
          <div className="hero-content">
            <h1>Te ganaste la licitación. ¿Y ahora qué?</h1>
            <div className="frase-dinamica" id="frase-dinamica">
              <p>La ejecución es el nuevo campo de batalla. No lo enfrentes solo.</p>
            </div>
            <a href="#contacto" className="custom-btn">Necesito Acompañamiento</a>
          </div>

          <div className="hero-video">
            <iframe
              src="https://www.youtube.com/embed/RMkVf-HDD1I"
              title="Post-Adjudicación Kubo"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* AGITACIÓN */}
      <section className="benefits-section">
        <div className="section-container">
          <h2>Los problemas vienen después de ganar</h2>
          <div className="benefits-grid">
            <div className="benefit-box">
              <i className="fa-solid fa-triangle-exclamation"></i>
              <h4>Informes mal entregados</h4>
              <p>Los errores en reporting técnico-fiscal son una de las principales causas de conflictos.</p>
            </div>
            <div className="benefit-box">
              <i className="fa-solid fa-stopwatch"></i>
              <h4>Retrasos sin justificación</h4>
              <p>Plazos de entrega incumplidos terminan en multas, términos anticipados o pérdidas reputacionales.</p>
            </div>
            <div className="benefit-box">
              <i className="fa-solid fa-scroll"></i>
              <h4>Falta de trazabilidad</h4>
              <p>Muchos equipos no documentan lo ejecutado, dificultando la defensa ante fiscalización.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUCIÓN */}
      <section className="propuesta-section">
        <div className="contenido-limitado">
          <h2>¿Qué incluye nuestro servicio post-adjudicación?</h2>
          <ul>
            <li><strong>✔</strong> Asistencia técnica continua durante la ejecución contractual</li>
            <li><strong>✔</strong> Modelos de informe técnico, financiero y de cumplimiento</li>
            <li><strong>✔</strong> Checklist de entregables según bases y contrato</li>
            <li><strong>✔</strong> Revisión de hitos y plazos para evitar multas</li>
            <li><strong>✔</strong> Documentación trazable para defensa ante fiscalización</li>
            <li><strong>✔</strong> Acompañamiento en modificaciones, anexos o prórrogas</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className="cta-section">
        <div className="section-container">
          <h2>Evita problemas antes de que ocurran</h2>
          <form
            className="formulario-contacto"
            onSubmit={async (e) => {
              e.preventDefault();
              const form = new FormData(e.target);
              const data = Object.fromEntries(form.entries());
              data.motivo = "Post-Adjudicación";

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
            <textarea name="mensaje" placeholder="¿Qué proyecto necesitas ejecutar correctamente?" required></textarea>
            <button type="submit" className="custom-btn">Solicitar Acompañamiento</button>
          </form>
          <div id="respuesta" className="respuesta-contacto" style={{ display: "none" }}>
            <p>Gracias. Nos pondremos en contacto para iniciar tu apoyo post-adjudicación.</p>
            <a href="https://www.kuboasesorias.cl/#portfolio" className="custom-btn">
              Volver a servicios
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default PostAdjudicacion;

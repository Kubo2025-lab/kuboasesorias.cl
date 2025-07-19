import { Fragment, useEffect } from "react";

const AutomatizacionPropuestas = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("blog-page");
  }, []);

  return (
    <Fragment>
	 <Head>
        <link rel="stylesheet" href="/css/servicios.css" />
     </Head>
      <a href="/" className="back-btn">
        <i className="fa-solid fa-arrow-left"></i>
      </a>
      <div className="blog-content">
        <a href="/" className="back-btn">
        <i className="fa-solid fa-arrow-left"></i>
      </a>
      <div className="blog-content">
        <h1>#Kubo_Blog</h1>
        <div className="main-post">
          <div className="meta d-flex align-items-center">
            <div className="d-flex align-items-center">
              <i className="fa-regular fa-calendar" />
              <span>19 Jul 2025</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="fa-solid fa-tag" />
              <span>automatización, propuestas, tecnología</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="fa-regular fa-comments" />
              <span>0 comentarios</span>
            </div>
          </div>

          <h3>Automatiza. Propón. Gana.</h3>
          <img src="/assets/portfolio/project-1.jpg" alt="Automatización de propuestas" />

          <div className="post-content">
            <p>
              <strong>😓 El problema:</strong> Si cada vez que armas una propuesta técnica o económica
              te enfrentas al mismo caos de Excel, copias y pegas, anexos desordenados y errores humanos,
              estás perdiendo tiempo, dinero y oportunidades.
            </p>

            <p>
              <strong>✅ La solución:</strong> En KUBO desarrollamos una metodología de automatización de propuestas que conecta plantillas inteligentes a PRESTO, Excel y BIM. Creamos una estructura base que se alimenta de tus datos para generar documentos listos, completos y con estilo profesional.
            </p>

            <p>
              <strong>📊 Resultados reales:</strong><br />
              - Reducción de tiempos en un 70%<br />
              - Eliminación de errores recurrentes<br />
              - Aumento en la tasa de adjudicación por propuestas más sólidas y coherentes
            </p>

            <p>
              <strong>🚀 Ideal para:</strong> Constructoras, consultoras y equipos técnicos que participan en licitaciones públicas o privadas.
            </p>

            <h4>¿Te interesa automatizar tus propuestas?</h4>

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
              <button type="submit" className="custom-btn">Quiero automatizar</button>
            </form>

            <div id="respuesta" className="respuesta-contacto" style={{ display: "none" }}>
              <p>Gracias por contactarnos. Te responderemos pronto.</p>
              <a href="https://www.kuboasesorias.cl/#portfolio" className="custom-btn">
                Volver a servicios
              </a>
            </div>
          </div>
        </div>
      </div>
	   </div>
    </Fragment>
  );
};
export default AutomatizacionPropuestas;




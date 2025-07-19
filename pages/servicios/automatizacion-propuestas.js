// /pages/servicios/automatizacion-propuestas.js
import { Fragment, useEffect } from "react";

const AutomatizacionPropuestas = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("blog-page");
  }, []);

  return (
    <Fragment>
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
              ¿Cansado de repetir el mismo proceso cada vez que preparas una propuesta para una licitación? ¿Te frustra perder tiempo armando cuadros en Excel, ajustando documentos técnicos y copiando datos que ya tienes?
            </p>
            <p>
              En KUBO llevamos esto a otro nivel: <strong>automatizamos el armado de propuestas</strong> usando plantillas inteligentes conectadas a PRESTO, Excel y BIM. Menos errores, más velocidad, y más foco en lo estratégico.
            </p>
            <p>
              🔧 <strong>¿Cómo lo hacemos?</strong><br />
              Creamos un ecosistema donde tus documentos se generan automáticamente desde una base de datos estructurada. El presupuesto se actualiza en tiempo real con PRESTO, los anexos se completan desde Excel y los planos se sincronizan desde tu modelo BIM.
            </p>
            <p>
              ⏱️ <strong>¿Cuánto se gana?</strong><br />
              Clientes han reducido el tiempo de armado de propuestas en un 70%. Pero más importante aún: aumentaron su tasa de éxito porque entregan documentos profesionales, sin errores y bien enfocados.
            </p>
            <p>
              🚀 <strong>Ideal para constructoras, ingenierías y consultoras</strong><br />
              Si postulas regularmente al Mercado Público o licitaciones privadas, este servicio es para ti.
            </p>
          </div>

          <div className="post-content">
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
              <button type="submit" className="custom-btn">Enviar mensaje</button>
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
    </Fragment>
  );
};

export default AutomatizacionPropuestas;


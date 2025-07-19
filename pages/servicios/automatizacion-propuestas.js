import { Fragment, useEffect } from "react";

const AutomatizacionPropuestas = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("servicio-page");
  }, []);

  return (
    <Fragment>
      {/* Botón de regreso */}
      <a href="/" className="back-btn">
        <i className="fa-solid fa-arrow-left"></i>
      </a>

      {/* Botón flotante WhatsApp */}
      <a
        href="https://api.whatsapp.com/send?phone=56921792366&text=Hola%2C%20quiero%20automatizar%20mis%20propuestas"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>

      {/* Sección principal */}
      <div className="blog-content">
        <h1>Automatiza tus propuestas y gana más licitaciones</h1>

        <div className="main-post">
          <div className="meta d-flex align-items-center">
            <div className="d-flex align-items-center">
              <i className="fa-regular fa-calendar" />
              <span>19 Jul 2025</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="fa-solid fa-tag" />
              <span>automatización, licitaciones</span>
            </div>
          </div>

          <div className="post-content">
            <p>
              ¿Estás cansado de perder tiempo armando propuestas desde cero cada vez que postulas a una licitación? Automatizar tu proceso no solo te ahorra tiempo, también eleva tu estándar de calidad.
            </p>
            <p>
              Nuestro servicio combina herramientas como PRESTO, Excel y flujos BIM para que armes propuestas en un 70% menos de tiempo, con menos errores y mayor profesionalismo.
            </p>

            <h4>Beneficios de automatizar:</h4>
            <ul>
              <li><strong>70% menos tiempo:</strong> gracias al uso de plantillas conectadas y parametrizadas.</li>
              <li><strong>Mayor profesionalismo:</strong> presentación impecable y sin errores de formato o cálculos.</li>
              <li><strong>Mejor tasa de adjudicación:</strong> más tiempo para enfocarte en el contenido técnico y en la estrategia.</li>
            </ul>

            <h4>¿Cómo funciona nuestro servicio?</h4>
            <ol>
              <li><strong>Diagnóstico</strong> de tu proceso actual.</li>
              <li><strong>Diseño</strong> de plantillas inteligentes en PRESTO y Excel.</li>
              <li><strong>Integración</strong> con tu flujo BIM (si aplica).</li>
              <li><strong>Capacitación</strong> y entrega de documentación.</li>
            </ol>

            <h4>Video demostrativo</h4>
            <div className="hero-video" style={{ margin: "2rem 0" }}>
              <iframe
                className="youtube-video"
                src="https://www.youtube.com/embed/9aTWRphGdnA"
                title="Video demostrativo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <h4>Solicita tu diagnóstico gratuito</h4>
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





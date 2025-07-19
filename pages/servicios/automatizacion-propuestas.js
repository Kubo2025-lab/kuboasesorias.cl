import { Fragment, useEffect } from "react";

const AutomatizacionPropuestas = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("servicio-page");
  }, []);

  return (
    <Fragment>
      <a href="/" className="back-btn">
        <i className="fa-solid fa-arrow-left"></i>
      </a>

      <div className="blog-content">
        <h1 className="titulo-principal">Automatización de Propuestas</h1>

        {/* VIDEO */}
        <div className="hero-video" style={{ marginBottom: "3rem" }}>
          <iframe
            className="youtube-video"
            src="https://www.youtube.com/embed/9aTWRphGdnA"
            title="Video demostrativo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* TEXTO DE VENTA */}
        <div className="post-content">
          <h2 className="subtitulo">¿Por qué automatizar?</h2>
          <ul>
            <li><strong>✅ 70% menos tiempo:</strong> armamos plantillas inteligentes conectadas entre PRESTO, Excel y BIM.</li>
            <li><strong>✅ Menos errores:</strong> profesionalismo desde el primer clic, propuestas claras y coherentes.</li>
            <li><strong>✅ Mayor adjudicación:</strong> mejores puntajes técnicos y entregas sin estrés.</li>
          </ul>

          <h2 className="subtitulo">¿Qué incluye nuestro servicio?</h2>
          <ol>
            <li><strong>01.</strong> Diagnóstico de tu flujo actual</li>
            <li><strong>02.</strong> Desarrollo de plantillas inteligentes</li>
            <li><strong>03.</strong> Integración con tu sistema BIM (si aplica)</li>
            <li><strong>04.</strong> Capacitación personalizada</li>
          </ol>
        </div>

        {/* FORMULARIO DE CONTACTO */}
        <div id="contacto" className="cta-section">
          <h2 className="subtitulo">Solicita tu diagnóstico gratuito</h2>
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
            <a href="https://www.kuboasesorias.cl/#portfolio" className="custom-btn">Volver a servicios</a>
          </div>
        </div>
      </div>

      {/* WHATSAPP FLOAT */}
      <a
        href="https://wa.me/56921792366"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escríbenos por WhatsApp"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </Fragment>
  );
};

export default AutomatizacionPropuestas;






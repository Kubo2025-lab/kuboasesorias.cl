// /pages/servicios/automatizacion-propuestas.js
import { Fragment, useEffect } from "react";

const AutomatizacionPropuestas = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("service-page");
  }, []);

  return (
    <Fragment>
      <a href="/" className="back-btn">
        <i className="fa-solid fa-arrow-left"></i>
      </a>
      <div className="service-content">
        <h1>Automatización de Propuestas</h1>
        <div className="main-section">
          <h2>Problema</h2>
          <p>
            Si cada vez que armas una propuesta técnica o económica te enfrentas al mismo caos de Excel,
            copias y pegas, anexos desordenados y errores humanos, estás perdiendo tiempo, dinero y oportunidades.
          </p>

          <h2>Solución</h2>
          <p>
            En KUBO desarrollamos una metodología de automatización de propuestas que conecta plantillas inteligentes
            a PRESTO, Excel y BIM. Creamos una estructura base que se alimenta de tus datos para generar documentos
            listos, completos y con estilo profesional.
          </p>

          <h2>Resultados</h2>
          <ul>
            <li>Reducción de tiempos en un 70%</li>
            <li>Eliminación de errores recurrentes</li>
            <li>Aumento en la tasa de adjudicación por propuestas más sólidas y coherentes</li>
          </ul>

          <h2>¿Para quién es?</h2>
          <p>
            Constructoras, consultoras y equipos técnicos que participan en licitaciones públicas o privadas.
          </p>

          <h2>Contáctanos</h2>
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
    </Fragment>
  );
};

export default AutomatizacionPropuestas;



// /pages/servicios/capacitacion-certificada.js
import { Fragment, useEffect } from "react";

const CapacitacionCertificada = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("page-servicio");
  }, []);

  return (
    <Fragment>
      <a href="/" className="back-btn">
        <i className="fa-solid fa-arrow-left" />
      </a>
      <div className="service-content">
        {/* Sección 1: Título */}
        <h1>🚀 Capacitación Certificada para Profesionales que Licitan</h1>

        {/* Sección 2: Problema */}
        <div className="service-section">
          <h3>El conocimiento técnico ya no es suficiente.</h3>
          <p>
            Cada día, más licitaciones exigen dominio de plataformas, criterios de evaluación,
            estrategias de oferta y gestión documental. ¿El problema? La mayoría aprende a punta de errores.
          </p>
          <p>
            Si estás en una constructora, consultora o eres profesional independiente, sabes que capacitarse no es un lujo: es sobrevivir en el mercado público.
          </p>
        </div>

        {/* Sección 3: Solución */}
        <div className="service-section">
          <h3>Capacitación diseñada para ganar licitaciones.</h3>
          <p>
            Creamos programas 100% online, modulares, cortos y aplicables desde el día uno.  
            Nuestros cursos están validados por empresas reales y se actualizan constantemente según las nuevas exigencias del sistema.
          </p>
          <p>
            Además, obtendrás un certificado de KUBO, con sello de reconocimiento en el ecosistema de compras públicas.
          </p>
        </div>

        {/* Sección 4: Beneficios */}
        <div className="service-section">
          <h3>🎯 Beneficios de nuestra capacitación:</h3>
          <ul>
            <li>✅ Certificación con respaldo de empresa especializada en mercado público.</li>
            <li>✅ Aprendizaje aplicado: estudia hoy, usa mañana.</li>
            <li>✅ Acceso de por vida y actualizaciones sin costo.</li>
            <li>✅ Cursos desde 1 hora a programas completos de 10 horas.</li>
            <li>✅ Marca personal fortalecida con credenciales verificables.</li>
          </ul>
        </div>

        {/* Sección 5: Llamado a la acción */}
        <div className="cta-section">
          <h4>¿Listo para dejar de improvisar en las licitaciones?</h4>
          <form
            className="formulario-contacto"
            onSubmit={async (e) => {
              e.preventDefault();
              const form = new FormData(e.target);
              const data = Object.fromEntries(form.entries());
              data.motivo = "Capacitación certificada";

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
            <textarea name="mensaje" placeholder="Cuéntanos qué curso te interesa" required></textarea>
            <button type="submit" className="custom-btn">Quiero capacitarme</button>
          </form>
          <div id="respuesta" className="respuesta-contacto" style={{ display: "none" }}>
            <p>Gracias por escribirnos. Un asesor te contactará en breve.</p>
            <a href="https://www.kuboasesorias.cl/#portfolio" className="custom-btn">
              Volver a servicios
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CapacitacionCertificada;

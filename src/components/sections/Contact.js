import { useState } from "react";

const Contact = () => {
  const [enviando, setEnviando] = useState(false);

  return (
    <section className="contact main-section flex-column-mobile" id="contact">
      {/* TÍTULO */}
      <div className="custom-title">
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              #Contáctanos
            </span>
          </span>
        </h3>
      </div>

      {/* BLOQUES DE CONTACTO */}
      <div className="boxes">
        <div>
          <div className="animated-layer fade-in-down-animation fadeInUp wow">
            <i className="fa fa-phone" />
            <p>
              <span className="small-text">Fono</span>
              +569 2179 2366
            </p>
          </div>
          <div className="animated-layer fade-in-up-animation fadeInUp wow">
            <i className="fa fa-location-dot" />
            <p>
              <span className="small-text">Dirección</span>
              Merced N° 838 of. 117, Santiago
            </p>
          </div>
        </div>
        <div>
          <div className="animated-layer fade-in-down-animation fadeInUp wow">
            <i className="fa fa-envelope" />
            <p>
              <span className="small-text">Email</span>
              eduardo@kuboasesorias.cl
            </p>
          </div>
          <div className="animated-layer fade-in-up-animation fadeInUp wow">
            <i className="fa fa-share-nodes" />
            <span className="small-text">Síguenos</span>
            <ul className="social">
              <li><a href="#"><i className="fa-brands fa-github" /></a></li>
              <li><a href="#"><i className="fa-brands fa-twitter" /></a></li>
              <li><a href="#"><i className="fa-brands fa-dribbble" /></a></li>
              <li><a href="#"><i className="fa-brands fa-facebook" /></a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* FORMULARIO SEPARADO */}
      <div className="form-wrapper">
        <div className="contact-form-container animated-layer fade-in-up-animation fadeInUp wow">
          <form
            className="contact-form"
            onSubmit={async (e) => {
              e.preventDefault();
              setEnviando(true);
              const data = {
                nombre: e.target.nombre.value,
                email: e.target.email.value,
                motivo: e.target.motivo.value,
                mensaje: e.target.mensaje.value,
              };

              try {
                const response = await fetch("https://branddata.app.n8n.cloud/webhook/formulario-k-u-b-o", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(data),
                });

                const result = await response.json();
                alert(result?.respuesta || "Mensaje enviado. ¡Gracias por escribir!");
                e.target.reset();
              } catch (error) {
                alert("Hubo un error al enviar. Intenta nuevamente.");
              }
              setEnviando(false);
            }}
          >
            <input type="text" name="nombre" placeholder="Tu nombre" required />
            <input type="email" name="email" placeholder="Tu correo electrónico" required />
            <input type="text" name="motivo" placeholder="Motivo del contacto" required />
            <textarea name="mensaje" rows="5" placeholder="Tu mensaje" required></textarea>
            <button type="submit" className="custom-btn">
              {enviando ? "Enviando..." : "Enviar"}
            </button>
          </form>
        </div>
      </div>

      {/* SEPARADOR */}
      <img alt="" className="separator hide-mobile" src="assets/separator.png" />
    </section>
  );
};

export default Contact;


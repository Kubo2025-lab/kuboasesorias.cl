import { Fragment, useEffect } from "react";
import Head from "next/head";

const FinanciamientoConsultorias = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("blog-page");

    const frases = [
      "¿Y si pudieras implementar esa consultoría clave sin postergarla por falta de caja?",
      "El financiamiento no es para los que están mal, es para los que quieren crecer sin frenar.",
      "Accede a consultorías profesionales con pago flexible, en cuotas, sin agobios ni bancos tradicionales.",
      "Hoy, automatizar tu empresa, capacitar a tu equipo o mejorar tus procesos no depende del dinero.",
      "Aliados fintech, procesos rápidos y cero letra chica. Así funciona en Kubo."
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

      {/* PICTURE - PANORAMA IDEAL */}
      <section className="hero-section">
        <div className="contenido-limitado">
          <div className="hero-content">
            <h1>Haz crecer tu negocio sin frenar por falta de fondos</h1>
            <div className="frase-dinamica" id="frase-dinamica">
              <p>Tu próxima consultoría no tiene que esperar. Finánciala con Kubo.</p>
            </div>
            <a href="#contacto" className="custom-btn">Quiero Financiar mi Consultoría</a>
          </div>

          <div className="hero-video">
            <iframe
              src="https://www.youtube.com/embed/vWE_F4cLgx8"
              title="Financiamiento de Consultorías - Kubo"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* PROMISE - FACILIDAD Y FLEXIBILIDAD */}
      <section className="benefits-section">
        <div className="section-container">
          <h2>¿Por qué financiar una consultoría?</h2>
          <div className="benefits-grid">
            <div className="benefit-box">
              <i className="fa-solid fa-hand-holding-dollar"></i>
              <h4>Paga en cuotas</h4>
              <p>Divide el costo del servicio en pagos mensuales y conserva tu liquidez.</p>
            </div>
            <div className="benefit-box">
              <i className="fa-solid fa-bolt"></i>
              <h4>Aprobación rápida</h4>
              <p>Evaluación express con respuesta en 24h. Sin trámites bancarios eternos.</p>
            </div>
            <div className="benefit-box">
              <i className="fa-solid fa-money-bill-wave"></i>
              <h4>Sin pie ni letra chica</h4>
              <p>Transparencia total. Financia desde $250.000 sin papeleos innecesarios.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF - PRUEBAS, ALIANZAS Y GARANTÍA */}
      <section className="propuesta-section">
        <div className="contenido-limitado">
          <h2>Nuestros aliados y respaldo</h2>
          <ul>
            <li><strong>✔</strong> Alianzas con fintech chilenas autorizadas por la CMF</li>
            <li><strong>✔</strong> Financiamiento disponible para PYMES constituidas y personas naturales con giro</li>
            <li><strong>✔</strong> Historial sin rechazo por deuda comercial previa moderada</li>
            <li><strong>✔</strong> Casos de clientes que han pagado consultorías Kubo en hasta 6 cuotas</li>
            <li><strong>✔</strong> Garantía de cumplimiento por parte de Kubo: pagas solo si el servicio se entrega según contrato</li>
          </ul>
        </div>
      </section>

      {/* PUSH - CTA FUERTE */}
      <section id="contacto" className="cta-section">
        <div className="section-container">
          <h2>Solicita tu evaluación gratuita</h2>
          <form
            className="formulario-contacto"
            onSubmit={async (e) => {
              e.preventDefault();
              const form = new FormData(e.target);
              const data = Object.fromEntries(form.entries());
              data.motivo = "Financiamiento de Consultoría";

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
            <textarea name="mensaje" placeholder="¿Qué servicio te gustaría financiar?" required></textarea>
            <button type="submit" className="custom-btn">Solicitar evaluación</button>
          </form>
          <div id="respuesta" className="respuesta-contacto" style={{ display: "none" }}>
            <p>Gracias por tu interés. Te contactaremos para evaluar tu solicitud.</p>
            <a href="https://www.kuboasesorias.cl/#portfolio" className="custom-btn">
              Volver a servicios
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default FinanciamientoConsultorias;

import { Fragment, useEffect } from "react";
import Head from "next/head";

const ClubDeUsuarios = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("blog-page");

    const frases = [
      "¿Cuántas veces sentiste que estabas solo frente a una licitación compleja, sin a quién preguntar?",
      "Las empresas que se agrupan, comparten estrategias y se apoyan entre sí... ganan más y se equivocan menos.",
      "Imagina tener una comunidad de expertos a un clic de distancia, disponibles justo cuando necesitas una opinión.",
      "El Club de Usuarios Kubo no es un grupo: es tu red de apoyo estratégica para licitaciones públicas.",
      "Tu empresa no necesita más suerte, necesita aliados que ya hayan recorrido el mismo camino y lo compartan contigo."
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

      {/* HERO + PROBLEMA */}
      <section className="hero-section">
        <div className="contenido-limitado">
          <div className="hero-content">
            <h1>Únete al Club de Usuarios Kubo y deja de pelear solo</h1>
            <div className="frase-dinamica" id="frase-dinamica">
              <p>No estás solo. Somos más de los que crees.</p>
            </div>
            <a href="#contacto" className="custom-btn">Quiero unirme al Club</a>
          </div>

          <div className="hero-video">
            <iframe
              src="https://www.youtube.com/embed/8LhZYzVrfgs"
              title="Club de Usuarios KUBO"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* PROMESA */}
      <section className="benefits-section">
        <div className="section-container">
          <h2>¿Por qué ser parte del Club?</h2>
          <div className="benefits-grid">
            <div className="benefit-box">
              <i className="fa-solid fa-handshake-angle"></i>
              <h4>Acompañamiento real</h4>
              <p>No más dudas sin resolver. Respaldo experto para tus decisiones estratégicas.</p>
            </div>
            <div className="benefit-box">
              <i className="fa-solid fa-people-arrows"></i>
              <h4>Networking estratégico</h4>
              <p>Conecta con otras empresas que compiten en los mismos mercados.</p>
            </div>
            <div className="benefit-box">
              <i className="fa-solid fa-file-shield"></i>
              <h4>Acceso a recursos premium</h4>
              <p>Plantillas, guías, ejemplos reales y herramientas que no están disponibles públicamente.</p>
            </div>
          </div>
          <div className="benefits-grid">
            <div className="benefit-box">
              <i className="fa-solid fa-comments-dollar"></i>
              <h4>Descuentos exclusivos</h4>
              <p>Beneficios especiales en asesorías y servicios de Kubo solo para miembros activos.</p>
            </div>
            <div className="benefit-box">
              <i className="fa-solid fa-calendar-days"></i>
              <h4>Sesiones grupales semanales</h4>
              <p>Análisis en vivo de licitaciones y resolución de casos reales vía Zoom.</p>
            </div>
            <div className="benefit-box">
              <i className="fa-solid fa-unlock-keyhole"></i>
              <h4>Contenido anticipado</h4>
              <p>Accede antes que nadie a nuevos productos, herramientas y oportunidades.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRUEBA */}
      <section className="propuesta-section">
        <div className="contenido-limitado">
          <h2>¿Qué incluye tu membresía?</h2>
          <ul>
            <li><strong>01.</strong> Bienvenida y diagnóstico personalizado</li>
            <li><strong>02.</strong> Acceso a comunidad privada activa</li>
            <li><strong>03.</strong> Plantillas, recursos y ejemplos actualizados cada mes</li>
            <li><strong>04.</strong> Participación en reuniones grupales semanales</li>
            <li><strong>05.</strong> Canal directo vía WhatsApp con el equipo Kubo</li>
            <li><strong>06.</strong> Prioridad en atención y soporte técnico</li>
            <li><strong>07.</strong> Beneficios cruzados en cursos, asesorías y software</li>
            <li><strong>08.</strong> Cancelación libre en cualquier momento, sin compromisos</li>
          </ul>
        </div>
      </section>

      {/* PROPUESTA */}
      <section id="contacto" className="cta-section">
        <div className="section-container">
          <h2>Solicita tu acceso al Club</h2>
          <form
            className="formulario-contacto"
            onSubmit={async (e) => {
  e.preventDefault();
  const form = new FormData(e.target);
  const data = Object.fromEntries(form.entries());
  data.motivo = "Club de Usuarios";

  const respuestaDiv = document.getElementById("respuesta");
  const formulario = e.target;

  formulario.style.display = "none";
  respuestaDiv.innerHTML = "<p>📨 Enviando solicitud... Danos un momento.</p>";
  respuestaDiv.style.display = "block";

  try {
    const resp = await fetch("https://branddata.app.n8n.cloud/webhook/formulario-k-u-b-o", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const resultado = await resp.json();
    if (resp.ok && resultado.status === "ok") {
      respuestaDiv.innerHTML = `
        <p>✅ Solicitud enviada con éxito. Te contactaremos para coordinar tu ingreso.</p>
        <a href="https://www.kuboasesorias.cl/#portfolio" class="custom-btn">Volver a servicios</a>`;
      e.target.reset();
    } else {
      throw new Error("Respuesta no válida");
    }
  } catch (err) {
    console.error("Error al enviar:", err);
    respuestaDiv.innerHTML = `
      <p>❌ Ocurrió un error. Puedes reintentar o escribirnos por WhatsApp.</p>
      <button onclick="location.reload()" class="custom-btn">Reintentar</button>`;
    formulario.style.display = "block";
  }
}}

          >
            <input type="text" name="nombre" placeholder="Tu nombre" required />
            <input type="email" name="email" placeholder="Tu correo electrónico" required />
            <textarea name="mensaje" placeholder="Cuéntanos por qué quieres entrar al Club" required></textarea>
            <button type="submit" className="custom-btn">Solicitar acceso</button>
          </form>
          <div id="respuesta" className="respuesta-contacto" style={{ display: "none" }}>
            <p>Gracias por tu interés. Te contactaremos para coordinar tu ingreso.</p>
            <a href="https://www.kuboasesorias.cl/#portfolio" className="custom-btn">
              Volver a servicios
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ClubDeUsuarios;


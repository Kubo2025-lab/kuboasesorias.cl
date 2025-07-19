import Head from "next/head";
import { useState } from "react";
import Contact from "../../components/sections/Contact";
import Blog from "../../components/sections/Blog";
import Portfolio from "../../components/sections/Portfolio";
import "../../styles/style.css";
export default function PostAdjudicacion() {
  const [formEnviado, setFormEnviado] = useState(false);

  const manejarEnvio = async (e) => {
    e.preventDefault();

    const datos = {
      nombre: e.target.nombre.value,
      email: e.target.email.value,
      motivo: "Post adjudicación",
      mensaje: e.target.mensaje.value,
    };

    await fetch("https://branddata.app.n8n.cloud/webhook/formulario-k-u-b-o", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datos),
    });

    setFormEnviado(true);
  };

  return (
    <>
      <Head>
        <title>Post Adjudicación | Kubo Asesorías</title>
        <meta
          name="description"
          content="Acompañamiento técnico y fiscal para la ejecución de contratos adjudicados. Desde informes hasta cumplimiento de hitos."
        />
      </Head>

      <section className="main-section service-page">
        <h1>Post adjudicación</h1>
        <p>
          Acompañamos a tu empresa en la ejecución de contratos adjudicados.
          Te ayudamos con informes técnicos, cumplimiento de plazos,
          fiscalizaciones y cierre correcto.
        </p>

        {!formEnviado ? (
          <form onSubmit={manejarEnvio} className="formulario-servicio">
            <input type="text" name="nombre" placeholder="Tu nombre" required />
            <input
              type="email"
              name="email"
              placeholder="Tu correo electrónico"
              required
            />
            <textarea
              name="mensaje"
              placeholder="¿En qué podemos ayudarte?"
              required
            ></textarea>
            <button type="submit">Enviar</button>
          </form>
        ) : (
          <div className="confirmacion">
            <p>Gracias por tu mensaje. Te responderemos pronto.</p>
            <a href="https://www.kuboasesorias.cl/#portfolio" className="boton-volver">
              Volver al portafolio
            </a>
          </div>
        )}
      </section>
    </>
  );
}

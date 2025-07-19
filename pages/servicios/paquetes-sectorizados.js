import Head from "next/head";
import { useState } from "react";
import Contact from "../../components/sections/Contact";
import Blog from "../../components/sections/Blog";
import Portfolio from "../../components/sections/Portfolio";
import "../../styles/style.css";

export default function PaquetesSectorizados() {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const datos = {
      nombre: e.target.nombre.value,
      email: e.target.email.value,
      motivo: "Paquetes sectorizados",
      mensaje: e.target.mensaje.value,
    };

    await fetch("https://branddata.app.n8n.cloud/webhook/formulario-k-u-b-o", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    });

    setEnviado(true);
  };

  return (
    <>
      <Head>
        <title>Paquetes Sectorizados | Kubo Asesorías</title>
        <meta
          name="description"
          content="Ofrecemos soluciones adaptadas por vertical: Salud, Deporte e Infraestructura Verde."
        />
      </Head>

      <section className="main-section">
        <h1>Paquetes integrales sectorizados</h1>
        <p>
          Adaptamos nuestras soluciones según el sector de tu organización. Ya sea
          Salud, Deporte o Infraestructura Verde, diseñamos paquetes de
          consultoría que responden a tus necesidades reales.
        </p>

        <ul>
          <li>✔ Salud: optimización de flujos clínicos y compras públicas.</li>
          <li>✔ Deporte: gestión de proyectos y fondos FNDR / IND.</li>
          <li>✔ Infraestructura Verde: licitaciones sustentables, alineadas a normativas.</li>
        </ul>

        {!enviado ? (
          <form onSubmit={handleSubmit} className="formulario-servicio">
            <input type="text" name="nombre" placeholder="Tu nombre" required />
            <input type="email" name="email" placeholder="Tu correo electrónico" required />
            <textarea name="mensaje" placeholder="Cuéntanos tu necesidad" required />
            <button type="submit">Enviar</button>
          </form>
        ) : (
          <div className="formulario-enviado">
            <p>Gracias por tu interés. Pronto nos pondremos en contacto contigo.</p>
            <a href="https://www.kuboasesorias.cl/#portfolio" className="custom-btn">Volver al portafolio</a>
          </div>
        )}
      </section>
    </>
  );
}

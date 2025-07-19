import React, { useState } from "react";
import Head from "next/head";
import "../../style.css";

const CapacitacionCertificada = () => {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      nombre: e.target.nombre.value,
      email: e.target.email.value,
      motivo: e.target.motivo.value,
      mensaje: e.target.mensaje.value,
    };

    try {
      await fetch("https://branddata.app.n8n.cloud/webhook/formulario-k-u-b-o", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setEnviado(true);
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  return (
    <>
      <Head>
        <title>Capacitación Certificada - Kubo Asesorías</title>
      </Head>
      <div className="service-page">
        <h1>Capacitación Certificada con Branding</h1>
        <ul>
          <li><strong>Servicio:</strong> Asesorías</li>
          <li><strong>Modalidad:</strong> Online asincrónico</li>
          <li><strong>Duración:</strong> 2 semanas por módulo</li>
          <li><strong>Detalle:</strong> Cursos modulares y cortos, certificados, con fuerte presencia de marca para posicionar a tu empresa como referente en su nicho.</li>
        </ul>

        {!enviado ? (
          <form onSubmit={handleSubmit} className="formulario-servicio">
            <input type="text" name="nombre" placeholder="Tu nombre" required />
            <input type="email" name="email" placeholder="Tu correo electrónico" required />
            <input type="text" name="motivo" placeholder="Motivo del contacto" required />
            <textarea name="mensaje" placeholder="Tu mensaje" required></textarea>
            <button type="submit">Enviar</button>
          </form>
        ) : (
          <div className="mensaje-confirmacion">
            <h2>¡Gracias por contactarnos!</h2>
            <p>En breve te responderemos con todos los detalles.</p>
            <a href="https://www.kuboasesorias.cl/#portfolio">
              <button>Volver a Servicios</button>
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default CapacitacionCertificada;

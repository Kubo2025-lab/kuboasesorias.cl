import React, { useState } from "react";
import Head from "next/head";
import "../../styles/style.css";

const ModeloFreemium = () => {
  const [enviado, setEnviado] = useState(false);
  const [formulario, setFormulario] = useState({
    nombre: "",
    email: "",
    mensaje: ""
  });

  const handleChange = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      nombre: formulario.nombre,
      email: formulario.email,
      motivo: "Modelo freemium",
      mensaje: formulario.mensaje,
    };

    try {
      await fetch("https://branddata.app.n8n.cloud/webhook/formulario-k-u-b-o", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      setEnviado(true);
    } catch (error) {
      console.error("Error al enviar formulario", error);
    }
  };

  return (
    <>
      <Head>
        <title>Modelo Freemium | Kubo Asesorías</title>
      </Head>
      <section className="portfolio-page">
        <div className="container">
          <h1 className="portfolio-title">Modelo freemium</h1>
          <ul className="portfolio-details">
            <li><strong>Servicio:</strong> Consultoría</li>
            <li><strong>Modalidad:</strong> A distancia</li>
            <li><strong>Duración:</strong> 1 mes</li>
            <li>
              <strong>Detalle:</strong> Creamos un modelo freemium que ofrece contenido gratuito (alertas, capacitación base) y convierte a usuarios en clientes de consultorías premium.
            </li>
          </ul>

          {!enviado ? (
            <form className="formulario-servicio" onSubmit={handleSubmit}>
              <input type="text" name="nombre" placeholder="Tu nombre" required onChange={handleChange} />
              <input type="email" name="email" placeholder="Tu correo electrónico" required onChange={handleChange} />
              <textarea name="mensaje" placeholder="Tu mensaje" rows="4" required onChange={handleChange}></textarea>
              <button type="submit">Enviar</button>
            </form>
          ) : (
            <div className="formulario-enviado">
              <p>Gracias por escribirnos. Te responderemos pronto.</p>
              <a href="https://www.kuboasesorias.cl/#portfolio" className="custom-btn">Volver al portafolio</a>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ModeloFreemium;

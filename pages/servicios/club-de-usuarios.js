import Head from "next/head";
import { useState } from "react";
import "../../styles/style.css";

export default function ClubDeUsuarios() {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      nombre: e.target.nombre.value,
      email: e.target.email.value,
      motivo: "Club de usuarios",
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
      console.error("Error al enviar el formulario", error);
    }
  };

  return (
    <>
      <Head>
        <title>Club de Usuarios | Kubo Asesorías</title>
        <meta
          name="description"
          content="Accede a asesorías grupales, networking, descuentos y recursos exclusivos con nuestro Club de Usuarios."
        />
      </Head>

      <section className="main-section">
        <h1>Club de Usuarios</h1>
        <p>
          Crea conexiones, comparte experiencias y mejora tu estrategia de
          licitación con nuestro Club. Accede a asesorías grupales, networking,
          descuentos en servicios y recursos exclusivos para miembros.
        </p>

        {!enviado ? (
          <form onSubmit={handleSubmit} className="formulario-servicio">
            <input type="text" name="nombre" placeholder="Tu nombre" required />
            <input type="email" name="email" placeholder="Tu correo electrónico" required />
            <textarea name="mensaje" placeholder="¿Por qué quieres unirte?" required />
            <button type="submit">Unirme al club</button>
          </form>
        ) : (
          <div className="formulario-enviado">
            <p>¡Gracias por unirte al club! Te contactaremos pronto.</p>
            <a href="https://www.kuboasesorias.cl/#portfolio" className="custom-btn">
              Volver a servicios
            </a>
          </div>
        )}
      </section>
    </>
  );
}

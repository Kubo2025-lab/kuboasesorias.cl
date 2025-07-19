import Head from "next/head";
import { useState } from "react";

export default function FinanciamientoConsultorias() {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const payload = Object.fromEntries(data.entries());

    await fetch("https://branddata.app.n8n.cloud/webhook/formulario-k-u-b-o", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setEnviado(true);
  };

  return (
    <div className={styles.pageContainer}>
      <Head>
        <title>Financiamiento de Consultorías | Kubo Asesorías</title>
        <meta
          name="description"
          content="Facilitamos acceso a consultorías a través de alianzas con fintech. Pago en cuotas o crédito online."
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Financiamiento de Consultorías</h1>

        <p className={styles.description}>
          Te ayudamos a acceder a servicios de consultoría de alto valor sin afectar tu
          flujo de caja. Gracias a alianzas con fintech, puedes pagar en cuotas o acceder a créditos en línea.
        </p>

        <ul className={styles.featureList}>
          <li>
            ✔ Servicio: <strong>Consultoría + Fintech</strong>
          </li>
          <li>
            ✔ Modalidad: <strong>Online / A distancia</strong>
          </li>
          <li>
            ✔ Beneficio: <strong>Pago flexible, sin intereses ocultos</strong>
          </li>
        </ul>

        {!enviado ? (
          <form onSubmit={handleSubmit} className={styles.formulario}>
            <input name="nombre" placeholder="Tu nombre" required />
            <input name="email" type="email" placeholder="Tu correo electrónico" required />
            <input name="motivo" placeholder="Motivo del contacto" defaultValue="Financiamiento consultorías" hidden />
            <textarea name="mensaje" placeholder="Tu mensaje" required />
            <button type="submit">Enviar</button>
          </form>
        ) : (
          <div className={styles.confirmacion}>
            <p>¡Gracias por tu mensaje! Te responderemos a la brevedad.</p>
            <a href="https://www.kuboasesorias.cl/#portfolio">
              <button>Volver al portafolio</button>
            </a>
          </div>
        )}
      </main>
    </div>
  );
}

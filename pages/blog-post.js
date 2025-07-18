import { Fragment, useEffect } from "react";

const BlogPost = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("blog-page");
  }, []);

  return (
    <Fragment>
      <a href="/" className="back-btn">
        <i className="fa-solid fa-arrow-left"></i>
      </a>
      <div className="blog-content">
        <h1>#Kubo_Blog</h1>
        {/* ARTICLE STARTS */}
        <div className="main-post">
          {/* META STARTS */}
          <div className="meta d-flex align-items-center">
            <div className="d-flex align-items-center">
              <i className="fa-regular fa-calendar" />
              <span>18 Jul 2025</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="fa-solid fa-tag" />
              <span>licitaciones, ética, estrategia</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="fa-regular fa-comments" />
              <span>0 comentarios</span>
            </div>
          </div>
          {/* META ENDS */}
          {/* CONTENT STARTS */}
          <h3>Lo que necesitabas saber para ganarle a la corrupción…</h3>
          <img src="assets/blog/corrupcion.jpg" alt="Ganarle a la corrupción" />
          <div className="post-content">
            <p>
              Participar en licitaciones públicas puede ser una jungla. Pero no por la complejidad técnica, sino por el monstruo invisible: la corrupción. Muchos piensan que si hay una oferta corrupta, están automáticamente fuera. Error. No solo puedes competir, ¡puedes ganar!
            </p>
            <p>
              Primero, entiende esto: la corrupción no siempre se esconde en sobres con billetes. A veces, es una oferta irreal, una bajada de precio que roza lo ridículo, o un trato entre compadres. Pero todo eso tiene una debilidad: la transparencia. Ahí es donde tú entras con estrategia.
            </p>
            <p>
              📌 <strong>Paso 1: Documenta TODO</strong><br />
              Tu propuesta debe ser un manual de buenas prácticas. Que cada cifra esté respaldada, cada anexo tenga lógica y cada cálculo pueda ser defendido con un café en la mano y sin transpirar.
            </p>
            <p>
              📌 <strong>Paso 2: Conoce las bases como si fueran la biblia</strong><br />
              Porque cuando la oferta corrupta mete la pata (y créeme, lo hace), tú vas a estar ahí con el párrafo exacto que la descalifica.
            </p>
            <p>
              📌 <strong>Paso 3: Denuncia con estrategia</strong><br />
              No se trata de ir a golpear la mesa a lo loco. Hazlo con pruebas, con elegancia y con respaldo legal. Que cuando digas “esto huele raro”, los demás ya estén oliendo lo mismo.
            </p>
            <p>
              📌 <strong>Paso 4: Comunica tu valor</strong><br />
              Si tu propuesta es más cara, que se note por qué. Calidad, experiencia, cumplimiento previo. Que el comprador vea que contigo duerme tranquilo, y con la oferta trucha... no tanto.
            </p>
            <p>
              Finalmente, la corrupción en licitaciones no se elimina sola. Se derrota con integridad, inteligencia y constancia. No es fácil, pero se puede. Y si lo haces bien, no solo ganas un contrato. Ganas respeto, reputación y terreno en un mercado que, poco a poco, empieza a mirar distinto.
            </p>
            <p><strong>La corrupción es fuerte, pero tú eres más inteligente.</strong></p>
          </div>
          {/* CONTENT ENDS */}
        </div>
        {/* ARTICLE ENDS */}
      </div>
    </Fragment>
  );
};

export default BlogPost;

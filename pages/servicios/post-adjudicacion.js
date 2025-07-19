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

        <div className="main-post">
          <div className="meta d-flex align-items-center">
            <div className="d-flex align-items-center">
              <i className="fa-regular fa-calendar" />
              <span>19 Jul 2025</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="fa-solid fa-tag" />
              <span>ejecución, reporting, contratos públicos</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="fa-regular fa-comments" />
              <span>0 comentarios</span>
            </div>
          </div>

          <h3>¿Y después de adjudicar, qué? La etapa que muchos olvidan…</h3>
          <img src="/assets/blog/post-adjudicacion.jpg" alt="Gestión post adjudicación" />

          <div className="post-content">
            <p>
              Ganaste la licitación. ¡Bravo! Pero ahora viene lo verdaderamente importante: cumplir. Y no basta con entregar a tiempo, hay que hacerlo con cabeza, estrategia y reporting.
            </p>
            <p>
              En Kubo te acompañamos después de la adjudicación para evitar que te metas en problemas por no cumplir con lo prometido (o no saber cómo justificarlo).
            </p>
            <p>
              📌 <strong>Checklist de obligaciones</strong><br />
              Te ayudamos a traducir la resolución en tareas concretas, con plazos, responsables y entregables.
            </p>
            <p>
              📌 <strong>Informes técnicos y financieros</strong><br />
              Lo que no se mide, no se paga. Elaboramos los reportes que exige el mandante, en su lenguaje.
            </p>
            <p>
              📌 <strong>Alertas de vencimientos</strong><br />
              Nada de andar revisando correos a última hora. Te avisamos cuando hay que entregar, renovar o justificar.
            </p>
            <p>
              📌 <strong>Representación ante el comprador</strong><br />
              Si hay cambios, contingencias o ajustes, te respaldamos para comunicarlo y negociar correctamente.
            </p>
            <p>
              Ganar es solo la mitad del juego. La otra mitad se llama *gestión post-adjudicación*. Y ahí es donde se ganan —o se pierden— los contratos futuros.
            </p>
            <p><strong>Si quieres seguir ganando, cumple como nadie.</strong></p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BlogPost;

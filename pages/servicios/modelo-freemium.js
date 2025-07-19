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
              <span>modelo freemium, consultoría, escalamiento</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="fa-regular fa-comments" />
              <span>0 comentarios</span>
            </div>
          </div>

          <h3>¿Qué es el modelo freemium y por qué lo aplicamos en Kubo?</h3>
          <img src="/assets/blog/freemium.jpg" alt="Modelo freemium" />

          <div className="post-content">
            <p>
              A veces para vender, primero hay que regalar. Pero no cualquier regalo: uno que enganche, que aporte y que genere una relación. Así funciona el modelo freemium.
            </p>
            <p>
              En Kubo decidimos que no basta con esperar que nos contraten. Queremos demostrar lo que sabemos, generar confianza y educar al mercado. Por eso:
            </p>
            <p>
              📌 <strong>Ofrecemos alertas gratuitas de licitaciones</strong><br />
              Para que cualquier empresa sepa cuándo hay oportunidades en el mercado público.
            </p>
            <p>
              📌 <strong>Publicamos contenidos útiles cada semana</strong><br />
              Desde tips legales hasta estrategias de evaluación económica, todo en un lenguaje entendible.
            </p>
            <p>
              📌 <strong>Capacitamos sin cobrar</strong><br />
              Cursos introductorios, webinars y recursos abiertos para que más personas entiendan cómo postular.
            </p>
            <p>
              Y cuando ya necesitas algo más a medida, ahí entran nuestros planes pagados: estudios de propuestas, estrategia de adjudicación, representación, etc.
            </p>
            <p><strong>El freemium no es regalar porque sí. Es invertir en confianza.</strong></p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BlogPost;

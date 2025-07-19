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
              <span>capacitación, consultoría, PYMES</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="fa-regular fa-comments" />
              <span>0 comentarios</span>
            </div>
          </div>

          <h3>La formación certificada que impulsa tus oportunidades</h3>
          <img src="/assets/blog/capacitacion.jpg" alt="Capacitación Certificada" />

          <div className="post-content">
            <p>
              Las licitaciones no se ganan solo con buenas intenciones. Se ganan con habilidades. Y esas habilidades se aprenden. Pero no en cualquier parte.
            </p>
            <p>
              En Kubo, diseñamos programas de capacitación pensados para la acción. No queremos que memorices teoría. Queremos que ganes.
            </p>
            <p>
              📌 <strong>Certificación que abre puertas:</strong><br />
              Cada módulo entrega herramientas aplicables al mercado público. Y al finalizar, obtienes un certificado que pesa en tu CV y ante los mandantes.
            </p>
            <p>
              📌 <strong>Contenido diseñado por expertos:</strong><br />
              Nuestra experiencia se traduce en contenidos que resuelven problemas reales. Desde lectura de bases hasta estrategia de adjudicación.
            </p>
            <p>
              📌 <strong>100% online y flexible:</strong><br />
              Avanza a tu ritmo. Compatible con tus tiempos, tu trabajo y tu negocio.
            </p>
            <p>
              La formación es la palanca que multiplica tu crecimiento. Y si esa formación es de calidad, con enfoque práctico y aval de resultados... la ventaja es tuya.
            </p>
            <p><strong>El conocimiento no te lo pueden quitar. ¡Aprovéchalo!</strong></p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BlogPost;

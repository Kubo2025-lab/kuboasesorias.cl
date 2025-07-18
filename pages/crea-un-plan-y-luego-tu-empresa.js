import { Fragment, useEffect } from "react";

const CreaUnPlanYLuegoTuEmpresa = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("blog-page");
  }, []);

  return (
    <Fragment>
      <a href="/" className="back-btn">
        <i className="fa-solid fa-arrow-left"></i>
      </a>
      <div className="blog-content">
        <h1>#kubo_blog</h1>
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
              <span>emprendimiento, plan de negocios</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="fa-regular fa-comments" />
              <span>0 comentarios</span>
            </div>
          </div>
          {/* META ENDS */}
          {/* CONTENT STARTS */}
          <h3>Crea un plan, y luego tu empresa</h3>
          <img src="/assets/blog/crea-un-plan.jpg" alt="Crea un plan antes de emprender" />
          <div className="post-content">
            <p>
              Antes de lanzarte a crear tu empresa, crea un plan. No uno de esos PDFs de 80 páginas que nadie lee, sino un plan que sirva como mapa, brújula y linterna.
            </p>
            <p>
              Pregúntate: ¿a quién ayudas? ¿Qué problema le resuelves? ¿Cuál es tu ventaja injusta? ¿Por qué deberían pagarte a ti y no a otro?
            </p>
            <p>
              Luego, convierte esas respuestas en acciones. ¿Qué servicios ofrecerás primero? ¿Cómo los vas a entregar? ¿Cómo te vas a hacer notar? ¿Qué canales vas a usar para vender?
            </p>
            <p>
              El plan no es para impresionar a nadie. Es para ti. Para que no te pierdas cuando las ventas no lleguen o cuando lleguen todas juntas.
            </p>
            <p>
              Si no sabes por dónde empezar, escríbelo en una hoja: 
              <ul>
                <li>Objetivo SMART de tu empresa</li>
                <li>Propuesta de valor</li>
                <li>Perfil de cliente ideal</li>
                <li>Primer servicio a ofrecer</li>
                <li>Cómo lo entregarás</li>
                <li>Cómo lo venderás</li>
              </ul>
            </p>
            <p>
              Cuando termines esa hoja, ya diste el primer paso. Ahora sí, crea tu empresa.
            </p>
          </div>
          {/* CONTENT ENDS */}
        </div>
        {/* ARTICLE ENDS */}
      </div>
    </Fragment>
  );
};

export default CreaUnPlanYLuegoTuEmpresa;

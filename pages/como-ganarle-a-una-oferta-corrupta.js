import { Fragment, useEffect } from "react";

const ComoGanarleAUnaOfertaCorrupta = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("blog-page");
  }, []);

  return (
    <Fragment>
      <a href="/" className="back-btn">
        <i className="fa-solid fa-arrow-left"></i>
      </a>
      <div className="blog-content">
        <h1>Blog</h1>
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
              <span>mercado público, corrupción, estrategia</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="fa-regular fa-comments" />
              <span>0 comentarios</span>
            </div>
          </div>
          {/* META ENDS */}
          {/* CONTENT STARTS */}
          <h3>Cómo ganarle a una oferta corrupta</h3>
          <img src="/assets/blog/oferta-corrupta.jpg" alt="Cómo ganarle a una oferta corrupta" />
          <div className="post-content">
            <p>
              Sí, la corrupción existe en el mercado público. Y sí, puedes ganarle.
            </p>
            <p>
              ¿Cómo? Con una estrategia tan sólida que ni la mano negra pueda ignorarte. Porque cuando cumples con los requisitos, ofreces mejor relación valor/precio, y lo documentas todo, obligas al sistema a mirarte.
            </p>
            <p>
              Lo primero es detectar las señales: bases hechas a la medida, plazos imposibles, criterios de evaluación "creativos". Cuando veas eso, no huyas. Estúdialo mejor que nadie.
            </p>
            <p>
              Luego, arma tu oferta con precisión quirúrgica. Adjunta cada papel. Usa lenguaje técnico. Si puedes, cita la ley. Y si algo huele raro, presenta una consulta o reclamo. Deja huella.
            </p>
            <p>
              En algunos casos, no vas a ganar. Pero vas a incomodar. Vas a quedar en el radar. Y en la próxima, ese trato trucho no va a poder repetirse con tanta facilidad.
            </p>
            <p>
              El verdadero antídoto contra la corrupción es la transparencia activa. Y tú puedes ser parte de eso. No con discursos. Con ofertas bien hechas y reclamos bien fundados.
            </p>
            <p>
              Así se cambia el sistema: una buena postulación a la vez.
            </p>
          </div>
          {/* CONTENT ENDS */}
        </div>
        {/* ARTICLE ENDS */}
      </div>
    </Fragment>
  );
};

export default ComoGanarleAUnaOfertaCorrupta;

import { Fragment, useEffect } from "react";

const ComoVivirDeLasLicitaciones = () => {
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
              <span>licitaciones, negocio, ventas públicas</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="fa-regular fa-comments" />
              <span>0 comentarios</span>
            </div>
          </div>
          {/* META ENDS */}
          {/* CONTENT STARTS */}
          <h3>Cómo vivir de las licitaciones</h3>
          <img src="/assets/blog/vivir-licitaciones.jpg" alt="Cómo vivir de las licitaciones" />
          <div className="post-content">
            <p>
              Vivir de las licitaciones no es una utopía. Es un modelo de negocio real, predecible y rentable... si lo haces bien.
            </p>
            <p>
              El secreto no está en tener suerte, sino en tener un sistema. Un sistema para buscar oportunidades todos los días, estudiar bases con ojo quirúrgico, calcular bien tus costos y presentar ofertas ganadoras.
            </p>
            <p>
              ¿Quieres vivir de esto? Entonces deja de improvisar. Deja de postular a todo. Especialízate en un rubro, conoce tu margen, forma alianzas y automatiza lo que puedas.
            </p>
            <p>
              La diferencia entre el que gana y el que queda fuera, muchas veces, es una coma mal puesta o un documento no adjuntado. Así de preciso hay que ser.
            </p>
            <p>
              El camino es duro al principio, pero cuando te posicionas, las invitaciones llegan solas. Te vuelves visible, confiable y, lo más importante: rentable.
            </p>
            <p>
              Si hoy no sabes por dónde empezar, empieza por aprender. Hay capacitaciones, mentorías y hasta empresas que te acompañan en el proceso (cof cof, como la nuestra).
            </p>
            <p>
              Las licitaciones no son un mundo aparte. Son un canal más de ventas. Pero uno que paga a 30 días, tiene reglas claras y da prestigio.
            </p>
            <p>
              ¿Te atreves?
            </p>
          </div>
          {/* CONTENT ENDS */}
        </div>
        {/* ARTICLE ENDS */}
      </div>
    </Fragment>
  );
};

export default ComoVivirDeLasLicitaciones;

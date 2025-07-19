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
              <span>comunidad, networking, licitaciones</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="fa-regular fa-comments" />
              <span>0 comentarios</span>
            </div>
          </div>

          <h3>El Club de Usuarios que transforma licitadores en ganadores</h3>
          <img src="/assets/blog/club.jpg" alt="Club de usuarios Kubo" />

          <div className="post-content">
            <p>
              Licitar no tiene por qué ser un camino solitario. Cuando compartes experiencias, dudas y estrategias, creces el doble. Por eso nació nuestro Club de Usuarios.
            </p>
            <p>
              Es una comunidad pensada para quienes están metidos hasta el cuello en el mundo del mercado público. Porque entendemos que los buenos se potencian cuando se juntan.
            </p>
            <p>
              📌 <strong>Sesiones grupales de asesoría:</strong><br />
              Una vez al mes, nos juntamos online para revisar casos reales, responder dudas y compartir hacks de licitación.
            </p>
            <p>
              📌 <strong>Descuentos exclusivos y recursos premium:</strong><br />
              Accede a plantillas, informes, análisis de bases y promociones especiales solo por ser parte.
            </p>
            <p>
              📌 <strong>Networking con propósito:</strong><br />
              Conecta con otros licitadores, crea alianzas, busca proveedores o súmate a propuestas colaborativas.
            </p>
            <p>
              Ser parte del club no es solo tener beneficios, es dejar de remar solo. Es entrar en una red que rema contigo.
            </p>
            <p><strong>Los solos llegan más rápido, pero los conectados llegan más lejos.</strong></p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BlogPost;

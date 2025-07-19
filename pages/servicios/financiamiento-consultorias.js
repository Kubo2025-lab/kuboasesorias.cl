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
              <span>financiamiento, consultoría, pymes</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="fa-regular fa-comments" />
              <span>0 comentarios</span>
            </div>
          </div>

          <h3>Financiamiento para consultorías: deja de postergar tu crecimiento</h3>
          <img src="/assets/blog/financiamiento.jpg" alt="Financiamiento consultorías" />

          <div className="post-content">
            <p>
              Muchos emprendedores y gerentes quieren mejorar sus procesos, entender mejor el mercado público o potenciar su estrategia, pero se frenan por lo mismo: no hay presupuesto.
            </p>
            <p>
              ¿Y si te dijéramos que sí puedes acceder a una consultoría profesional, sin pagar todo de una?
            </p>
            <p>
              En Kubo estamos desarrollando alianzas con fintechs que permitirán financiar nuestros servicios de consultoría. ¿Qué significa esto para ti?
            </p>
            <p>
              📌 <strong>Cuotas accesibles</strong><br />
              Puedes pagar tu asesoría en 3, 6 o 12 cuotas, sin afectar tu caja mensual.
            </p>
            <p>
              📌 <strong>Aprobación rápida online</strong><br />
              El proceso es digital, con respuesta en minutos y sin papeleos infinitos.
            </p>
            <p>
              📌 <strong>Asesoría inmediata</strong><br />
              No esperas a tener todo el dinero para empezar. Empiezas ahora, pagas mientras mejoras.
            </p>
            <p>
              Este modelo busca democratizar el acceso a consultorías de calidad, especialmente para PYMES que quieren crecer pero no tienen espalda financiera.
            </p>
            <p><strong>Invertir en conocimiento nunca fue tan accesible.</strong></p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BlogPost;

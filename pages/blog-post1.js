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
              <span>Licitaciones, negocios, mercado público</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="fa-regular fa-comments" />
              <span>0 comentarios</span>
            </div>
          </div>
          {/* META ENDS */}
          {/* CONTENT STARTS */}
          <h3>¿Cómo ganarle a una oferta corrupta?</h3>
          <img src="assets/blog/blog-post-1.jpg" alt="Blog image" />
          <div className="post-content">
  <p>
    No es un secreto para nadie: existen licitaciones públicas que nacen viciadas. Bases redactadas para beneficiar a una empresa específica, requisitos técnicos imposibles de cumplir para el resto, o evaluaciones tan subjetivas que parecen escritas con doble intención. Pero que exista corrupción no significa que estés condenado a perder. Ganarle a una oferta corrupta es posible, y no con escándalos, sino con estrategia, precisión y conocimiento de las reglas del juego.
  </p>
  <p>
    Todo parte por identificar las señales. ¿El puntaje técnico tiene un peso desproporcionado? ¿Se exige una marca o una experiencia que solo una empresa puede cumplir? ¿Hay errores evidentes en el desglose de cantidades o montos? No huyas. Analiza, documenta y consulta. Cada consulta que haces obliga al organismo a transparentar. Cada observación que presentas deja registro. Mientras otros callan, tú haces ruido con fundamentos.
  </p>
  <p>
    Luego viene la estrategia de oferta. Aquí no hay espacio para errores. Tu propuesta debe ser impecable: bien redactada, completa en documentación, clara en precios y sólida en argumentos. Adjunta todo. Revisa tres veces. Usa lenguaje técnico y normativo. Si puedes, cita la ley. Si las bases están mal redactadas o contradicen la normativa, preséntalo con claridad. Las entidades públicas están obligadas a responder, y en muchos casos, a corregir.
  </p>
  <p>
    ¿Y si pierdes igual? Aún puedes marcar la diferencia. Solicita el acta de evaluación, revisa las puntuaciones, presenta un reclamo si hay irregularidades. No se trata de pelear por todo, sino de dejar claro que estás mirando. Cuando haces esto con seriedad y conocimiento, te conviertes en un proveedor incómodo. Y lo incómodo, en este mercado, a veces es lo más eficaz. Porque al mostrar que sabes jugar el juego legalmente, fuerzas a los demás a hacer lo mismo.
  </p>
  <p>
    Ganarle a una oferta corrupta no siempre significa adjudicar. A veces, significa que no se repita. Que la próxima vez la entidad lo piense dos veces antes de inventar bases a la medida. Que sepan que hay alguien vigilando, licitando bien y dispuesto a exigir transparencia. Esa es la forma más poderosa de cambiar el sistema: desde dentro, usando sus propias reglas.
  </p>
</div>
          {/* CONTENT ENDS */}
        </div>
        {/* ARTICLE ENDS */}
      </div>
    </Fragment>
  );
};
export default BlogPost;

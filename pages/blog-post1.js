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
          <h3>Cómo ganarle a una oferta corrupta</h3>
          <img src="assets/blog/blog-post-1.jpg" alt="Blog image" />
          <div className="post-content">
  <p>
    Todos lo sabemos pero pocos lo dicen: hay licitaciones armadas. Bases escritas con nombre y apellido, criterios absurdos y plazos imposibles. Pero que haya corrupción no significa que estés condenado. Se le puede ganar. No con quejas en redes, sino con técnica, estrategia y precisión quirúrgica. No vas a tumbar el sistema, pero sí puedes desnudar sus debilidades… y obligarlo a jugar limpio.
  </p>
  <p>
    Lo primero es identificar el vicio. ¿El criterio técnico vale un 90% y el precio un 10%? ¿Se exige un requisito que solo una empresa tiene? Ahí ya tienes luces de alerta. No huyas. Estúdialo. Busca precedentes, consulta con tu equipo, arma tu matriz comparativa y saca ventaja donde el otro se relaja. Porque el que se siente ganador por dentro, suele dormirse por fuera. Y ahí entras tú.
  </p>
  <p>
    Prepara tu oferta con excelencia. Sin errores, sin documentos faltantes, sin márgenes de duda. Adjunta cada anexo, cada certificado, cada argumento. Si algo está mal en las bases, haz la consulta. Si algo es injusto, presenta el reclamo. Con respeto, pero con evidencia. Porque cuando demuestras que sabes más que el que escribió las bases, te vuelves incómodo. Y cuando eres incómodo, pasas de invisible a inevitable. Así es como se gana. Incluso contra la oferta que “ya estaba lista”.
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

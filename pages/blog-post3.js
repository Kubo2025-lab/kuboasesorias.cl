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
    Vivir de las licitaciones no es un sueño inalcanzable ni un privilegio de unos pocos. Es una estrategia de negocio legítima, rentable y alcanzable si sabes lo que estás haciendo. Pero no se trata de postular por postular. Se trata de tener foco, método y disciplina. No basta con descargar bases, hay que leerlas con lupa, encontrar oportunidades reales y armar propuestas que no solo cumplan, sino que destaquen. Este juego no lo gana el más barato, sino el más sólido.
  </p>
  <p>
    El primer paso es elegir tu rubro, tu cliente ideal y el tipo de licitación que dominas. Especialízate. Luego, crea una rutina diaria: monitorea oportunidades, estudia requerimientos, ajusta tus costos y arma tu carpeta documental como si fuera tu carta de presentación (porque lo es). Automatiza lo que puedas y lleva registro de todo. No hay espacio para la improvisación. La licitación es una maratón, no una rifa. El que persiste, aprende. Y el que aprende, gana.
  </p>
  <p>
    Si hoy no estás ganando, quizás es porque estás disparando sin apuntar. O porque te falta alguien que te enseñe el mapa. Pero te aseguro una cosa: se puede vivir de las licitaciones. Yo lo he hecho, y otros también. El sistema tiene sus vicios, sí. Pero también tiene reglas claras, pagos estables y oportunidades constantes. ¿Quieres una fuente de ingresos predecible y escalable? Deja de mirar al costado y empieza a licitar con estrategia. Ahí está la diferencia.
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

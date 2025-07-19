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
              <span>sectores, paquetes, propuestas</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="fa-regular fa-comments" />
              <span>0 comentarios</span>
            </div>
          </div>

          <h3>Los paquetes sectorizados: tu llave maestra para licitar con ventaja</h3>
          <img src="/assets/blog/paquetes-sectorizados.jpg" alt="Paquetes sectorizados" />

          <div className="post-content">
            <p>
              No todos los rubros son iguales. Una propuesta para el sector salud no se construye igual que una para infraestructura verde o deporte. ¿La solución? <strong>Paquetes sectorizados</strong>.
            </p>
            <p>
              En Kubo diseñamos servicios específicos por vertical, porque sabemos que lo genérico no vende. Y en licitaciones, el que mejor interpreta al comprador, gana.
            </p>
            <p>
              📌 <strong>Diagnóstico sectorial</strong><br />
              Analizamos cómo compran los servicios en tu rubro: qué exigen, qué valoran y cómo formulan las bases.
            </p>
            <p>
              📌 <strong>Plantillas especializadas</strong><br />
              No más “copiar y pegar”. Diseñamos textos, anexos y metodologías adaptadas a cada sector.
            </p>
            <p>
              📌 <strong>Base de datos por industria</strong><br />
              Accede a información de licitaciones anteriores, precios referenciales, ranking de competidores y más.
            </p>
            <p>
              📌 <strong>Casos de éxito aplicables</strong><br />
              Te mostramos qué ha funcionado en tu rubro y cómo replicarlo sin reinventar la rueda.
            </p>
            <p>
              Con un paquete sectorizado, no solo postulas. Postulas con inteligencia, enfoque y ventaja competitiva real.
            </p>
            <p><strong>No ofertes como cualquiera, oferta como un experto en tu rubro.</strong></p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BlogPost;


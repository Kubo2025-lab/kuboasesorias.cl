import Link from "next/link";
const Blog = () => {
  return (
    <section className="blog main-section flex-column-mobile" id="blog">
      {/* TITLE STARTS */}
      <div className="custom-title">
        {/* MAIN TITLE STARTS */}
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              #Artículos_Blog
            </span>
          </span>
        </h3>
        {/* MAIN TITLE ENDS */}
      </div>
      {/* TITLE ENDS */}
      {/* LATEST POSTS STARTS */}
      <div className="latestposts flex-column-mobile">
        {/* POST ITEM STARTS */}
        <div className="animated-layer fade-in-right-animation fadeInUp wow">
          <Link href="como-ganarle-a-la-oferta-corrupta" legacyBehavior>
            <a>
              <span className="img-holder">
                <img src="assets/blog/blog-post-1.jpg" alt="" />
              </span>
              <div className="content">
                <span className="category">Proyectos</span>
                <span className="title">
                 Cómo ganarle a la oferta corrupta
                </span>
                <p>
                  Lo que necesitabas saber para ganarle a la corrupción...
                </p>
                <div className="meta d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-calendar" />
                    <span>18 Jul 2025</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-comments" />
                    <span>0 comentarios</span>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </div>
        {/* POST ITEM ENDS */}
        {/* POST ITEM STARTS */}
        <div className="animated-layer fade-in-right-animation fadeInUp wow">
          <Link href="como-vivir-de-las-licitaciones" legacyBehavior>
            <a>
              <span className="img-holder">
                <img src="assets/blog/blog-post-2.jpg" alt="" />
              </span>
              <div className="content">
                <span className="category">Crecimiento</span>
                <span className="title">
                  Cómo vivir de las licitaciones
                </span>
                <p>
                  Cerca de 6.000 oportunidades diarias, como no ganar una!...
                </p>
                <div className="meta d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-calendar" />
                    <span>18 Jul 2025</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-comments" />
                    <span>0 comentarios</span>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </div>
        {/* POST ITEM ENDS */}
        {/* POST ITEM STARTS */}
        <div className="animated-layer fade-in-right-animation fadeInUp wow">
          <Link href="crea-un-plan-y-luego-tu-empresa" legacyBehavior>
            <a>
              <span className="img-holder">
                <img src="assets/blog/blog-post-3.jpg" alt="" />
              </span>
              <div className="content">
                <span className="category">PYMES</span>
                <span className="title">
                  Crear un plan y luego tu empresa
                </span>
                <p>
                  De nada sirve crear una empresa si no tienes un objetivo SMART...
                </p>
                <div className="meta d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-calendar" />
                    <span>1 Jan 2022</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-comments" />
                    <span>0 comentarios</span>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </div>
        {/* POST ITEM ENDS */}
      </div>
      {/* LATEST POSTS ENDS */}
    </section>
  );
};
export default Blog;

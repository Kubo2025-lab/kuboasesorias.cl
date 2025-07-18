import { salimovSlider } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const Portfolio = () => {
  return (
    <section
      className="portfolio main-section flex-column-mobile"
      id="portfolio"
    >
      {/* TITLE STARTS */}
      <div className="custom-title">
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              #Qué_ofrecemos?
            </span>
          </span>
        </h3>
      </div>
      {/* TITLE ENDS */}

      <Swiper
        {...salimovSlider.portfolio}
        className="swiper swiper-portfolio animated-layer fade-in-right-animation fadeInUp wow"
        data-wow-offset={200}
      >
        {/* PORTFOLIO ITEM 1 */}
        <SwiperSlide className="single-item swiper-slide">
          <div className="main-content">
            <img
              className="img-fluid"
              src="assets/portfolio/project-1.jpg"
              alt="Image Project"
            />
          </div>
          <div className="details">
            <h4>Ejecución Presupuestaria</h4>
            <ul>
              <li>
                <span>
                  <i className="fa-regular fa-file-lines" /> Servicio :
                </span>
                <span>Consultoría</span>
              </li>
              <li>
                <span>
                  <i className="fa-regular fa-user" /> Modalidad :
                </span>
                <span>A distancia</span>
              </li>
              <li>
                <span>
                  <i className="fa-regular fa-hourglass" /> Duración :
                </span>
                <span>1 mes</span>
              </li>
<li>
  <span>
    <i className="fa-solid fa-code-branch" /> Detalle :
  </span>
  <span>
    Controlamos desvíos y maximizamos <br />
    tu rentabilidad proyecto a proyecto.
  </span>
</li>
            </ul>
            <a href="#" target="_blank" className="custom-btn">
              <span>
                Contratar{" "}
                <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
        </SwiperSlide>

        {/* PORTFOLIO ITEM 2 */}
        <SwiperSlide className="single-item swiper-slide">
          <div className="main-content">
            <Swiper
              {...salimovSlider.portfolioItems}
              className="swiper swiper-portfolio-item"
            >
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/project-2.jpg" title="img" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/project-3.jpg" title="img" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/project-1.jpg" title="img" />
              </SwiperSlide>
              <div className="swiper-pagination" />
            </Swiper>
          </div>
          <div className="details">
            <h4>OfertaPublica.cl</h4>
            <ul>
              <li>
                <span>
                  <i className="fa-regular fa-file-lines" /> Servicio :
                </span>
                <span>Asesorías</span>
              </li>
              <li>
                <span>
                  <i className="fa-regular fa-user" /> Clientes :
                </span>
                <span>Usuarios de KUBO</span>
              </li>
              <li>
                <span>
                  <i className="fa-regular fa-hourglass" /> Duración :
                </span>
                <span>Depende del proyecto</span>
              </li>
              <li>
                <span>
                  <i className="fa-solid fa-code-branch" /> Detalle :
                </span>
                <span>
                  Análisis profesional de antecedentes de licitaciones.
                </span>
              </li>
            </ul>
            <a href="#" target="_blank" className="custom-btn">
              <span>
                Contratar{" "}
                <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
        </SwiperSlide>

        {/* PORTFOLIO ITEM 3 */}
        <SwiperSlide className="single-item swiper-slide">
          <div className="main-content">
            <a
              href="https://www.academia.cl"
              target="_blank"
              className="external"
            >
              <img
                className="img-fluid"
                src="assets/portfolio/project-3.jpg"
                alt="External Project"
              />
            </a>
          </div>
          <div className="details">
            <h4>Academia Mercado Público</h4>
            <ul>
              <li>
                <span>
                  <i className="fa-regular fa-file-lines" /> Servicio :
                </span>
                <span>Capacitación</span>
              </li>
              <li>
                <span>
                  <i className="fa-regular fa-user" /> Clientes :
                </span>
                <span>Usuarios de KUBO</span>
              </li>
              <li>
                <span>
                  <i className="fa-regular fa-hourglass" /> Duración :
                </span>
                <span>Eterno</span>
              </li>
              <li>
                <span>
                  <i className="fa-solid fa-code-branch" /> Detalles :
                </span>
                <span>
                  Cursos Presto - MS Project - Mercado Público
                </span>
              </li>
            </ul>
            <a href="#" target="_blank" className="custom-btn">
              <span>
                Contratar{" "}
                <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
        </SwiperSlide>

        {/* NAVEGACIÓN */}
        <div className="nav-item next-item animated-btn">
          <span />
        </div>
        <div className="nav-item prev-item animated-btn">
          <span />
        </div>
      </Swiper>

      <img
        alt=""
        className="separator hide-mobile"
        src="assets/separator.png"
      />
    </section>
  );
};

export default Portfolio;


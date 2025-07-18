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
        {/* PORTFOLIO ITEM 1 - Original: Ejecución Presupuestaria */}
        <SwiperSlide className="single-item swiper-slide">
          <div className="main-content">
            <img
              className="img-fluid"
              src="assets/portfolio/project-1.jpg" // Asegúrate de tener una imagen adecuada para cada servicio
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
                  Controlamos desvíos y maximizamos <br />tu rentabilidad proyecto a
                  proyecto.
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

        {/* NUEVO ITEM DE PORTFOLIO 2: Gestión Empresarial */}
        <SwiperSlide className="single-item swiper-slide">
          <div className="main-content">
            <img
              className="img-fluid"
              src="assets/portfolio/project-2.jpg" // Cambia a una imagen relevante
              alt="Image Project"
            />
          </div>
          <div className="details">
            <h4>Gestión Empresarial</h4>
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
                <span>3 meses</span>
              </li>
              <li>
                <span>
                  <i className="fa-solid fa-code-branch" /> Detalle :
                </span>
                <span>
                  Diagnosticamos procesos y diseñamos <br />planes de eficiencia
                  operativa
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

        {/* NUEVO ITEM DE PORTFOLIO 3: Ejecución Presupuestaria */}
        <SwiperSlide className="single-item swiper-slide">
          <div className="main-content">
            <img
              className="img-fluid"
              src="assets/portfolio/project-3.jpg" // Cambia a una imagen relevante
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
                  Controlamos desvíos y maximizamos <br />tu rentabilidad proyecto a
                  proyecto.
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

        {/* NUEVO ITEM DE PORTFOLIO 4: Desarrollo Estrategias */}
        <SwiperSlide className="single-item swiper-slide">
          <div className="main-content">
            <img
              className="img-fluid"
              src="assets/portfolio/project-4.jpg" // Cambia a una imagen relevante
              alt="Image Project"
            />
          </div>
          <div className="details">
            <h4>Desarrollo Estrategias</h4>
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
                <span>3 meses</span>
              </li>
              <li>
                <span>
                  <i className="fa-solid fa-code-branch" /> Detalle :
                </span>
                <span>
                  Planes de penetración y fidelización <br />en mercado público y
                  privado.
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

        {/* NUEVO ITEM DE PORTFOLIO 5: Metodología SMART */}
        <SwiperSlide className="single-item swiper-slide">
          <div className="main-content">
            <img
              className="img-fluid"
              src="assets/portfolio/project-5.jpg" // Cambia a una imagen relevante
              alt="Image Project"
            />
          </div>
          <div className="details">
            <h4>Metodología SMART</h4>
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
                  Objetivos específicos, medibles, <br /> alcanzables, relevantes y
                  acotados en el tiempo.
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

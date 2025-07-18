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
        {/* MAIN TITLE STARTS */}
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              #Qué_ofrecemos?
            </span>
          </span>
        </h3>
        {/* MAIN TITLE ENDS */}
      </div>
      {/* TITLE ENDS */}
      <Swiper
        {...salimovSlider.portfolio}
        className="swiper swiper-portfolio animated-layer fade-in-right-animation fadeInUp wow"
        data-wow-offset={200}
      >
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <img
              className="img-fluid"
              src="assets/portfolio/project-1.jpg"
              alt="Image Project"
            />
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>Gestión Empresarial</h4>
            <div>
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
                  <span>Diagnosticamos procesos y diseñamos planes de eficiencia operativa</span>
                </li>
              </ul>
            </div>
            <a href="#" target="_blank" className="custom-btn">
              <span>
                Contratar <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
 {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>Ejecución Presupuestaria</h4>
            <div>
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
                  <span>Controlamos desvíos y maximizamos tu rentabilidad proyecto a proyecto.</span>
                </li>
              </ul>
            </div>
            <a href="#" target="_blank" className="custom-btn">
              <span>
                Contratar <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
 {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>Desarrollo Estrategias</h4>
            <div>
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
                  <span>Planes de penetración y fidelización en mercado público y privado.</span>
                </li>
              </ul>
            </div>
            <a href="#" target="_blank" className="custom-btn">
              <span>
                Contratar <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
 {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>Metodología SMART</h4>
            <div>
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
                  <span>Objetivos específicos, medibles, alcanzables, relevantes y acotados en el tiempo.</span>
                </li>
              </ul>
            </div>
            <a href="#" target="_blank" className="custom-btn">
              <span>
                Contratar <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <div className="videocontainer">
              <iframe
                className="youtube-video"
                src="https://youtu.be/9aTWRphGdnA"
                allowFullScreen=""
              />
            </div>
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>Canal de Youtube</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Servicio :
                  </span>
                  <span>Recursos gratuitos</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Clientes :
                  </span>
                  <span>Usarios de KUBO</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Duración :
                  </span>
                  <span>Eterno</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Detalle :
                  </span>
                  <span>Presto / Ms Project</span>
                </li>
              </ul>
            </div>
            <a href="https://youtu.be/9aTWRphGdnA" target="_blank" className="custom-btn">
              <span>
                Ver <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
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
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>OfertaPublica.cl</h4>
            <div>
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
                  <span>Análisis profesional de antecedentes de licitaciones.</span>
                </li>
              </ul>
            </div>
            <a href="#" target="_blank" className="custom-btn">
              <span>
                Contratar <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
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
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>Academia Mercado Público</h4>
            <div>
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
                  <span>Cursos Presto - MS Project - Mercado Público</span>
                </li>
              </ul>
            </div>
            <a href="#" target="_blank" className="custom-btn">
              <span>
                Contratar <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
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

// components/Portfolio.js
import { salimovSlider } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import servicios from "./data/servicios";

const Portfolio = () => {
  return (
    <section className="portfolio main-section flex-column-mobile" id="portfolio">
      <div className="custom-title">
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              #Qué_ofrecemos?
            </span>
          </span>
        </h3>
      </div>

      <Swiper
        {...salimovSlider.portfolio}
        className="swiper swiper-portfolio animated-layer fade-in-right-animation fadeInUp wow"
        data-wow-offset={200}
      >
        {servicios.map((servicio) => (
          <SwiperSlide key={servicio.slug} className="single-item swiper-slide">
            <div className="main-content">
              <img className="img-fluid" src={servicio.img} alt={servicio.titulo} />
            </div>
            <div className="details">
              <h4>{servicio.titulo}</h4>
              <div>
                <ul>
                  <li>
                    <span>
                      <i className="fa-regular fa-file-lines" /> Servicio:
                    </span>
                    <span>{servicio.servicio}</span>
                  </li>
                  <li>
                    <span>
                      <i className="fa-regular fa-user" /> Modalidad:
                    </span>
                    <span>{servicio.modalidad}</span>
                  </li>
                  <li>
                    <span>
                      <i className="fa-regular fa-hourglass" /> Duración:
                    </span>
                    <span>{servicio.duracion}</span>
                  </li>
                  <li>
                    <span>
                      <i className="fa-solid fa-code-branch" /> Detalle:
                    </span>
                    <span style={{ whiteSpace: "pre-line", display: "block" }}>{servicio.detalle}</span>
                  </li>
                </ul>
              </div>
              <a href={`/servicios/${servicio.slug}`} className="custom-btn">
                <span>Más info <i className="fa-solid fa-arrow-up-right-from-square" /></span>
              </a>
            </div>
          </SwiperSlide>
        ))}
<SwiperSlide className="single-item swiper-slide">
  {/* ITEM MAIN CONTENT STARTS */}
  <div className="main-content">
    <div className="videocontainer">
      <iframe
        className="youtube-video"
         src="https://www.youtube.com/embed/9aTWRphGdnA?enablejsapi=1&version=3&playerapiid=ytplayer"
        allowFullScreen=""
        title="Video institucional Kubo"
      />
    </div>
  </div>
  {/* ITEM MAIN CONTENT ENDS */}

  {/* ITEM DETAILS STARTS */}
  <div className="details">
    <h4>Cursos gratuitos en Youtube</h4>
    <div>
      <ul>
        <li>
          <span>
            <i className="fa-regular fa-file-lines" /> Proyecto:
          </span>
          <span>Servicios gratuitos</span>
        </li>
        <li>
          <span>
            <i className="fa-regular fa-user" /> Cliente:
          </span>
          <span>Kubo Asesorías</span>
        </li>
        <li>
          <span>
            <i className="fa-regular fa-hourglass" /> Duración:
          </span>
          <span>1 minuto</span>
        </li>
        <li>
          <span>
            <i className="fa-solid fa-code-branch" /> Formato:
          </span>
          <span>Video YouTube</span>
        </li>
      </ul>
    </div>
    <a
      href="https://www.youtube.com/@kuboasesorias"
      target="_blank"
      className="custom-btn"
    >
      <span>
        Ver canal <i className="fa-solid fa-arrow-up-right-from-square" />
      </span>
    </a>
  </div>
  {/* ITEM DETAILS ENDS */}
</SwiperSlide>

          {/* Botones de navegación Swiper */}
        <div className="nav-item next-item animated-btn">
          <span />
        </div>
        <div className="nav-item prev-item animated-btn">
          <span />
        </div>
      </Swiper>
    </section>
  );
};

export default Portfolio;

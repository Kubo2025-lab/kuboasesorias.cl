import { salimovSlider } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

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
        {/* Servicios base */}
        <SwiperSlide className="single-item swiper-slide">
          <div className="main-content">
            <img className="img-fluid" src="assets/portfolio/project-1.jpg" alt="Ejecución Presupuestaria" />
          </div>
          <div className="details">
            <h4>Ejecución Presupuestaria</h4>
            <ul>
              <li><span><i className="fa-regular fa-file-lines" /> Servicio :</span><span>Consultoría</span></li>
              <li><span><i className="fa-regular fa-user" /> Modalidad :</span><span>A distancia</span></li>
              <li><span><i className="fa-regular fa-hourglass" /> Duración :</span><span>1 mes</span></li>
              <li><span><i className="fa-solid fa-code-branch" /> Detalle :</span><span>Control de desviaciones y optimización de presupuesto público.</span></li>
            </ul>
            <a href="#" target="_blank" className="custom-btn"><span>Contratar <i className="fa-solid fa-arrow-up-right-from-square" /></span></a>
          </div>
        </SwiperSlide>

        {/* Huecos de oportunidad */}
        {[
          {
            titulo: "Automatización de propuestas",
            detalle: "Plantillas inteligentes conectadas a PRESTO, Excel y BIM para acelerar entregas.",
            duracion: "Servicio continuo",
            img: "assets/portfolio/project-2.jpg"
          },
          {
            titulo: "Modelo Freemium",
            detalle: "Plataforma gratuita con alertas y formación base, escalable a consultorías premium.",
            duracion: "Acceso permanente",
            img: "assets/portfolio/project-3.jpg"
          },
          {
            titulo: "Capacitación certificada",
            detalle: "Cursos modulares con certificación, marketing segmentado y contenido descargable.",
            duracion: "Según módulo",
            img: "assets/portfolio/project-4.jpg"
          },
          {
            titulo: "Alianzas Fintech",
            detalle: "Opciones de pago en cuotas o con crédito en línea para clientes sin liquidez.",
            duracion: "A demanda",
            img: "assets/portfolio/project-5.jpg"
          },
          {
            titulo: "Servicio post-adjudicación",
            detalle: "Acompañamiento técnico y fiscal durante ejecución de contratos, con reportes y alertas.",
            duracion: "Hasta cierre de contrato",
            img: "assets/portfolio/project-6.jpg"
          },
          {
            titulo: "Paquetes sectorizados",
            detalle: "Ofertas especializadas para Salud, Deporte e Infraestructura Verde con material técnico.",
            duracion: "Diseño por proyecto",
            img: "assets/portfolio/project-7.jpg"
          },
          {
            titulo: "Club de usuarios",
            detalle: "Comunidad con sesiones grupales, networking y beneficios exclusivos.",
            duracion: "Suscripción mensual",
            img: "assets/portfolio/project-8.jpg"
          }
        ].map((servicio, idx) => (
          <SwiperSlide className="single-item swiper-slide" key={idx}>
            <div className="main-content">
              <img className="img-fluid" src={servicio.img} alt={servicio.titulo} />
            </div>
            <div className="details">
              <h4>{servicio.titulo}</h4>
              <ul>
                <li><span><i className="fa-regular fa-file-lines" /> Servicio :</span><span>Consultoría / Plataforma</span></li>
                <li><span><i className="fa-regular fa-user" /> Modalidad :</span><span>A distancia</span></li>
                <li><span><i className="fa-regular fa-hourglass" /> Duración :</span><span>{servicio.duracion}</span></li>
                <li><span><i className="fa-solid fa-code-branch" /> Detalle :</span><span>{servicio.detalle}</span></li>
              </ul>
              <a href="#" target="_blank" className="custom-btn"><span>Más info <i className="fa-solid fa-arrow-up-right-from-square" /></span></a>
            </div>
          </SwiperSlide>
        ))}

        {/* Nuevo Servicio: Clases por YouTube */}
        <SwiperSlide className="single-item swiper-slide">
          <div className="main-content">
            <a href="https://youtu.be/9aTWRphGdnA" target="_blank" className="external">
              <img className="img-fluid" src="assets/portfolio/youtube-kubo.jpg" alt="Clases en YouTube" />
            </a>
          </div>
          <div className="details">
            <h4>Clases Abiertas por YouTube</h4>
            <ul>
              <li><span><i className="fa-regular fa-file-lines" /> Servicio :</span><span>Capacitación Gratuita</span></li>
              <li><span><i className="fa-regular fa-user" /> Canal :</span><span><a href="https://www.youtube.com/@kuboasesorias_cl" target="_blank">@kuboasesorias_cl</a></span></li>
              <li><span><i className="fa-regular fa-hourglass" /> Acceso :</span><span>Libre y permanente</span></li>
              <li><span><i className="fa-solid fa-code-branch" /> Detalle :</span><span>Capítulos didácticos sobre licitaciones, herramientas y casos reales.</span></li>
            </ul>
            <a href="https://www.youtube.com/@kuboasesorias_cl" target="_blank" className="custom-btn">
              <span>Ir al canal <i className="fa-brands fa-youtube" /></span>
            </a>
          </div>
        </SwiperSlide>

        {/* NAVEGACIÓN */}
        <div className="nav-item next-item animated-btn"><span /></div>
        <div className="nav-item prev-item animated-btn"><span /></div>
      </Swiper>

      <img alt="" className="separator hide-mobile" src="assets/separator.png" />
    </section>
  );
};

export default Portfolio;

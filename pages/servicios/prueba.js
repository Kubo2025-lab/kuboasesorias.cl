import Head from "next/head";
import { Fragment } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Copyright";
import Portfolio from "../../components/Portfolio";
import Testimonials from "../../components/Testimonials";

const Prueba = () => {
  return (
    <Fragment>
      <Head>
        <title>Prueba | Kubo Asesorías</title>
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/animate.min.css" />
        <link rel="stylesheet" href="/css/all.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </Head>
      <Header />

      {/* SECCION PAS: Problema, Agitación, Solución */}
      <section className="main-section flex-column-mobile" id="problema">
        <div className="custom-title">
          <h3>
            <span>
              <span className="animated-layer fade-in-left-animation fadeInUp wow">
                #¿Te ganaste la licitación y no sabes por dónde partir?
              </span>
            </span>
          </h3>
        </div>
        <div className="section-container fade-in-up-animation fadeInUp wow">
          <p>
            Felicitaciones, lo lograste. Pero ahora empieza la verdadera maratón: entregables, plazos, informes técnicos y un sinfín de trámites fiscales.
            Sin apoyo, tu victoria se puede transformar en una pesadilla operativa.
          </p>
        </div>
      </section>

      <section className="main-section flex-column-mobile bg-dark" id="agitacion">
        <div className="custom-title">
          <h3>
            <span>
              <span className="animated-layer fade-in-left-animation fadeInUp wow">
                #Lo que nadie te dice del post-adjudicación
              </span>
            </span>
          </h3>
        </div>
        <div className="section-container fade-in-up-animation fadeInUp wow">
          <ul className="check-list">
            <li><i className="fa-solid fa-triangle-exclamation"></i> Informes mal hechos pueden hacerte perder el contrato.</li>
            <li><i className="fa-solid fa-triangle-exclamation"></i> Retrasos o entregas incompletas generan multas y malos antecedentes.</li>
            <li><i className="fa-solid fa-triangle-exclamation"></i> Nadie te capacita para lo que viene después de ganar.</li>
          </ul>
        </div>
      </section>

      <section className="main-section flex-column-mobile" id="solucion">
        <div className="custom-title">
          <h3>
            <span>
              <span className="animated-layer fade-in-left-animation fadeInUp wow">
                #Nuestra solución: KUBO Post-Adjudicación
              </span>
            </span>
          </h3>
        </div>
        <div className="section-container fade-in-up-animation fadeInUp wow">
          <ul className="benefits-grid">
            <li><i className="fa-solid fa-file-lines"></i> Checklist y alertas personalizadas por tipo de contrato.</li>
            <li><i className="fa-solid fa-file-contract"></i> Modelos de informes y entregables listos para usar.</li>
            <li><i className="fa-solid fa-headset"></i> Acompañamiento técnico durante la ejecución.</li>
            <li><i className="fa-solid fa-chart-line"></i> Reportes fiscales y seguimiento mensual.</li>
          </ul>
          <div className="text-center mt-5">
            <a href="/contacto" className="custom-btn">
              <span>Quiero que me acompañen <i className="fa-solid fa-arrow-right"></i></span>
            </a>
          </div>
        </div>
      </section>

      <Portfolio />
      <Testimonials />
      <Footer />
    </Fragment>
  );
};

export default Prueba;


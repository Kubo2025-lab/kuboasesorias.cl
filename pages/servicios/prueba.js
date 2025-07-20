import Head from "next/head";
import { Fragment } from "react";
import Header from "../../src/components/Header";
import Home from "../../src/components/sections/Home";
import Portfolio from "../../src/components/sections/Portfolio";
import Testimonials from "../../src/components/sections/Testimonials";
import Copyright from "../../src/components/sections/Copyright";

const Pruebas = () => {
  return (
    <Fragment>
      <Head>
        <title>Zona de Pruebas Visuales | Kubo</title>
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/animate.min.css" />
        <link rel="stylesheet" href="/css/all.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </Head>

      <Header />

      <section className="main-section" id="pruebas">
        <div className="container text-center">
          <h2 className="custom-title mb-4">
            Zona de Pruebas Visuales
          </h2>
          <p className="subtitle mb-5">
            Aquí probamos componentes antes de llevarlos a producción.
          </p>

          {/* PAS: Problema */}
          <div className="row mb-5">
            <div className="col-md-12">
              <h3 className="text-warning">
                ¿Por qué muchas páginas no convierten?
              </h3>
              <p>
                Porque son planas, aburridas o difíciles de navegar. La mayoría de sitios fallan no por falta de contenido, sino por falta de intención. Si no captas la atención en 5 segundos, la venta se te fue.
              </p>
            </div>
          </div>

          {/* PAS: Agitación */}
          <div className="row mb-5">
            <div className="col-md-12">
              <h3 className="text-danger">
                No basta con “tener presencia digital”
              </h3>
              <p>
                Tener una web que no convence es como tener un local vacío. Es peor aún si la web no inspira confianza, no muestra beneficios reales o simplemente “no se entiende”. Estás perdiendo tiempo, oportunidades... y plata.
              </p>
            </div>
          </div>

          {/* PAS: Solución */}
          <div className="row mb-5">
            <div className="col-md-12">
              <h3 className="text-success">
                Kubo construye experiencias visuales que venden
              </h3>
              <p>
                En esta zona de pruebas damos vida a nuevos componentes: tarjetas animadas, textos dinámicos, formularios atractivos, secciones con scroll visual... todo lo necesario para que tu sitio no solo se vea bien, sino que **convierta**.
              </p>
              <p>
                Aquí probamos antes de implementar. Como debe ser.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Secciones reutilizadas del sitio */}
      <Portfolio />
      <Testimonials />
      <Footer />
    </Fragment>
  );
};

export default Pruebas;

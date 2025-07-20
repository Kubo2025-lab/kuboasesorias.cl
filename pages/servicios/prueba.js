import Head from "next/head";

const Prueba = () => {
  return (
    <>
      <Head>
        <title>Zona de Pruebas Kubo</title>
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/animate.min.css" />
        <link rel="stylesheet" href="/css/all.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </Head>

      <div className="container py-5">
        <a href="/" className="btn btn-dark mb-4">
          <i className="fas fa-arrow-left"></i> Volver
        </a>

        <h1 className="text-center fw-bold mb-3 animated fadeInDown">Zona de Pruebas Visuales</h1>
        <p className="text-center text-muted animated fadeInUp">
          Aquí probamos componentes antes de llevarlos a producción.
        </p>

        <div className="row mt-5">
          {/* Tarjeta 1 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-lg animated fadeInLeft">
              <div className="card-body text-center">
                <i className="fas fa-cogs fa-3x mb-3 text-warning"></i>
                <h5 className="card-title fw-bold">Componente Técnico</h5>
                <p className="card-text">
                  Probamos layouts, estilos y animaciones visuales en tiempo real para mejorar tu experiencia.
                </p>
                <button className="btn btn-outline-warning">Probar</button>
              </div>
            </div>
          </div>

          {/* Tarjeta 2 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-lg animated fadeInUp">
              <div className="card-body text-center">
                <i className="fas fa-magic fa-3x mb-3 text-warning"></i>
                <h5 className="card-title fw-bold">Efectos CSS</h5>
                <p className="card-text">
                  Aquí testeamos transiciones, hover y combinaciones visuales para las secciones clave.
                </p>
                <button className="btn btn-outline-warning">Ver efectos</button>
              </div>
            </div>
          </div>

          {/* Tarjeta 3 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-lg animated fadeInRight">
              <div className="card-body text-center">
                <i className="fas fa-vial fa-3x mb-3 text-warning"></i>
                <h5 className="card-title fw-bold">Modo Experimental</h5>
                <p className="card-text">
                  Este espacio nos permite romper cosas sin miedo y construir versiones mejores.
                </p>
                <button className="btn btn-outline-warning">Activar modo</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Prueba;


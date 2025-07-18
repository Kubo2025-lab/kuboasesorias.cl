const Home = () => {
  return (
    <section className="home image" id="home">
      <div>
        <div className="position-relative">
          <h1>
            <span>
              <span className="animated-layer">
                Hola<span>.</span>
              </span>
            </span>
            <span>
              <span className="animated-layer">
                Somos
              </span>
            </span>
            <span>
              <span className="animated-layer">Kubo Asesorías</span>
            </span>
          </h1>
          <span className="intro animated-layer">
            Acompañamos a PYMES chilenas y extranjeras en todo el proceso de licitación pública para que no solo participen, sino que ganen, crezcan y se consoliden.
          </span>
        </div>
      </div>
      {/* CALL TO ACTION STARTS */}
      <span className="animated-layer animated-btn cta" id="cta">
        <span></span>
      </span>
      {/* CALL TO ACTION ENDS */}
    </section>
  );
};
export default Home;

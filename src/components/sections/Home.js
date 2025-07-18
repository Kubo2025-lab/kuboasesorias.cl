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
            <span className="position-relative">
              <span className="animated-layer">Somos</span>
              <span className="intro animated-layer">
                Ayudamos a PYMES chilenas y extranjeras a ganar licitaciones.
              </span>
            </span>
            <span>
              <span className="animated-layer">Kubo Asesorías</span>
            </span>
          </h1>
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

const About = () => {
  return (
    <section className="about main-section flex-column-mobile" id="about">
      {/* INFO HOLDER STARTS */}
      <div className="info flex-column-mobile">
        {/* IMAGE STARTS */}
        <div
          className="img-container animated-layer image-animation my-photo-container fadeInUp wow"
          data-wow-offset={200}
          id="my-photo"
        >
          <div>
            <div>
              <img className="my-photo" src="assets/about.jpg" alt="" />
            </div>
          </div>
        </div>
        {/* IMAGE ENDS */}
        {/* INFO STARTS */}
        <div>
          <h2>
            <span>
              <span className="animated-layer fade-in-up-animation fadeInUp wow">
                Kubo
              </span>
            </span>
            <span>
              <span className="animated-layer fade-in-up-animation fadeInUp wow">
                Servicios
              </span>
            </span>
          </h2>
          <div className="infos">
            <ul>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Experiencia :</span>
                    <span>12 años</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Nacionalidad :</span>
                    <span>Chilena</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Empresa :</span>
                    <span>Formalizada</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Lenguaje :</span>
                    <span>Español</span>
                  </span>
                </span>
              </li>
            </ul>
            <ul>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Dirección :</span>
                    <span>Merced N° 838 of. 117, Santiago</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Fono :</span>
                    <span>+569 2179 2366</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Email :</span>
                    <span>eduardo@kuboasesorias.cl</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Linkedin :</span>
                    <span>/in/eduardo-zambrano/</span>
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
        {/* INFO ENDS */}
      </div>
      {/* INFO HOLDER ENDS */}
  
      {/* SKILLS STARTS */}
      <div className="skills flex-column-mobile">
        <div className="custom-title">
          <h3>
            <span>
              <span className="animated-layer fade-in-left-animation fadeInUp wow">
                #Servicios
              </span>
            </span>
          </h3>
        </div>

        <div className="skills-content">
          {/* Bloque 1 */}
          <div>
            <div className="animated-layer fade-in-down-animation fadeInLeft wow">
              <span>
                <i className="fas fa-chart-line" />
              </span>
              <h4>Gestión Empresarial</h4>
            </div>
            <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span>
                <i className="fas fa-coins" />
              </span>
              <h4>Ejecución Presupuestaria</h4>
            </div>
          </div>

          {/* Bloque 2 */}
          <div>
            <div className="animated-layer fade-in-down-animation fadeInLeft wow">
              <span>
                <i className="fas fa-bullseye" />
              </span>
              <h4>Estrategias Comerciales</h4>
            </div>
            <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span>
                <i className="fas fa-check-circle" />
              </span>
              <h4>Metodología SMART</h4>
            </div>
          </div>

          {/* Bloque 3 */}
          <div>
            <div className="animated-layer fade-in-down-animation fadeInLeft wow">
              <span>
                <i className="fas fa-briefcase" />
              </span>
              <h4>Venta a Gobierno (B2G)</h4>
            </div>
            <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span>
                <i className="fas fa-file-signature" />
              </span>
              <h4>Estudio de Propuestas</h4>
            </div>
          </div>

          {/* Bloque 4 */}
          <div>
            <div className="animated-layer fade-in-down-animation fadeInLeft wow">
              <span>
                <i className="fas fa-project-diagram" />
              </span>
              <h4>Planificación de Proyectos</h4>
            </div>
            <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span>
                <i className="fas fa-funnel-dollar" />
              </span>
              <h4>Flujos Financieros</h4>
            </div>
          </div>
        </div>
      </div>
      {/* SKILLS ENDS */}

      {/* TIMELINE STARTS */}
        <div className="timeline">
          <ol className="animated-layer fade-in-animation">
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-down-animation fadeInUp wow">
                <div className="experience">
                  <h4>Project Manager</h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>2019 - Now</span>
                  </p>
                  <p>
                    <i className="fa-regular fa-building" />
                    <span>Adobe Company</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-up-animation fadeInUp wow">
                <div className="experience">
                  <h4>Team Leader</h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>2015 - 2019</span>
                  </p>
                  <p>
                    <i className="fa-regular fa-building" />
                    <span>Twitter Inc</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-down-animation fadeInUp wow">
                <div className="experience">
                  <h4>Web Developer</h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>2010 - 2015</span>
                  </p>
                  <p>
                    <i className="fa-regular fa-building" />
                    <span>Facebook</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-up-animation fadeInUp wow">
                <div className="education">
                  <h4>Master Degree</h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>2003</span>
                  </p>
                  <p>
                    <i className="fa-solid fa-building-columns" />
                    <span>London University</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-down-animation fadeInUp wow">
                <div className="education">
                  <h4>Bachelor Degree</h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>1999</span>
                  </p>
                  <p>
                    <i className="fa-solid fa-building-columns" />
                    <span>Berlin High School</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            <li />
          </ol>
        </div>
        {/* TIMELINE ENDS */}
      </div>
      {/* RESUME ENDS */}
      <img
        alt=""
        className="separator hide-mobile"
        src="assets/separator.png"
      />
    </section>
  );
};
export default About;

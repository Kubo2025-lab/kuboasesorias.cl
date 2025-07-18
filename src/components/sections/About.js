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
                Asesorías
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
        {/* TITLE STARTS */}
        <div className="custom-title">
          {/* MAIN TITLE STARTS */}
          <h3>
            <span>
              <span className="animated-layer fade-in-left-animation fadeInUp wow">
                #servicios
              </span>
            </span>
          </h3>
          {/* MAIN TITLE ENDS */}
        </div>
        {/* TITLE ENDS */}
        <div className="skills-content">
          <div>
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-down-animation fadeInLeft wow">
              <span>
                <i className="devicon-clion-plain" />
              </span>
              <h4>Gestión Empresarial</h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span>
                <i className="devicon-trello-plain" />
              </span>
              <h4>Planificación Estratégica</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
          <div>
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-down-animation fadeInLeft wow">
              <span>
                <i className="devicon-clion-plain" />
              </span>
              <h4>Ventas en Mercado Público</h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span>
                <i className="devicon-clion-plain" />
              </span>
              <h4>Automatización de Flujos</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
          <div>
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-down-animation fadeInLeft wow">
              <span>
                 <i className="devicon-clion-plain" />
              </span>
              <h4>Estudio de Propuestas</h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span>
                <i className="devicon-vscode-plain" />
              </span>
              <h4>Capacitación y Asesoría</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
          <div>
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-down-animation fadeInLeft wow">
              <span>
                <i className="devicon-clion-plain" />
              </span>
              <h4>Registro en ChileCompra</h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span>
                <i className="devicon-clion-plain" />
              </span>
              <h4>Flujos Financieros</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
        </div>
      </div>
      {/* SKILLS ENDS */}
      {/* RESUME STARTS */}
      <div className="resume flex-column-mobile">
        {/* TITLE STARTS */}
        <div className="custom-title fadeInUp wow">
          {/* MAIN TITLE STARTS */}
          <h3>
            <span>
              <span className="animated-layer fade-in-left-animation">
                #Experiencia
              </span>
            </span>
          </h3>
          {/* MAIN TITLE ENDS */}
        </div>
        {/* TITLE ENDS */}
        {/* TIMELINE STARTS */}
        <div className="timeline">
          <ol className="animated-layer fade-in-animation">
  {/* ITEM 1 */}
  <li>
    <div className="animated-layer fade-in-down-animation fadeInUp wow">
      <div className="experience">
        <h4>Obras de Salud</h4>
        <p><i className="fa-regular fa-clock" /><span>2025 - Ejecutándose</span></p>
        <p><i className="fa-regular fa-building" /><span>Construcción SAR Miraflores</span></p>
      </div>
    </div>
  </li>

  {/* ITEM 2 */}
  <li>
    <div className="animated-layer fade-in-up-animation fadeInUp wow">
      <div className="experience">
        <h4>Obra de Salud</h4>
        <p><i className="fa-regular fa-clock" /><span>2024 - 2025</span></p>
        <p><i className="fa-regular fa-building" /><span>Pabellones del HLCM</span></p>
      </div>
    </div>
  </li>

  {/* ITEM 3 */}
  <li>
    <div className="animated-layer fade-in-down-animation fadeInUp wow">
      <div className="experience">
        <h4>Obra Patrimonial</h4>
        <p><i className="fa-regular fa-clock" /><span>2023 - 2024</span></p>
        <p><i className="fa-regular fa-building" /><span>Centro Recoleta Dominica</span></p>
      </div>
    </div>
  </li>

  {/* ITEM 4 */}
  <li>
    <div className="animated-layer fade-in-up-animation fadeInUp wow">
      <div className="experience">
        <h4>Obra Salud</h4>
        <p><i className="fa-regular fa-clock" /><span>2023 - 2024</span></p>
        <p><i className="fa-solid fa-building-columns" /><span>Cesfam Eduardo Frei</span></p>
      </div>
    </div>
  </li>

  {/* ITEM 5 */}
  <li>
    <div className="animated-layer fade-in-down-animation fadeInUp wow">
      <div className="experience">
        <h4>Obra Deportiva</h4>
        <p><i className="fa-regular fa-clock" /><span>2023 - 2024</span></p>
        <p><i className="fa-solid fa-building-columns" /><span>Reparación Polideportivo E.N.</span></p>
      </div>
    </div>
  </li>

  {/* ITEM 6 */}
  <li>
    <div className="animated-layer fade-in-down-animation fadeInUp wow">
      <div className="experience">
        <h4>Obra Salud</h4>
        <p><i className="fa-regular fa-clock" /><span>2022 - 2023</span></p>
        <p><i className="fa-solid fa-building-columns" /><span>Pabellón HCSBA</span></p>
      </div>
    </div>
  </li>
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

const Header = () => {
  return (
    <header>
      {/* Desktop Menu Starts */}
      <div className="header-inner hide-mobile">
        {/* MENU STARTS */}
        <div className="menu">
          <nav>
            <ul>
              <li>
                <span className="active" id="home-link">
                  Home
                </span>
              </li>
              <li>
                <span id="about-link">Nosotros</span>
              </li>
              <li>
                <span id="portfolio-link">Servicios</span>
              </li>
              <li>
                <span id="contact-link">Contacto</span>
              </li>
              <li>
                <span id="blog-link">Blog</span>
              </li>
            </ul>
          </nav>
        </div>
        {/* MENU ENDS */}
        {/* FREELANCE STARTS */}
        <div className="mail">
          <p>
            Email :<span> eduardo@kuboasesorias.cl</span>
          </p>
        </div>
        {/* FREELANCE ENDS */}
      </div>
      {/* Desktop Menu Ends */}
      {/* Mobile Menu Starts */}
      <nav className="mobile-menu">
        <div id="menuToggle">
          <input type="checkbox" id="checkboxmenu" />
          <span />
          <span />
          <span />
          <ul className="list-unstyled" id="menu">
            <li>
              <a href="#home">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#my-photo">
                <span>Nosotros</span>
              </a>
            </li>
            <li>
              <a href="#portfolio">
                <span>Servicios</span>
              </a>
            </li>
            <li>
              <a href="#contact">
                <span>Contacto</span>
              </a>
            </li>
            <li>
              <a href="#blog">
                <span>Blog</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* Mobile Menu Ends */}
    </header>
  );
};
export default Header;

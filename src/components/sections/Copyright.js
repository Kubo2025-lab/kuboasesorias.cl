const Copyright = () => {
  return (
    <section className="copyright">
      <img
        alt=""
        className="z-1 hide-mobile"
        src="assets/separator-copyright.png"
      />
      <div>
        <span>© {new Date().getFullYear()} Kubo</span>
        <span>
          Diseñado por{" "}
          <a
            target="_blank"
            href="https://www.brandata.cl"
          >
            BrandData
          </a>
        </span>
        <ul>
         <li>
                <a href="https://www.tiktok.com/@kuboservicios">
                  <i className="fa-brands fa-tiktok" />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@kuboasesorias_cl">
                  <i className="fa-brands fa-youtube" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/eduardo-zambrano/">
                  <i className="fa-brands fa-linkedin" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/kubo.asesorias">
                  <i className="fa-brands fa-facebook" />
                </a>
              </li>
        </ul>
      </div>
    </section>
  );
};
export default Copyright;

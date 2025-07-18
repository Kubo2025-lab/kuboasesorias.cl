const Contact = () => {
  const handleSubmit = async (event) => {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario

    const formData = new FormData(event.target);
    const data = {
      timestamp: new Date().toLocaleString('es-CL', { timeZone: 'America/Santiago' }), // Fecha y hora actual
      nombre: formData.get('name'),
      email: formData.get('email'),
      asunto: formData.get('subject'),
      mensaje: formData.get('message'),
    };

    try {
      const response = await fetch('https://branddata.app.n8n.cloud/webhook/formulario-k-u-b-o', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('¡Mensaje enviado con éxito!');
        event.target.reset(); // Limpia el formulario
      } else {
        alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      alert('Hubo un error de conexión. Por favor, inténtalo de nuevo más tarde.');
    }
  };

  return (
    <section className="contact main-section flex-column-mobile" id="contact">
      {/* TITLE STARTS */}
      <div className="custom-title">
        {/* MAIN TITLE STARTS */}
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              #Contáctanos
            </span>
          </span>
        </h3>
        {/* MAIN TITLE ENDS */}
      </div>
      {/* TITLE ENDS */}
      {/* CONTACTS STARTS */}
      <div className="boxes">
        <div>
          {/* CONTACT ITEM STARTS */}
          <div className="animated-layer fade-in-down-animation fadeInUp wow">
            <i className="fa fa-phone" />
            <p>
              <span className="small-text">Fono</span>
              +569 2179 2366
            </p>
          </div>
          {/* CONTACT ITEM ENDS */}
          {/* CONTACT ITEM STARTS */}
          <div className="animated-layer fade-in-up-animation fadeInUp wow">
            <i className="fa fa-location-dot" />
            <p>
              <span className="small-text">Dirección</span>
              Merced N° 838 of. 117, Santiago
            </p>
          </div>
          {/* CONTACT ITEM ENDS */}
        </div>
        <div>
          {/* CONTACT ITEM STARTS */}
          <div className="animated-layer fade-in-down-animation fadeInUp wow">
            <i className="fa fa-envelope" />
            <p>
              <span className="small-text">email</span>
              eduardo@kuboasesorias.cl
            </p>
          </div>
          {/* CONTACT ITEM ENDS */}
          {/* CONTACT ITEM STARTS */}
          <div className="animated-layer fade-in-up-animation fadeInUp wow">
            <i className="fa fa-share-nodes" />
            <span className="small-text">Síguenos</span>
            <ul className="social">
              <li>
                <a href="#">
                  <i className="fa-brands fa-github" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-dribbble" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-facebook" />
                </a>
              </li>
            </ul>
          </div>
          {/* CONTACT ITEM ENDS */}
        </div>
      </div>
      {/* CONTACTS ENDS */}

      {/* CONTACT FORM STARTS */}
      <div className="contact-form">
        <form className="animated-layer fade-in-up-animation fadeInUp wow" onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="text" name="name" placeholder="Tu Nombre" className="input-control" required />
            <input type="email" name="email" placeholder="Tu Email" className="input-control" required />
          </div>
          <div className="input-group">
            <input type="text" name="subject" placeholder="Asunto" className="input-control" required />
          </div>
          <div className="input-group">
            <textarea name="message" placeholder="Tu Mensaje" className="input-control" required></textarea>
          </div>
          <div className="button-group">
            <button type="submit" className="btn hover-animated">
              <span className="text">Enviar Mensaje</span>
              <span className="circle"></span>
            </button>
          </div>
        </form>
      </div>
      {/* CONTACT FORM ENDS */}

      <img
        alt=""
        className="separator hide-mobile"
        src="assets/separator.png"
      />
    </section>
  );
};
export default Contact;


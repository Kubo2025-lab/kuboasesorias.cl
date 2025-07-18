import { useState } from "react";

const Contact = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <section className="contact main-section flex-column-mobile" id="contact">
      {/* TITLE */}
      <div className="custom-title">
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              #Contáctanos
            </span>
          </span>
        </h3>
      </div>

      {/* CONTACT BOXES */}
      <div className="boxes">
        <div>
          <div className="animated-layer fade-in-down-animation fadeInUp wow">
            <i className="fa fa-phone" />
            <p>
              <span className="small-text">Fono</span>
              +569 2179 2366
            </p>
          </div>
          <div className="animated-layer fade-in-up-animation fadeInUp wow">
            <i className="fa fa-location-dot" />
            <p>
              <span className="small-text">Dirección</span>
              Merced N° 838 of. 117, Santiago
            </p>
          </div>
        </div>

        <div>
          <div className="animated-layer fade-in-down-animation fadeInUp wow">
            <i className="fa fa-envelope" />
            <p>
              <span className="small-text">Email</span>
              eduardo@kuboasesorias.cl
            </p>
          </div>

          <div className="animated-layer fade-in-up-animation fadeInUp wow">
            <i className="fa fa-share-nodes" />
            <span className="small-text">¿Tienes dudas?</span>
            <button onClick={toggleModal} className="custom-btn">
              Envíanos un mensaje directo
            </button>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-modal" onClick={toggleModal}>
              &times;
            </span>
            <h3>Formulario de Contacto</h3>
            <form>
              <input type="text" placeholder="Tu nombre" required />
              <input type="email" placeholder="Tu correo electrónico" required />
              <input type="text" placeholder="Motivo del contacto" required />
              <textarea placeholder="Tu mensaje" rows="4" required />
              <button type="submit" className="custom-btn">Enviar</button>
            </form>
          </div>
        </div>
      )}

      <img alt="" className="separator hide-mobile" src="assets/separator.png" />
    </section>
  );
};

export default Contact;

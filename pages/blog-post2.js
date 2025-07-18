import { Fragment, useEffect } from "react";

const BlogPost = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("blog-page");
  }, []);

  return (
    <Fragment>
      <a href="/" className="back-btn">
        <i className="fa-solid fa-arrow-left"></i>
      </a>
      <div className="blog-content">
        <h1>#kubo_blog</h1>
        {/* ARTICLE STARTS */}
        <div className="main-post">
          {/* META STARTS */}
          <div className="meta d-flex align-items-center">
            <div className="d-flex align-items-center">
              <i className="fa-regular fa-calendar" />
              <span>18 Jul 2025</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="fa-solid fa-tag" />
              <span>Licitaciones, negocios, mercado público</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="fa-regular fa-comments" />
              <span>0 comentarios</span>
            </div>
          </div>
          {/* META ENDS */}
          {/* CONTENT STARTS */}
          <h3>¿Cómo vivir de las licitaciones?</h3>
          <img src="assets/blog/blog-post-2.jpg" alt="Blog image" />
<div className="post-content">
  <p>
    “Quiero vivir de las licitaciones”. Esa frase la he escuchado decenas de veces, y no es casualidad. Las compras públicas en Chile (y en buena parte de Latinoamérica) representan una fuente de ingresos gigantesca, estable y —para muchos— subutilizada. Pero vamos al grano: vivir de las licitaciones no es apretar un botón y empezar a facturar. Es una disciplina, un sistema, una forma de hacer empresa que requiere estrategia, constancia y profesionalismo.
  </p>

  <p>
    Primero, entendamos el potencial. En Chile, el mercado público mueve más de 12 mil millones de dólares al año. Compran desde servicios básicos hasta soluciones tecnológicas de alto nivel. Y lo mejor: todos los procesos están disponibles en línea, con reglas públicas, plazos definidos y oportunidades nuevas cada día. En resumen, hay demanda, hay transparencia formal, y hay espacio para que una PYME bien armada se posicione.
  </p>

  <p>
    Entonces, ¿por qué no todos viven de esto? Porque la mayoría entra sin preparación. Ven una oportunidad, descargan las bases, y se lanzan a postular como quien compra un boleto de lotería. Error. Aquí no gana el más afortunado, gana el más disciplinado. El que estudia su rubro, el que identifica oportunidades reales, el que estandariza su documentación, el que responde con precisión técnica y sabe leer entre líneas.
  </p>

  <p>
    Si realmente quieres vivir de las licitaciones, el primer paso no es abrir ChileCompra. Es armar tu estrategia. Define tu rubro, tu cliente ideal, y tus ventajas competitivas. ¿Eres rápido? ¿Tienes stock? ¿Tienes experiencia técnica? Usa eso. Luego, ordena tus papeles: rut, escrituras, experiencia, certificados, contratos. Si no tienes nada de eso, busca alianzas. Subcontrata. Súmate como proveedor indirecto. Pero entra al sistema con seriedad.
  </p>

  <p>
    El siguiente paso es la rutina. Sí, rutina. Porque esto no se trata de postular una vez al mes, sino de buscar oportunidades todos los días hábiles, leer bases como si fueran contratos (porque lo son), hacer tus cálculos con márgenes reales y preparar ofertas bien redactadas, bien documentadas y competitivas. Aquí el copy-paste mata. La oferta que gana es la que responde exactamente a lo que la entidad pidió, con claridad y sin adornos innecesarios.
  </p>

  <p>
    Y ojo, no se trata solo de ganar. Se trata de construir reputación. Cada oferta bien hecha, cada pregunta bien formulada, cada reclamo bien presentado, te posiciona como un actor serio. Y cuando te vuelves serio, los compradores te reconocen. Y cuando te reconocen, empiezas a ser invitado a tratos directos, a convenios marco, a licitaciones con menor competencia. Así se vive de esto: con consistencia y reputación.
  </p>

  <p>
    ¿Y los tropiezos? Vas a tenerlos. Vas a perder licitaciones por detalles mínimos, te van a rechazar ofertas sin mucha explicación, y sí, a veces te toparás con procesos que huelen raro. Pero eso no debe desmotivarte. La diferencia entre el que sobrevive y el que abandona está en la capacidad de aprender y ajustar. Cada proceso perdido es una oportunidad para revisar, mejorar y volver más fuerte.
  </p>

  <p>
    Vivir de las licitaciones no es para flojos ni para ansiosos. Pero es totalmente posible. Yo lo he hecho, lo he enseñado y lo he visto funcionar. Con metodología, con foco y con actitud empresarial. Si buscas ingresos predecibles, crecimiento estable y clientes que pagan a 30 días, este camino puede ser para ti. Y si no sabes cómo empezar, acá estamos para ayudarte. Porque en este juego, el que sabe... gana.
  </p>
</div>
          {/* CONTENT ENDS */}
        </div>
        {/* ARTICLE ENDS */}
      </div>
    </Fragment>
  );
};
export default BlogPost;

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
          <h3>Crea un plan y luego tu empresa.</h3>
          <img src="assets/blog/blog-post-3.jpg" alt="Blog image" />
<div className="post-content">
  <p>
    Todos quieren emprender, pero pocos se detienen a planificar. ¿Resultado? Empresas que nacen apuradas, sin norte, sin modelo, sin clientes. Y al poco tiempo… mueren. Por eso, si estás pensando en independizarte, en renunciar, en facturar por lo tuyo: antes que empresa, crea un plan. Un plan real, accionable, que te obligue a pensar como empresario desde el primer día, no como sobreviviente.
  </p>

  <p>
    Pero no hablo de escribir un mamotreto de 70 páginas que guardas en el cajón. Hablo de algo simple, potente y honesto. ¿A quién ayudas? ¿Qué problema resuelves? ¿Qué servicio ofrecerás primero? ¿Cómo lo entregarás? ¿Qué precio tiene sentido para tu cliente y para ti? ¿Qué vas a hacer cada semana para conseguir tus primeras ventas? Si no puedes responder eso en una hoja, aún no estás listo. Y eso no es un fracaso, es una oportunidad de construir bien desde el inicio.
  </p>

  <p>
    Muchos profesionales independientes fracasan por cansancio, no por falta de talento. Porque salen a vender sin tener claro qué venden. Porque lo intentan todo y no profundizan en nada. Porque no saben decir que no. Y eso los lleva al agotamiento. Un buen plan evita eso. Te enfoca. Te filtra. Te recuerda por qué empezaste y hacia dónde vas. Y cuando vienen los días difíciles —que vendrán—, ese plan es brújula, es guía, es sustento emocional.
  </p>

  <p>
    ¿Cómo empezar? Abre una hoja en blanco y escribe:  
    <ul>
      <li>✅ ¿Cuál es el problema que quiero resolver?</li>
      <li>✅ ¿Quién es mi cliente ideal?</li>
      <li>✅ ¿Qué voy a ofrecer primero (y qué NO voy a ofrecer aún)?</li>
      <li>✅ ¿Cuánto cuesta entregar mi servicio de forma profesional?</li>
      <li>✅ ¿Cómo voy a encontrar mis primeros 5 clientes?</li>
      <li>✅ ¿Qué me hace distinto (y valioso)?</li>
    </ul>
    Esas respuestas son tu plan. Todo lo demás es accesorio. Cuando las tengas claras, estarás mucho más cerca de emprender con propósito… y no por desesperación.
  </p>

  <p>
    No te prometo que será fácil. Pero te aseguro algo: un profesional que emprende con estrategia está mil veces más preparado para resistir que quien simplemente “se lanza”. Porque no se trata solo de tener una empresa, sino de tener una visión. Y si hoy estás dudando, si sientes ese fuego interno por crear algo propio… no lo apagues. Pero canalízalo bien. Hazlo real. Hazlo rentable. Crea un plan, y luego —con fuerza, foco y valentía— crea tu empresa.
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

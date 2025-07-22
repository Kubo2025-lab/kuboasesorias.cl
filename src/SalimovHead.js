import Head from "next/head";
import Script from "next/script";

const SalimovHead = () => {
  return (
    <>
      <Head>
        {/* 🔍 SEO Básico */}
        <title>Kubo | Te ayudamos a ganar licitaciones públicas en Chile</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Kubo es una consultora especializada en ayudar a PYMES y profesionales a ganar licitaciones públicas en Chile. Estudios, asesorías y automatización para que vivas de las compras públicas."
        />
        <meta
          name="keywords"
          content="licitaciones públicas, Mercado Público, consultoría, asesoría, Kubo, Chile, compras públicas, propuestas técnicas, licitación MOP, licitación salud"
        />
        <meta name="author" content="Kubo Servicios SPA" />

        {/* 📲 Open Graph / Redes Sociales */}
        <meta property="og:title" content="Kubo | Expertos en licitaciones públicas" />
        <meta
          property="og:description"
          content="Te ayudamos a ganar licitaciones públicas en Chile con asesorías, estudios y automatización."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kuboasesorias.cl" />
        <meta property="og:image" content="https://www.kuboasesorias.cl/assets/preview-kubo.png" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* 🧷 Favicon */}
        <link rel="icon" href="/assets/kubo_icon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/assets/kubo_icon.ico" type="image/x-icon" />

        {/* 🔡 Tipografías Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Livvic:wght@100;200;300;400;500;600;700&family=Oswald:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* 🎨 Estilos CSS Globales */}
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/all.min.css" />
        <link rel="stylesheet" href="/css/devicon.min.css" />
        <link rel="stylesheet" href="/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/css/animate.min.css" />
        <link rel="stylesheet" href="/css/jquery.mCustomScrollbar.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/styleswitcher.css" />
        {/* <link rel="stylesheet" href="/css/skins/yellow.css" /> */}
      </Head>
    </>
  );
};

export default SalimovHead;



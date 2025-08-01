import Preloader from "@/src/components/Preloader";
import Switcher from "@/src/components/Switcher";
import SalimovHead from "@/src/SalimovHead";
import "@/styles/globals.css";
import { Fragment } from "react";
import Script from "next/script";

const App = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <SalimovHead />

      <Script
        id="gtm-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NX74D4K');`
        }}
      />
  <Script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-SRX1N91MW1"
/>
<Script id="ga4-script" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-SRX1N91MW1');
  `}
</Script>

      <Preloader />
      <Switcher />
      <Component {...pageProps} />
    </Fragment>
  );
};

export default App;



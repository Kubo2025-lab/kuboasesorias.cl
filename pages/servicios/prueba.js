import Head from "next/head"; 
import { useEffect, Fragment } from "react";
import WOW from "wowjs";

import Header from "../../src/components/Header";
import Home from "../../src/components/sections/Home";
import Facts from "../../src/components/sections/Facts";
import Portfolio from "../../src/components/sections/Portfolio";
import Testimonials from "../../src/components/sections/Testimonials";
import Copyright from "../../src/components/sections/Copyright";

export default function Pruebas() {
  useEffect(() => {
    new WOW.WOW({ live: false }).init();
  }, []);

  return (
    <div className="vertical-scroll">
      <Head>
        <title>Prueba de Scroll Vertical | Kubo</title>
      </Head>
      <Header />
      <Home />
      <Facts />
      <Portfolio />
      <Testimonials />
      <Copyright />
    </div>
  );
}

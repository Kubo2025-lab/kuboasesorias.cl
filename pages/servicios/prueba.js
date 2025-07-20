import Head from "next/head"; 
import { useEffect, Fragment } from "react";


import Header from "../../src/components/Header";
import Home from "../../src/components/sections/Home";
import Facts from "../../src/components/sections/Facts";
import Portfolio from "../../src/components/sections/Portfolio";
import Testimonials from "../../src/components/sections/Testimonials";
import Copyright from "../../src/components/sections/Copyright";

export default function Pruebas() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("wowjs").then(({ WOW }) => {
        new WOW({ live: false }).init();
      });
    }
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

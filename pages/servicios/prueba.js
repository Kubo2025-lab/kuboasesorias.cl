import Head from "next/head";
import { Fragment } from "react";
import Header from "../../src/components/layouts/Header";
import Home from "../../src/components/sections/Home";
import Facts from "../../src/components/sections/Facts";
import Portfolio from "../../src/components/sections/Portfolio";
import Testimonials from "../../src/components/sections/Testimonials";
import Copyright from "../../src/components/sections/Copyright";

export default function Pruebas() {
  return (
    <div className="vertical-scroll">
      <Header />
      <Home />
      <Facts />
      <Portfolio />
      <Testimonials />
      <Copyright />
    </div>
  );
}

import { React, useRef } from "react";

import Header from "../componets/Header";
import LandingPage from "./LandingPage";
import Divder from "../componets/Divder";
import Card from "../componets/Card";
import Serivces from "../componets/Service";

const Homepage = () => {
  const links = [
    {
      id: 1,
      text: "نبذة عنا",
      tag: "app-card",
    },
    {
      id: 2,
      text: "خدماتنا",
      tag: "app-services",
    },
  ];

  return (
    <>
      <LandingPage Links={links} />
      <Header />
      <Divder />
      <Card />
      <Serivces />
    </>
  );
};

export default Homepage;

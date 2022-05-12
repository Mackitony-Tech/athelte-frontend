import React from "react";
import Content from "../home/Content";
import Slide_show from "../home/Slide_show";
import Navigation from "../navigation/Navigation";

export default function Home() {
  return (
    <>
      <Navigation />
      <Content />
      <Slide_show />
    </>
  );
}

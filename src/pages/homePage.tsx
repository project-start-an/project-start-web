import React, { useRef } from "react";
import ServicesPage from "./servicesPage";
import PricingPage from "./pricingPage";
import ContactPage from "./contactPage";
import MiddleSection from "./middleSection";
import IntroPage from "./introPage";

import { styled } from "@mui/material";

interface Section {
  title: string;
  background: string;
  id: string; // Add an ID for the section
  ref: React.RefObject<HTMLDivElement>;
}

type InputProps = {
  background: string;
  id: string;
};

const ResponsiveSection = styled("div")<InputProps>(({ background, id }) => ({
  backgroundColor: background,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: id === "ourTeam" ? "84vh" : "92vh",

  "@media (max-width: 768px)": {
    width: "100%",
    height: id === "ourTeam" ? "120vh" : "92vh",
  },
}));

function HomePage() {
  const sections: Section[] = [
    {
      title: "Home",
      background: "white",
      id: "home",
      ref: useRef(null),
    },
    {
      title: "Services",
      background: "white",
      id: "services",
      ref: useRef(null),
    },
    {
      title: "MiddleSection",
      background: "white",
      id: "middleSection",
      ref: useRef(null),
    },
    {
      title: "Pricing",
      background: "white",
      id: "pricing",
      ref: useRef(null),
    },
    {
      title: "OurTeam",
      background: "white",
      id: "ourTeam",
      ref: useRef(null),
    },
  ];

  return (
    <div className="App">
      {sections.map((section, index) => (
        <ResponsiveSection
          key={index}
          ref={section.ref}
          id={section.id}
          background={section.background}
        >
          {section.id === "services" ? (
            <ServicesPage />
          ) : section.id === "middleSection" ? (
            <MiddleSection />
          ) : section.id === "pricing" ? (
            <PricingPage />
          ) : section.id === "ourTeam" ? (
            <ContactPage />
          ) : (
            <IntroPage />
          )}
        </ResponsiveSection>
      ))}
    </div>
  );
}

export default HomePage;

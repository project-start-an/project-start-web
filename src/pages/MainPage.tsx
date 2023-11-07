import React, { useRef } from "react";
import HomeComponent from "../components/home/HomeComponent";
import ServicesComponent from "../components/services/ServiceComponent";
import PricingComponent from "../components/pricing/PricingComponent";
import ContactComponent from "../components/contact/ContactComponent";

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
    height:
      id === "ourTeam"
        ? "120vh"
        : id === "pricing"
        ? "180vh"
        : id === "services"
        ? "160vh"
        : "92vh",
  },
}));

function MainPage() {
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
            <ServicesComponent />
          ) : section.id === "pricing" ? (
            <PricingComponent />
          ) : section.id === "ourTeam" ? (
            <ContactComponent />
          ) : (
            <HomeComponent />
          )}
        </ResponsiveSection>
      ))}
    </div>
  );
}

export default MainPage;

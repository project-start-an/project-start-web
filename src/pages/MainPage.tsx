import React, { useRef } from "react";
import HomeComponent from "../components/home/HomeComponent";
import ServiceComponent from "../components/services/ServiceComponent";
import PricingComponent from "../components/pricing/PricingComponent";
import ContactComponent from "../components/contact/ContactComponent";
import { ResponsiveSection } from "./MainPage.styled";

interface ISection {
  title: string;
  background: string;
  id: string; // Add an ID for the section
  ref: React.RefObject<HTMLDivElement>;
  component: React.FC;
}

function MainPage() {
  const sections: ISection[] = [
    {
      title: "Home",
      background: "white",
      id: "home",
      ref: useRef(null),
      component: HomeComponent
    },
    {
      title: "Services",
      background: "white",
      id: "services",
      ref: useRef(null),
      component: ServiceComponent
    },
    {
      title: "Pricing",
      background: "white",
      id: "pricing",
      ref: useRef(null),
      component: PricingComponent
    },
    {
      title: "OurTeam",
      background: "white",
      id: "ourTeam",
      ref: useRef(null),
      component: ContactComponent
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
          <section.component/>
        </ResponsiveSection>
      ))}
    </div>
  );
}

export default MainPage;

import React, { useRef } from "react";
import ServicesPage from "./servicesPage";
import PricingPage from "./pricingPage";
import ContactPage from "./contactPage";

interface Section {
  title: string;
  background: string;
  id: string; // Add an ID for the section
  ref: React.RefObject<HTMLDivElement>;
}

function HomePage() {
  const sections: Section[] = [
    {
      title: "Home",
      background: "grey",
      id: "home",
      ref: useRef(null),
    },
    {
      title: "Services",
      background: "#3a3a3a",
      id: "services",
      ref: useRef(null),
    },
    {
      title: "Pricing",
      background: "grey",
      id: "pricing",
      ref: useRef(null),
    },
    {
      title: "OurTeam",
      background: "#3a3a3a",
      id: "ourTeam",
      ref: useRef(null),
    },
  ];

  const scrollToSection = (elementRef: React.RefObject<HTMLDivElement>) => {
    if (elementRef.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="App">
      {sections.map((section, index) => (
        <div
          key={index}
          ref={section.ref}
          id={section.id}
          className="section"
          style={{ backgroundColor: section.background, minHeight: '90vh' }}
        >
          {section.id==="services" ? <ServicesPage/> :
          section.id==="pricing"? <PricingPage/>: 
          section.id==="ourTeam" ? <ContactPage/>:
          <div>homePage</div>}
        </div>
      ))}
    </div>
  );
}

export default HomePage;

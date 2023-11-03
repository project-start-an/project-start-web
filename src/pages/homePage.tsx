import React, { useRef } from "react";
import ServicesPage from "./servicesPage";
import PricingPage from "./pricingPage";
import ContactPage from "./contactPage";
import MiddleSection from "./middleSection";

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

  const scrollToSection = (elementRef: React.RefObject<HTMLDivElement>) => {
    if (elementRef.current) {
      // Calculate the scroll position with a slight offset
      // const offset = 10; // Adjust this offset as needed
      console.log(elementRef.current.offsetTop)
      window.scrollTo({
        top: elementRef.current.offsetTop - 100,
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
          style={
            { backgroundColor: section.background,
              display: 'flex', 
              // alignItems: 'flex-end', 
              // justifyContent: 'flex-end', 
              height: section.id === "ourTeam" ? '92vh' : '92vh' }
          }
        >
          {section.id === "services" ? <ServicesPage /> :
          section.id === "middleSection" ? <MiddleSection/> :
          section.id === "pricing" ? <PricingPage /> :
          section.id === "ourTeam" ? <ContactPage /> :
          <div>homePage</div>}
        </div>
      ))}
    </div>
  );
}

export default HomePage;

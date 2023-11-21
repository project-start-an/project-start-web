import React, { useRef } from "react";
import HomeComponent from "../components/home/HomeComponent";
import ServicesComponent from "../components/services/ServicesComponent";
import { ResponsiveSection } from "./MainPage.styled";
import WhyNeedUsComponent from "../components/why-need-us/WhyNeedUsComponent";
import OurTeamComponent from "../components/ourTeam/OurTeamComponent";
import GetStartedComponent from "../components/getStarted/GetStartedComponent";

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
      component: HomeComponent,
    },
    {
      title: "Services",
      background: "white",
      id: "services",
      ref: useRef(null),
      component: ServicesComponent,
    },
    {
      title: "WhyNeedUs",
      background: "white",
      id: "whyNeedUs",
      ref: useRef(null),
      component: WhyNeedUsComponent,
    },
    {
      title: "GetStarted",
      background: "white",
      id: "getStarted",
      ref: useRef(null),
      component: GetStartedComponent,
    },
    {
      title: "OurTeam",
      background: "white",
      id: "ourTeam",
      ref: useRef(null),
      component: OurTeamComponent,
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
          <section.component />
        </ResponsiveSection>
      ))}
    </div>
  );
}

export default MainPage;

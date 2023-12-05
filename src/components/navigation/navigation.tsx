import { AppBar } from "@mui/material";
import CustomTypography from "../styled-components/CustomTypography";
import NavigationLink from "../styled-components/NavigationLink";
import { useState, useEffect } from "react";
import { NavWrapper } from "./Navigation.styled";
import CustomToolbar from "../styled-components/CustomToolbar";
import { useNavigate } from "react-router-dom";

import { changeHandlerState } from "../contactForm/ContactForm.signals";

const projectName = "WedecodeIT";

type NavLinkType = {
  id: string;
  label: string;
  href: string;
  url: string;
};

const navLinks: NavLinkType[] = [
  { id: "home", label: "Home", href: "#home", url: "/home" },
  { id: "services", label: "Services", href: "#services", url: "/home" },
  { id: "whyNeedUs", label: "Why us", href: "#whyNeedUs", url: "/home" },
  { id: "getStarted", label: "Get Started", href: "#getStarted", url: "/home" },
  { id: "ourTeam", label: "Our Team", href: "#ourTeam", url: "/home" },
];

export default function Navigation() {
  const [, setScrollOffset] = useState<number>(0);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavLinkClick = (event: React.MouseEvent, link: NavLinkType) => {
    event.preventDefault();

    navigate("/");
    changeHandlerState(false);
    const targetElement = document.querySelector(link.href);
    console.log(link.href);
    if (targetElement) {
      const offset =
        targetElement.getBoundingClientRect().top + window.scrollY - 65;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  return (
    <AppBar
      position="fixed"
      elevation={2}
      style={{
        zIndex: 1000,
        borderBottomLeftRadius: "0.3rem",
        borderBottomRightRadius: "0.3rem",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
      }}
      sx={{
        background: "white",
      }}
    >
      <CustomToolbar>
        <CustomTypography
          variant="h6"
          width="20%"
          sx={{ marginInline: "auto" }}
        >
          {projectName}
        </CustomTypography>
        <NavWrapper>
          {navLinks.map((link, index) => (
            <NavigationLink
              onClick={(event) => handleNavLinkClick(event, link)}
              key={index}
              variant="button"
              href={link.href}
            >
              {link.label}
            </NavigationLink>
          ))}
        </NavWrapper>
      </CustomToolbar>
    </AppBar>
  );
}

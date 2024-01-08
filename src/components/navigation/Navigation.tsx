import NavigationLink from "../styled-components/NavigationLink.styled";
import { useState, useEffect } from "react";
import {
  Logo,
  MenuIconWrapper,
  NavLinksMobileWrapper,
  NavLinksWrapper,
  NavWrapper,
} from "./Navigation.styled";
import { useNavigate } from "react-router-dom";

import { changeHandlerState } from "../contact-form/ContactForm.signals";
import MobileNav from "../../assets/NavAssets/mobile-nav.svg";

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
  // { id: "whyNeedUs", label: "Why", href: "#whyNeedUs", url: "/home" },
  { id: "getStarted", label: "Start", href: "#getStarted", url: "/home" },
  { id: "ourTeam", label: "Team", href: "#ourTeam", url: "/home" },
];

export default function Navigation() {
  const [, setScrollOffset] = useState<number>(0);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

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

    // Close mobile menu if not closed
    toggleMenu(false);

    navigate("/");
    changeHandlerState(false);
    const targetElement = document.querySelector(link.href);
    console.log(link.href);
    if (targetElement) {
      const offset = targetElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  const toggleMenu = (isOpen: boolean | undefined = undefined) => {
    setShowMobileMenu(isOpen === undefined ? !showMobileMenu : isOpen);
  };

  return (
    <NavWrapper>
      <Logo>{projectName}</Logo>
      <NavLinksWrapper>
        {navLinks.map((link, index) => (
          <NavigationLink
            onClick={(event) => handleNavLinkClick(event, link)}
            key={index}
            href={link.href}
          >
            {link.label}
          </NavigationLink>
        ))}
      </NavLinksWrapper>
      {/* Used in mobile view */}
      <NavLinksMobileWrapper className="mobile" $showMenu={showMobileMenu}>
        {navLinks.map((link, index) => (
          <NavigationLink
            onClick={(event) => handleNavLinkClick(event, link)}
            key={index}
            href={link.href}
          >
            {link.label}
          </NavigationLink>
        ))}
      </NavLinksMobileWrapper>
      <MenuIconWrapper className="mobile" onClick={() => toggleMenu()}>
        <img src={MobileNav} alt="mobile-nav" />
      </MenuIconWrapper>
    </NavWrapper>
  );
}

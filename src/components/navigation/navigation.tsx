import { ThemeProvider } from "@emotion/react";
import { AppBar, Toolbar, createTheme } from "@mui/material";
import CustomTypography from "../styled-components/CustomTypography";
import NavigationLink from "../styled-components/NavigationLink";
import { useState, useEffect } from "react";

const defaultTheme = createTheme();

const projectName = "WedecodeIT";
const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Get Started", href: "#getStarted" },
  { label: "Our Team", href: "#ourTeam" },
];

export default function Navigation() {
  const [, setScrollOffset] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavLinkClick = (event: React.MouseEvent, href: string) => {
    event.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset =
        targetElement.getBoundingClientRect().top + window.scrollY - 65;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <AppBar
        position="sticky"
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
        <Toolbar sx={{ mx: 15 }}>
          <CustomTypography variant="h6" sx={{ flexGrow: 1 }}>
            {projectName}
          </CustomTypography>
          <nav>
            {navLinks.map((link, index) => (
              <NavigationLink
                onClick={(event) => handleNavLinkClick(event, link.href)}
                key={index}
                variant="button"
                href={link.href}
              >
                {link.label}
              </NavigationLink>
            ))}
          </nav>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

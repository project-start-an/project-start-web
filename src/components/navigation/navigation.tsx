import { ThemeProvider } from "@emotion/react";
import { AppBar, Toolbar, createTheme } from "@mui/material";
import CustomTypography from "../styled-components/CustomTypography";
import NavigationLink from "../styled-components/NavigationLink";

const defaultTheme = createTheme();

const projectName = "WedecodeIT";
const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Our Team", href: "#ourTeam" },
];

export default function Navigation() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <AppBar
        position="sticky"
        elevation={2}
        style={{
          zIndex: 1000,
          borderBottomLeftRadius: "0.3rem",
          borderBottomRightRadius: "0.3rem", 
          boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
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
              <NavigationLink key={index} variant="button" href={link.href} >
                {link.label}
              </NavigationLink>
            ))}
          </nav>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

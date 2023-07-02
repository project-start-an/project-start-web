import { ThemeProvider } from "@emotion/react";
import { AppBar, Toolbar, createTheme } from "@mui/material";
import CustomTypography from "../styled-components/CustomTypography";
import NavigationLink from "../styled-components/NavigationLink";

const defaultTheme = createTheme();

const projectName = "Project start";
const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Contacts", href: "/contacts" },
];

export default function Navigation() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppBar color="transparent" elevation={0} position="static">
        <Toolbar sx={{ mx: 15 }}>
          <CustomTypography variant="h6" sx={{ flexGrow: 1 }}>
            {projectName}
          </CustomTypography>
          <nav>
            {navLinks.map((link, index) => (
              <NavigationLink key={index} variant="button" href={link.href}>
                {link.label}
              </NavigationLink>
            ))}
          </nav>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

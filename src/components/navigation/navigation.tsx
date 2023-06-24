import { ThemeProvider } from "@emotion/react";
import { AppBar, Toolbar, Typography, createTheme, Link } from "@mui/material";

const defaultTheme = createTheme();

export default function Navigation() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Project start
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="/services"
              sx={{ my: 1, mx: 1.5 }}
            >
              Services
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="/contacts"
              sx={{ my: 1, mx: 1.5 }}
            >
              Contacts
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

// TODO: remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Footer() {
  const iconStyle = {
    marginRight: "8px", // Adjust the spacing as needed
    fontSize: "21px", // Adjust the icon size as needed
  };

  const facebookColor = "#3b5998";
  const instagramColor = "#E4405F";
  const twitterColor = "#00acee";

  const handleFacebookClick = () => {
    window.open("https://www.facebook.com/", "_blank");
  };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/", "_blank");
  };

  const handleTwitterClick = () => {
    window.open("https://www.twitter.com/", "_blank");
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CssBaseline />
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: "auto",
            backgroundColor: "#e8f1f8 !important",
          }}
        >
          <Container maxWidth="sm">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              {/* First Typography */}
              <Typography variant="body2">
                &copy; {new Date().getFullYear()} Project Start. All rights
                reserved.
              </Typography>

              {/* Second Typography */}
              <Typography sx={{ fontSize: "0.9rem" }}>
                Our social medias:
                {/* Text and Icons */}
                <Box display="flex" alignItems="center">
                  <Typography variant="body2"> </Typography>
                  <Box onClick={handleFacebookClick}>
                    <Facebook style={{ ...iconStyle, color: facebookColor }} />
                  </Box>
                  <Box onClick={handleInstagramClick}>
                    <Instagram
                      style={{ ...iconStyle, color: instagramColor }}
                    />
                  </Box>
                  <Box onClick={handleTwitterClick}>
                    <Twitter style={{ ...iconStyle, color: twitterColor }} />
                  </Box>
                </Box>
              </Typography>
            </Box>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

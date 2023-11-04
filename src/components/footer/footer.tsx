import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import LinkedInSvg from '../../assets/LinkedIn white theme.svg'
import InstagramSvg from '../../assets/Instagram white theme.svg'

// TODO: remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Footer() {

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/company/wedecodeit", "_blank");
  };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/wedecodeit/", "_blank");
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
            color: 'white',
            backgroundColor: "#21295C !important",
          }}
        >
          <Container maxWidth="sm">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              {/* First Typography */}
              <Typography variant="body2"
              >
                &copy; {new Date().getFullYear()} 
                WedecodeIt. All rights
                reserved.
              </Typography>

              {/* Second Typography */}
              <Typography sx={{ fontSize: "0.9rem" }}>
                Contacts
                {/* Text and Icons */}
                <Box display="flex" alignItems="center">
                  <Typography variant="body2"> </Typography>
                    <Box onClick={handleLinkedInClick}
                      sx={{
                        cursor: "pointer",
                        "&:hover": {
                          opacity: 0.7,
                        },
                      }}
                    >
                      <img src={LinkedInSvg} style={{height: "26px"}} alt='linkedIn'/>
                    </Box>
                    <Box onClick={handleInstagramClick}
                        sx={{
                          cursor: "pointer",
                          "&:hover": {
                            opacity: 0.7,
                          },
                        }}
                    >
                      <img src={InstagramSvg} style={{height: "26px"}} alt='instagram'/>
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

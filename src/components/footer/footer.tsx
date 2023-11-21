import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import LinkedInSvg from "../../assets/LinkedIn white theme.svg";
import InstagramSvg from "../../assets/Instagram white theme.svg";

const projectName = "WedecodeIT";
const companyEmail = "project.start.an@gmail.com";
const phone = "+31 620 684 022";

function Footer() {
  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/company/wedecodeit", "_blank");
  };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/wedecodeit/", "_blank");
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          color: "white",
          backgroundColor: "#21295C",
        }}
      >
        <Container>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            {/* Company/Logo */}
            <Typography variant="h6" width="20%">
              {projectName}
            </Typography>

            {/* Rights reserved */}
            <Box width="50%" justifyContent="center" alignItems="center">
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap="0.5rem"
              >
                <Typography variant="body2" textAlign="center">
                  &copy; {new Date().getFullYear()} WedecodeIT.
                </Typography>
                <Typography variant="body2" textAlign="center">
                  All rights reserved.
                </Typography>
              </Box>
            </Box>

            {/* Contacts */}
            <Box width="20%" fontSize="0.9rem">
              <Typography variant="h6">Contacts</Typography>
              <Box>{companyEmail}</Box>
              <Box>{phone}</Box>
              {/* Text and Icons */}
              <Box display="flex" alignItems="center">
                <Box
                  onClick={handleLinkedInClick}
                  sx={{
                    cursor: "pointer",
                    "&:hover": {
                      opacity: 0.7,
                    },
                  }}
                >
                  <img
                    src={LinkedInSvg}
                    style={{ height: "26px" }}
                    alt="linkedIn"
                  />
                </Box>
                <Box
                  onClick={handleInstagramClick}
                  sx={{
                    cursor: "pointer",
                    "&:hover": {
                      opacity: 0.7,
                    },
                  }}
                >
                  <img
                    src={InstagramSvg}
                    style={{ height: "26px" }}
                    alt="instagram"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
export default Footer;

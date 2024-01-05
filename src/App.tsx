import { Outlet } from "react-router-dom";
import "./App.css";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import { Grid, Box } from "@mui/material";

function App() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          // minHeight: "100vh", // This ensures the content takes up the full viewport height
          // width: '100%'
        }}
      >
        <Navigation />
        <Grid container sx={{ justifyContent: "center", flexGrow: 1 }}>
          <Grid item md={12} xs={12}>
            <Box sx={{ padding: "0rem", height: "100%" }}>
              <Outlet />
            </Box>
          </Grid>
        </Grid>
        <Footer />
      </Box>
    </div>
  );
}

export default App;

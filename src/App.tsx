import { Outlet } from "react-router-dom";
import "./App.css";
import Navigation from "./components/navigation/navigation";
import Footer from "./components/footer/footer";
import { Grid, Box } from "@mui/material";

function App() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh", // This ensures the content takes up the full viewport height
        }}
      >
        <Navigation />
        <Grid container sx={{ justifyContent: "center", flexGrow: 1 }}>
          <Grid item md={10} xs={11}>
            <Box sx={{ padding: "1rem", height: "100%" }}>
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

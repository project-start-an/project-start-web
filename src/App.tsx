import { Outlet } from "react-router-dom";
import "./App.css";
import Navigation from "./components/navigation/navigation";
import Footer from "./components/footer/footer";
import { Grid, Box } from "@mui/material";

function App() {
  return (
    <div>
       <Navigation />

      <Grid container sx={{justifyContent: 'center', alignItems:'center'}}>
        <Grid item md={10} >

          <Box
            sx={{
              position: 'relative',
              backgroundColor: 'grey',
              width: '100%',
              padding: '1rem'
            }}
          >
          <Outlet />
            

          </Box>
        </Grid>
      </Grid>
      <Footer/>

    
    </div>
  );
}

export default App;

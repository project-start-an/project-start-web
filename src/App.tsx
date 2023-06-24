import { Outlet } from "react-router-dom";
import "./App.css";
import Navigation from "./components/navigation/navigation";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div>
      <Navigation />
      <Outlet />
      <Footer/>
    </div>
  );
}

export default App;

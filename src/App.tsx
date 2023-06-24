import { Outlet } from "react-router-dom";
import "./App.css";
import Navigation from "./components/navigation/navigation";

function App() {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
}

export default App;

import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <div>Navbar here</div>
      <Outlet />
    </div>
  );
}

export default App;

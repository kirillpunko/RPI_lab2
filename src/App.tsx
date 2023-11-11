import Mainpage from "./pages/mainpage.tsx";
//import { BrowserRouter, Route } from "react-router-dom";
import "./app.css";
import Winnerspage from "./pages/winnerspage.tsx";

const App = () => {
  return (
    <div>
      <Mainpage />
      <Winnerspage />
    </div>
  );
};

export default App;

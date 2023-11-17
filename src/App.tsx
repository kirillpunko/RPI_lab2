import Mainpage from "./pages/mainpage.tsx";
import { Route, Routes } from "react-router-dom";
import "./app.css";

import Winnerspage from "./pages/winnerspage.tsx";
import PersonPage from "./pages/personPage.tsx";

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/RPI_lab2/winners" element={<Winnerspage />}></Route>
        <Route path="/RPI_lab2" element={<Mainpage />}></Route>
        <Route
          path={"/RPI_lab2/winners/:personId"}
          element={<PersonPage />}
        ></Route>
      </Routes>
    </main>
  );
};

export default App;

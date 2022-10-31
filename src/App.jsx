import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header.jsx";
import { Home } from "./routes/Home/Home.jsx";
import { Categories } from "./routes/Categories/Categories.jsx";
import { CategoryPositions } from "./routes/CategoryPositions/CategoryPositions.jsx";
import { CustomSerie } from "./routes/CustomSerie/CustomSerie.jsx";
import { Serie } from "./routes/Serie/Serie.jsx";

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categoryPositions" element={<CategoryPositions />} />
        <Route path="/customSerie" element={<CustomSerie />} />
        <Route path="/serie" element={<Serie />} />
      </Routes>
    </BrowserRouter>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

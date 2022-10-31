import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { AuthContext } from "./context/AuthContext.js";
import { RequireAuth } from "./components/RequireAuth/RequireAuth.js";
import { Header } from "./components/Header/Header.js";
import { Home } from "./pages/Home/Home.js";
import { Categories } from "./pages/Categories/Categories.js";
import { CategoryPositions } from "./pages/CategoryPositions/CategoryPositions.js";
import { CustomSerie } from "./pages/CustomSerie/CustomSerie.js";
import { Serie } from "./pages/Serie/Serie.js";
import { ErrorRoute } from "./components/ErrorRoute/ErrorRoute.js";
import "./index.css";
export function App() {
  const navigate = useNavigate();
  const [userAuth, setUserAuth] = useState(false);
  const [signup, setSignup] = useState(false);
  const [login, setLogin] = useState(false);

  const showSignup = () => {
    setLogin(false);
    setSignup(true);
  };

  const showLogin = () => {
    setSignup(false);
    setLogin(true);
  };

  const logout = () => {
    window.localStorage.removeItem("currentUser");
    setUserAuth(false);
    navigate("/");
  };

  useEffect(() => {
    localStorage.getItem("currentUser")
      ? setUserAuth(true)
      : setUserAuth(false);
  });

  return (
    <StrictMode>
      <BrowserRouter>
        <AuthContext.Provider value={{ userAuth, setUserAuth }}>
          <Header
            showSignup={showSignup}
            showLogin={showLogin}
            logout={logout}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  login={login}
                  signup={signup}
                  setLogin={setLogin}
                  setSignup={setSignup}
                />
              }
            />
            <Route
              path="/categories"
              element={
                <RequireAuth>
                  <Categories />
                </RequireAuth>
              }
            />
            <Route path="/categoryPositions" element={<CategoryPositions />} />
            <Route
              path="/customSerie"
              element={
                <RequireAuth>
                  <CustomSerie />
                </RequireAuth>
              }
            />
            <Route path="/serie" element={<Serie />} />
            <Route path="*" element={<ErrorRoute />} />
          </Routes>
        </AuthContext.Provider>
      </BrowserRouter>
    </StrictMode>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(<App />));

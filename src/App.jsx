import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { StrictMode, useState, useEffect } from "react";
// import { AuthContext } from "./context/AuthContext.jsx";
// import { RequireAuth } from "./components/RequireAuth/RequireAuth.jsx";
import { Header } from "./components/Header/Header.jsx";
import { Home } from "./pages/Home/Home.jsx";
import { Categories } from "./pages/Categories/Categories.jsx";
import { CategoryPositions } from "./pages/CategoryPositions/CategoryPositions.jsx";
import { CustomSerie } from "./pages/CustomSerie/CustomSerie.jsx";
import { Serie } from "./pages/Serie/Serie.jsx";
import { ErrorRoute } from "./components/ErrorRoute/ErrorRoute.jsx";

export function App() {
  // const navigate = useNavigate();
  // const [userAuth, setUserAuth] = useState(false);
  // const [signup, setSignup] = useState(false);
  // const [login, setLogin] = useState(false);

  // const showSignup = () => {
  //   setLogin(false);
  //   setSignup(true);
  // };

  // const showLogin = () => {
  //   setSignup(false);
  //   setLogin(true);
  // };

  // const logout = () => {
  //   window.localStorage.removeItem("currentUser");
  //   setUserAuth(false);
  //   navigate("/");
  // };

  // useEffect(() => {
  //   localStorage.getItem("currentUser")
  //     ? setUserAuth(true)
  //     : setUserAuth(false);
  // });

  return (
    <StrictMode>
      <BrowserRouter>
        {/* <AuthContext.Provider value={{ userAuth, setUserAuth }}> */}
        {/* <Header showSignup={showSignup} showLogin={showLogin} logout={logout} /> */}
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Home
              // login={login}
              // signup={signup}
              // setLogin={setLogin}
              // setSignup={setSignup}
              />
            }
          />
          {/* <Route
            path="/categories"
            element={
              <RequireAuth>
              <Categories />
              </RequireAuth>
            }
          /> */}
          <Route path="/categories" elemenet={<Categories />} />
          <Route path="/categoryPositions" element={<CategoryPositions />} />
          <Route path="/customSerie" element={<CustomSerie />} />
          {/* <Route path="/customSerie" element={<RequireAuth></RequireAuth>} /> */}
          <Route path="/serie" element={<Serie />} />
          <Route path="*" element={<ErrorRoute />} />
        </Routes>
        {/* </AuthContext.Provider> */}
      </BrowserRouter>
    </StrictMode>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

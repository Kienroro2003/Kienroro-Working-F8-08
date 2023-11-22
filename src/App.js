import useDynamicSVGImport from "./hooks/useDynamicSVGImport";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import "./sass/index.scss";
import SignUp from "./pages/SignUp";
import { Routes, Route } from "react-router-dom";
import { routers } from "./routes";
import Layout from "./layouts/Layout";
import { Fragment } from "react";
import { AuthProvider, useAuth } from "./utils/authProvider";

function App() {
  return (
    <AuthProvider>
      <Routes>
        {routers.map((route, index) => {
          const Page = route.component;

          let LayoutDynamic = Layout;
          if (route.layout) LayoutDynamic = route.layout;
          else if (route.layout === null) LayoutDynamic = Fragment;

          return (
            <Route
              key={index}
              path={route.path}
              element={
                <LayoutDynamic>
                  <Page />
                </LayoutDynamic>
              }
            />
          );
        })}
      </Routes>
    </AuthProvider>
  );
}

export default App;

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
import { UserProvider, useUser } from "./utils/userProvider";

function App() {
  return (
    <UserProvider>
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
    </UserProvider>
  );
}

export default App;

import "./sass/index.scss";

import { Routes, Route } from "react-router-dom";
import { routers } from "./routes";
import Layout from "./layouts/Layout";
import { Fragment } from "react";
import { AuthProvider } from "./utils/authProvider";
import { useGallery, GalleryProvider } from "./contexts/gallery-context";

function App() {
  return (
    <AuthProvider>
      <GalleryProvider>
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
      </GalleryProvider>
    </AuthProvider>
  );
}

export default App;

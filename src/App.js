import useDynamicSVGImport from "./hooks/useDynamicSVGImport";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import "./sass/index.scss";

function App() {
  return (
    <div className="App">
      {/* <Header></Header>
      <Home></Home>
      <Footer></Footer> */}
      <SignIn></SignIn>
    </div>
  );
}

export default App;

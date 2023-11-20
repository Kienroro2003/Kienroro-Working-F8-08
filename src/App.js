import useDynamicSVGImport from "./hooks/useDynamicSVGImport";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import "./sass/index.scss";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="App">
      {/* <Header></Header>
      <Home></Home>
      <Footer></Footer> */}
      {/* <SignIn></SignIn> */}
      <SignUp></SignUp>
    </div>
  );
}

export default App;

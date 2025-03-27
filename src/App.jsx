import About from "./pages/About";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router";
import Images from "./pages/Images";
import Prices from "./pages/Prices";
import ScrollToTop from "./pages/ScrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/images" element={<Images />} />
          <Route path="/prices" element={<Prices />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

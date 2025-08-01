import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Front from "./components/Front";
import About from "./components/About";
import Services from "./components/Services";
import Policy from "./components/Policy";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import AboutCompany from "./components/AboutCompany ";
import Terms from "./components/Terms";
import Allservices from "./components/Allservices";
import Rules from "./components/Rules";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Front />
              <About />
              <Services />
              <Allservices/>
              <Contact />
            </>
          }
        />

        {/* Separate pages */}
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/streams" element={<Allservices />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/aboutcompany" element={<AboutCompany />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

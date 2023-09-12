import { Routes,Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";

export default function App() {
  

  return (
    <>
    <Routes>
      <Route path = "/" element = {<Home />} />
    </Routes>
    <Footer />
    </>
  )
}



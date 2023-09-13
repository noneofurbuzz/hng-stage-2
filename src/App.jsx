import { Routes,Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { Details } from "./pages/Details";

export default function App() {
  

  return (
    <>
    <Routes>
      <Route path = "/" element = {<Home />} />
      <Route path="/movies/:id" element = {<Details />  } />
    </Routes>
    </>
  )
}



import { Routes,Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Details } from "./pages/Details";
import { SkeletonTheme } from "react-loading-skeleton";

export default function App() {
  

  return (
    <>
    <SkeletonTheme baseColor="rgb(209 213 219)" highlightColor="rgb(229 231 235)">
    <Routes>
      <Route path = "/" element = {<Home />} />
      <Route path="/movies/:id" element = {<Details />  } />
    </Routes>
    </SkeletonTheme>
    </>
  )
}



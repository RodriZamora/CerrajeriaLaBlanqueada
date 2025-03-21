import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import ReactGA from 'react-ga4'
import Contenido from "./components/Contenido";
import 'bootstrap/dist/css/bootstrap.min.css';

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return null;

}

function App() {
  return (
    <>
      <BrowserRouter>
        <Analytics />
        <Routes>
          <Route path="/" element={<Contenido />}></Route>
          <Route path='*' element={<Contenido />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

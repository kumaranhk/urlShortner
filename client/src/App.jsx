// import './App.css'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PrivateRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import NavigateToActual from "./pages/NavigateTourl";
import NotFound from "./pages/Notfound";
import MediaCard from "./pages/log-in";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRoute element={<Home />} />} />
        <Route path="/login" element={<MediaCard />} />
        <Route path="/nav/:uuid" element={<NavigateToActual />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

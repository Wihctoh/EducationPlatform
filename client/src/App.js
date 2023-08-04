import "./App.css";
import LoginPage from "./pages/LoginPage/LoginPage";
import PreviewPages from "./pages/PreviewPage/PreviewPages";
import { Routes, Route } from "react-router-dom";
import RegPage from "./pages/RegPage/RegPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PreviewPages />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/singup" element={<RegPage />}></Route>
    </Routes>
  );
}

export default App;

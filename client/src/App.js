import "./App.css";
import LoginPage from "./pages/LoginPage/LoginPage";
import PreviewPages from "./pages/PreviewPage/PreviewPages";
import { Routes, Route } from "react-router-dom";
import RegPage from "./pages/RegPage/RegPage";

import { ThemeProvider } from "@emotion/react";
import customTheme from "./theme";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Routes>
        <Route path="/" element={<PreviewPages />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<RegPage />}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;

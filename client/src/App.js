import "./App.css";
import LoginPage from "./pages/LoginPage/LoginPage";
import PreviewPages from "./pages/PreviewPage/PreviewPages";
import StudentsPage from "./pages/StudentsPage/StudentsPage";
import { Routes, Route } from "react-router-dom";
import RegPage from "./pages/RegPage/RegPage";

import { ThemeProvider } from "@mui/material/styles";
import customTheme from "./theme";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Routes>
        <Route path="/" element={<PreviewPages />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<RegPage />}></Route>
        <Route path="/students" element={<StudentsPage />}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;

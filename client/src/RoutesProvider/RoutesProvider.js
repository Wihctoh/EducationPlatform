import { Routes, Route } from "react-router-dom";
import RegPage from "../pages/RegPage/RegPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PreviewPages from "../pages/PreviewPage/PreviewPages";
import CoursePage from "../pages/CoursePage/CoursePage";
import StudentsPage from "../pages/StudentsPage/StudentsPage";

export default function RoutesProvider(isAuth) {
  if (isAuth) {
    return (
      <Routes>
        <Route path="/students" element={<StudentsPage />}></Route>
        <Route path="/course/:id" element={<CoursePage />}></Route>
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route path="/" element={<PreviewPages />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<RegPage />}></Route>
      </Routes>
    );
  }
}

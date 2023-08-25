import React from "react";
import style from "./Students.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const StudentsPage = () => {
  const coursesArr = [
    {
      h2: "JavaScript",
      p: "JavaScript is a practical course where students learn the basics of JavaScript. It covers variables, operators, conditionals, loops, functions, and data manipulation.",
      img: "./assets/JavaScriptCourseImg.jpeg",
    },
    {
      h2: "TypeScript",
      p: "TypeScript is a course that provides an introduction to TypeScript. Students will learn about TypeScript's key features, such as type annotations, interfaces, classes, and modules",
      img: "./assets/TypeScriptCourseImg.png",
    },
    {
      h2: "Python",
      p: "Students will learn about variables, data types, conditionals, loops, functions, and file handling. Through hands-on exercises and projects, students will gain proficiency in writing Python code and solving real-world problems.",
      img: "background:'url(./assets/PythonCourseImg.png)",
    },
  ];
  return (
    <>
      <Header isAuth={true} />

      <div className={style.studentsWrapper}>
        <div className={style.studentsIntro}>
          <div className={style.studentsLogo}></div>
          <h1>Courses</h1>
        </div>

        {coursesArr.map((el, index) => (
          <div className={style.coursesWrapper} key={index}>
            <div className={style.course}>
              <div className={style.courseImg}></div>

              <div className={style.courseDescription}>
                <h2>{el.h2}</h2>
                <p>{el.p}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Stack spacing={2} className={style.pagination}>
        <Pagination count={3} color="secondary" variant="outlined" />
      </Stack>

      <Footer />
    </>
  );
};

export default StudentsPage;

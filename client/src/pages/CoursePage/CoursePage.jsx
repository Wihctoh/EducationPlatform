import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import style from "./CoursePage.module.css";
import Header from "../../components/Header/Header";
import axios from "axios";
import { Button } from "@mui/material";

const CoursePage = () => {
  const [course, setCourse] = useState({});
  const [lessons, setLessons] = useState([]);
  const { id } = useParams();

  async function getCourse() {
    const res = await axios.get(`http://localhost:3001/course/${id}`);
    setCourse(res.data[0]);
  }

  async function getAllLessons() {
    const res = await axios.get(`http://localhost:3001/lesson/${id}`);
    setLessons(res.data);
  }

  useEffect(() => {
    getCourse();
    getAllLessons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header isAuth={true} />

      <div className={style.coursePageWrapper}>
        <div className={style.coursePageContainer}>
          <div className={style.mainWrapper}>
            <div className={style.courseDescriptionImg}></div>

            <div className={style.courseDescription}>
              <h1>{course.course}</h1>
              <p>{course.description}</p>
            </div>
          </div>

          <Link to={"#!"}>
            <Button variant="contained" className={style.courseDescriptionBtn}>
              Go to course
            </Button>
          </Link>
        </div>

        <div className={style.courseLesson}>
          <h2>Lessons</h2>
          {lessons.map((el, index) => (
            <p key={index}>{el.title}</p>
          ))}
        </div>

        <Link to={"/students"}>
          <Button variant="contained" className={style.courseDescriptionBtnBack}>
            Back
          </Button>
        </Link>
      </div>
    </>
  );
};

export default CoursePage;

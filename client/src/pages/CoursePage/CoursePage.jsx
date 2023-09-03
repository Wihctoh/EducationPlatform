import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./CoursePage.module.css";
import Header from "../../components/Header/Header";
import axios from "axios";

const CoursePage = () => {
  const [res, setRes] = useState({});
  const { id } = useParams();

  async function getAllCourses() {
    const res = await axios.get(`http://localhost:3001/course/${id}`);
    setRes(res.data[0]);
  }

  useEffect(() => {
    getAllCourses();
  }, []);

  return (
    <>
      <Header isAuth={true} />
      <div className={style.coursePageWrapper}>
        <div className={style.coursePageContainer}>
          <div className={style.mainWrapper}>
            <div className={style.courseDescriptionImg}></div>

            <div className={style.courseDescription}>
              <h1>{res.course}</h1>
              <p>{res.description}</p>
            </div>
          </div>

          <div className={style.courseDescriptionBtn}>Go to course</div>
        </div>

        <div className={style.courseLesson}>
          <h2>15 lessons</h2>
          <p>1. Test</p>
        </div>
      </div>
    </>
  );
};

export default CoursePage;

import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import style from "./Students.module.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import axios from "axios";

const StudentsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [storage, setStorage] = useState([]);

  async function getAllCourses() {
    const res = await axios.get("http://localhost:3001/course");
    setStorage(res.data);
  }

  useEffect(() => {
    getAllCourses();
  }, []);

  const size = 2;
  const lastIndex = currentPage * size;
  const firstIndex = lastIndex - size;
  const courseItems = storage.slice(firstIndex, lastIndex);

  return (
    <>
      <Header isAuth={true} />

      <div className={style.studentsWrapper}>
        <div className={style.studentsIntro}>
          <div className={style.studentsLogo}></div>
          <h1>Courses</h1>
        </div>

        {courseItems.map((el, index) => (
          <Link to={`/course/${el.id}`} key={index}>
            <div className={style.coursesWrapper}>
              <div className={style.course}>
                <div className={style.courseImg}></div>

                <div className={style.courseDescription}>
                  <h2>{el.course}</h2>
                  <p>{el.description}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Stack spacing={2} className={style.pagination}>
        <Pagination
          count={Math.ceil(storage.length / size)}
          color="secondary"
          variant="outlined"
          size="large"
          onChange={(_e, page) => setCurrentPage(page)}
        />
      </Stack>

      <Footer />
    </>
  );
};

export default StudentsPage;

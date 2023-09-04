import {
  getAllLessonDB,
  createLessonDB,
  updateLessonDB,
  deleteLessonDB,
  getLessonByIdDB,
} from "../repository/lesson.repository";

async function getAllLesson() {
  const data = await getAllLessonDB();

  return data;
}

async function createLesson(course_id, title) {
  const data = await createLessonDB(course_id, title);

  return data;
}

async function updateLesson(id, course_id, title) {
  const data = await updateLessonDB(id, course_id, title);

  return data;
}

async function deleteLesson(id) {
  const data = await deleteLessonDB(id);

  return data;
}

async function getLessonById(id) {
  const data = await getLessonByIdDB(id);

  return data;
}

export { getAllLesson, createLesson, updateLesson, deleteLesson, getLessonById };

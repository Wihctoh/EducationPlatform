import {
  getAllUsersCourses,
  getUserIDCourses,
  createCourse,
  updateCourse,
  deleteCourse,
} from "../../../service/course.service";
import * as repo from "../../../repository/course.repository";

describe("", () => {
  test("", async () => {
    const repoFunc = jest.spyOn(repo, "getAllUsersCoursesDB");
    repoFunc.mockResolvedValue([
      { id: 1, course: "test1" },
      { id: 1, course: "test1" },
    ]);

    const res = await getAllUsersCourses();

    expect(repoFunc).toHaveBeenCalled();

    expect(res.length).toBeGreaterThan(0);
    expect(res).toEqual([
      { id: 1, course: "test1" },
      { id: 1, course: "test1" },
    ]);
  });
});

describe("", () => {
  test("", async () => {
    const repoFunc = jest.spyOn(repo, "getUserIDCoursesDB");
    repoFunc.mockResolvedValue([{ id: 1, course: "test1" }]);

    const res = await getUserIDCourses(1);

    expect(repoFunc).toHaveBeenCalledTimes(1);

    expect(res.length).toBe(1);
    expect(res).toEqual([{ id: 1, course: "test1" }]);
  });
});

describe("", () => {
  test("", async () => {
    const repoFunc = jest.spyOn(repo, "createCourseDB");
    repoFunc.mockResolvedValue([{ id: 1, course: "test1" }]);

    const res = await createCourse("test1");

    expect(repoFunc).toHaveBeenCalled();
    expect(repoFunc).toHaveBeenCalledWith("test1");

    expect(res).toEqual([{ id: 1, course: "test1" }]);
    expect(res).toHaveLength(1);
  });
});

describe("", () => {
  test("", async () => {
    const repoFunc = jest.spyOn(repo, "updateCourseDB");
    repoFunc.mockResolvedValue([{ id: 1, course: "test1" }]);

    const res = await updateCourse(1, "test1");

    expect(repoFunc).toHaveBeenCalled();

    expect(res).toEqual([{ id: 1, course: "test1" }]);
    expect(res).toHaveLength(1);
  });
});

describe("", () => {
  test("", async () => {
    const repoFunc = jest.spyOn(repo, "deleteCourseDB");
    repoFunc.mockResolvedValue([{ id: 1, course: "test1" }]);

    const res = await deleteCourse(1);

    expect(repoFunc).toHaveBeenCalled();

    expect(res).toEqual([{ id: 1, course: "test1" }]);
    expect(res).toHaveLength(1);
  });
});

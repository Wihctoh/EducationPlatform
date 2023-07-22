import {
  getAllUsersCoursesDB,
  getUserIDCoursesDB,
  createCourseDB,
  deleteCourseDB,
  updateCourseDB,
} from "../../../repository/course.repository";

const mClient = { query: jest.fn() };

jest.mock("pg", function () {
  return {
    Pool: jest.fn(function () {
      return {
        connect: jest.fn(function () {
          return mClient;
        }),
      };
    }),
  };
});

describe("", () => {
  test("", async () => {
    mClient.query.mockResolvedValue({
      rows: [
        { id: 1, courses: "qwe" },
        { id: 2, courses: "qweqw" },
      ],
    });

    const res = await getAllUsersCoursesDB();

    expect(res).toEqual([
      { id: 1, courses: "qwe" },
      { id: 2, courses: "qweqw" },
    ]);
  });
});

describe("", () => {
  test("", async () => {
    mClient.query.mockResolvedValue({
      rows: [{ id: 1, courses: "qwe" }],
    });

    const res = await getUserIDCoursesDB(1);

    expect(res).toEqual([{ id: 1, courses: "qwe" }]);
  });
});

describe("", () => {
  test("", async () => {
    mClient.query.mockResolvedValue({
      rows: [{ id: 1, courses: "qwe" }],
    });

    const res = await createCourseDB("wqer");

    expect(res).toEqual([{ id: 1, courses: "qwe" }]);
  });
});

describe("", () => {
  test("", async () => {
    mClient.query.mockResolvedValue({
      rows: [{ id: 1, courses: "qwe" }],
    });

    const res = await deleteCourseDB(1);

    expect(res).toEqual([{ id: 1, courses: "qwe" }]);
  });
});

describe("", () => {
  test("", async () => {
    mClient.query.mockResolvedValue({
      rows: [{ id: 1, courses: "qwe" }],
    });

    const res = await updateCourseDB(1, "qwe");

    expect(res).toEqual([{ id: 1, courses: "qwe" }]);
  });
});

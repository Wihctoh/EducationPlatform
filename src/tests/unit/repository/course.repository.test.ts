import { getAllUsersCoursesDB } from "../../../repository/course.repository";

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

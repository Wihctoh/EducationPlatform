import { iUser } from "../../../interfaces";
import {
  getAllUsersDB,
  getUserByIdDB,
  updateUserDB,
  deleteUserDB,
} from "../../../repository/user.repository";

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

describe("getAllUsersDB", () => {
  test("getAllUsersDB values", async () => {
    const arr: iUser[] = [
      { id: 1, name: "qwe", surname: "asd", email: "qwe@weq.tu", pwd: "123" },
      {
        id: 2,
        name: "qweewq",
        surname: "asdasd",
        email: "qqwe@weq.tu",
        pwd: "121233",
      },
    ];

    mClient.query.mockResolvedValue({ rows: arr });

    const res = await getAllUsersDB();

    expect(res).toEqual(arr);
  });

  test("getAllUsersDB empty values", async () => {
    mClient.query.mockResolvedValue({ rows: [] });

    const res = await getAllUsersDB();

    expect(res).toEqual([]);
  });
});

describe("getUserByIdDB", () => {
  test("getUserByIdDB values", async () => {
    const arr: iUser[] = [
      { id: 1, name: "qwe", surname: "asd", email: "qwe@weq.tu", pwd: "123" },
    ];

    mClient.query.mockResolvedValue({ rows: arr });

    const res = await getUserByIdDB(1);

    expect(res).toEqual(arr);
  });

  test("getUserByIdDB empty values", async () => {
    mClient.query.mockResolvedValue({ rows: [] });

    const res = await getUserByIdDB(1);

    expect(res).toEqual([]);
  });
});

describe("updateUserDB", () => {
  test("updateUserDB values", async () => {
    const arr: iUser[] = [
      { id: 1, name: "qwe", surname: "asd", email: "qwe@weq.tu", pwd: "123" },
    ];

    mClient.query.mockResolvedValue({ rows: arr });

    const res = await updateUserDB(1, "qwe", "asd", "qwe@weq.tu", "123");

    expect(res).toEqual(arr);
  });

  test("updateUserDB empty values", async () => {
    mClient.query.mockResolvedValue({ rows: [] });

    const res = await updateUserDB(1, "qwe", "asd", "qwe@weq.tu", "123");

    expect(res).toEqual([]);
  });
});

describe("deleteUserDB", () => {
  test("deleteUserDB values!", async () => {
    const arr: iUser[] = [
      { id: 1, name: "qwe", surname: "asd", email: "qwe@weq.tu", pwd: "123" },
    ];

    mClient.query.mockResolvedValue({ rows: arr });

    const res = await deleteUserDB(1);

    expect(res).toEqual(arr);
  });

  test("deleteUserDB empty", async () => {
    mClient.query.mockResolvedValue({ rows: [] });

    const res = await deleteUserDB(1);

    expect(res).toEqual([]);
  });
});

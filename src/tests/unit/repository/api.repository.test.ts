import { iUser } from "../../../interfaces";
import { createUserDB, getEmailDB } from "../../../repository/api.repository";

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

describe("createUserDB", () => {
  test("createUserDB return values!", async () => {
    const arr: iUser[] = [
      { id: 1, name: "qwe", surname: "asd", email: "qwe@aw.ru", pwd: "123" },
    ];

    mClient.query.mockResolvedValue({ rows: arr });

    const res = await createUserDB("qwe", "asd", "qwe@aw.ru", "123");

    expect(res).toEqual(arr);
  });

  test("createUserDB empty values!", async () => {
    mClient.query.mockResolvedValue({ rows: [] });

    const res = await createUserDB("qwe", "asd", "qwe@aw.ru", "123");

    expect(res).toEqual([]);
  });
});

describe("getEmailDB", () => {
  test("getEmailDB return values!", async () => {
    const arr: iUser[] = [
      { id: 1, name: "qwe", surname: "asd", email: "qwe@aw.ru", pwd: "123" },
    ];

    mClient.query.mockResolvedValue({ rows: arr });

    const res = await getEmailDB("qwe@aw.ru");

    expect(res).toEqual(arr);
  });

  test("getEmailDB empty values!", async () => {
    mClient.query.mockResolvedValue({ rows: [] });

    const res = await getEmailDB("qwe@aw.ru");

    expect(res).toEqual([]);
  });
});

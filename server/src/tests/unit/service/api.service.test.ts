import { createUser, authUser } from "../../../service/api.service";
import * as repo from "../../../repository/api.repository";
import bcrypt from "bcrypt";

describe("createUser", () => {
  test("createUser", async () => {
    const mockGetEmail = jest.spyOn(repo, "getEmailDB");
    const mockHash = jest.spyOn(bcrypt, "hash");
    const mockCreateUser = jest.spyOn(repo, "createUserDB");

    mockGetEmail.mockResolvedValue([]);
    mockHash.mockResolvedValue("qwewqeqweqeq");
    mockCreateUser.mockResolvedValue([
      {
        id: 1,
        name: "qwe",
        surname: "asd",
        email: "qwe@qwe.qwe",
        pwd: "qwewqeqweqeq",
      },
    ]);

    const res = await createUser("qwe", "asd", "qwe@qwe.qwe", "123");

    expect(res).toEqual([
      {
        id: 1,
        name: "qwe",
        surname: "asd",
        email: "qwe@qwe.qwe",
        pwd: "qwewqeqweqeq",
      },
    ]);
  });
});

describe("", () => {
  test("", async () => {
    const getEmailDbMok = jest.spyOn(repo, "getEmailDB");
    const hashMok = jest.spyOn(bcrypt, "compare");

    getEmailDbMok.mockResolvedValue([
      { id: 1, name: "jack", surname: "asd", email: "qwe@qwe.ru", pwd: "123" },
    ]);
    hashMok.mockResolvedValue(true);

    const res = await authUser("qwe@qwe.ru", "123");
    expect(getEmailDbMok).toHaveBeenCalled();
    expect(hashMok).toHaveBeenCalled();
    expect(hashMok).toHaveBeenCalledWith("123", "123");

    expect(res).toEqual([
      { id: 1, name: "jack", surname: "asd", email: "qwe@qwe.ru", pwd: "123" },
    ]);
  });

  test("", async () => {
    const getEmailDbMok = jest.spyOn(repo, "getEmailDB");

    getEmailDbMok.mockResolvedValue([]);

    try {
      await authUser("qwe@qwe.ru", "123");
    } catch (error: any) {
      expect(getEmailDbMok).toHaveBeenCalled();

      expect(error.message).toBe("user not found!");
    }
  });

  test("", async () => {
    const getEmailDbMok = jest.spyOn(repo, "getEmailDB");
    const hashMok = jest.spyOn(bcrypt, "compare");

    getEmailDbMok.mockResolvedValue([
      { id: 1, name: "jack", surname: "asd", email: "qwe@qwe.ru", pwd: "123" },
    ]);
    hashMok.mockResolvedValue(true);

    try {
      await authUser("qwe@qwe.ru", "123");
    } catch (error: any) {
      expect(hashMok).toHaveBeenCalled();

      expect(error.message).toBe("pwd not correct!");
    }
  });
});

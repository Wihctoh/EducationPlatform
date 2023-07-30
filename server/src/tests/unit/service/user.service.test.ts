import {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../../../service/user.service";
import * as repo from "../../../repository/user.repository";

describe("getAllUsers", () => {
  test("correctReturn", async () => {
    const mockFunc = jest.spyOn(repo, "getAllUsersDB");
    mockFunc.mockResolvedValue([
      {
        id: 1,
        name: "qwe",
        surname: "asd",
        email: "qwe@wqe.wq",
        pwd: "123",
      },
      {
        id: 2,
        name: "asd",
        surname: "zxc",
        email: "qweas@wqe.wq",
        pwd: "eq123",
      },
    ]);

    const res = await getAllUsers();

    expect(mockFunc).toHaveBeenCalled();

    expect(res).toEqual([
      {
        id: 1,
        name: "qwe",
        surname: "asd",
        email: "qwe@wqe.wq",
        pwd: "123",
      },
      {
        id: 2,
        name: "asd",
        surname: "zxc",
        email: "qweas@wqe.wq",
        pwd: "eq123",
      },
    ]);
  });

  test("no data", async () => {
    const mockFunc = jest.spyOn(repo, "getAllUsersDB");
    mockFunc.mockResolvedValue([]);

    expect(mockFunc).toHaveBeenCalled();
    try {
      const res = await getAllUsers();
    } catch (error: any) {
      expect(error.message).toBe("no data!");
    }
  });
});

describe("getUserById", () => {
  test("correct return value", async () => {
    const mockFunc = jest.spyOn(repo, "getUserByIdDB");
    mockFunc.mockResolvedValue([
      {
        id: 1,
        name: "qwe",
        surname: "asd",
        email: "qwe@wqe.wq",
        pwd: "123",
      },
    ]);

    const res = await getUserById(1);

    expect(mockFunc).toHaveBeenCalled();

    expect(res).toEqual([
      {
        id: 1,
        name: "qwe",
        surname: "asd",
        email: "qwe@wqe.wq",
        pwd: "123",
      },
    ]);
  });

  test("no data!", async () => {
    const mockFunc = jest.spyOn(repo, "getUserByIdDB");
    mockFunc.mockResolvedValue([]);

    expect(mockFunc).toHaveBeenCalled();
    try {
      const res = await getUserById(1);
    } catch (error: any) {
      expect(error.message).toBe("no data!");
    }
  });
});

describe("updateUser", () => {
  test("return correct value", async () => {
    const mockFunc = jest.spyOn(repo, "updateUserDB");
    mockFunc.mockResolvedValue([
      {
        id: 1,
        name: "qwe",
        surname: "asd",
        email: "qwe@wqe.wq",
        pwd: "123",
      },
    ]);

    const res = await updateUser(1, "qwe", "asd", "qwe@wqe.wq", "123");

    expect(mockFunc).toHaveBeenCalled();

    expect(res).toEqual([
      {
        id: 1,
        name: "qwe",
        surname: "asd",
        email: "qwe@wqe.wq",
        pwd: "123",
      },
    ]);
  });
});

describe("deleteUser", () => {
  test("correct return value", async () => {
    const mockFunc = jest.spyOn(repo, "deleteUserDB");
    mockFunc.mockResolvedValue([
      {
        id: 1,
        name: "qwe",
        surname: "asd",
        email: "qwe@wqe.wq",
        pwd: "123",
      },
    ]);

    const res = await deleteUser(1);

    expect(mockFunc).toHaveBeenCalled();

    expect(res).toEqual([
      {
        id: 1,
        name: "qwe",
        surname: "asd",
        email: "qwe@wqe.wq",
        pwd: "123",
      },
    ]);
  });

  test("no data!", async () => {
    const mockFunc = jest.spyOn(repo, "deleteUserDB");
    mockFunc.mockResolvedValue([]);

    expect(mockFunc).toHaveBeenCalled();
    try {
      const res = await deleteUser(1);
    } catch (error: any) {
      expect(error.message).toBe("no data!");
    }
  });
});

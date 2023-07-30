import buildResponse from "../../../helper/buildResponse";

const res = {
  status: jest.fn(),
  send: jest.fn(),
};

describe("buildResponse", () => {
  test("buildResponse values", () => {
    buildResponse(res, 200, "succsess");

    expect(res.send).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalled();
    expect(res.send).toHaveBeenCalledWith("succsess");
  });
});

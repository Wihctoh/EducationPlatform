import req from "supertest";
import app from "../../app";

let postID;

const userObj = {
  name: "test1",
  surname: "test1",
  email: "qqasd@qweas@qqr",
  pwd: "1231231",
};

test("post", async () => {
  const res = await req(app).post("/api/reg").send(userObj);
  postID = { ...res.body[0], pwd: "1231231" };

  expect(res.statusCode).toBe(200);
  expect(res.body.length).toBeGreaterThanOrEqual(1);
});

test("post", async () => {
  const res = await req(app).post("/api/auth").send(postID);

  expect(res.statusCode).toBe(200);
  expect(res.body.length).toBeGreaterThanOrEqual(1);
});

test("delete", async () => {
  const res = await req(app).delete(`/api/${postID.id}`);

  expect(res.statusCode).toBe(200);
  expect(res.body.length).toBeGreaterThanOrEqual(1);
});

import req from "supertest";
import app from "../../app";

let testID;
const testUserObj = {
  name: "qwe",
  surname: "asdasd",
  email: "asda@qwe.qw",
  pwd: "123421",
};

test("post Test", async () => {
  const res = await req(app).post("/user").send(testUserObj);

  testID = res.body[0].id;

  expect(res.statusCode).toBe(200);
  expect(res.body.length).toBeGreaterThanOrEqual(1);
});

test("get user", async () => {
  const res = await req(app).get("/user");

  expect(res.statusCode).toBe(200);
  expect(res.body.length).toBeGreaterThanOrEqual(1);
});

test("get user by id", async () => {
  const res = await req(app).get(`/user/${testID}`);

  expect(res.statusCode).toBe(200);
  expect(res.body.length).toBeGreaterThanOrEqual(1);
});

test("put", async () => {
  const res = await req(app)
    .put(`/user/${testID}`)
    .send({ name: "ads", surname: "zxc", email: "qzx@axz.wq", pwd: "76545" });

  console.log(res.body);

  expect(res.statusCode).toBe(200);
  expect(res.body.length).toBeGreaterThanOrEqual(1);
});

test("delete", async () => {
  const res = await req(app).delete(`/user/${testID}`);

  expect(res.statusCode).toBe(200);
  expect(res.body.length).toBeGreaterThanOrEqual(1);
});

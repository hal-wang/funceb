import Funcweb from "../src";

test("index html test", async function () {
  const path = "";
  const fw = new Funcweb(path, "test/test-web");
  expect(fw.status).toBe(200);
});

test("index js test", async function () {
  const path = "/index.js";
  const fw = new Funcweb(path, "test/test-web");
  expect(fw.status).toBe(200);
});

test("404 test", async function () {
  const path = "/not-exist";
  const fw = new Funcweb(path, "test/test-web");
  expect(fw.status).toBe(200);
  expect(fw.content).toBe("404 page");
});

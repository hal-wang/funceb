import Funceb from "../src";

test("index html test", async function () {
  const path = "";
  const funceb = new Funceb(path, "test/test-web");
  expect(funceb.status).toBe(200);
});

test("index js test", async function () {
  const path = "/index.js";
  const funceb = new Funceb(path, "test/test-web");
  expect(funceb.status).toBe(200);
});

test("404 test", async function () {
  const path = "/not-exist";
  const funceb = new Funceb(path, "test/test-web");
  expect(funceb.status).toBe(200);
  expect(funceb.content).toBe("404 page");
});

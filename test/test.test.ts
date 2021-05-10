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
  expect(!!funceb.content).toBe(true);
  if (funceb.content) {
    expect(funceb.content.toString("utf-8")).toBe("404 page");
  }
});

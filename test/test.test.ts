import Funcweb from "../src";
import * as fs from "fs";

test("index html test", async function () {
  const path = "";
  const fw = new Funcweb(path, "test/test-web");
  expect(fs.existsSync(fw.filePath)).toBe(true);
});

test("index js test", async function () {
  const path = "";
  const fw = new Funcweb(path, "test/test-web/index.js");
  expect(fs.existsSync(fw.filePath)).toBe(true);
});

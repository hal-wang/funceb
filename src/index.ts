import * as path from "path";
import * as fs from "fs";
import { getType } from "mime";

export default class Funcweb {
  private readonly filePath: string;

  constructor(url: string, basePath?: string) {
    if (url.endsWith("/")) {
      url = url.substr(0, url.length - 1);
    }
    if (basePath && !url.endsWith(basePath)) {
      url = `${url}/${basePath}`;
    }

    this.filePath = path.join(__dirname, url);
    if (fs.existsSync(this.filePath) && fs.lstatSync(this.filePath).isFile()) {
      return;
    }

    this.filePath = path.join(__dirname, url, "index.html");
    if (fs.existsSync(this.filePath) && fs.lstatSync(this.filePath).isFile()) {
      return;
    }

    this.filePath = path.join(__dirname, url, "index.js");
    if (fs.existsSync(this.filePath) && fs.lstatSync(this.filePath).isFile()) {
      return;
    }

    this.filePath = "";
  }

  get content(): string | undefined {
    if (!this.filePath) {
      return;
    }

    return fs.readFileSync(this.filePath, "utf8");
  }

  get mine(): string | undefined {
    if (!this.filePath) {
      return;
    }

    return getType(this.filePath) || "*/*";
  }
}

import * as path from "path";
import * as fs from "fs";
import { getType } from "mime";

export default class Funcweb {
  private readonly filePath: string;

  constructor(url: string, basePath?: string) {
    if (url.endsWith("/")) {
      url = url.substr(0, url.length - 1);
    }
    if (url.startsWith("/")) {
      url = url.substr(1, url.length - 1);
    }
    if (basePath && !url.startsWith(basePath)) {
      url = `${basePath}/${url}`;
    }

    this.filePath = path.join(process.cwd(), url);
    if (fs.existsSync(this.filePath) && fs.lstatSync(this.filePath).isFile()) {
      return;
    }

    this.filePath = path.join(process.cwd(), url, "index.html");
    if (fs.existsSync(this.filePath) && fs.lstatSync(this.filePath).isFile()) {
      return;
    }

    this.filePath = "";
  }

  get status(): 200 | 404 {
    return this.filePath ? 200 : 404;
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

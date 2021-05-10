import * as path from "path";
import * as fs from "fs";
import { getType } from "mime";

export default class Funceb {
  private readonly filePath: string;

  constructor(reqPath: string, webPath?: string) {
    reqPath = this.trimPath(reqPath);
    if (webPath) {
      webPath = this.trimPath(webPath);
      reqPath = `${webPath}/${reqPath}`;
    }

    this.filePath = path.join(process.cwd(), reqPath);
    if (fs.existsSync(this.filePath) && fs.lstatSync(this.filePath).isFile()) {
      return;
    }

    this.filePath = path.join(process.cwd(), reqPath, "index.html");
    if (fs.existsSync(this.filePath) && fs.lstatSync(this.filePath).isFile()) {
      return;
    }

    this.filePath = path.join(process.cwd(), webPath || "", "404.html");
    if (fs.existsSync(this.filePath) && fs.lstatSync(this.filePath).isFile()) {
      return;
    }

    this.filePath = "";
  }

  get status(): 200 | 404 {
    return this.filePath ? 200 : 404;
  }

  get content(): Buffer | undefined {
    if (!this.filePath) {
      return;
    }

    return fs.readFileSync(this.filePath);
  }

  get mine(): string | undefined {
    if (!this.filePath) {
      return;
    }

    return getType(this.filePath) || "*/*";
  }

  private trimPath(path: string): string {
    if (path.endsWith("/")) {
      path = path.substr(0, path.length - 1);
    }
    if (path.startsWith("/")) {
      path = path.substr(1, path.length - 1);
    }
    return path;
  }
}

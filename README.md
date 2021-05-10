# funceb

云函数变静态网站

## 用法

`Funceb` 构造函数接收两个参数

- reqPath: 请求路径，如 `/login`、`/product/funceb` 等
- webPath: 可选参数，如果 `index.html` 不是在根目录，需要设置此参数，值为 `index.html` 相对路径，如 `/web`、`/webset/v2` 等

### koa

```JS
const Koa = require("koa");
const Funceb = require("@hal-wang/funceb").default;
const app = new Koa();

app.use(async (ctx) => {
  const funceb = new Funceb(ctx.request.path, "web");
  ctx.body = funceb.content;
  ctx.type = funceb.mime;
  ctx.status = funceb.status;
});

app.listen(3000);
```

### 云函数

```JS
const Funceb = require("@hal-wang/funceb").default;

exports.main = async (event) => {
  const funceb = new Funceb(event.path, "web");
  return {
    statusCode: funceb.status,
    headers: { "Content-Type": funceb.mine },
    body: funceb.content,
  };
};
```

# funcweb

云函数变静态网站

## 用法

`Funcweb` 构造函数接收两个参数

- reqPath: 请求路径，如 `/login`、`/product/funcweb` 等
- webPath: 可选参数，如果 `index.html` 不是在根目录，需要设置此参数，值为 `index.html` 相对路径，如 `/web`、`/webset/v2` 等

### koa

```JS
const Koa = require("koa");
const Funcweb = require("@hal-wang/funcweb").default;
const app = new Koa();

app.use(async (ctx) => {
  const funcweb = new Funcweb(ctx.request.path, "web");
  ctx.body = funcweb.content;
  ctx.type = funcweb.mime;
  ctx.status = funcweb.status;
});

app.listen(3000);
```

### 云函数

```JS
const Funcweb = require("@hal-wang/funcweb").default;

exports.main = async (event) => {
  const funcweb = new Funcweb(event.path, "web");
  return {
    statusCode: funcweb.status,
    headers: { "Content-Type": funcweb.mine },
    body: funcweb.content,
  };
};
```

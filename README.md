# funcweb

云函数变静态网站

## 用法

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

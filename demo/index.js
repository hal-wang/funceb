/* eslint-disable @typescript-eslint/no-var-requires */
const Koa = require("koa");
const Funceb = require("@hal-wang/funceb").default;
const app = new Koa();

app.use(async (ctx) => {
  const funceb = new Funceb(ctx.request.path, "vue");
  ctx.body = funceb.content;
  ctx.type = funceb.mime;
  ctx.status = funceb.status;
});

const port = 3000;
console.info(`koa: http://localhost:${port}`);
app.listen(port);

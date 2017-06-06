const Koa = require('koa');
const Router = require('koa-router');
const json = require('koa-json');
const logger = require('koa-logger');

const app = new Koa();
const router = new Router();

const api = require('./server/routes/api.js');

app.use(require('koa-bodyparser')());
app.use(json());
app.use(logger());

// x-response-time
app.use(async function (ctx, next) {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// logger
app.use(async function (ctx, next) {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});

router.use('/api', api.routes());
app.use(router.routes());

app.listen(3001, () => {
  console.log('Koa is listening in 3001');
});
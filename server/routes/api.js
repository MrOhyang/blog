const router = new (require('koa-router'))();

router.get('/test', async function(ctx) {
  ctx.body = 'test';
});

module.exports = router;
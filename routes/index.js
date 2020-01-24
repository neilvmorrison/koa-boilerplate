import Router from "koa-router";
import combineRouters from "koa-combine-routers";

const router = new Router();

router.get("/", (ctx) => {
  ctx.body = "Hello, world. Everything is fucked";
});

export default combineRouters(router);

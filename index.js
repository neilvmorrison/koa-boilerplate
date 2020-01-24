import Koa from "koa";
import logger from "koa-logger";
import router from "./routes";
import dotenv from "dotenv";
import bodyParser from "koa-bodyparser";

dotenv.config();

const app = new Koa();
const PORT = 4000;

app.use(bodyParser());
app.use(logger());
app.use(router());

app.listen(PORT, () => {
  console.log("Listening on port: ", PORT);
});

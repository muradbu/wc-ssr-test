import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import Index from './index'
import { staticPlugin } from '@elysiajs/static'

const app = new Elysia()
  .use(html())
  .use(staticPlugin())
  .get("/", () => <Index />)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

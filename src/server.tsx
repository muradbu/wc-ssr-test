import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import Index from './index'

const app = new Elysia()
  .use(html())
  .get("/public/CustomComponent.js", () => {
    console.log("Got the request!");

    return Bun.file('public/CustomComponent.js')
  })
  .get("/", () => <Index />)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

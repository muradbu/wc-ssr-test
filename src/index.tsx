import { renderToString } from 'wc-compiler';

const { html } = await renderToString(new URL("../public/footer.js", import.meta.url))

function index() {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Web Components SSR Example</title>
        <script src="./public/wc-ssr/CustomComponent.js" defer></script>
      </head>
      <body>
        <h1>Hello World!</h1>
        {/* @ts-ignore */}
        <custom-component text="I am rendered on the client!"></custom-component>
        {html}
      </body>
    </html>
  );
}

export default index;

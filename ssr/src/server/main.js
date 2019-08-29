import path from "path";
import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { ChunkExtractor } from "@loadable/server";

const app = express();

app.use(express.static(path.join(__dirname, "../../public")));

if (process.env.NODE_ENV !== "production") {
  /* eslint-disable global-require, import/no-extraneous-dependencies */
  const { default: webpackConfig } = require("../../webpack.config.babel");
  const webpackDevMiddleware = require("webpack-dev-middleware");
  const webpack = require("webpack");
  /* eslint-enable global-require, import/no-extraneous-dependencies */

  const compiler = webpack(webpackConfig);

  app.use(
    webpackDevMiddleware(compiler, {
      logLevel: "silent",
      publicPath: "/dist/web",
      writeToDisk(filePath) {
        return /dist\/node\//.test(filePath) || /loadable-stats/.test(filePath);
      }
    })
  );
}

const nodeStats = path.resolve(
  __dirname,
  "../../public/dist/node/loadable-stats.json"
);

const webStats = path.resolve(
  __dirname,
  "../../public/dist/web/loadable-stats.json"
);

app.get("*", (req, res) => {
  // statsFileからChunkを生成
  // 基本chunkfileの中身のdiffは同じだが
  // 
  // node(SSR用)
  const nodeExtractor = new ChunkExtractor({ statsFile: nodeStats });
  // サーバーサイドでのrendering
  const { default: App } = nodeExtractor.requireEntrypoint();

  // web(クライアントサイド用)
  const webExtractor = new ChunkExtractor({ statsFile: webStats });
  // サーバーサイドでレンダリングしたDOMでjsxを作る
  const jsx = webExtractor.collectChunks(<App />);

  const linkTags = webExtractor.getLinkTags();
  const styleTags = webExtractor.getStyleTags();
  // クライアントにjsxを渡す。
  // クライアントではhydrateを使ってサーバーサイドで
  // 作ったDOMに対してevent handlerをアタッチするのみ
  // (main-web.js)
  const html = renderToString(jsx);

  res.set("content-type", "text/html");
  res.send(`<!DOCTYPE html>
<head>
${webExtractor.getLinkTags()}
${webExtractor.getStyleTags()}
</head>
<body>
  <div id="main">${html}</div>
  ${webExtractor.getScriptTags()}
</body>
</html>`);
});

// eslint-disable-next-line no-console
app.listen(9000, () => console.log("Server started http://localhost:9000"));

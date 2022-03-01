const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
app.use(
  "/localhostapi",
  createProxyMiddleware({
    target: `http://localhost:4000/`,
    headers: {
      accept: "application/json",
      method: "GET",
    },
    changeOrigin: true,
  })
);
}

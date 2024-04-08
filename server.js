const cors_proxy = require('cors-anywhere');

const PORT = process.env.PORT || 8080;

cors_proxy.createServer({
  originWhitelist: [], // Allow all origins
  requireHeader: ['origin', 'x-requested-with'],
  removeHeaders: ['cookie', 'cookie2']
}).listen(PORT, () => {
  console.log(`CORS Anywhere server is running on port ${PORT}`);
});

const cors_proxy = require('cors-anywhere');

const PORT = process.env.PORT || 8080;

const whitelist = ['marketplace-juhuu.vercel.app/'];

cors_proxy.createServer({
  originWhitelist: whitelist,
  requireHeader: ['origin', 'x-requested-with'],
}).listen(PORT, () => {
  console.log(`CORS Anywhere server is running on port ${PORT}`);
});

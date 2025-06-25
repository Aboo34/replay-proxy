const express = require('express');
const handler = require('./api/server');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/forex', (req, res) => {
  handler(req, res);
});

app.listen(PORT, () => {
  console.log(`🚀 الخادم يعمل على: http://localhost:${PORT}/api/forex`);
});

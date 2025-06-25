const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const { symbol, period, from } = req.query;

  const url = `https://fcsapi.com/api-v3/forex/history?symbol=${symbol}&period=${period}&from=${from}&access_key=VJXvVytdA03vZEJwIJ`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'فشل الاتصال بـ FCSAPI' });
  }
};

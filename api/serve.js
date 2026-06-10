const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const TOKEN = crypto.createHash('sha256').update('ReDeFiNiCe|flexi-variants-fy27').digest('hex');

module.exports = (req, res) => {
  const cookies = {};
  (req.headers.cookie || '').split(';').forEach((pair) => {
    const idx = pair.indexOf('=');
    if (idx > -1) cookies[pair.slice(0, idx).trim()] = pair.slice(idx + 1).trim();
  });

  if (cookies.auth_token !== TOKEN) {
    res.statusCode = 302;
    res.setHeader('Location', '/?error=1');
    res.end();
    return;
  }

  const file = path.join(process.cwd(), 'private', 'prezentace.html');
  const html = fs.readFileSync(file, 'utf8');
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.end(html);
};

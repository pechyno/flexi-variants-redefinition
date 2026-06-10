const crypto = require('crypto');

const PASSWORD = 'ReDeFiNiCe';
const TOKEN = crypto.createHash('sha256').update(PASSWORD + '|flexi-variants-fy27').digest('hex');

module.exports = (req, res) => {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.end('Method Not Allowed');
    return;
  }

  let body = '';
  req.on('data', (chunk) => { body += chunk; });
  req.on('end', () => {
    const params = new URLSearchParams(body);
    if (params.get('password') === PASSWORD) {
      res.setHeader('Set-Cookie', `auth_token=${TOKEN}; HttpOnly; Path=/; SameSite=Strict; Max-Age=86400`);
      res.statusCode = 302;
      res.setHeader('Location', '/api/serve');
      res.end();
    } else {
      res.statusCode = 302;
      res.setHeader('Location', '/?error=1');
      res.end();
    }
  });
};

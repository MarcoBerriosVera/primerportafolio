const http = require('http');

function doRequest(token) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'localhost',
      port: 3002,
      path: '/api/contact',
      method: 'GET',
      headers: token ? { Authorization: 'Bearer ' + token } : {}
    };
    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', (c) => (data += c));
      res.on('end', () => resolve({ status: res.statusCode, body: data }));
    });
    req.on('error', reject);
    req.end();
  });
}

(async function(){
  try{
    console.log('GET without token');
    const a = await doRequest();
    console.log(a);
    console.log('\nGET with token');
    const b = await doRequest('change_me_to_a_secure_value');
    console.log(b);
  }catch(e){
    console.error('Error:', e);
  }
})();

const http = require('http');
const { PrismaClient } = require('@prisma/client');

async function run() {
  try {
    const payload = JSON.stringify({
      name: 'Prueba Automática',
      email: 'auto@example.com',
      message: 'Este es un mensaje de prueba enviado por el script de integración.'
    });

    const options = {
      hostname: 'localhost',
      port: 3001,
      path: '/api/contact',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload)
      }
    };

    const resBody = await new Promise((resolve, reject) => {
      const req = http.request(options, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => resolve({ status: res.statusCode, body: data }));
      });
      req.on('error', reject);
      req.write(payload);
      req.end();
    });

    console.log('POST response:', resBody);

    // Now query the DB
    const prisma = new PrismaClient();
    const rows = await prisma.contact.findMany({ orderBy: { id: 'desc' }, take: 5 });
    console.log('Last contacts:', JSON.stringify(rows, null, 2));
    await prisma.$disconnect();
  } catch (err) {
    console.error('Test script error:', err);
    process.exit(1);
  }
}

run();

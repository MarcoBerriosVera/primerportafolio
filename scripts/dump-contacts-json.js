const { PrismaClient } = require('@prisma/client');
const fs = require('fs');

(async function(){
  const prisma = new PrismaClient();
  try{
    const rows = await prisma.contact.findMany({ orderBy: { id: 'desc' }, take: 20 });
    fs.writeFileSync('tmp_contacts.json', JSON.stringify(rows, null, 2));
    console.log('Wrote tmp_contacts.json');
  } catch(e){
    console.error(e);
    process.exit(1);
  } finally{
    await prisma.$disconnect();
  }
})();

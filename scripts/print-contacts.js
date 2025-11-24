const { PrismaClient } = require('@prisma/client');

(async function(){
  try{
    const prisma = new PrismaClient();
    const rows = await prisma.contact.findMany({ orderBy: { id: 'desc' }, take: 10 });
    console.log(JSON.stringify(rows, null, 2));
    await prisma.$disconnect();
  } catch(e){
    console.error(e);
    process.exit(1);
  }
})();

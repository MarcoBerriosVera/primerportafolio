import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma'; 
import { analyzePayload } from '../../../lib/ids'; 

export async function POST(request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'IP Desconocida';
    const body = await request.json();
    const { name, email, phone, service, message, _gotcha } = body;

    // 1. HONEYPOT (Anti-Bots)
    if (_gotcha) {
      return NextResponse.json({ success: true });
    }

    // 2. IDS/IPS (Ciberseguridad)
    const payloadString = JSON.stringify(body);
    
    // Validación de seguridad para asegurar que la función existe
    if (typeof analyzePayload === 'function') {
        const detectedAttack = analyzePayload(payloadString);
        
        if (detectedAttack) {
          console.warn(`⚠️ ATAQUE BLOQUEADO: ${detectedAttack} desde IP: ${ip}`);
          
          // Intentamos registrar en BD
          try {
              await prisma.securityLog.create({
                data: {
                  ip: ip,
                  endpoint: '/api/contact',
                  payload: payloadString,
                  attackType: detectedAttack,
                  blocked: true
                }
              });
          } catch (logError) {
              console.error("No se pudo guardar el log de seguridad (posible falta de migración):", logError);
          }
    
          return NextResponse.json(
            { error: 'Solicitud bloqueada por el sistema de seguridad.' },
            { status: 403 }
          );
        }
    }

    // 3. VALIDACIONES DE NEGOCIO
    const phoneRegex = /^[+]?[\s./0-9]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/g;
    if (phone && (!phoneRegex.test(phone) || phone.length < 8)) {
       return NextResponse.json({ error: 'Teléfono inválido' }, { status: 400 });
    }

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Faltan campos obligatorios' }, { status: 400 });
    }

    // 4. GUARDADO
    await prisma.contact.create({
      data: { name, email, phone, service, message },
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Error en API Contact:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
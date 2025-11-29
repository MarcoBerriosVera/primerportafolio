// src/lib/ids.js

export function analyzePayload(payload) {
  // --- AGREGA ESTO PARA DEPURAR ---
  console.log("🔍 IDS Analizando payload:", payload);
  // --------------------------------
  
  if (!payload) return null;

// export function analyzePayload(payload) {
//   if (!payload) return null;

  // Convertimos a string y a minúsculas para facilitar la búsqueda
  const payloadLower = payload.toString().toLowerCase();

  // --- 1. DETECCIÓN DE XSS (Cross-Site Scripting) ---
  const xssPatterns = [
    '<script>', 
    'javascript:', 
    'onerror=', 
    'onload=', 
    'eval('
  ];
  if (xssPatterns.some(pattern => payloadLower.includes(pattern))) {
    return 'XSS Attack';
  }

  // --- 2. DETECCIÓN DE SQL INJECTION ---
  const sqlPatterns = [
    ' union select ', 
    ' or 1=1', 
    '--', 
    'drop table', 
    'information_schema'
  ];
  if (sqlPatterns.some(pattern => payloadLower.includes(pattern))) {
    return 'SQL Injection';
  }

  // --- 3. DETECCIÓN DE COMMAND INJECTION (RCE) ---
  // Esta es la parte nueva que bloquea el "; cat /etc/hosts"
  const rceRegex = /([;&|`]|\$\().*(cat|ls|pwd|whoami|ping|wget|curl|netcat|nc|tail|head|less|more)/i;

  if (rceRegex.test(payloadLower)) {
    return 'Command Injection (RCE)';
  }

  // --- 4. DETECCIÓN DE PATH TRAVERSAL ---
  if (payloadLower.includes('../') || payloadLower.includes('..\\')) {
    return 'Path Traversal';
  }

  return null; // Tráfico limpio
}
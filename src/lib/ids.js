// src/lib/ids.js

const signatures = [
  {
    type: 'SQL Injection',
    pattern: /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|UNION|ALTER)\b)|(')|(--)|(\/\*)|(\bOR\b\s+\d+=\d+)/i
  },
  {
    type: 'XSS (Cross Site Scripting)',
    pattern: /(<script>|javascript:|onerror=|onload=|eval\(|document\.cookie)/i
  },
  {
    type: 'System Command Injection',
    pattern: /(\.\.\/|\/etc\/passwd|cmd\.exe|bin\/sh)/i
  }
];

export function analyzePayload(inputString) {
  if (!inputString) return null;
  // Escaneamos buscando patrones maliciosos
  for (const sig of signatures) {
    if (sig.pattern.test(inputString)) {
      return sig.type;
    }
  }
  return null; // Todo limpio
}
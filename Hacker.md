                DESAFIOS

1. El Desafío SQL (Intentar robar datos)
Este ataque intenta engañar a la base de datos para que muestre información oculta. Código:

SQL

' OR '1'='1' -- 


2. El Desafío XSS (Intentar inyectar virus)
Este ataque intenta ejecutar código JavaScript en el navegador de quien lea el mensaje. Código:

HTML

<img src=x onerror=alert('Hackeado!')>


3. El Desafío de Sistema (Intentar leer archivos secretos)
Este ataque intenta leer el archivo de contraseñas del servidor (Path Traversal). Código:

Plaintext

../../../../etc/passwd


4. El Desafío de Terminal (Intentar tomar el control)
Este ataque intenta ejecutar comandos de consola (Command Injection). Código:

Bash

; cat /etc/hosts
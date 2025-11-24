"use client";
import { useState, useRef } from 'react';
import styles from './contactform.module.css';

export default function ContactForm() {
  // 1. ACTUALIZAMOS EL ESTADO INICIAL
  const [form, setForm] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    service: '', 
    message: '', 
    _gotcha: '' 
  });
  
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState('');
  const nameRef = useRef(null);

  // VALIDACIONES
  const errors = {
    name: !form.name ? 'El nombre es obligatorio' : form.name.length < 2 ? 'Nombre muy corto' : '',
    email: !form.email
      ? 'El email es obligatorio'
      : !/^\S+@\S+\.\S+$/.test(form.email)
      ? 'Formato de email inválido'
      : '',
    // Validación Opcional de Teléfono: Solo si escribe algo, verificamos el largo mínimo
    phone: form.phone && form.phone.length < 8 ? 'Número muy corto' : '',
    message: !form.message ? 'El mensaje es obligatorio' : form.message.length < 10 ? 'Mensaje muy corto (mín 10 caracteres)' : '',
  };

  // El formulario es válido si no hay errores en los campos OBLIGATORIOS (name, email, message)
  // Si phone tiene error, también bloqueamos.
  const isValid = !errors.name && !errors.email && !errors.message && !errors.phone;

  function handleChange(e) {
    const { name, value } = e.target;
    
    // VALIDACIÓN 1: NOMBRE (Solo letras y espacios)
    if (name === 'name') {
      // Regex: Permite a-z, A-Z, acentos (áéíóú), ñ, ü y espacios. Borra lo demás.
      const cleaned = value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]/g, '');
      setForm(prev => ({ ...prev, [name]: cleaned }));
      return;
    }

    // VALIDACIÓN 2: TELÉFONO (Solo números y símbolos tel)
    if (name === 'phone') {
      const cleaned = value.replace(/[^0-9+\-()\s]/g, '');
      setForm(prev => ({ ...prev, [name]: cleaned }));
      return;
    }

    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleBlur(e) {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true, message: true }); // Marcamos phone como tocado también
    setServerError('');
    
    if (!isValid) return;

    setLoading(true);
    try {
      const url = '/api/contact';

      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      let data;
      try { data = await res.json(); } catch (e) { data = null; }
      
      if (!res.ok) {
        setServerError(data?.error || `Error del servidor (${res.status})`);
        setLoading(false);
        return;
      }

      setSubmitted(true);
    } catch (err) {
      setServerError('No se pudo enviar. Intenta más tarde.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className={styles.container} aria-labelledby="contact-heading">
      <h2 id="contact-heading" className={styles.heading}>Contacto</h2>

      {submitted ? (
        <div className={styles.success} role="status">
          <div>Gracias — tu solicitud ha sido recibida.</div>
          <div style={{ marginTop: '0.6rem' }}>
            <button
              type="button"
              className={styles.button}
              onClick={() => {
                setForm({ name: '', email: '', phone: '', service: '', message: '', _gotcha: '' });
                setTouched({});
                setServerError('');
                setSubmitted(false);
                setTimeout(() => nameRef.current?.focus(), 50);
              }}
            >Enviar otro</button>
          </div>
        </div>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          
          <input
            type="text"
            name="_gotcha"
            style={{ display: 'none' }}
            tabIndex="-1"
            autoComplete="off"
            value={form._gotcha}
            onChange={handleChange}
          />

          <label className={styles.label} htmlFor="name">Nombre</label>
          <input
            className={`${styles.input} ${touched.name && errors.name ? styles.invalid : ''}`}
            id="name"
            name="name"
            type="text"
            value={form.name}
            ref={nameRef}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={!!(touched.name && errors.name)}
          />
          {touched.name && errors.name && <div className={styles.error}>{errors.name}</div>}

          <label className={styles.label} htmlFor="email">Email</label>
          <input
            className={`${styles.input} ${touched.email && errors.email ? styles.invalid : ''}`}
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={!!(touched.email && errors.email)}
          />
          {touched.email && errors.email && <div className={styles.error}>{errors.email}</div>}

          {/* --- CAMPO TELÉFONO CON LÍMITE --- */}
          <label className={styles.label} htmlFor="phone">Teléfono (Opcional)</label>
          <input
            className={`${styles.input} ${touched.phone && errors.phone ? styles.invalid : ''}`}
            id="phone"
            name="phone"
            type="tel"
            placeholder="+56 9..."
            value={form.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            maxLength={15} // Límite estricto de caracteres
          />
          {touched.phone && errors.phone && <div className={styles.error}>{errors.phone}</div>}

          <label className={styles.label} htmlFor="service">Tipo de Servicio</label>
          <select
            className={styles.input}
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
            style={{ backgroundColor: '#111', color: '#fff' }}
          >
            <option value="">Selecciona una opción...</option>
            <option value="desarrollo">Desarrollo Web Full Stack</option>
            <option value="ciberseguridad">Auditoría & Ciberseguridad</option>
            <option value="consultoria">Consultoría Técnica</option>
            <option value="otro">Otro</option>
          </select>

          <label className={styles.label} htmlFor="message">Mensaje</label>
          <textarea
            className={`${styles.textarea} ${touched.message && errors.message ? styles.invalid : ''}`}
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={!!(touched.message && errors.message)}
          />
          {touched.message && errors.message && <div className={styles.error}>{errors.message}</div>}

          {serverError && <div className={styles.error}>{serverError}</div>}
          
          <div className={styles.row}>
            <button type="submit" className={styles.button} disabled={!isValid || loading}>
              {loading ? 'Analizando...' : 'Enviar Solicitud'}
            </button>
          </div>
        </form>
      )}
    </section>
  );
}
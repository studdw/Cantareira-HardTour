'use client';

// components/FormularioAgendamento.tsx
// Instale o Resend: npm install resend

import { useState } from 'react';

const PACOTES = [
  'Aventura Solo',
  'Casal Aventureiro',
  'Grupo Pequeno (3–6)',
  'Grupo Grande (7+)',
  'Pacote Personalizado',
];

export default function FormularioAgendamento() {
  const [form, setForm] = useState({
    nomeCompleto: '',
    email: '',
    telefone: '',
    dataPreferencial: '',
    participantes: 1,
    pacote: '',
    mensagem: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || 'Erro ao enviar.');
        setStatus('error');
        return;
      }

      setStatus('success');
      setForm({
        nomeCompleto: '',
        email: '',
        telefone: '',
        dataPreferencial: '',
        participantes: 1,
        pacote: '',
        mensagem: '',
      });
    } catch {
      setErrorMsg('Erro de conexão. Tente novamente.');
      setStatus('error');
    }
  }

  return (
    <section style={{ background: '#111', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 16px' }}>
      <div style={{ width: '100%', maxWidth: 860 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <p style={{ color: '#22c55e', fontFamily: 'monospace', letterSpacing: 4, fontSize: 13, marginBottom: 8 }}>AGENDAMENTO</p>
          <h1 style={{ color: '#fff', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, margin: '0 0 12px' }}>Reserve Sua Aventura</h1>
          <p style={{ color: '#888', fontSize: 16 }}>Preencha o formulário abaixo e entraremos em contato para confirmar sua reserva.</p>
        </div>

        {/* Card */}
        <div style={{ background: '#1a1a1a', borderRadius: 16, padding: 'clamp(24px, 4vw, 48px)', border: '1px solid #2a2a2a' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>

            <Field label="Nome completo" required>
              <input name="nomeCompleto" value={form.nomeCompleto} onChange={handleChange} placeholder="Seu nome" style={inputStyle} />
            </Field>

            <Field label="E-mail" required>
              <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="seu@email.com" style={inputStyle} />
            </Field>

            <Field label="Telefone / WhatsApp" required>
              <input name="telefone" value={form.telefone} onChange={handleChange} placeholder="(11) 99999-9999" style={inputStyle} />
            </Field>

            <Field label="Data preferencial" required>
              <input name="dataPreferencial" type="date" value={form.dataPreferencial} onChange={handleChange} style={inputStyle} />
            </Field>

            <Field label="Número de participantes" required>
              <input name="participantes" type="number" min={1} value={form.participantes} onChange={handleChange} style={inputStyle} />
            </Field>

            <Field label="Pacote desejado" required>
              <select name="pacote" value={form.pacote} onChange={handleChange} style={inputStyle}>
                <option value="">Selecione um pacote</option>
                {PACOTES.map((p) => <option key={p} value={p}>{p}</option>)}
              </select>
            </Field>

          </div>

          <div style={{ marginTop: 24 }}>
            <Field label="Mensagem (opcional)">
              <textarea name="mensagem" value={form.mensagem} onChange={handleChange} placeholder="Alguma observação ou pergunta?" rows={4}
                style={{ ...inputStyle, resize: 'vertical', width: '100%', boxSizing: 'border-box' }} />
            </Field>
          </div>

          {/* Feedback */}
          {status === 'success' && (
            <div style={{ marginTop: 20, padding: '14px 20px', background: '#052e16', border: '1px solid #166534', borderRadius: 10, color: '#4ade80' }}>
              ✅ Solicitação enviada com sucesso! Entraremos em contato em breve.
            </div>
          )}
          {status === 'error' && (
            <div style={{ marginTop: 20, padding: '14px 20px', background: '#1f0000', border: '1px solid #7f1d1d', borderRadius: 10, color: '#f87171' }}>
              ❌ {errorMsg}
            </div>
          )}

          {/* Botão */}
          <button onClick={handleSubmit} disabled={status === 'loading'}
            style={{ marginTop: 28, width: '100%', padding: '16px', background: status === 'loading' ? '#15803d' : '#22c55e',
              color: '#000', fontWeight: 800, fontSize: 16, border: 'none', borderRadius: 10, cursor: status === 'loading' ? 'not-allowed' : 'pointer',
              transition: 'background 0.2s' }}>
            {status === 'loading' ? 'Enviando...' : 'Enviar Solicitação'}
          </button>
        </div>
      </div>
    </section>
  );
}

// Componente auxiliar de campo
function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label style={{ display: 'block', color: '#ccc', fontSize: 14, marginBottom: 8, fontWeight: 600 }}>
        {label} {required && <span style={{ color: '#22c55e' }}>*</span>}
      </label>
      {children}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 14px',
  background: '#111',
  border: '1px solid #333',
  borderRadius: 8,
  color: '#fff',
  fontSize: 15,
  outline: 'none',
  boxSizing: 'border-box',
};
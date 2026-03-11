"use client"

import { useState } from 'react'

type FormData = {
  nome: string
  telefone: string
  pessoas: string
  data: string
  horario: string
}

const initialFormData: FormData = {
  nome: '',
  telefone: '',
  pessoas: '1',
  data: '',
  horario: '08:00',
}

export default function AgendamentoPage() {
  const [form, setForm] = useState<FormData>(initialFormData)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState<string>('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('loading')
    setMessage('')

    try {
      const response = await fetch('/api/agendamento', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      const result = await response.json()

      if (!response.ok) {
        setStatus('error')
        setMessage(result.error || 'Erro ao agendar. Tente novamente.')
        return
      }

      setStatus('success')
      setMessage('Agendamento realizado com sucesso! Entraremos em contato pelo WhatsApp.')
      setForm(initialFormData)
    } catch (error) {
      console.error(error)
      setStatus('error')
      setMessage('Erro de rede. Verifique sua conexão e tente novamente.')
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4 md:px-8">
      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-zinc-900 sm:text-4xl">Agendamento de Passeio</h1>
        <p className="mt-2 text-gray-600">Preencha o formulário para agendar seu passeio off-road</p>

        <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Nome</span>
            <input
              name="nome"
              value={form.nome}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-lg border border-gray-300 bg-white text-slate-900 px-3 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
              placeholder="Nome completo"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-gray-700">Telefone</span>
            <input
              name="telefone"
              value={form.telefone}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-lg border border-gray-300 bg-white text-slate-900 px-3 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
              placeholder="(11) 9xxxx-xxxx"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-gray-700">Número de pessoas</span>
            <input
              type="number"
              name="pessoas"
              value={form.pessoas}
              onChange={handleChange}
              required
              min={1}
              className="mt-1 w-full rounded-lg border border-gray-300 bg-white text-slate-900 px-3 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-gray-700">Data do passeio</span>
            <input
              type="date"
              name="data"
              value={form.data}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-lg border border-gray-300 bg-white text-slate-900 px-3 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-gray-700">Horário do passeio</span>
            <select
              name="horario"
              value={form.horario}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-lg border border-gray-300 bg-white text-slate-900 px-3 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
            >
              <option value="08:00">08:00</option>
              <option value="10:00">10:00</option>
              <option value="14:00">14:00</option>
            </select>
          </label>

          <button
            type="submit"
            className="rounded-lg bg-primary px-5 py-3 text-white transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Enviando...' : 'Agendar passeio'}
          </button>
        </form>

        {message && (
          <div
            className={`mt-4 rounded-md px-4 py-3 text-sm ${
              status === 'success' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
            }`}
          >
            {message}
          </div>
        )}
      </div>
    </main>
  )
}

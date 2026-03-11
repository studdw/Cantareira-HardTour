import { NextResponse } from 'next/server'
import { supabase } from '../../../../lib/supabaseClient'

export async function POST(req: Request) {
  const body = await req.json()
  const { nome, telefone, pessoas, data, horario } = body

  if (!nome || !telefone || !pessoas || !data || !horario) {
    return NextResponse.json(
      { error: 'Todos os campos são obrigatórios.' },
      { status: 400 }
    )
  }

  const pessoasNum = Number(pessoas)
  if (Number.isNaN(pessoasNum) || pessoasNum <= 0) {
    return NextResponse.json(
      { error: 'Número de pessoas inválido.' },
      { status: 400 }
    )
  }

  try {
    const { data: newAgendamento, error } = await supabase
      .from('agendamentos')
      .insert([
        {
          nome,
          telefone,
          pessoas: pessoasNum,
          data,
          horario,
        },
      ])
      .single()

    if (error) {
      console.error('Erro insert agendamento:', error)
      return NextResponse.json({ error: 'Falha ao salvar agendamento.' }, { status: 500 })
    }

    return NextResponse.json(
      {
        message: 'Agendamento realizado com sucesso',
        agendamento: newAgendamento,
      },
      { status: 201 }
    )
  } catch (err) {
    console.error('Erro API agendamento:', err)
    return NextResponse.json({ error: 'Erro interno no servidor.' }, { status: 500 })
  }
}

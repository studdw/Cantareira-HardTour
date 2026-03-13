// app/api/send-email/route.ts
// Instale o Resend: npm install resend

import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      nomeCompleto,
      email,
      telefone,
      dataPreferencial,
      participantes,
      pacote,
      mensagem,
    } = body;

    // Validação básica
    if (!nomeCompleto || !email || !telefone || !dataPreferencial || !pacote) {
      return NextResponse.json(
        { error: 'Preencha todos os campos obrigatórios.' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'Agendamento <onboarding@resend.dev>', // ⚠️ Troque pelo seu domínio verificado no Resend
      to: ['lucaskaftanp@gmail.com'],                    // ⚠️ Troque pelo e-mail que vai receber as reservas
      subject: `Nova reserva: ${nomeCompleto} — ${pacote}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; background: #0d0d0d; color: #ffffff; padding: 32px; border-radius: 12px;">
          <h2 style="color: #22c55e; margin-bottom: 4px;">🏕️ Nova Solicitação de Reserva</h2>
          <p style="color: #aaa; margin-top: 0;">Recebida pelo formulário do site</p>
          <hr style="border-color: #222; margin: 24px 0;" />

          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #aaa; width: 180px;">Nome completo</td><td style="padding: 8px 0;">${nomeCompleto}</td></tr>
            <tr><td style="padding: 8px 0; color: #aaa;">E-mail</td><td style="padding: 8px 0;">${email}</td></tr>
            <tr><td style="padding: 8px 0; color: #aaa;">Telefone / WhatsApp</td><td style="padding: 8px 0;">${telefone}</td></tr>
            <tr><td style="padding: 8px 0; color: #aaa;">Data preferencial</td><td style="padding: 8px 0;">${dataPreferencial}</td></tr>
            <tr><td style="padding: 8px 0; color: #aaa;">Participantes</td><td style="padding: 8px 0;">${participantes}</td></tr>
            <tr><td style="padding: 8px 0; color: #aaa;">Pacote desejado</td><td style="padding: 8px 0;"><strong style="color: #22c55e;">${pacote}</strong></td></tr>
            ${mensagem ? `<tr><td style="padding: 8px 0; color: #aaa; vertical-align: top;">Mensagem</td><td style="padding: 8px 0;">${mensagem}</td></tr>` : ''}
          </table>

          <hr style="border-color: #222; margin: 24px 0;" />
          <p style="color: #555; font-size: 12px;">Enviado automaticamente pelo site.</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Erro ao enviar e-mail.' }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error('Server error:', err);
    return NextResponse.json({ error: 'Erro interno do servidor.' }, { status: 500 });
  }
}
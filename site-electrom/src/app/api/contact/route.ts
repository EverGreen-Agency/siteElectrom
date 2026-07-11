import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nome, email, telefone, assunto, mensagem } = body;

    // Validação básica do lado do servidor
    if (!nome || !email || !telefone || !assunto) {
      return NextResponse.json(
        { success: false, error: 'Campos obrigatórios ausentes.' },
        { status: 400 }
      );
    }

    const leadData = {
      timestamp: new Date().toISOString(),
      nome,
      email,
      telefone,
      assunto,
      mensagem: mensagem || 'Sem mensagem adicional.',
    };

    console.log('Lead Recebido no Servidor:', leadData);

    const resendKey = process.env.RESEND_API_KEY;

    if (resendKey) {
      // Envio via API do Resend (Nativo via fetch)
      try {
        const response = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${resendKey}`,
          },
          body: JSON.stringify({
            from: 'Electrom Engenharia <onboarding@resend.dev>', // Substituir pelo domínio verificado em produção
            to: ['contato@electrom.eng.br'],
            subject: `Novo Lead de Diagnóstico: ${assunto} - ${nome}`,
            html: `
              <h2>Novo Lead de Diagnóstico Energético</h2>
              <p><strong>Nome:</strong> ${nome}</p>
              <p><strong>E-mail:</strong> ${email}</p>
              <p><strong>Telefone/WhatsApp:</strong> ${telefone}</p>
              <p><strong>Assunto/Escopo:</strong> ${assunto}</p>
              <p><strong>Mensagem/Simulação:</strong></p>
              <blockquote style="background: #f4f4f4; padding: 15px; border-left: 5px solid #7AA2E4;">
                ${mensagem.replace(/\n/g, '<br/>')}
              </blockquote>
            `,
          }),
        });

        if (response.ok) {
          console.log('E-mail enviado com sucesso via Resend API.');
          return NextResponse.json({ success: true, message: 'Lead enviado com sucesso!' });
        } else {
          const errData = await response.json();
          console.error('Falha no envio do e-mail do Resend:', errData);
          // Fallback para persistência local se falhar o envio
        }
      } catch (emailErr) {
        console.error('Erro na requisição para Resend API:', emailErr);
      }
    }

    // Persistência Local para Auditoria em Ambiente de Desenvolvimento (Segurança e Qualidade)
    try {
      const dataDir = path.join(process.cwd(), 'src', 'data');
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      const leadsFile = path.join(dataDir, 'leads_received.json');
      let currentLeads = [];
      if (fs.existsSync(leadsFile)) {
        const fileContent = fs.readFileSync(leadsFile, 'utf-8');
        try {
          currentLeads = JSON.parse(fileContent);
        } catch {
          currentLeads = [];
        }
      }
      currentLeads.push(leadData);
      fs.writeFileSync(leadsFile, JSON.stringify(currentLeads, null, 2), 'utf-8');
      console.log('Lead persistido localmente em src/data/leads_received.json');
    } catch (saveErr) {
      console.error('Erro ao persistir lead localmente:', saveErr);
    }

    return NextResponse.json({
      success: true,
      message: 'Lead recebido e salvo localmente para processamento.',
    });
  } catch (error) {
    console.error('Erro no processamento da rota de contato:', error);
    return NextResponse.json(
      { success: false, error: 'Erro interno no servidor.' },
      { status: 500 }
    );
  }
}

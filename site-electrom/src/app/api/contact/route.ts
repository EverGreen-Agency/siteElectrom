import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

interface LeadData {
  id?: string;
  timestamp: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  sentViaEmail?: boolean;
}

const getLeadsFilePath = () => path.join(process.cwd(), 'src', 'data', 'leads_received.json');

function readLocalLeads(): LeadData[] {
  try {
    const filePath = getLeadsFilePath();
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf-8');
      return JSON.parse(content);
    }
  } catch (error) {
    console.error('Error reading local leads:', error);
  }
  return [];
}

function saveLocalLeads(leads: LeadData[]): void {
  try {
    const dataDir = path.join(process.cwd(), 'src', 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    fs.writeFileSync(getLeadsFilePath(), JSON.stringify(leads, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error saving local leads:', error);
  }
}

// GET Endpoint: Export / View stored leads
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const format = searchParams.get('format');
  const leads = readLocalLeads();

  if (format === 'csv') {
    const headers = 'ID,Timestamp,Name,Email,Phone,Subject,Message,SentViaEmail\n';
    const rows = leads.map(l => 
      `"${l.id || ''}","${l.timestamp}","${l.name.replace(/"/g, '""')}","${l.email}","${l.phone}","${l.subject.replace(/"/g, '""')}","${l.message.replace(/"/g, '""')}",${l.sentViaEmail ? 'Yes' : 'No'}`
    ).join('\n');

    return new Response(headers + rows, {
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': 'attachment; filename="leads_electrom.csv"',
      },
    });
  }

  return NextResponse.json({
    success: true,
    total: leads.length,
    leads,
  });
}

// POST Endpoint: Receive new lead or retry pending leads
export async function POST(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const action = searchParams.get('action');
    const resendKey = process.env.RESEND_API_KEY;

    // Action: Retry sending pending leads
    if (action === 'retry') {
      const leads = readLocalLeads();
      const unsentLeads = leads.filter(l => !l.sentViaEmail);

      if (!resendKey) {
        return NextResponse.json({
          success: false,
          error: 'RESEND_API_KEY is not configured on the server.',
          pendingCount: unsentLeads.length,
        }, { status: 400 });
      }

      let resendSuccessCount = 0;

      for (const lead of leads) {
        if (!lead.sentViaEmail) {
          try {
            const response = await fetch('https://api.resend.com/emails', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${resendKey}`,
              },
              body: JSON.stringify({
                from: 'ElectROM Engenharia <onboarding@resend.dev>',
                to: ['comercial@ElectROM.eng.br'],
                subject: `[REENVIO] Lead de Diagnóstico: ${lead.subject} - ${lead.name}`,
                html: `
                  <h2>Lead de Diagnóstico Energético (Reenvio)</h2>
                  <p><strong>Data Original:</strong> ${lead.timestamp}</p>
                  <p><strong>Nome:</strong> ${lead.name}</p>
                  <p><strong>E-mail:</strong> ${lead.email}</p>
                  <p><strong>Telefone/WhatsApp:</strong> ${lead.phone}</p>
                  <p><strong>Assunto/Escopo:</strong> ${lead.subject}</p>
                  <p><strong>Mensagem:</strong></p>
                  <blockquote style="background: #f4f4f4; padding: 15px; border-left: 5px solid #7AA2E4;">
                    ${lead.message.replace(/\n/g, '<br/>')}
                  </blockquote>
                `,
              }),
            });

            if (response.ok) {
              lead.sentViaEmail = true;
              resendSuccessCount++;
            }
          } catch (err) {
            console.error('Failed retry for lead:', lead.email, err);
          }
        }
      }

      saveLocalLeads(leads);

      return NextResponse.json({
        success: true,
        message: `${resendSuccessCount} lead(s) reenviados com sucesso via Resend.`,
        remainingUnsent: leads.filter(l => !l.sentViaEmail).length,
      });
    }

    // Action: New Lead Submission
    const body = await request.json();
    const name = body.name || body.nome;
    const email = body.email;
    const phone = body.phone || body.telefone;
    const subject = body.subject || body.assunto || 'Contato Comercial / Diagnóstico';
    const message = body.message || body.mensagem || 'Sem mensagem adicional.';

    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, error: 'Campos obrigatórios ausentes (nome, email, telefone).' },
        { status: 400 }
      );
    }

    const leadData: LeadData = {
      id: `LEAD-${Date.now()}`,
      timestamp: new Date().toISOString(),
      name,
      email,
      phone,
      subject,
      message,
      sentViaEmail: false,
    };

    if (resendKey) {
      try {
        const response = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${resendKey}`,
          },
          body: JSON.stringify({
            from: 'ElectROM Engenharia <onboarding@resend.dev>',
            to: ['comercial@ElectROM.eng.br'],
            subject: `Novo Lead de Diagnóstico: ${subject} - ${name}`,
            html: `
              <h2>Novo Lead de Diagnóstico Energético</h2>
              <p><strong>Nome:</strong> ${name}</p>
              <p><strong>E-mail:</strong> ${email}</p>
              <p><strong>Telefone/WhatsApp:</strong> ${phone}</p>
              <p><strong>Assunto/Escopo:</strong> ${subject}</p>
              <p><strong>Mensagem:</strong></p>
              <blockquote style="background: #f4f4f4; padding: 15px; border-left: 5px solid #7AA2E4;">
                ${message.replace(/\n/g, '<br/>')}
              </blockquote>
            `,
          }),
        });

        if (response.ok) {
          leadData.sentViaEmail = true;
        } else {
          const errData = await response.json();
          console.error('Falha no envio via Resend:', errData);
        }
      } catch (emailErr) {
        console.error('Erro na requisição para Resend API:', emailErr);
      }
    }

    // Always persist locally as backup / dev access
    const currentLeads = readLocalLeads();
    currentLeads.push(leadData);
    saveLocalLeads(currentLeads);

    return NextResponse.json({
      success: true,
      message: 'Lead recebido e processado com sucesso!',
      sentViaEmail: leadData.sentViaEmail,
    });
  } catch (error) {
    console.error('Erro no processamento da rota de contato:', error);
    return NextResponse.json(
      { success: false, error: 'Erro interno no servidor.' },
      { status: 500 }
    );
  }
}

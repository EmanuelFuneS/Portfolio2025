import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);


export interface EmailData {
    to: string;
    subject: string;
    text?: string;
    html?: string;
    from?: string;
    replyTo?: string;
    attachments?: Array<{
        filename: string;
        path?: string;
        content?: Buffer;
        contentType?: string
    }>
}

export const sendEmail = async (emailData: EmailData) => {
    try {
        const mailOptions = {
            from: process.env.EMAIL_FROM!,
            to: process.env.EMAIL_TO!,
            subject: emailData.subject,
            text: emailData.text || emailData.html?.replace(/<[^>]*>/g, '') || 'Sin contenido', // Extrae texto del HTML como fallback
            ...(emailData.html && { html: emailData.html }),
            ...(emailData.replyTo && { replyTo: emailData.replyTo }),
            ...(emailData.attachments && emailData.attachments.length > 0 && { attachments: emailData.attachments }), // Cambio: attachments (plural)
        }

        const { data, error } = await resend.emails.send(mailOptions);

        if (error) {
            console.error('Resend API error:', error);
            return { success: false, error: error.message || 'Error from Resend API' };
        }

        console.log('Email sent successfully: ', data?.id);
        return { success: true, messageId: data?.id };

    } catch (error) {
        console.error('Error sending email: ', error);
        return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
    }
}
export const emailTemplates = {
    contact: (data: { fullname: string; email: string; message: string; }) => ({
        subject: `Nuevo mensaje de contacto de ${data.fullname}`,
        html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Nuevo mensaje de contacto</h2>
        <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Nombre:</strong> ${data.fullname}</p>
          <p><strong>Email:</strong> ${data.email}</p>

        </div>
        <div style="margin: 20px 0;">
          <h3>Mensaje:</h3>
          <p style="background: white; padding: 15px; border-left: 4px solid #007bff; border-radius: 4px;">
            ${data.message}
          </p>
        </div>
        <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
        <p style="color: #666; font-size: 12px;">
          Este mensaje fue enviado desde tu portafolio web.
        </p>
      </div>
    `,
        text: `
      Nuevo mensaje de contacto
      
      Nombre Completo: ${data.fullname}
      Email: ${data.email}
      
      Mensaje:
      ${data.message}
    `
    })
}
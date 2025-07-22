import nodemailer from 'nodemailer';

export const createTransport = () => {
    return nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        },

        /* 
        SMTP SERVICE:
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }, */

    })
}


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
        const transporter = createTransport()

        const mailOptions = {
            from: emailData.from || process.env.EMAIL_FROM || process.env.EMAIL_USER,
            to: emailData.to,
            subject: emailData.subject,
            text: emailData.text,
            html: emailData.html,
            replyTo: emailData.replyTo,
            attachments: emailData.attachments,
        }

        const result = await transporter.sendMail(mailOptions)
        console.log('Email sent successfully: ', result.messageId)

        return { success: true, messageId: result.messageId }

    } catch (error) {

        console.error('Error sending email: ', error);
        return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
    }
}


export const emailTemplates = {
    contact: (data: { name: string; email: string; message: string; locale: string }) => ({
        subject: `Nuevo mensaje de contacto de ${data.name}`,
        html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Nuevo mensaje de contacto</h2>
        <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Nombre:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Idioma:</strong> ${data.locale}</p>
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
      
      Nombre: ${data.name}
      Email: ${data.email}
      Idioma: ${data.locale}
      
      Mensaje:
      ${data.message}
    `
    }),

    autoResponse: (data: { name: string; locale: string }) => {
        const messages = {
            en: {
                subject: 'Thank you for your message',
                html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">Thank you, ${data.name}!</h2>
            <p>I have received your message and I will get back to you as soon as possible.</p>
            <p>Best regards,</p>
            <p><strong>Your Name</strong></p>
          </div>
        `,
                text: `Thank you, ${data.name}!\n\nI have received your message and I will get back to you as soon as possible.\n\nBest regards,\nYour Name`
            },
            es: {
                subject: 'Gracias por tu mensaje',
                html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">¡Gracias, ${data.name}!</h2>
            <p>He recibido tu mensaje y te responderé tan pronto como sea posible.</p>
            <p>Saludos cordiales,</p>
            <p><strong>Tu Nombre</strong></p>
          </div>
        `,
                text: `¡Gracias, ${data.name}!\n\nHe recibido tu mensaje y te responderé tan pronto como sea posible.\n\nSaludos cordiales,\nTu Nombre`
            }
        }

        return messages[data.locale as keyof typeof messages] || messages.en
    }
}
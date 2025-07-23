import { NextRequest, NextResponse } from 'next/server';
import { sendEmail, emailTemplates } from '@/lib/mailer-send';

export async function POST(request: NextRequest) {
    try {

        const { fullname, email, message } = await request.json()

        if (!fullname || !email || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return NextResponse.json({ error: 'Invalid email format' }, { status: 400 })
        }

        const contactTemplate = emailTemplates.contact({ fullname, email, message })
        const contactResult = await sendEmail({
            to: process.env.EMAIL_TO!,
            subject: contactTemplate.subject,
            html: contactTemplate.html,
            text: contactTemplate.text,
            replyTo: email,
        })

        if (contactResult.success) {
            return NextResponse.json({
                success: true,
                message: 'Email sent successfully',
            })
        } else {
            return NextResponse.json({ error: `Failed to send email. Error: ${contactResult.error}` }, { status: 500 })
        }

    } catch (error) {
        console.error('API ERROR: ', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}